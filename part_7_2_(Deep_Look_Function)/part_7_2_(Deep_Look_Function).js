// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//      use apply on function : 
//          * Similar to call . 

//      apply VS call
//          * call      ⯈⯈⯈ take arguments separately 
//          * apply     ⯈⯈⯈ take arguments as an array
//          * use apply when our argument is array or list


// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//      Apply VS Call method : 

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████


// //      Function  
// var employee = {
//     showEmployee: function (age, level) {
//         console.log(this.fName + " " + this.lName)
//         if (age != undefined && level != undefined)
//             console.log("I have " + age + " years old and I'm " + level + " in programing.")
//     }
// }

// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒
// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒

// //      No differ in this way :
// var person_1 = {
//     fName: "Saman",
//     lName: "Taheri"
// }

// employee.showEmployee.call(person_1)
// employee.showEmployee.apply(person_1)

// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒
// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒

// //      Invoke function with array : 

// var person_1 = {
//     fName: "Saman",
//     lName: "Taheri"
// }
// employee.showEmployee.call(person_1 , 18 , "Junior")
// employee.showEmployee.apply(person_1 , [20 , "Senior"])

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//      Bind : 
//          1 - Let object borrow a method from another object.
//          2 - To prevent losing this

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//      1 - Let object borrow a method from another object.

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

// //      Function  
// var employee = {
//     fName: 'Alireza',
//     lName: "Mohammadi",
//     showEmployee: function (age, level) {
//         if (age != undefined && level != undefined) {
//             return (this.fName + " " + this.lName + "I have " + age + " years old and I'm " + level + " in programing.")
//         } else { return this.fName + " " + this.lName }

//     }
// }

// //      object 
// var person_1 = {
//     fName: "Saman",
//     lName: "Taheri"
// }

// //      normal invoke : 
// result = employee.showEmployee()
// console.log(result)

// // or
// var functionBind = employee.showEmployee.bind(employee)
// result = functionBind()
// console.log(functionBind)
// console.log(result)

// //      invoke with bind :
// var personFunc = employee.showEmployee.bind(person_1)
// result = personFunc()
// console.log(result)

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//          2 - To prevent losing this ( in setTimeout and callback functions and promiss)

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████


// //      Function  
// var employee = {
//     fName: 'Alireza',
//     lName: "Mohammadi",
//     showEmployee: function (age, level) {
//         if (age != undefined && level != undefined) {
//             return (this.fName + " " + this.lName + "I have " + age + " years old and I'm " + level + " in programing.")
//         } else {
//             console.log(this.fName + " " + this.lName)
//             return this.fName + " " + this.lName
//         }

//     }
// }

// //      object 
// var person_1 = {
//     fName: "Saman",
//     lName: "Taheri"
// }

// //      Use in setTimeout : ⮞⮞⮞ undefined
// var result
// setTimeout(() => { result = employee.showEmployee() }, 3000)
// console.log(result)
// //      or 



// //      how we shold invoke for (setTimeout and callback) functions : 
// var result = employee.showEmployee.bind(employee)
// console.log(result)
// setTimeout(result, 3000)


// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//      JavaScript Closures
//          1 - variable access and life time review
//          2 - describe JavaScript Closures and usages 

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//      describe JavaScript Closures and usages

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

// //      problem_1 : 


// //      variable to counter post visitors : 
// let visitCounter = 0 ; 

// //      function to increment counter 
// function visitAdd() {
//     visitCounter += 1 
// }

// visitAdd()
// visitAdd()
// visitAdd()

// console.log(visitCounter)

// //      problem ⮞⮞⮞ all post in page have access to counter and can change it 
// //      answer  ⮞⮞⮞ counter should be local to the function, to prevent other code from changing it:

// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒
// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒

// //      problem_2 : 

// //      function to increment counter 
// function visitAdd() {
//     let visitCounter = 0;
//     visitCounter += 1;
//     return visitCounter;
// }

// visitAdd()
// visitAdd()
// counter = visitAdd()


// console.log(counter)

// //      problem ⮞⮞⮞ It did not work because we reset the local counter every time we call the function.
// //      answer  ⮞⮞⮞ We shold use JavaScript Nested Functions

// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒
// █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒

// //      JavaScript Nested Function &&& JavaScript Closures

// var visitAdd = (function () {
//     let visitCounter = 0;

//     console.log("I will invoke once")

//     return function () {
//         visitCounter += 1;
//         return visitCounter
//     }
// })()

// console.log(visitAdd())
// console.log(visitAdd())
// console.log(visitAdd())
// console.log(visitAdd())

// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

//      Examples : 

//      Example_1 : Show posts
//      Example_2 : show tags 


// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████

// //      get parant Node :
// var parent_container = document.getElementsByClassName("card_container")[0]

// //      create object to define controlle functions : 
// var postController = {
//     renderPost: function (data) {
//         //      create HTML element
//         var postCard = document.createElement("div")
//         //      add class name 
//         postCard.classList.add("post_card")
//         //      create html tag : 

//         //      create Tags : 
//         let tags = this.renderTags(data.courseTags)
//         console.log(tags)
//         //      create HTML content
//         var card_container = `
//                 <div class="img_container">
//                 <img class="post_img" src="post_img_default.jpg" alt="">
//             </div>
//             <div class="content_container">
//                 <p class="p1">${data.postTitle}</p>
//                 <p class="p2">استاد : ${data.fullName}</p>
//                 <p class="p3">سطح : ${data.courseLevel}</p>
//                 <p class="p4">مدرک : ${data.degree}</p>


//             </div>`;


//         // Add innerHTML
//         postCard.innerHTML = card_container;

//         // Append the tags element to the content container
//         var contentContainer = postCard.querySelector('.content_container');
//         contentContainer.appendChild(tags);

//         // Append the postCard to the parent_container
//         parent_container.appendChild(postCard);
//     },
//     //      function to controlle tags :
//     renderTags: function (tags) {
//         var tagSection = document.createElement("div")
//         tagSection.classList.add("tag_section")

//         //      iterate on tags array to render and append tag elements :
//         for (let i = 0; i < tags.length; i++) {
//             var tagContainer = document.createElement("div");
//             tagContainer.classList.add("tag_container");

//             var tagElement = document.createElement("p");
//             tagElement.classList.add("p5");
//             tagElement.textContent = tags[i];
//             //      append each tag to parent Node
//             tagContainer.appendChild(tagElement);
//             tagSection.appendChild(tagContainer);
//         }
//         //      return Node with all tags
//         return tagSection
//     }
// }

// // █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒
// // █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒

// //      data want to render on page (server side response)

// var responseData = [
//     {
//         postTitle: "آموزش هوش مصنوعی",
//         fullName: "محمد حسنی",
//         courseLevel: "مستر",
//         degree: "دارد",
//         courseTags: ["علوم داده", "آموزشی"],
//     },


//     {
//         postTitle: "دوره صفر تا صد C++",
//         fullName: "علیرضا مقدسی",
//         courseLevel: "جنیور",
//         degree: "دارد",
//         courseTags: ["برنامه نویسی"],
//     },

//     {
//         postTitle: " دوره flexbox ",
//         fullName: "محمد حسنی",
//         courseLevel: "مستر",
//         degree: "دارد",
//         courseTags: ["CSS"],
//     },

//     {
//         postTitle: " دوره ورد پرس ",
//         fullName: " سامان طاهری",
//         courseLevel: "جنیور",
//         degree: "ندارد",
//         courseTags: ["سایت نویسی"],
//     }

// ]


// // █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒
// // █▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒█▒▒▒▒▒▒▒▒▒

// //      Use with call
// for (i = 0; i < responseData.length; i++) {
//     postController.renderPost.call(postController , responseData[i])
// }


// //      use with apply
// for (var i = 0; i < responseData.length; i++) {
//     postController.renderPost.apply(postController, [responseData[i]]);
// }

// //      use bind : 
// for (var i = 0; i < responseData.length; i++) {
//     var renderPostWithArgs = postController.renderPost.bind(postController, responseData[i]);
//     renderPostWithArgs();
// }
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████
// ██████████████████████████████████████████████████████████████████████████████████████████████████████████████