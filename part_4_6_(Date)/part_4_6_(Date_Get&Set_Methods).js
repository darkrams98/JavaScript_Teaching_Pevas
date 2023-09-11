
// get methods : 

// Method	            Description

// getFullYear()	    Get year as a four digit number (yyyy)
// getMonth()	        Get month as a number (0-11)
// getDate()	        Get day as a number (1-31)
// getDay()	            Get weekday as a number (0-6)
// getHours()       	Get hour (0-23)
// getMinutes()	        Get minute (0-59)
// getSeconds()	        Get second (0-59)
// getMilliseconds()	Get millisecond (0-999)
// getTime()	        Get time (milliseconds since January 1, 1970)

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // method_1 : getFullYear()

// var myDate = new Date()
// console.log(myDate)
// console.log(myDate.getFullYear())

// // or : 

// var myDate = new Date("2022-03-25")
// console.log(myDate)
// console.log(myDate.getFullYear())

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // method_2 : getYear()

// var myDate = new Date()
// console.log(myDate)
// console.log(myDate.getYear()) // deprecated dont use it 

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // method_3 : getMonth()

// var myDate = new Date()
// console.log(myDate.getMonth())

// // or 

// var myDate = new Date("2022-03-25")
// console.log(myDate.getMonth())

// // get month name : 

// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

// var myDate = new Date();
// var myDateMonth = months[myDate.getMonth()];

// console.log(myDateMonth)
// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // method_4 : getDate()
// // The getDate() method returns the day of a date as a number (1-31):

// var myDate = new Date()
// console.log(myDate.getDate())

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // method_5 : getHours()
// // The getHours() method returns the hours of a date as a number (0-23):

// var myDate = new Date()
// console.log(myDate.getHours())

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // method_6 : getMinutes()
// // The getMinutes() method returns the minutes of a date as a number (0-59):


// var myDate = new Date()
// console.log(myDate.getMinutes())

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // method_7 : getSeconds()
// // The getSeconds() method returns the seconds of a date as a number (0-59):

// var myDate = new Date()
// console.log(myDate.getSeconds())

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // method_8 : getMilliseconds()
// // The getMilliseconds() method returns the milliseconds of a date as a number (0-999):

// var myDate = new Date()
// console.log(myDate.getMilliseconds())

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // method_9 : getDay()
// // The getDay() method returns the weekday of a date as a number (0-6).

// var myDate = new Date()
// console.log(myDate.getDay())

// // or 
// // You can use an array of names, and getDay() to return weekday as a name:

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var myDate = new Date()
// console.log(days[myDate.getDay()])

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // methods_10 : getTime()
// // The getTime() method returns the number of milliseconds since January 1, 1970:

// var myDate = new Date("1970-01-01")
// console.log(myDate.getTime())

// // or 

// var myDate = new Date()
// console.log(myDate.getTime())

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// Method	                Same As	            Description

// getUTCDate()             getDate()	        Returns the UTC date
// getUTCFullYear()	        getFullYear()	    Returns the UTC year
// getUTCMonth()	        getMonth()	        Returns the UTC month
// getUTCDay()	            getDay()	        Returns the UTC day
// getUTCHours()	        getHours()	        Returns the UTC hour
// getUTCMinutes()	        getMinutes()	    Returns the UTC minutes
// getUTCSeconds()	        getSeconds()	    Returns the UTC seconds
// getUTCMilliseconds()	    getMilliseconds()	Returns the UTC milliseconds

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// Method	            Description

// setDate()	        Set the day as a number (1-31)
// setFullYear()	    Set the year (optionally month and day)
// setHours()	        Set the hour (0-23)
// setMilliseconds()	Set the milliseconds (0-999)
// setMinutes()	        Set the minutes (0-59)
// setMonth()	        Set the month (0-11)
// setSeconds()	        Set the seconds (0-59)
// setTime()	        Set the time (milliseconds since January 1, 1970)

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // // exam : 

// var myDate = new Date()
// console.log(myDate)

// myDate.setFullYear(2018)

// console.log(myDate)

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------
