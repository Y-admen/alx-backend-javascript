// eslint-disable-next-line no-unused-vars
export default function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      const status = {
        status: 200,
        body: 'Success',
      };
      resolve(status);
    })
    .catch(() => new Error());
}
