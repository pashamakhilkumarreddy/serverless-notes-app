const config = {
  s3: {
    REGION: 'us-east-1',
    BUCKET: 'notes-app-serverless-deployment',
  },
  apiGateway: {
    REGION: 'us-east-1',
    URL: 'https://bcswf197jl.execute-api.us-east-1.amazonaws.com/prod',
  },
  cognito: {
    REGION: 'us-east-1',
    USER_POOL_ID: 'us-east-1_i5TP4t2gc',
    APP_CLIENT_ID: '43r7g0ad84gkeuedd8j45stda1',
    IDENTITY_POOL_ID: 'us-east-1:d6413b6e-77ef-45a3-b7be-0c3218525b7a',
  }
}

export default config;
