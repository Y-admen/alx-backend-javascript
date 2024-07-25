// eslint-disable-next-line no-unused-vars
export default function handleResponseFromAPI(promise) {
  return promise
    .then(() => {
      console.log('Got a response from the API');
      const status = {
        status: 200,
        body: 'Success',
      };
      return status;
    })
    .catch(() => new Error());
}
