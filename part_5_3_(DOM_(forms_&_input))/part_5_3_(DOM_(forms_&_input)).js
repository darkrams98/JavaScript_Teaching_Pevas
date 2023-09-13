
// form & input management with javascript : 

// types of form : 

// input type="button"
// input type="checkbox"
// input type="color"
// input type="date"
// input type="datetime-local"
// input type="email"
// input type="file"
// input type="hidden"
// input type="image"
// input type="month"
// input type="number"
// input type="password"
// input type="radio"
// input type="range"
// input type="reset"
// input type="search"
// input type="submit"
// input type="tel"
// input type="text"
// input type="time"
// input type="url"
// input type="week"

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

// // document.form 

// // log 
// console.log(document.forms)
// console.log(document.forms["form-1"]["input-1"].value)

// // get value : 
// getData = function () {
//     let value = document.forms["form-1"]["input-1"].value
//     alert(value)
// }

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

// // get value with oninput

// getValue = function (input_element) {
//     let value = input_element.value
//     console.log(value)

//     document.querySelectorAll(".value-p1")[1].textContent = value
// }

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

// // get value with onchenge

// getValue = function (input_element) {

//     let value = input_element.value
//     console.log(value)

//     document.querySelectorAll(".value-p1")[2].textContent = value

// }

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

// // get date input :

// getDate = function (input_date_element) {

//     let date_born = new Date(input_date_element.value)
//     console.log(date_born)

//     document.querySelectorAll(".value-p2")[0].textContent = date_born.getFullYear()

// }

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

// // get radio value : event = click

// var genderRadio

// var radios = document.querySelectorAll('input.radio-input') ; 

// console.log(radios)

// radios.forEach((radio) => {

//     console.log(radio)

//     radio.addEventListener("click" , function () {

//         genderRadio = radio.value; 
//         document.querySelectorAll(".value-p1")[3].textContent = radio.value;
//         console.log(radio.value)
//     })

// })

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

// // get radio value : event = input

// var genderRadio

// var radios = document.querySelectorAll('input.radio-input') ; 

// console.log(radios)

// radios.forEach((radio) => {

//     console.log(radio)
//     radio.addEventListener("input" , function () {
//         genderRadio = radio.value; 

//         document.querySelectorAll(".value-p1")[3].textContent = radio.value;
//         console.log(radio.value)
//     })
// })

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------

// // create variables and find input element
// var checkboxValue = []

// var checkboxElement = document.querySelectorAll(".checkbox-input")

// console.log(checkboxElement)

// // add event
// checkboxElement.forEach((checkbox) => {

//     console.log(checkbox)
//     // add event to each checkbox
//     checkbox.addEventListener("input", (event) => {

//         // if checked 
//         if (event.target.checked == true) {
//             console.log(event.target.value)
//             checkboxValue.push(event.target.value)
//             document.querySelectorAll(".value-p1")[4].textContent = checkboxValue;
//         }

//         // if unchecked
//         if (event.target.checked == false) {
//             checkboxValue.pop(event.target.value)
//             document.querySelectorAll(".value-p1")[4].textContent = checkboxValue;
//         }
//     })
// })

// -------------------------------------------------------------------------------------------------------------------------
// -------------------------------------------------------------------------------------------------------------------------
