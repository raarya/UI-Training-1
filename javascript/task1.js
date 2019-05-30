Task1:
Remove particular charactre and keep rest same.
exp newyork => remove "y" 
and output = nework
SOLUTION : 
var exp = "newyork";
exp = exp.slice(0,3) + exp.slice(4);

Task2:
Luck Game
> You have generate one random number for 3 digit
> You have take input of 3 digit
> if user input and random number match than win else loose
SOLUTION :
var a = Math.floor(Math.random()*1000);
var b = prompt('Please enter a 3 digit number. If more than 3 is entered, then only first 3 will be accepted');
if(b.length != 3){
    b = b.substring(0, 3);
}
alert ('new value is ' + b);
if(b == a) {
 alert ('won');
}
else {
    alert ('die');
}


Task3:
(√2 *6)/random*100
SOLUTION :
(Math.sqrt(2) * 6)/(Math.random()*100)

Task4:
> Take one array with some username
    var user = ["john","stephen"]
> Ask user there name
> If that user is part of array than console.log("allow access")
> Else add user to the array and say see you next time
> Next time if that user try to access you have allow user

