/* eslint-disable import/prefer-default-export */
export async function handler(event) {
  return {
    statusCode: 200,
    headers: { 'Content-Type': 'text/plain' },
    body: `Hola Mundo! Your request was received at ${event.requestContext.time}.`,
  };
}
