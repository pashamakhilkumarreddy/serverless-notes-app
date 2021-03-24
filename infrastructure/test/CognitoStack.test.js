import { expect, haveResource } from '@aws-cdk/assert';
import * as sst from '@serverless-stack/resources';
import CognitoStack from '../lib/CognitoStack';

test('Cognito Stack', () => {
  const app = new sst.App();
  const stack = new CognitoStack(app, 'test-stack');
  expect(stack).to(haveResource('AWS::Cognito::User', {}));
});