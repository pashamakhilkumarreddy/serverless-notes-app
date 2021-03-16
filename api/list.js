import handler from './libs/handler-lib';
import dynamoDb from './libs/dynamodb-lib';

export const main = handler(async (event, context) => {
  try {
    const params = {
      TableName: process.env.TABLE_NAME,
      KeyConditionExpression: "userId = :userId",
      ExpressionAttributeValues: {
        ":userId": event.requestContext.identity.cognitoIdentityId,
      },
    };
    const result = await dynamoDb.query(params);
    return result.Items;
  } catch (err) {
    console.error(err);
  }
});
