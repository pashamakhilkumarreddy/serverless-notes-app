import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (event, context) => {
  try {
    const params = {
      TableName: process.env.TABLE_NAME,
      Key: {
        userId: '123',
        noteId: event.pathParameters.id,
      }
    };
    await dynamoDb.delete(params);
    return {
      status: true,
    };
  } catch (err) {
    console.error(err);
  }
});