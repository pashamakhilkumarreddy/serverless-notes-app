/* eslint-disable no-undef */
import { expect, haveResource } from '@aws-cdk/assert';
import * as sst from '@serverless-stack/resources';
import DynamoDBStack from '../lib/DynamoDBStack';

test('DynamoDB Stack', () => {
  const app = new sst.App();
  // WHEN
  const stack = new DynamoDBStack(app, 'test-stack');
  // THEN
  expect(stack).to(haveResource('AWS::DynamoDB::Table', {
    BillingMode: 'PAY_PER_REQUEST',
  }));
});
