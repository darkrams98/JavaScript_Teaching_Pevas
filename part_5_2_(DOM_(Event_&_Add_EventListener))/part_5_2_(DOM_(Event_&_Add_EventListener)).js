
// Event & Event listener : 

// Common HTML Events

// Event	                Occurs When	                                                Belongs To
// abort	                The loading of a media is aborted	                                   
// afterprint	            A page has started printing	                                Event
// animationend	            A CSS animation has completed	                            AnimationEvent
// animationiteration	    A CSS animation is repeated	                                AnimationEvent
// animationstart	        A CSS animation has started                             	AnimationEvent
// beforeprint	            A page is about to be printed	Event
// beforeunload	            Before a document is about to be unloaded	                UiEvent, Event
// blur	                    An element loses focus	FocusEvent
// canplay	                The browser can start playing a media (has buffered enough to begin)	Event
// canplaythrough	        The browser can play through a media without stopping for buffering	Event
// change	                The content of a form element has changed	                Event
// click	                An element is clicked on	                                MouseEvent
// contextmenu	            An element is right-clicked to open a context menu	        MouseEvent
// copy	                    The content of an element is copied	                        ClipboardEvent
// cut	                    The content of an element is cutted	                        ClipboardEvent
// dblclick	                An element is double-clicked	                            MouseEvent
// drag	                    An element is being dragged	                                DragEvent
// dragend	                Dragging of an element has ended	                        DragEvent
// dragenter	            A dragged element enters the drop target	                DragEvent
// dragleave	            A dragged element leaves the drop target	                DragEvent
// dragover	                A dragged element is over the drop target	                DragEvent
// dragstart	            Dragging of an element has started	                        DragEvent
// drop	                    A dragged element is dropped on the target	                DragEvent
// durationchange	        The duration of a media is changed	                        Event
// ended	                A media has reach the end ("thanks for listening")	        Event
// error	                An error has occurred while loading a file	ProgressEvent, UiEvent, Event
// focus	                An element gets focus	FocusEvent
// focusin	                An element is about to get focus	FocusEvent
// focusout	                An element is about to lose focus	FocusEvent
// fullscreenchange	        An element is displayed in fullscreen mode	Event
// fullscreenerror	        An element can not be displayed in fullscreen mode	Event
// hashchange	            There has been changes to the anchor part of a URL	HashChangeEvent
// input	                An element gets user input	InputEvent, Event
// invalid	                An element is invalid	Event
// keydown	                A key is down	KeyboardEvent
// keypress	                A key is pressed	KeyboardEvent
// keyup	                A key is released	KeyboardEvent
// load	                    An object has loaded	UiEvent, Event
// loadeddata	            Media data is loaded	Event
// loadedmetadata	        Meta data (like dimensions and duration) are loaded	Event
// loadstart	            The browser starts looking for the specified media	ProgressEvent
// message	                A message is received through the event source	Event
// mousedown	            The mouse button is pressed over an element	MouseEvent
// mouseenter	            The pointer is moved onto an element	MouseEvent
// mouseleave	            The pointer is moved out of an element	MouseEvent
// mousemove	            The pointer is moved over an element	MouseEvent
// mouseover	            The pointer is moved onto an element	MouseEvent
// mouseout	                The pointer is moved out of an element	MouseEvent
// mouseup	                A user releases a mouse button over an element	MouseEvent
// mousewheel	            Deprecated. Use the wheel event instead	WheelEvent
// offline	                The browser starts working offline	Event
// online	                The browser starts working online	Event
// open	                    A connection with the event source is opened	Event
// pagehide	                User navigates away from a webpage	PageTransitionEvent
// pageshow	                User navigates to a webpage	PageTransitionEvent
// paste	                Some content is pasted in an element	ClipboardEvent
// pause	                A media is paused	Event
// play	The                 media has started or is no longer paused	Event
// playing	                The media is playing after beeing paused or buffered	Event
// popstate	                The window's history changes	PopStateEvent
// progress	                The browser is downloading media data	Event
// ratechange	            The playing speed of a media is changed	Event
// resize	                The document view is resized	UiEvent, Event
// reset	                A form is reset	Event
// scroll	                An scrollbar is being scrolled	UiEvent, Event
// search	                Something is written in a search field	Event
// seeked	                Skipping to a media position is finished	Event
// seeking	                Skipping to a media position is started	Event
// select	                User selects some text	UiEvent, Event
// show	                    A <menu> element is shown as a context menu	Event
// stalled	                The browser is trying to get unavailable media data	Event
// storage	                A Web Storage area is updated	StorageEvent
// submit	                A form is submitted	Event
// suspend	                The browser is intentionally not getting media data	Event
// timeupdate	            The playing position has changed (the user moves to a different point in the media)	Event
// toggle	                The user opens or closes the <details> element	Event
// touchcancel	            The touch is interrupted	TouchEvent
// touchend	                A finger is removed from a touch screen	TouchEvent
// touchmove	            A finger is dragged across the screen	TouchEvent
// touchstart	            A finger is placed on a touch screen	TouchEvent
// transitionend	        A CSS transition has completed	TransitionEvent
// unload	                A page has unloaded	UiEvent, Event
// volumechange	            The volume of a media is changed (includes muting)	Event
// waiting	                A media is paused but is expected to resume (e.g. buffering)	Event
// wheel	                The mouse wheel rolls up or down over an element	WheelEvent

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Event : onclick

// myBool = false ;
// clickFunction = function () {

//     myBool = (myBool == true) ? false : true

//     let btnElement = document.querySelectorAll(".btn-exam p")[1]
//     console.log(btnElement)

//     if (myBool == true) {
//         btnElement.innerText = "clicked"
//     }else {
//         btnElement.innerHTML = "onclick js"
//     }
// }
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Event : onmouseover

