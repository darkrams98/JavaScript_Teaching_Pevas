// while & do-while : 
// def : The while loop loops through a block of code as long as a specified condition is true.

// structure : 

// 1 - while :

// while (condition) {
//     // code block to be executed
//   }

// 2 - do-while : 

// do {
//     // code block to be executed
//   }
//   while (condition);

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------
// var i = 0;
// var text = '';

// while (i < 10) {
//     text = "The number is " + i;
//     i++;
//     console.log(text)
// }

// ---------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------

// do-while : 

// var i = 0;
// var text = ""

// do {

//     text = "The number is " + i;
//     console.log(text)

//     i++;

// } while (i > 10)


// ---------------------------------------------for loop ----------------------------------------------

// for loop : 

// structure : 

// for (expression 1; expression 2; expression 3) {
//     // code block to be executed
//   }

//   Expression 1 is executed (one time) before the execution of the code block.

//   Expression 2 defines the condition for executing the code block.

//   Expression 3 is executed (every time) after the code block has been executed.

// ------------------------------------------------------
// // example : 

// var text = ""

// for (let i = 0 ; i < 10 ; i++) {

//     text = "The number is " + i;
//     console.log(text)

// }


// // def multy variable in expression 1

// for (let i = 0 , text = "" , len = text.length ; i < 10 ; i++) {

//     text = "The number is " + i;
//     console.log(text)
// }

// // or 

// var x = 0 ; 

// for (let i = 0 ; i < 10 ; i++ , x = x + 2 ) {

//     text = "The number is " + i;
//     console.log(text)
// }

// console.log(x)

// -------------------------------------------

// // def variable befor for loop : 

// var i = 0 ; 
// var text = ''

// for ( ; i < 10 ; i++ ) {

//     text = "The number is " + i;
//     console.log(text)

// }

// // or 

// var i = 0 ; 
// var text = ''

// for ( ; i < 10 ; ) {

//     text = "The number is " + i;
//     console.log(text)

//     i++
// }


// -----------------------------------------------------------------------------------------

// // var or let ? 

// // var variable : 

// var i = 5;

// for (var i = 0; i < 10; i++) {
//   // some code
// }

// // Here i is 10

// // -----------------------

// // let variable : 

// let i = 5;

// for (let i = 0; i < 10; i++) {
//   // some code
// }

// // Here i is 5

// ---------------------------------------------------------------------------------------------------------
// ---------------------------------------------------------------------------------------------------------


// break    : The break statement "jumps out" of a loop.
// continue : The continue statement "jumps over" one iteration in the loop.


// break exam : 

// for (i = 0 ; i < 10 ; i++) {

//     console.log(i)

//     if (i == 3) {
//         break ; 
//     }
// }

//------- or ------ 

// for (i = 0 ; i < 10 ; i++) {

//     if (i == 3) {
//         break ; 
//     }

//     console.log(i)

// }

// --------------------------------------------------------------------------

// continue 



// what we see at first : 

// var text = ""

// for (let i = 0 ; i < 10 ; i++) {

//     text = "The number is " + i;
//     console.log(text)

// }

// ---------------  use continue -------------------------

// var text = ""

// for (let i = 0 ; i < 10 ; i++) {

//     if (i == 5) {
//         continue ;
//     }

//     text = "The number is " + i;
//     console.log(text)
// }

// ---------------------------------------------------------------------

// infinite or unlimited while : 

// var i = 0 ; 

// while (true) {

//     console.log(i)

//     i++ ; 
// }

// ---------------------------------------------------------------------

// nested while : 

// var i = 0
// var x = 0

// while (i < 10) {
    
//     console.log("i = " + i)
    
//     while (x < 5) {
        
//         console.log("x = " + x)
//         x++
//     }
//     i++
// }

// ---------------------------------------------------------------------
// nested for : حلقه تو در تو 

for (let i = 0; i < 10; i++) {

    console.log("i = " + i)

    for (let x = 0; x < 5; x++) {

        console.log("x = " + x)

        for (let y = 0; y < 5; y++) {


            console.log("y = " + y)
        }
    }
}

// 