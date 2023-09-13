
// DOM 
// Document Object Model

// -----------------------------------------------------

// what is DOM : 
// With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

// With the object model, JavaScript gets all the power it needs to create dynamic HTML:

// JavaScript can change all the HTML elements in the page
// JavaScript can change all the HTML attributes in the page
// JavaScript can change all the CSS styles in the page
// JavaScript can remove existing HTML elements and attributes
// JavaScript can add new HTML elements and attributes
// JavaScript can react to all existing HTML events in the page
// JavaScript can create new HTML events in the page

// -----------------------------------------------------
// -----------------------------------------------------

// What is the HTML DOM?
// The HTML DOM is a standard object model and programming interface for HTML. It defines:

// The HTML elements as objects
// The properties of all HTML elements
// The methods to access all HTML elements
// The events for all HTML elements
// In other words: The HTML DOM is a standard for how to get, change, add, or delete HTML elements.

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// DOM is object so : 

// HTML DOM methods are actions you can perform (on HTML Elements).
// HTML DOM properties are values (of HTML Elements) that you can set or change.

// The HTML DOM Document Object
// The document object represents your web page.

// If you want to access any element in an HTML page, you always start with accessing the document object.

// Below are some examples of how you can use the document object to access and manipulate HTML.

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// Finding HTML Elements

// Often, with JavaScript, you want to manipulate HTML elements.

// To do so, you have to find the elements first. There are several ways to do this:

// Finding HTML elements by id
// Finding HTML elements by tag name
// Finding HTML elements by class name
// Finding HTML elements by CSS selectors
// Finding HTML elements by HTML object collections

// Method	                                        Description
// document.getElementById(id)	                    Find an element by element id
// document.getElementsByTagName(name)	            Find elements by tag name
// document.getElementsByClassName(name)	        Find elements by class name

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// console.log(document)
// // document.getElementById(id)

// var element = document.getElementById("exam-1")
// console.log(element)
// console.log(typeof(element))

// var element = document.getElementById("exam-2")
// console.log(element)

// var element = document.getElementById("exam-3")
// console.log(element)

// // If the element is not found, element will contain null.

// var element = document.getElementById("exam-1000")
// console.log(element)

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // note : you cant do this : 

// var element = document.getElementById("exam-1")
// var p_element = element.getElementById("p1")

// // you can use another methods

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // document.getElementsByTagName(name)

// var element = document.getElementsByTagName("p")
// console.log(element)
// console.log(typeof(element))

// var element = document.getElementsByTagName("div")
// console.log(element)

// // دسترسی به تگ های داخلی تر :‌

// var element = document.getElementsByTagName("p")
// console.log(element[3])

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // document.getElementsByClassName(name) 

// var element = document.getElementsByClassName("exam-5")
// console.log(element)
// console.log(typeof(element))

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // Finding HTML Elements by CSS Selectors

// var element = document.querySelectorAll("div.exam-6")
// console.log(element)
// console.log(typeof(element))

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // Finding HTML Elements by HTML Object Collections

// var element = document.getElementsByClassName("exam-section")
// console.log(element)

// console.log(element[4])

// var element_1 = element[4].getElementsByTagName("div")
// console.log(element_1)
// console.log(element_1[0])

// var element_1 = document.getElementById("exam-7")
// console.log(element_1)

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // another HTML document object : 

// var body_element = document.body
// console.log(body_element)

// // -------------------------------------------------------
// // -------------------------------------------------------

// var element = document.documentElement
// console.log(element)

// // -------------------------------------------------------
// // -------------------------------------------------------

// var embeds_element = document.embeds
// console.log(embeds_element)

// // -------------------------------------------------------
// // -------------------------------------------------------

// var form_elements = document.forms
// console.log(form_elements)
// // or 
// console.log(form_elements.length)

// // -------------------------------------------------------
// // -------------------------------------------------------

// var head_element = document.head
// console.log(head_element)

// // -------------------------------------------------------
// // -------------------------------------------------------

// var img_elements = document.images
// console.log(img_elements)
// // or 
// console.log(img_elements.length)

// // -------------------------------------------------------
// // -------------------------------------------------------

// var link_elemnts = document.links
// console.log(link_elemnts)
// // or 
// console.log(link_elemnts.length)

// // -------------------------------------------------------
// // -------------------------------------------------------

// var script_elements = document.scripts
// console.log(script_elements)

// // -------------------------------------------------------
// // -------------------------------------------------------

// var title_elements = document.title
// console.log(title_elements)

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// ok we find HTML element 
// JavaScript HTML DOM - Changing HTML