// mouseOverFunc = function(element) {
//     console.log(element)
//     element.style.backgroundColor = 'blue'
// }

// mouseOutFunc = function(element) {
//     element.style.backgroundColor = 'rgb(0, 153, 255)'
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Event : onmousemove

// myBool = false

// mouseMoveFunc = function (element) {

//     myBool = (myBool == true) ? false : true

//     element.style.margin = (myBool == true) ? "10px 0px 10px auto" : "10px auto 10px 0px"
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Event : onmousedown && onmouseup

// mouseDownFunc = function (element) {
//     element.style.borderRadius =  '40%';
// }

// mouseUpFunc = function (element) {
//     element.style.borderRadius =  '2%';
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// // Event : onload && onunload

// var result
// function loadData(callback) {
//     const xhttp = new XMLHttpRequest();
//     xhttp.onload = function () {
//         result = JSON.parse(this.response);
//         callback(result)
//     }
//     xhttp.open("GET", "https://mocki.io/v1/d4867d8b-b5d5-4a48-a4ab-79131b5809b8");
//     xhttp.setRequestHeader('Access-Control-Allow-Headers', '*');
//     xhttp.setRequestHeader('Access-Control-Allow-Origin', '*');
//     xhttp.send();
// }


// getMyData = function () {
//     loadData(logData)

//     function logData(data) {
//         console.log(data)
//     }

// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// // add event using javascript by Event Attributes : 

// var myBtn = document.querySelectorAll(".btn-exam")
// console.log(myBtn)
// myBtn = myBtn[8]
// console.log(myBtn)

// myBtn.onclick = chengeContent
// var myBool = true;

// function chengeContent() {
//     myBool = (myBool == false) ? true : false
//     myBtn.innerHTML = (myBool == false) ? "<p>I chenged by js</p>" : "<p>my event add by js</p>"
// }

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// // add event using javascript by addEventListener : 


// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// // add onclick : 
// myFunction1 = function () {
//     alert("btn clicked !")
// }
// myFunction2 = function () {
//     console.log("click log !")
// }

// // --------------------------------------------------------------------------------------

// // method 1
// document.querySelectorAll(".btn-exam")[9].addEventListener("click", myFunction1)

// // method 2 
// var element = document.querySelectorAll(".btn-exam")[9]
// element.addEventListener("click", myFunction2)

// // method 3 
// document.querySelectorAll(".btn-exam")[9].addEventListener('click', function() {
//     console.log("method 3 running !")
// })

// // method 4
// document.querySelectorAll(".btn-exam")[9].addEventListener("click", () => {
//     console.log("Arrow function log !")
// })

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// var myRegExp1 = /^[\u0600-\u06FF\s]+$/
// var myRegExp2 = /([0-9])/
// var myRegExp3 = /[#?!@$%^&*-]/

// var inputElement = document.querySelectorAll(".myForm input")[0]
// console.log(inputElement)

// var errElements = document.querySelectorAll(".errName")
// console.log(errElements)

// inputElement.addEventListener("input", () => {
//     if (inputElement.value == "") {
//         errElements[0].style.display = "flex"
//     } else {
//         errElements[0].style.display = "none"
//     }
//     if (myRegExp2.test(inputElement.value)) {
//         errElements[1].style.display = "flex"
//     } else {
//         errElements[1].style.display = "none"
//     }
//     if (myRegExp1.test(inputElement.value)) {

//         errElements[2].style.display = "flex"
//     } else {
//         errElements[2].style.display = "none"
//     }
//     if (myRegExp3.test(inputElement.value)) {
//         errElements[3].style.display = "flex"
//     } else {
//         errElements[3].style.display = "none"
//     }
//     // if (inputElement.value.length < 3) {
//     //     errElements[4].style.display = "inline-block"
//     // } else {
//     //     errElements[4].style.display = "none"
//     // }
//     if (inputElement.value.length < 3) {
//         errElements[5].style.display = "flex"
//     } else {
//         errElements[5].style.display = "none"
//     }
// })

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// // mouse wheel Event : 

// document.body.addEventListener("wheel" , () => {
//     console.log("mouse wheel on body !")
// })

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// // add event to BOM (Browser Object Model)

// window.addEventListener("resize" , () => {
//     console.log("window is resizing !")
// })

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// Event Bubbling or Event Capturing?

// Question
// Event propagation is a way of defining the element order when an event occurs.
// If you have a <p> element inside a <div> element, and the user clicks on the <p> element, 
// which element's "click" event should be handled first?

// if useCapture = false 
// first event = p
// second event = div 

// if useCapture = true 
// first event = div 
//  second event = p 

// addEventListener(event, function, useCapture);

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// // useCapture = false (default)
// document.querySelectorAll(".btn-exam")[10].addEventListener("click" , () => {
//     console.log("blue div event !")
// } , false)

// document.querySelectorAll(".inner_section")[0].addEventListener("click" , () => {
//     console.log("white div event !")
// } , false)


// // useCapture = true 
// document.querySelectorAll(".btn-exam")[11].addEventListener("click" , () => {
//     console.log("blue div event !")
// } , true)

// document.querySelectorAll(".inner_section")[1].addEventListener("click" , () => {
//     console.log("white div event !")
// } , true)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------

// // The removeEventListener() method
// myFunc = function () {
//     alert("event alert !")
//     document.querySelectorAll(".btn-exam")[12].removeEventListener("click" , myFunc)
// }
// document.querySelectorAll(".btn-exam")[12].addEventListener("click" , myFunc)

// ------------------------------------------------------------------------------------------------------------------------------------------------------------
// ------------------------------------------------------------------------------------------------------------------------------------------------------------
