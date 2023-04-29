const findSquare = (input) => {
    if (typeof input === 'string') {
        throw new Error('Invalid input: A string was provided instead of a number.');
    }
    return input ** 2;
};
  

const promiseFunction = (input) =>
    new Promise((resolve) => {
        resolve(findSquare(input));
    });

promiseFunction(5)
    .then((result) => console.log('Result: ' + result))
    .catch((error) => console.log(error));