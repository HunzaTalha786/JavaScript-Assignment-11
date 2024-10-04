// DATE METHODS
// Assignment # 31-34 JAVASCRIPT

// 1. Write a program that displays current date and time in 
// your browser.

document.write(`<h1> 1) Displays current date and time :`);
let currentDate = new Date();
document.write(`<p style="font-size:20px";>Current Date :<b> ${currentDate}</b><br>`);





// 2. Write a program that alerts the current month in words. 
// For example December.

document.write(`<h1> 2) Displays current Month :</h1>`);

let Today = new Date();
let monthNames = [
    "January", "February", "March", "April", 
    "May", "June", "July", "August", 
    "September", "October", "November", "December"
];
let currentMonth = monthNames[Today.getMonth()];
document.write(`<p style="font-size:20px";>Current Month: <b>${currentMonth}</b></p><br>`);





// 3. Write a program that alerts the first 3 letters of the current 
// day, for example if today is Sunday then alert will show 
// Sun.

document.write(`<h1> 3) Displays current Day :</h1>`);
var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thu", "Fri", "Sat"]; 
var now = new Date(); 
 var theDay = now.getDay(); 
var nameOfToday = dayNames[theDay] ;
document.write(`<p style="font-size:20px";>Today is<b> ${nameOfToday}.</b><br>`);




// 4. Write a program that displays a message “It’s Fun day” if 
// its Saturday or Sunday today.

document.write(`<h1> 4) It’s Fun day :</h1>`);
document.write(`<h3> ==> displays a message “It’s Fun day” if its Saturday or Sunday today.</h3>`);


let now_1 = new Date();

// getDay() returns 0 for Sunday, 6 for Saturday

let day = now.getDay(); 
if (day === 0 || day === 6) {
     document.write(`<p style="font-size:20px";>Message :It's Fun day!</p><br>`);
 } 
 else {
 document.write(`<p style="font-size:20px";>Message : It's a regular day!</p><br>`);
 }




// 5. Write a program that shows the message “First fifteen 
// days of the month” if the date is less than 16th of the month 
// else shows “Last days of the month”.

document.write(`<h1> 5) Display message for “First fifteen 
// days of the month” if <br> the date is less than 16th of the month 
// else shows <br> “Last days of the month”:</h1>`);

let monthDays= new Date();
// current date (1-31)
let date_1 = monthDays.getDate(); 

 if (date_1 < 16) {
  document.write(`<p style="font-size:20px";><b>Message:</b> First fifteen days of the month.</p><br>`);
 } else {
 document.write(`<p style="font-size:20px";><b>Message:</b> Last days of the month.</p><br>`);


 }


// 6. Write a program that determines the minutes since 
// midnight, Jan. 1, 1970 and assigns it to a variable that 
// hasn't been declared beforehand. Use any variable you like 
// to represent the Date object.

document.write(`<h1> 6) Determines the minutes :</h1>`);

// current time
let currentDate_1 = new Date();
document.write(`CURRENT DATE: ${currentDate_1}<br>`);

// number of milliseconds since the Unix epoch
let millisecondsSinceEpoch = currentDate_1.getTime();

// Calculate minutes since epoch (1 minute = 60,000 milliseconds)
minutesSinceEpoch = millisecondsSinceEpoch / 60000;
document.write(`<p style="font-size:20px";>Minutes since midnight, Jan. 1, 1970: <b>${Math.floor(minutesSinceEpoch)}</b></p><br>`);




// 7. Write a program that tests whether it's before noon and 
// alert “Its AM” else “its PM”.

document.write( `<h1>7) AM or PM Checker</h1>`);
// current date and time
let now_2 = new Date();
document.write(`CURRENT DATE: <b>${now_2} .</b><br>`);

 //  current hour (0-23)

let hours = now_2.getHours(); 
document.write(`CURRENT Hours:<b> ${hours}hrs.</b><br>`);

        if (hours < 12) {
        document.write(`<p style="font-size:20px";>Result: <b>It's AM.</b></p>`);
        } else {
        document.write (`<p style="font-size:20px";>Result:<b> It's PM.</b></p>`);
}


    
    // 8. Write a program that creates a Date object for the last day 
 // of the last month of 2020 and assigns it to variable named 
 // laterDate.    
 document.write( `<h1>8) Days Since 1st Ramadan 2015 :</h1>`);

 //  December 31, 2020
 let laterDate = new Date(2020, 11, 31); 
 document.write(`Later Date :<b> ${laterDate}</b> <br>`);




//  9. Create a date object of the starting date of this Ramadan 
// and alert the number of days past since 1st Ramadan? 
// Note: 1st Ramadan was on June 18, 2015

document.write( `<h1>9) Last Day of Last Month 2020</h1>`);
 
//  Date  June 18, 2015 (1st Ramadan)
let ramadanStartDate = new Date(2015, 5, 18); 

//  current date
let currentDate_2 = new Date();

