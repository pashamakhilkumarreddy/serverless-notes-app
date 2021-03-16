import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (event, context) => {
  try {
    const params = {
      TableName: process.env.TABLE_NAME,
      Key: {
        userId: event.requestContext.identity.cognitoIdentityId,
        noteId: event.pathParameters.id,
      }
    };
    const result = await dynamoDb.get(params);
    if (!result.Item) {
      throw new Error('Item Not Found!');
    }
    return result.Item;
  } catch (err) {
    console.error(err);
  }
});
