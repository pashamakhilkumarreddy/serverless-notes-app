import { expect, haveResource } from '@aws-cdk/assert';
import * as sst from '@serverless-stack/resources';
import S3Stack from '../lib/S3Stack';

test('S3 Stack', () => {
  const app = new sst.App();
  const stack = new S3Stack(app, 'test-stack');
  expect(stack).to(haveResource('AWS::S3::Bucket', {}))
});