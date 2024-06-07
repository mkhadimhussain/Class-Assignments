// Avoiding Callback Hell
// To avoid callback hell, modern JavaScript and TypeScript offer several alternatives:

// 1- Promises:
// Promises provide a cleaner way to handle asynchronous operations. They allow chaining
// operations and better error handling.

function firstAsynchronous1(): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("First Operation Complete.");
            resolve("Result of first operation");
        }, 1000);
    });
}

function secondAsynchronous1(resultFromFirst: any): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Second Operation Complete");
            resolve("Result of second operation")
        }, 1000);
    });
}

function thirdAsynchronous1(resultFromSecond: any): Promise<any> {
    return new Promise((resolve, reject) => {
        setTimeout(()=> {
            console.log("Third Operation Complete");
            resolve("Result of third operation");
        }, 1000);
    });
}

firstAsynchronous1()
.then(result => secondAsynchronous1(result)) 
.then(result => thirdAsynchronous1(result))
.then(result => {
    console.log("All operations complete");
})
.catch(error => {
    console.error("Error in operation", error); 
});

//--------------------------------------------------------------------------------------

// 2- Async/Await: 
// Async/Await syntax provides a way to write asynchronous code that looks synchronous,
// making it easier to read and write.

async function performOperation() {
    try{
        const result1 = await firstAsynchronous1();
        const result2 = await secondAsynchronous1(result1);
        const result3 = await thirdAsynchronous1(result2);
        console.log("All Operations Complete");
    } catch (error) {
        console.error("Error in operation", error);
    }
}

performOperation();
