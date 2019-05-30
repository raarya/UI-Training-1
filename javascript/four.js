var city = "london"
var city = "london"
undefined
city = city.toUpperCase() //converts to upper case
"LONDON"
var city = "LondoN"
undefined
city = city.toLowerCase() //converts to lower case
"london"
city[0] //returns the first letter of the value inside the string variable "city"
"L"
var a = "i am leraning javascript"
undefined
a.replace('javascript','react') //replaces left with right
"i am leraning react"
a.length //gives number of charcacters including spaces 
24
var welcome = "  hi "
undefined
welcome.length
5
welcome.trim() //removes empty spaces from string value
"hi"
var output = welcome.trim()
undefined
output
"hi"
output.length
2
var a = "i am leraning react"
undefined
a.split(" ") // spilt the string w.r.t the value inside the brackets
(4) ["i", "am", "leraning", "react"]
var name ="aakash"
undefined
name.split('') //splits every character including spaces 
(6) ["a", "a", "k", "a", "s", "h"]
var url = "https://drive.google.com/drive/u/0/folders/1Rn0f6D6sBajql3TBLzmrasrOKVl8t8hR"
undefined
url.split('/')
(8) ["https:", "", "drive.google.com", "drive", "u", "0", "folders", "1Rn0f6D6sBajql3TBLzmrasrOKVl8t8hR"]
name.split('a')
(4) ["", "", "k", "sh"] //important and weird split
name[0]
"a"
a.charAt(0) //gives the character on the specified position mentioned in the bracket
"i"
name.charAt(0)
"a"

var name = "london"
name.charAt(0).toUpperCase()+ name.slice(1).toLowerCase()

var city = "newyork"
undefined
city.slice(1) 
"ewyork"
//string.slice(start, end) : Returns the sliced part
//start	==> Required. The position where to begin the extraction. First character is at position 0
//end ==> Optional. The position (up to, but not including) where to end the extraction. 
        //If omitted, slice() selects all characters from the start-position to the end of the string
        //Use a negative number to select from the end of the string.

city.slice(3)
"york"
city.slice(1,3) 
"ew"
city.slice() //this means start position is 0 by default
"newyork"
city.substring(1,3) //returns the characters starting from first argument and ending before 2nd argument
"ew"
//This method extracts the characters in a string between "start" and "end", not including "end" itself.
//If "start" is greater than "end", this method will swap the two arguments, meaning str.substring(1, 4) == str.substring(4, 1).
//If either "start" or "end" is less than 0, it is treated as if it were 0.
//Note: The substring() method does not change the original string.
city.substring(1)
"ewyork"



var a = 11
var b = 20

a == 10 && (b ==20 || b == "london")
false
var mybol = true
undefined
!mybol
false
var out = !mybol
undefined
out
false
!out
true

//console.log (); is used to print the valye on the browser console
//alert (); gives a popup message
//confirm();  opens a popup which gives 2 options 'Cancel' and 'OK' for user to select
//prompt (); Display a prompt box which ask the user for her/his name, and output a message:
    //prompt(text, defaultText)
    //text ==> String	Required. The text to display in the dialog box
    //defaultText ==> String	Optional. The default input text
    //A String. If the user clicks "OK", the input value is returned. 
    //If the user clicks "cancel", null is returned. 
    //If the user clicks OK without entering any text, an empty string is returned.
//////////////