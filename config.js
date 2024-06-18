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
  iconBase64:
    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTciIHZpZXdCb3g9IjAgMCAxNiAxNyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik04LjMwNzkzIDMuMTA4MjlMNi42OTk4MSAyTDMuMTYwMjEgMy45Nzk3OFY2LjA1MzgyTDEuNjYzMyA2Ljk0MDg4VjEwLjEzOTNMMy4xNjAyMSAxMS4xNzQyVjEyLjg4MThMNi41Mzc0IDE1TDguMzA3OTMgMTMuODk4OFYxMS4yMzk5SDkuOTc5NDdWMTIuMjQwNUM5LjU5Mjk1IDEyLjM1MTEgOS4zMTAwMiAxMi43MDcgOS4zMTAwMiAxMy4xMjlDOS4zMTAwMiAxMy42MzkzIDkuNzIzNzIgMTQuMDUzIDEwLjIzNCAxNC4wNTNDMTAuNzQ0NCAxNC4wNTMgMTEuMTU4MSAxMy42MzkzIDExLjE1ODEgMTMuMTI5QzExLjE1ODEgMTIuNzA3IDEwLjg3NTEgMTIuMzUxMSAxMC40ODg2IDEyLjI0MDVWMTAuNzMwN0g4LjMwNzkzVjkuNjY5MDRIMTEuMzIxOUwxMS44MjcgMTAuMjMwMkMxMS43NDI2IDEwLjM2OTcgMTEuNjk0IDEwLjUzMzIgMTEuNjk0IDEwLjcwODFDMTEuNjk0IDExLjIxODQgMTIuMTA3NyAxMS42MzIxIDEyLjYxOCAxMS42MzIxQzEzLjEyODMgMTEuNjMyMSAxMy41NDIgMTEuMjE4NCAxMy41NDIgMTAuNzA4MUMxMy41NDIgMTAuMTk3OCAxMy4xMjgzIDkuNzg0MDcgMTIuNjE4IDkuNzg0MDdDMTIuNDY3NiA5Ljc4NDA3IDEyLjMyNTYgOS44MiAxMi4yMDAxIDkuODgzNzVMMTEuNTQ4NiA5LjE1OTlIOC4zMDc5M1Y4LjExNjY4SDEyLjUxOTFDMTIuNjIzNCA4LjUxMjY0IDEyLjk4MzkgOC44MDQ2MSAxMy40MTI3IDguODA0NjFDMTMuOTIzIDguODA0NjEgMTQuMzM2NyA4LjM5MDkxIDE0LjMzNjcgNy44ODA1OUMxNC4zMzY3IDcuMzcwMjcgMTMuOTIzIDYuOTU2NTcgMTMuNDEyNyA2Ljk1NjU3QzEyLjk5NzQgNi45NTY1NyAxMi42NDYxIDcuMjMwNTEgMTIuNTI5NyA3LjYwNzU0SDguMzA3OTNWNi40NzE5M0gxMS4yMDkzVjQuODg4MjJDMTEuNTk1OSA0Ljc3NzY4IDExLjg3ODggNC40MjE3NCAxMS44Nzg4IDMuOTk5NzFDMTEuODc4OCAzLjQ4OTM5IDExLjQ2NTEgMy4wNzU3IDEwLjk1NDggMy4wNzU3QzEwLjQ0NDUgMy4wNzU3IDEwLjAzMDggMy40ODkzOSAxMC4wMzA4IDMuOTk5NzFDMTAuMDMwOCA0LjQyMTc0IDEwLjMxMzcgNC43Nzc2OCAxMC43MDAyIDQuODg4MjJWNS45NjI3OUg4LjMwNzkzVjMuMTA4MjlaTTMuNjY5MzUgNi4wMjA4OFY0LjI3ODM3TDQuNzQ5NTIgMy42NzQyMVY0Ljk2MDY5SDUuMjU4NjZWMy4zODk0NEw2LjY3MTggMi41OTkwNEw3Ljc5ODc5IDMuMzc1NzRWOS45ODIzNUw0LjgxMDUxIDExLjU3MzdMNS4wNDk4MyAxMi4wMjMxTDcuNzk4NzkgMTAuNTU5MlYxMy42MTU5TDYuNTM4NTMgMTQuMzk5N0w1LjYxODI1IDEzLjgyMjVMNi4zMjk3OCAxMy4zMzk3TDYuMDQzOSAxMi45MTg0TDUuMTQ3MDUgMTMuNTI2OUwzLjY2OTM1IDEyLjYwMDFWMTEuMjc4NEw0Ljk0NzE3IDEwLjM4MDRMNC42NTQ0NSA5Ljk2Mzg3TDMuNDg5MTkgMTAuNzgyN0wyLjE3MjQ0IDkuODcyMzVWOC43OTEwMkwzLjM0MTExIDguMDk5N0wzLjA4MTg4IDcuNjYxNDlMMi4xNzI0NCA4LjE5OTQ3VjcuMjMwOTlMMy40NDM2MSA2LjQ3NzdMNC43NDk1MiA3LjE5MDAyVjguMDcxOTdMNC4wMzI0OCA4LjY0MjM1TDQuMzQ5NDMgOS4wNDA4TDQuOTY2ODcgOC41NDk2Nkw1LjkwNDc0IDkuMTMxNzlMNi4xNzMyNCA4LjY5OTJMNS4yNTg2NiA4LjEzMTUzVjcuMjE0MDNMNi43NTU1NyA2LjQ0Njg3VjQuODMxMzNINi4yNDY0M1Y2LjEzNTY5TDUuMDI2MjggNi43NjEwMkwzLjY2OTM1IDYuMDIwODhaTTEwLjk1NDggNC40MTQ1OUMxMS4xODM5IDQuNDE0NTkgMTEuMzY5NyA0LjIyODg1IDExLjM2OTcgMy45OTk3MUMxMS4zNjk3IDMuNzcwNTggMTEuMTgzOSAzLjU4NDgzIDEwLjk1NDggMy41ODQ4M0MxMC43MjU2IDMuNTg0ODMgMTAuNTM5OSAzLjc3MDU4IDEwLjUzOTkgMy45OTk3MUMxMC41Mzk5IDQuMjI4ODUgMTAuNzI1NiA0LjQxNDU5IDEwLjk1NDggNC40MTQ1OVpNMTMuODI3NiA3Ljg4MDU5QzEzLjgyNzYgOC4xMDk3MiAxMy42NDE4IDguMjk1NDcgMTMuNDEyNyA4LjI5NTQ3QzEzLjE4MzUgOC4yOTU0NyAxMi45OTc4IDguMTA5NzIgMTIuOTk3OCA3Ljg4MDU5QzEyLjk5NzggNy42NTE0NiAxMy4xODM1IDcuNDY1NzEgMTMuNDEyNyA3LjQ2NTcxQzEzLjY0MTggNy40NjU3MSAxMy44Mjc2IDcuNjUxNDYgMTMuODI3NiA3Ljg4MDU5Wk0xMi42MTggMTEuMTIzQzEyLjg0NzEgMTEuMTIzIDEzLjAzMjkgMTAuOTM3MiAxMy4wMzI5IDEwLjcwODFDMTMuMDMyOSAxMC40NzkgMTIuODQ3MSAxMC4yOTMyIDEyLjYxOCAxMC4yOTMyQzEyLjM4ODkgMTAuMjkzMiAxMi4yMDMxIDEwLjQ3OSAxMi4yMDMxIDEwLjcwODFDMTIuMjAzMSAxMC45MzcyIDEyLjM4ODkgMTEuMTIzIDEyLjYxOCAxMS4xMjNaTTEwLjY0ODkgMTMuMTI5QzEwLjY0ODkgMTMuMzU4MiAxMC40NjMyIDEzLjU0MzkgMTAuMjM0IDEzLjU0MzlDMTAuMDA0OSAxMy41NDM5IDkuODE5MTYgMTMuMzU4MiA5LjgxOTE2IDEzLjEyOUM5LjgxOTE2IDEyLjg5OTkgMTAuMDA0OSAxMi43MTQxIDEwLjIzNCAxMi43MTQxQzEwLjQ2MzIgMTIuNzE0MSAxMC42NDg5IDEyLjg5OTkgMTAuNjQ4OSAxMy4xMjlaIiBmaWxsPSIjODY4QTkxIi8+Cjwvc3ZnPgo=',
};
