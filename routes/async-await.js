//Resolving JavaScript Promises
let promise1 = Promise.resolve(5);
let promise2 = 44;
let promise3 = new Promise(function (resolve, reject) {
    setTimeout(resolve, 100, 'foo');
});

Promise.all([promise1, promise2, promise3]).then(function (values) {
    console.log(values);
});
// expected output: Array [5, 44, "foo"]





//Creating async Function
function helloWorld() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Hello World!');
        }, 2000);
    });
}

const msg = async function () { //Async Function Expression
    const msg = await helloWorld();
    console.log('Message:', msg);
}

const msg1 = async () => { //Async Arrow Function
    const msg = await helloWorld();
    console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds
msg1(); // Message: Hello World! <-- after 2 seconds


//Async Await Promises
function helloWorld() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('Hello World!');
        }, 2000);
    });
}

async function msg() {
    const msg = await helloWorld();
    console.log('Message:', msg);
}

msg(); // Message: Hello World! <-- after 2 seconds


//Async Function Error Handling
let json = '{ "age": 30 }'; // incomplete data

try {
    let user = JSON.parse(json); // <-- no errors
    alert(user.name); // no name!
} catch (e) {
    alert("Invalid JSON data!");
}



//The aysnc and await Keywords
// git




//States of a JavaScript Promise
const promise = new Promise((resolve, reject) => {
    const res = true;
    // An asynchronous operation.
    if (res) {
        resolve('Resolved!');
    }
    else {
        reject(Error('Error'));
    }
});

promise.then((res) => console.log(res), (err) => alert(err));



//The .catch() method for handling rejection
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject(Error('Promise Rejected Unconditionally.'));
    }, 1000);
});

promise.then((res) => {
    console.log(value);
});

promise.catch((err) => {
    alert(err);
});



//JavaScript Promise.all()  
const promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    }, 300);
  });
  const promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, 200);
  });
  
  Promise.all([promise1, promise2]).then((res) => {
    console.log(res[0]);
    console.log(res[1]);
  });