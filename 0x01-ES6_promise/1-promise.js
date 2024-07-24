// eslint-disable-next-line no-unused-vars
function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success === true) {
      const status = {
        status: 200,
        body: 'Success',
      };
      resolve(status);
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}