// Calculate the difference in milliseconds
let differenceInMilliseconds = currentDate_2 - ramadanStartDate;

// Convert milliseconds to days (1 day = 1000 milliseconds * 60 seconds * 60 minutes * 24 hours)
let daysSinceRamadan = Math.floor(differenceInMilliseconds / (1000 * 60 * 60 * 24));

document.write(`<p style="font-size:20px";> <b>Result : ${daysSinceRamadan}</b> days have passed since 1st Ramadan,2015</p><br>`);




// 10. Write a program that displays in your browser the 
// seconds that elapsed between the reference date and the 
// beginning of 2015.

document.write( `<h1>10) Seconds Elapsed Since Reference Date:</h1>`);


// Reference date  dec 5, 2015
let referDate = new Date(2015, 11, 5); 
document.write(`<p style="font-size:20px";>Reference Date : ${referDate}</p>`)

// Start of January 1, 2015
let start = new Date(2015, 0, 1);
document.write(`<p style="font-size:20px";>Starting Date : ${start}</p>`) 


// Calculate the difference in milliseconds
let differInMilliseconds = referDate - start;

// Convert milliseconds to seconds
let secondsElapsed = Math.floor(differInMilliseconds / 1000);
document.write( `<p style="font-size:20px";>Result : <b> ${secondsElapsed}</b> had passed since beginning of 2015.</p><br>`);





// 11. Create a Date object for the current date and time. 
// Extract the hours, reset the date object an hour ahead and 
// finally display the date object in your browser. 

document.write( `<h1>11 )Updated Date and Time</h1>`);

let currentDate_3 = new Date();
document.write(`<p style="font-size:20px";>Current Date: ${currentDate_3}</p>`); 

//  current hours
let currentHours = currentDate_3.getHours();
document.write(`<p style="font-size:20px";>Current Hours: ${currentHours} hours to go</p>`); 

//set date to hour 
currentDate.setHours(currentHours + 1);
document.write(`<p style="font-size:20px";>Updated Date and Time: <b> It was ${currentDate_3}</b></p>`);




// 12. Write a program that creates a date object and show the 
// date in an alert box that is reset to 100 years back?

document.write( `<h1>12 )Date 100 Years Back</h1>`);
let currentDate_4 = new Date();
document.write(`<p style="font-size:20px";><b>Current Date:</b> ${currentDate_4}</p>`); 


 // 100 years back
 currentDate_4.setFullYear(currentDate_4.getFullYear() - 100)
        
 document.write(`<p style="font-size:20px";>100 years back it was <b>${currentDate_4}</b></p><br>`);





//  13. Write a program to ask the user about his age. Calculate 
// and show his birth year in your browser.
document.write( `<h1>13 )Calculate Your Birth Year</h1>`);

let age = prompt(" Enter your age:");
document.write(`<p style="font-size:20px";>Your age is:<b>${age}</b></p>`);
// current year
let currentYear = new Date().getFullYear();

// birth year
let birthYear = currentYear - age;

document.write(`<p style="font-size:20px";>Your birth year is: <b>${birthYear}</b></p><br>`);







// 14. Write a program to generate your K-Electric bill in your 
// browser. All the amounts should be rounded off to 2 
// decimal places. Display the following fields: 
// a. Customer Name 
// b. Current Month 
// c. Number of units 
// d. Charges per unit 
// e. Net Amount Payable (within Due Date) 
// f. Late Payment Surcharge 
// g. Gross Amount Payable (after Due Date) 
// Where,
// Net Amount Payable (within Due Date) = Number of units * Charges per unit 
// & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge

document.write( `<h1>14 )Generate K-Electric Bill</h1>`);

let customerName = "Hunza Talha Khan"; 
let current_Month = "October"; 
let numberOfUnits = 350; 
let chargesPerUnit = 10; 

        // Calculation
        let netAmountPayable = (numberOfUnits * chargesPerUnit).toFixed(2);
        let latePaymentSurcharge = 50;
        let grossAmountPayable = (parseFloat(netAmountPayable) + latePaymentSurcharge).toFixed(2)
         document.write(`<p style="font-size:20px"><b>Customer Name:</b> ${customerName}</p><br>`);
         document.write(`<p style="font-size:20px"><b>Number of Units:</b> ${numberOfUnits}</p><br>`);
         document.write(`<p style="font-size:20px"><b>Current Month:</b> ${current_Month}</p><br>`);
         document.write(`<p style="font-size:20px"><b>Charges per Unit:</b> ${chargesPerUnit.toFixed(2)}</p><br>`);
         document.write(`<p style="font-size:20px"><b>Net Amount Payable (within Due Date):</b> ${netAmountPayable}</p><br>`);
         document.write(`<p style="font-size:20px"><b>Late Payment Surcharge:</b> ${latePaymentSurcharge.toFixed(2)}</p><br>`);
         document.write(`<p style="font-size:20px"><b>Gross Amount Payable (after Due Date):</b> ${grossAmountPayable}</p><br>`);