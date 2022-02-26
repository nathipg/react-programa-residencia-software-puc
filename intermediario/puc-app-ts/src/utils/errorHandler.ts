export const errorHandler = (error: any) => {
  const message = error.message || 'Error';
  const status = error.response.status || 500;
  const errors = error.response.data.error || {};

  return {
    message,
    status,
    errors,
  };
};
