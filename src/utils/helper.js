export const showErrorMessage = (err, message = "خطایی رخ داده است") => {
  if (
    err &&
    err.response &&
    err.response.data &&
    err.response.data.error &&
    err.response.data.error.customMessage
  ) {
    console.log(err.response.data.error.customMessage);
  } else {
    console.log(message);
  }
};
