// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // How to change Gregorian date to Persian date in JavaScript
// // javascript convert Date to solar date
// // تبدیل تاریخ میلادی به شمسی

// var myDate = new Date()

// console.log(myDate)

// var localeDate = myDate.toLocaleDateString('fa-IR')

// console.log(localeDate)

// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------

// // گرفتن ماه ها به فارسی (شمسی)

// var myDate = new Date().toLocaleDateString('fa-IR')

// console.log(myDate)
// console.log(typeof(myDate))

// var strDate = String(myDate)
// console.log(strDate)


// toSolarMonth = function (strDate) {
//     var splitedDate = strDate.split('/')
//     console.log(splitedDate)
//     console.log(splitedDate[1])


//     var months = ["فروردین" , "اردیبهشت" , "خرداد" , "تیر" , "مرداد" , "شهریور" , "مهر" , "آبان" , "آذر" , "دی" , "بهمن" , "اسفند"];

//     let p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

//     let enNum = p2e(splitedDate[1]) - 1 

//     console.log(enNum)
//     return months[enNum]
// }


// console.log(toSolarMonth(myDate))



// ----------------------------------------------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------------------------------------------
