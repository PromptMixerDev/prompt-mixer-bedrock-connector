export const config = {
  connectorName: 'AmazonBedrock',
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
  iconBase64:
    'data:image/svg;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciICB2aWV3Qm94PSIwIDAgNTAgNTAiIHdpZHRoPSIxNnB4IiBoZWlnaHQ9IjE2cHgiPjxwYXRoIGQ9Ik0gNSA1IEwgNSA0NSBMIDQ1IDQ1IEwgNDUgNSBMIDUgNSB6IE0gNyA3IEwgNDMgNyBMIDQzIDQzIEwgNyA0MyBMIDcgNyB6IE0gMjAuMDMxMjUgMTYuOTY4NzUgTCAxNC4wMzEyNSAzMi45Njg3NSBMIDE3LjU2MjUgMzIuOTY4NzUgTCAxOC42NDg0MzggMjkuOTM1NTQ3IEwgMjUuMjUzOTA2IDI5LjkzNTU0NyBMIDI2LjMwNjY0MSAzMy4wMzEyNSBMIDI5LjgxODM1OSAzMy4wMzEyNSBMIDIzLjcyMjY1NiAxNi45Njg3NSBMIDIwLjAzMTI1IDE2Ljk2ODc1IHogTSAyNi43NzczNDQgMTYuOTc4NTE2IEwgMzIuNjQyNTc4IDMzLjAxNTYyNSBMIDM1Ljk2ODc1IDMzLjAxNTYyNSBMIDMwLjAzMzIwMyAxNi45Nzg1MTYgQyAzMC4wMzMyMDMgMTYuOTc4NTE2IDI2LjgwMTM0NCAxNi45NTQ1MTYgMjYuNzc3MzQ0IDE2Ljk3ODUxNiB6IE0gMjEuOTY2Nzk3IDIwLjk2ODc1IEwgMjQuMDQxMDE2IDI2LjY0ODQzOCBMIDE5Ljc2NTYyNSAyNi42NDg0MzggTCAyMS45NjY3OTcgMjAuOTY4NzUgeiIvPjwvc3ZnPg==',
};
