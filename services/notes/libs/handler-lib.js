import * as debug from './debug-lib';

export default function handler(lambda) {
  return async function(event, context) {
    let body, statusCode;
    debug.init(event, context);
    try {
      body = await lambda(event, context);
      statusCode = 200;
    } catch (err) {
      debug.flush(err);
      body = {
        error: err.message,
      };
      statusCode = 500;
      console.error(err);
    }
    return {
      statusCode,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Credentials': true,
      },
      body: JSON.stringify(body),
    };
  };
};
