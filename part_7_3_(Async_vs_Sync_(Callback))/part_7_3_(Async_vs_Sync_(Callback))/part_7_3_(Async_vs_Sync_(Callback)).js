// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//         Asynchronous vs synchnronous 

//         Async Code : 
//             1 - Callback
//             2 - Promise 
//             3 - Async/Await 

//         Callback Function : 
//              * - A callback is a function passed as an argument to another function
//              * - This technique allows a function to call another function
//              * - A callback function can run after another function has finished


// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

// //         * Normal function runs sync : 

// //         Normal Sync function 1
// function myFirst() {
//     console.log("Function ID : " + 1)
// }

// function mySecond() {
//     myDisplayer("Function ID : " + 2);
// }

// myFirst();
// mySecond();

// // █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒
// // █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒

// //         Normal Sync function 2 

// function myFirst() {
//     console.log("Function ID : " + 1)
// }

// function mySecond() {
//     console.log("Function ID : " + 2);
// }

// mySecond();
// myFirst();


// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

// //         For more controll we can save function result and use it later : 

// var finalResult

// function myFunc_1() {
//     finalResult += "| Section_1 |"
// }

// function myFunc_2() {
//     finalResult += "| Section_2 |"
// }

// function myFunc_3() {
//     finalResult += "| Section_3 |"
// }

// function showResult(result) {
//     console.log(result)
// }

// // █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒
// // █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒

// //         * Normal Invokin : 
// myFunc_1()
// myFunc_2()
// myFunc_3()

// showResult(finalResult)

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

// //       * another way to define function to contrl sequence : 

// var finalResult = ""

// function myFunc_1() {
//     finalResult += "| Section_1 |"
// }

// function myFunc_2() {
//     finalResult += "| Section_2 |"
// }

// function myFunc_3() {
//     finalResult += "| Section_3 |"
// }

// function showResult() {

//     myFunc_1()
//     myFunc_2()
//     myFunc_3()
//     console.log(finalResult)
// }

// showResult()

// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒
// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒

// // or another way :


// var finalResult = ""

// function myFunc_1() {
//     finalResult += "| Section_1 |"
//     myFunc_2()
// }

// function myFunc_2() {
//     finalResult += "| Section_2 |"
//     myFunc_3()

// }

// function myFunc_3() {
//     finalResult += "| Section_3 |"
//     showResult()
// }

// function showResult() {
//     console.log(finalResult)
// }

// myFunc_1()




// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//      Use callback 
//          * A callback is a function passed as an argument to another function.

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

// //      Use callback function :

// function myFunc_1(cb) {
//   let val = "";
//   val += "| Section_1 |";

//   myFunc_2(val , cb)
// }

// function myFunc_2(val , cb) {
//     val += "| Section_2 |";
//     myFunc_3(val , cb)
// }

// function myFunc_3(val ,cb) {

//     val += "| Section_3 |";
//     cb(val)
// }

// function showResult(cb_val) {
//     console.log(cb_val)
// }


// myFunc_1(showResult)


// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

// //      Example of using Async function : 

// //      server response : 
// var serverResponse

// //      Wrong way : 
// (setTimeout(() => {
//     serverResponse = {
//         fName: "X",
//         lName: "Y",
//     }

// }, 5000))


// console.log("Data : " + serverResponse)

// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒
// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒

// var serverResponse

// //      another wrong way : 
// function sendReqServer() {
//     serverResponse = {
//         fName: "X",
//         lName: "Y",
//     }
// }

// function logData() {
//     console.log(serverResponse)
// }

// setTimeout(sendReqServer, 5000)
// logData()

// setInterval(logData , 1000)


// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒
// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒

// //      Right use :

// var serverResponse

// //      server response : 
// function sendReqServer(cb) {
//     setTimeout(() => {
//         serverResponse = {
//             fName: "X",
//             lName: "Y",
//         }
//         cb(serverResponse)
//     }, 5000)
// }

// function logData(data) {
//     console.log(data)
// }

// sendReqServer(logData)

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

