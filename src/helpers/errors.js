export const Unauthorized = (message = 'Incorrect username or password') => ({
    name: 'Unauthorized',
    message,
    statusCode: 401,
    errorCode: 401
  })