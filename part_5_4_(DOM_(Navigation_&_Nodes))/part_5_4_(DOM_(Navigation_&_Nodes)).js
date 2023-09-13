// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------

// what is Nodes

// DOM Nodes
// According to the W3C HTML DOM standard, everything in an HTML document is a node:

// The entire document is a document node
// Every HTML element is an element node
// The text inside HTML elements are text nodes
// Every HTML attribute is an attribute node (deprecated)
// All comments are comment nodes


// relationship in Nodes : 
// 1 - parent 
// 2 - child 
// 3 - sibling

// describe the relationships : 

// In a node tree, the top node is called the root (or root node)
// Every node has exactly one parent, except the root (which has no parent)
// A node can have a number of children
// Siblings (brothers or sisters) are nodes with the same parent

// Navigating Between Nodes

// parentNode
// childNodes[nodenumber]
// firstChild
// lastChild
// firstElementChild
// lastElementChild
// nextSibling
// previousSibling
// previousElementSibling
// nextElementSibling

// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------

// // log document node : 
// console.log(document)

// // nextSibling & previousSibling (document)
// console.log(document.nextSibling)
// console.log(document.previousSibling)

// // firstChild & lastChild & childNodes[nodenumber]
// console.log(document.firstChild)
// console.log(document.lastChild)
// console.log(document.childNodes)

// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------

// // log body node
// console.log(document.body)

// -------------------------------------------
// -------------------------------------------

// // log parent node : 
// console.log(document.body.parentNode)
// console.log(document.body.parentNode.parentNode)

// -------------------------------------------
// -------------------------------------------

// // body sibling
// console.log(document.body.previousSibling.previousSibling)
// console.log(document.body.nextSibling)

// -------------------------------------------
// -------------------------------------------

// // log body child
// console.log(document.body.firstElementChild)
// console.log(document.body.lastElementChild)

// -------------------------------------------
// -------------------------------------------


// // log childNodes
// console.log(document.body.childNodes)

// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------

// log div with class parent-node : 
var myElement = document.querySelectorAll(".parent-node")[0]
console.log(myElement)

// // -------------------------------------------
// // -------------------------------------------


// // log element sibling : 
// console.log(myElement.previousElementSibling)
// console.log(myElement.nextElementSibling)

// // -------------------------------------------
// // -------------------------------------------


// // log sibling : 
// console.log(myElement.previousSibling)
// console.log(myElement.nextSibling)

// // -------------------------------------------
// // -------------------------------------------


// // log element child :
// console.log(myElement.firstElementChild)
// console.log(myElement.lastElementChild)
// console.log(myElement.children)

// // -------------------------------------------
// // -------------------------------------------

// // log child : 
// console.log(myElement.firstChild)
// console.log(myElement.lastChild)
// console.log(myElement.childNodes)

// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------

// // Child Nodes and Node Values
// var myElement = document.querySelectorAll(".parent-node")[0]
// console.log(myElement)

// // innerHTML
// console.log(myElement.innerHTML)

// // textContent
// console.log(myElement.textContent)

// // innerText
// console.log(myElement.innerText)

// // log firstChild value 
// console.log(myElement.firstChild.nodeValue)

// // log childNodes value 
// console.log(myElement.childNodes[0].nodeValue)

// // nodeName : 
// console.log(myElement.nodeName)


// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------

// just note : (cant run this !)

// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------

// appendChild() : appended the new element as the last child of the parent.

// how to use : 

// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);


// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------

// insertBefore() : appended the new element as the first child of the parent.

// how to use : 

// const element = document.getElementById("div1");
// const child = document.getElementById("p1");
// element.insertBefore(para, child);

// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------

// remove() : To remove an HTML element

//  how to use : 

// const elmnt = document.getElementById("p1"); 
// elmnt.remove();

// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------

// replaceChild() : To replace an element to the HTML DOM

// how to use : 

// const para = document.createElement("p");
// const node = document.createTextNode("This is new.");
// para.appendChild(node);

// const parent = document.getElementById("div1");
// const child = document.getElementById("p1");
// parent.replaceChild(para, child);

// -----------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------
