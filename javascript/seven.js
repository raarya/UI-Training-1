switch(10*10){ //switch command will run the matching case statement, and also all the other case statements 
    //after that statement unless we put a break.
    case 100:
        console.log('added')
        break;
    case "1010":
        console.log('concated')
        break;
    default:
        console.log(' in default');
        break;
 }




 new Date()
Thu May 30 2019 02:44:37 GMT+0100 (British Summer Time)
var out = new Date() //new Date() gives the current date with the time and timezone
undefined
out.getDay() //Get the weekday as a number (0-6); 0 means sunday, 1 means monday
4
out.getDate()
30
out.getMonth() // 0 means Jan, 1 means Feb
//Method	Description
//getFullYear()	Get the year as a four digit number (yyyy)
//getMonth()	Get the month as a number (0-11)
//getDate()	Get the day as a number (1-31)
//getHours()	Get the hour (0-23)
//getMinutes()	Get the minute (0-59)
//getSeconds()	Get the second (0-59)
//getMilliseconds()	Get the millisecond (0-999)
//getTime()	Get the time (milliseconds since January 1, 1970)
//getDay()	Get the weekday as a number (0-6)
//Date.now()	Get the time. ECMAScript 5.



switch(new Date().getDay()){
    case 1:
        console.log('Monday')
        break;
    case 4:
        console.log('Thrusday')
        break;
    case 5:
        console.log('in the five')
        break;
    default:
        console.log("you are no on earth")
}