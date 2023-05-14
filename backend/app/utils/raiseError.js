export default (message, statusCode) => {
  const error = new Error(message || "An unknown error occurred!");
  error.statusCode = statusCode || 500;
  return error;
};
