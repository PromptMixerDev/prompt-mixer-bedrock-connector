export const config = {
  connectorName: 'Amazon Bedrock Connector',
  connectorVersion: '1.0.0',
  models: [
    'anthropic.claude-3-haiku-20240307-v1:0',
    'anthropic.claude-3-sonnet-20240229-v1:0',
    'anthropic.claude-3-opus-20240229-v1:0',
  ],
  description:
    'The Amazon Bedrock Connector enables integrating conversational AI chatbot capabilities into messaging applications by leveraging Amazon.',
  author: 'Prompt Mixer',
  properties: [
    {
      id: 'prompt',
      name: 'System Prompt',
      value:
        'You are Claude, an AI assistant created by Anthropic to be helpful, harmless, and honest. Your goal is to provide informative and substantive responses to queries while avoiding potential harms.',
      type: 'string',
    },
    {
      id: 'max_tokens',
      name: 'Max Tokens',
      value: 4096,
      type: 'number',
    },
    {
      id: 'temperature',
      name: 'Temperature',
      value: 0.7,
      type: 'number',
    },
    {
      id: 'top_p',
      name: 'Top P',
      value: 1,
      type: 'number',
    },
    {
      id: 'top_k',
      name: 'Top K',
      value: 0,
      type: 'number',
    },
    {
      id: 'stop_sequences',
      name: 'Stop Sequences',
      value: ['\n'],
      type: 'array',
    },
  ],
  settings: [
    {
      id: 'AWS_ACCESS_KEY_ID',
      name: 'AWS ACCESS KEY ID',
      value: '',
      type: 'string',
    },
    {
      id: 'AWS_SECRET_ACCESS_KEY',
      name: 'AWS SECRET ACCESS KEY',
      value: '',
      type: 'string',
    },
    {
      id: 'AWS_SESSION_TOKEN',
      name: 'AWS SESSION TOKEN',
      value: '',
      type: 'string',
    },
    {
      id: 'AWS_REGION',
      name: 'AWS REGION',
      value: '',
      type: 'string',
    },
  ],
	iconBase64: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExLjE4MjUgMi45MjQ2MUg4Ljk3OTM5TDEyLjk5NjkgMTMuMDc1NUgxNS4yTDExLjE4MjUgMi45MjQ2MVpNNC44MTc1MiAyLjkyNDYxTDAuNzk5OTg4IDEzLjA3NTVIMy4wNDY1MUwzLjg2ODEgMTAuOTQzOEg4LjA3MTJMOC44OTI3OSAxMy4wNzU1SDExLjEzOTNMNy4xMjE3OCAyLjkyNDYxSDQuODE3NTJaTTQuNTk0ODQgOS4wNTg2TDUuOTY5NjUgNS40OTEyTDcuMzQ0NDYgOS4wNTg2SDQuNTk0ODRaIiBmaWxsPSIjNkY3MzdBIi8+Cjwvc3ZnPgo=\n',
};