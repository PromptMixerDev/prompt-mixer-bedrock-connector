import { AnthropicBedrock } from '@anthropic-ai/bedrock-sdk';
import { config } from './config.js';
import * as fs from 'node:fs';
import * as path from 'node:path';
import * as utils from 'node:util';

const AWS_ACCESS_KEY_ID = 'AWS_ACCESS_KEY_ID';
const AWS_SECRET_ACCESS_KEY = 'AWS_SECRET_ACCESS_KEY';
const AWS_SESSION_TOKEN = 'AWS_SESSION_TOKEN';
const AWS_REGION = 'AWS_REGION';
const MAX_TOKENS_DEFAULT_VALUE = 4096;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const logger = (logBody: any, description?: string): void => {
  if (description) console.log(`${description}`);

  console.log(
    utils.inspect(logBody, {
      showHidden: false,
      depth: null,
      colors: true,
    }),
  );
};

interface TextMessageContent {
  type: 'text';
  text: string;
}
type MediaType = 'image/jpeg' | 'image/png' | 'image/webp' | 'image/gif';

interface ImageContent {
  type: 'image';
  source: {
    type: 'base64';
    media_type: MediaType;
    data: string;
  };
}

interface Message {
  role: 'user' | 'assistant';
  content: (TextMessageContent | ImageContent)[];
}

interface Completion {
  Content: string | null;
  Error?: string | undefined;
  TokenUsage: number | undefined;
}

interface ConnectorResponse {
  Completions: Completion[];
  ModelType: string;
}

interface ErrorCompletion {
  choices: Array<{
    message: {
      content: string;
    };
  }>;
  error: string;
  model: string;
  usage: undefined;
}

export interface ChatCompletion {
  id: string;
  content: Array<{ text: string; type: 'text' }>;
  model: string;
  role: 'assistant';
  stop_reason: 'end_turn' | 'max_tokens' | 'stop_sequence' | 'tool_use' | null;
  stop_sequence: string | null;
  type: 'message';
  usage: {
    input_tokens: number;
    output_tokens: number;
  };
}

interface Output {
  output: string;
  stats: {
    model: string;
    inputTokens: number;
    outputTokens: number;
  };
}

const mapToResponse = (
  outputs: Array<any | ErrorCompletion>,
  model: string,
): ConnectorResponse => {
  return {
    Completions: outputs.map((output) => {
      if ('error' in output) {
        return {
          Content: null,
          TokenUsage: undefined,
          Error: output.error,
        };
      } else {
        return {
          Content: output.output,
          TokenUsage: output.stats.inputTokens + output.stats.outputTokens,
        };
      }
    }),
    ModelType: outputs[0]?.model || model,
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const mapErrorToCompletion = (error: any, model: string): ErrorCompletion => {
  const errorMessage = error.message || JSON.stringify(error);
  return {
    choices: [],
    error: errorMessage,
    model,
    usage: undefined,
  };
};

function encodeImage(imagePath: string): {
  ext: MediaType;
  data: string;
} {
  const ext = path.extname(imagePath).slice(1);
  const imageBuffer = fs.readFileSync(imagePath);
  return {
    ext: `image/${ext}` as MediaType,
    data: imageBuffer.toString('base64'),
  };
}

async function main(
  model: string,
  prompts: string[],
  properties: Record<string, unknown>,
  settings: Record<string, unknown>,
) {
  const client = new AnthropicBedrock({
    awsAccessKey: settings[AWS_ACCESS_KEY_ID] as string,
    awsSecretKey: settings[AWS_SECRET_ACCESS_KEY] as string,
    awsSessionToken: settings[AWS_SESSION_TOKEN] as string,
    awsRegion: settings[AWS_REGION] as string,
  });

  const total = prompts.length;
  const { prompt, max_tokens, ...restProperties } = properties;
  const systemPrompt = (prompt ||
    config.properties.find((prop) => prop.id === 'prompt')?.value) as string;

  const messageHistory: Message[] = [];
  const outputs: Array<Output | ErrorCompletion> = [];

  try {
    for (let index = 0; index < total; index++) {
      try {
        const userPrompt = prompts[index];
        const imageUrls = extractImageUrls(userPrompt);
        const messageContent: Message['content'] = [
          { type: 'text', text: userPrompt } as TextMessageContent,
        ];

        for (const imageUrl of imageUrls) {
          const base64Image = encodeImage(imageUrl);

          messageContent.push({
            type: 'image',
            source: {
              type: 'base64',
              media_type: base64Image.ext,
              data: base64Image.data,
            },
          } as ImageContent);
        }

        messageHistory.push({ role: 'user', content: messageContent });

        logger(messageHistory);
        const response = (await client.messages.create({
          model,
          messages: messageHistory,
          system: systemPrompt,
          max_tokens: max_tokens as number ?? MAX_TOKENS_DEFAULT_VALUE,
          ...restProperties,
        })) as ChatCompletion;

        logger(response);

        const assistantResponse = response.content
          .map((content) => content.text)
          .join('\n');
        const inputTokens = response.usage.input_tokens;
        const outputTokens = response.usage.output_tokens;
        messageHistory.push({
          role: 'assistant',
          content: [
            {
              type: 'text',
              text: assistantResponse,
            },
          ],
        });

        outputs.push({
          output: assistantResponse,
          stats: { model, inputTokens, outputTokens },
        });

        console.log(`Response to prompt:`, assistantResponse);
      } catch (error) {
        const completionWithError = mapErrorToCompletion(error, model);
        outputs.push(completionWithError);
      }
    }

    return mapToResponse(outputs, model);
  } catch (error) {
    console.error('Error in main function:', error);
    return { Error: error, ModelType: model };
  }
}

function extractImageUrls(prompt: string): string[] {
  const imageExtensions = ['.png', '.jpeg', '.jpg', '.webp', '.gif'];
  // Updated regex to match both http and local file paths
  const urlRegex =
    /(https?:\/\/[^\s]+|[a-zA-Z]:\\[^:<>"|?\n]*|\/[^:<>"|?\n]*)/g;
  const urls = prompt.match(urlRegex) || [];

  return urls.filter((url) => {
    const extensionIndex = url.lastIndexOf('.');
    if (extensionIndex === -1) {
      // If no extension found, return false.
      return false;
    }
    const extension = url.slice(extensionIndex);
    return imageExtensions.includes(extension.toLowerCase());
  });
}

export { main, config };
