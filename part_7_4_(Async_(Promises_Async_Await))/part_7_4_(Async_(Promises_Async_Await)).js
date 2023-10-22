// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//      JavaScript Promises : 
//          * "Producing code" is code that can take some time
//          * "Consuming code" is code that must wait for the result
//          * A Promise is a JavaScript object that links producing code and consuming code

//      A JavaScript Promise object can be:
//      1 - Pending
//      2 - Fulfilled
//      3 - Rejected

//      The Promise object supports two properties: state and result.
//      While a Promise object is "pending" (working), the result is undefined.
//      When a Promise object is "fulfilled", the result is a value.
//      When a Promise object is "rejected", the result is an error object.

//      JavaScript Promise Examples
//          To demonstrate the use of promises, we will use the callback examples from the previous chapter:
//              * Waiting for a Timeout
//              * Waiting for a File

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//      Structure :                                              *** Dont Uncomment ***
// let myPromise = new Promise(function (myResolve, myReject) {
//     // "Producing Code" (May take some time)

//     myResolve(); // when successful
//     myReject();  // when error
// });

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//     function (value) { /* code if successful */ },
//     function (error) { /* code if some error */ }
// );

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

// //      Promiss Normal Use : 

// var myValue = 1;

// //      The producing code (this may take some time)
// var myPromise = new Promise( (Resolve, Reject) => {
//     setTimeout(() => {
//         if (myValue != 0) {
//             Resolve("Number has been changed !")
//         } else {
//             Reject("Cant change value !")
//         }
//     }, 5000)
// })

// //      Connect both the producing code and the consuming code
// myPromise.then(
//     function (value) {
//         console.log(value)
//     },
//     function (err) {
//         console.log(err)
//     }
// )

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

// //      define function to control sequence and function invoking time :

//     //  request_1
// const promiseFunction_1 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 2000);
//     });
// };

//     //  Request_2
// const promiseFunction_2 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 4000);
//     });
// };

//     //  Request_3
// const promiseFunction_3 = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('resolved');
//         }, 6000);
//     });
// };

//     //  Create promises with Request functions : 
// const promise1 = promiseFunction_1();
// const promise2 = promiseFunction_2();
// const promise3 = promiseFunction_3();

//     //  Invoke promise functions in sequence : 
// Promise.all([promise1, promise2, promise3])
//     .then((result) => {
//         console.log(result[0]);
//         console.log(result[1]);
//         console.log(result[2]);
//     })

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//      Async --- Await : 
//              async and await make promises easier to write
//              async makes a function return a Promise
//              await makes a function wait for a Promise
//      Await Syntax
//              The await keyword can only be used inside an async function.
//              The await keyword makes the function pause the execution and wait for a resolved promise before it continues:


//      Structure : 

// async function myFunc () {
//     return myValue ; 
// }
// myFunc.then(
//     function(myValue) {},
//     function(err) {}
// )
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

// //       Compare to Promise:

// var response = {};

// //       The producing code (this may take some time)
// async function requestServer() {
//   return new Promise(resolve => {
//     setTimeout(() => {
//       response.fName = "Ali";
//       response.lName = "Mohammadi";
//       response.age = 15;
//       response.stat = false;

//       resolve(response);
//     }, 5000);
//   });
// }

// //       Handel async(promise function :)
// requestServer().then((res) => {  
//   if (res.stat == true) {
//     console.log(response);
//   } else {
//     console.error("No Connection to server !");
//   }
// });

// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒
// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒

// //      Another way to handel async (with await)

// serverResponce = {}

// async function showResponce() {
//     var myRequest = new Promise(function (resolve, reject) {
//         setTimeout(() => {
//             serverResponce.stat = true;
//             serverResponce.token = "8@@@!@#$$666456"

//             resolve(serverResponce)
//         }, 5000);
//     });
//     resData = await myRequest
//     console.log(resData)
// }

// showResponce()

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