// chenge Text : 
// innerText 
// innerHTML
// textContent

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // innerHTML prperty

// // get element : 

// var element = document.getElementsByClassName("exam-section")

// console.log(element)
// console.log(element[7])

// element = element[7]

// // // --------------------------------------------------------------
// // // --------------------------------------------------------------
// // chenge innerHTML : 

// console.log(element.innerHTML)
// console.log(element.innerText)
// console.log(element.textContent)

// // chenge tag (p)
// element.querySelector("p").innerHTML = "new p value"

// // chenge tag (span)
// element.querySelector("span").innerHTML = "new span value"

// // chenge tag (title)
// element.querySelector("title").innerHTML = "new title value"

// // chenge tag (label)
// element.querySelector("label").innerHTML = "new label value"

// // chenge tag (h1 - h6)
// element.querySelector("h1").innerHTML = "new h1 value"

// // chenge tag (th)
// element.querySelector("th").innerHTML = "new th value"

// // chenge tag (legend)
// element.querySelector("legend").innerHTML = "new legend value"

// // chenge tag (a)
// element.querySelector("a").innerHTML = "new a value"

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // Changing the Value of an Attribute

// var element = document.getElementsByClassName("exam-section")

// console.log(element)
// console.log(element[8])

// element = element[8]

// // // --------------------------------------------------------------
// // // --------------------------------------------------------------

// // chenge img src : 
// element.getElementsByClassName("img-class")[1].src = "image_2.jpeg"

// // chenge a href : 
// element.getElementsByTagName("a")[1].href = "www.bing.com"
// element.getElementsByTagName("a")[1].innerHTML = "bing"

// // chenge p title : 
// element.getElementsByTagName("p")[1].title = "new title"

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // document create ELement : 

// var myDiv = document.querySelector("#exam-div")
// var myPara = document.createElement("p")

// myPara.innerHTML = "I created by javascript"

// console.log(myDiv)

// myDiv.append(myPara)

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // document.setAtteribute

// var element = document.querySelector("#my-id")

// console.log(element)

// element.setAttribute("class" , "colorRed")

// // remove Attribute : 

// element.removeAttribute("id")

// // getAttribute : 

// console.log(element.getAttribute("class"))

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // classList property : 

// var element = document.querySelector(".myList")

// console.log(element)

// // // --------------------------------------------------------------
// // // --------------------------------------------------------------

// // way 1 : add element :

// var myPara = document.createElement("p")
// myPara.innerText = "Dart"
// myPara.setAttribute("class", "listItem")
// element.append(myPara)

// // // --------------------------------------------------------------
// // // --------------------------------------------------------------

// // way 2 : 

// var myPara = document.createElement("p")
// myPara.innerText = "Dart"
// element.append(myPara)

// var myItems = document.querySelectorAll(".listItem")
// console.log(myItems)

// myPara.classList.add("listItem")

// // // --------------------------------------------------------------
// // // --------------------------------------------------------------

// // another properties : 

// console.log(myPara.classList.contains("listItem"))

// console.log(myPara.classList.value)

// console.log(myPara.classList)

// myPara.classList.remove("listItem")



// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // parentNode && parentElement property :  

// var elements = document.querySelector(".listItem")

// console.log(elements)

// console.log(elements.parentNode)
// console.log(elements.parentElement)


// console.log(elements.parentNode.parentNode)
// console.log(elements.parentElement.parentElement)

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // childNodes && firstChild && lastElementChild property : 

// var element = document.querySelector(".myList")

// console.log(element)

// console.log(element.childNodes)

// console.log(element.hasChildNodes())

// console.log(element.firstChild)
// console.log(element.firstElementChild)

// console.log(element.lastChild)
// console.log(element.lastElementChild)

// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // previousSibling && nextSibling properties : 

// var element = document.querySelector(".myList")

// console.log(element)

// console.log(element.previousSibling)
// console.log(element.nextSibling)

// console.log(element.previousElementSibling)
// console.log(element.nextElementSibling)


// ------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------

// // chenge style with javascript : 
// // document.getElementById(id).style.property = new style

// var myDiv = document.querySelectorAll("#chengeStyle")
// console.log(myDiv[0])

// function chengeColor () {
//     myDiv[0].style.backgroundColor = "red"
// }

// // --------------------------------------------------------------
// // --------------------------------------------------------------

// var dropDown = document.getElementById("nav-content")
// console.log(dropDown)

// function showContent () {
//     dropDown.style.display = "inline-block"
// }

// function hideContent () {
//     dropDown.style.display = "none"
// }