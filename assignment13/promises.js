////////////////////////////////// Assignment 13 //////////////////////////////////
// This is the Assignment of Class 15.
// Question: Learn and Practice Promises.
// Promises
// A promise is an object representing the eventual completion or failure of an asynchronous
// operation. It has three states:
// 1- Pending: The initial state, neither fulfilled nor rejected.
// 2- Fulfilled: The operation completed successfully.
// 3- Rejected: The operation failed.
// Creating a Promise
// To create a promise, you use the Promise constructor, which takes an executor function. The
// executor function has two parameters: resolve and reject.
const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation
    const success = true;
    if (success) {
        resolve(42); // Operation succeeded
    }
    else {
        reject('Something went wrong'); // Operation failed
    }
});
// .then and .catch
// The ".then" method is used to specify what should happen when the promise is fulfilled, and
// ".catch" is used for when the promise is rejected.
myPromise.then((value) => {
    console.log('Success:', value); // Logs 'Success: 42'  
}).catch((error) => {
    console.log('Errro:', error); // If rejected, logs the error
});
// resolve and reject
// - resolve(value): Marks the promise as fulfilled and sets the fulfillment value.
// - reject(reason): Marks the promise as rejected and sets the rejection reason.
// async and await
// async and await are syntactic sugar over promises, making asynchronous code look more like
// synchronous code. An async function always returns a promise. The await keyword is used inside
// async functions to pause execution until the promise resolves or rejects.
// Example with async and await
async function fetchData() {
    try {
        const data = await myPromise; // waits for the promise to resolve
        console.log('Data:', data); // Logs 'Data: 42'
    }
    catch (error) {
        console.error('Error:', error); // Handles any errors
    }
}
fetchData();
//--------------------------------------------------------------------------------------------------
// Let's explore some other simple examples
// Example 1: Basic Promise
// This example demonstrates a basic promise that resolves after a delay.
const delayedPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);
});
delayedPromise.then((message) => {
    console.log(message); // Logs: "Promise resolved after 2 seconds"
}).catch((error) => {
    console.error(error);
});
//--------------------------------------------------------------------------------------------------
// Example 2: Promise with Rejection
// This example shows a promise that may either resolve or reject based on a condition.
const randomOutcomePromise = new Promise((resolve, reject) => {
    const success = Math.random() > 0.5;
    setTimeout(() => {
        if (success) {
            resolve("Operation was successful");
        }
        else {
            reject("Operation failed");
        }
    }, 1000);
});
randomOutcomePromise.then((message) => {
    console.log(message); // Logs: "Operation was successful" if resolved  
}).catch((error) => {
    console.error(error); // Logs: "Operation failed" if rejected
});
//--------------------------------------------------------------------------------------------------
// Example 3: Async/Await with Delayed Promise
// This example demonstrates using async and await to handle the same delayed promise.
const delayedPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Promise resolved after 2 seconds");
    }, 2000);
});
async function handlePromise() {
    try {
        const message = await delayedPromise1;
        console.log(message); // Logs: "Promise resolved after 2 seconds"
    }
    catch (error) {
        console.error(error);
    }
}
handlePromise();
//--------------------------------------------------------------------------------------------------
// Example 4: Chaining Promises
// This example shows how to chain multiple promises using .then.
const firstPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});
firstPromise.then((value) => {
    console.log(value); // Logs: 10
    return value * 2;
}).then((newValue) => {
    console.log(newValue); // Logs: 20
    return newValue * 2;
}).then((finalValue) => {
    console.log(finalValue); // Logs: 40  
}).catch((error) => {
    console.error(error);
});
//--------------------------------------------------------------------------------------------------
// Example 5: Using Async/Await with Chaining
// This example converts the above chaining example into async/await syntax.
const firstPromise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 1000);
});
async function handleChainedPromises() {
    try {
        const value = await firstPromise1;
        console.log(value); // Logs: 10
        const newValue = value * 2;
        console.log(newValue); // Logs: 20
        const finalValue = newValue * 2;
        console.log(finalValue); // Logs: 40
    }
    catch (error) {
        console.error(error);
    }
}
handleChainedPromises();
//--------------------------------------------------------------------------------------------------
// Example 6: Handling Multiple Promises with Promise.all
// This example demonstrates how to handle multiple promises concurrently using Promise.all.
const promise1 = new Promise((resolve) => setTimeout(() => resolve(1), 1000));
const promise2 = new Promise((resolve) => setTimeout(() => resolve(2), 2000));
const promise3 = new Promise((resolve) => setTimeout(() => resolve(3), 3000));
Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values); // Logs: [1, 2, 3] after 3 seconds
}).catch((error) => {
    console.error(error);
});
export {};
//--------------------------------------------------------------------------------------------------
