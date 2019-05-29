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
var b = prompt('Please enter a 3 digit number');
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
