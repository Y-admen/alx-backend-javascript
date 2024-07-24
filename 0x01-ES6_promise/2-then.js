// eslint-disable-next-line no-unused-vars
function handleResponseFromAPI(promise){
	promise
	.then(response => {
		console.log('Got a response from the API');
		const status = {
			status: 200,
			body: 'Success',
		      };
		      resolve(status);
		})
	.catch(errr => {
		return new Error();
	}
	)
	}
