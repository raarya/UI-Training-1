Es(EcmaScript)
Es5 => Es6
String
Number
Boolean
//these are the 3 different data types available in JS.

var input = "Marks"
var input1 = "324" //anything inside double quotes is string
var input2 = "true" 
typeof (input)
"string"
//these above commands can be tried in the console of a browser page, after inspect element.

var output = 'Marks' //strings can also be defined withing single quotes in JS
var output1 = 'Marks"
var output2 = "Marks'

var marks = 23
var marks1 = 437.434
typeof (marks)
"number"
typeof (marks1)
"number"

var condition = true / false
typeof (condition)

Anything in quotes is string
Numeric value is number
True / false is boolean



/**************************
 *      Operations 
 * ************************/
var a = 10
undefined
var b = 10
undefined
a + b
20
a - b
0
a * b
100
a / b
1

var a = "Hi"
undefined
var b = " JavaScript"
undefined
a + b
"Hi JavaScript" //adding string variables concatenates them unlike in case of number variables
a - b
NaN //means Not A Number, its an error response
a * b
NaN
a / b
NaN

var a = "10"
undefined
var b = 10
undefined
a + b
"1010" // 
var c = 10
undefined
a + b + c
"101010"
b + c + a
"2010" //number + number + string = number + string; these operations work in the same sequence 

string + String => string
string + number => string
number + String => string
number + number => number

var a = "10"
undefined
typeof (a)
"string"
var b = 10
undefined
a + b
"1010"
var c = 10
undefined
b + c
20
b + c + a
"2010"
a + b + c
"101010"


10 + 10 + "10"
"2010"
"10" + 10 + 10
"101010"
"10" + 10 + "10"
"101010"


string + boolean = string
boolean + boolean = number //true equals 1 and false equals 0
boolean + number = number

//precedence of data types => string > number > boolean

var a = true
undefined
var b = true
undefined
a + b
2
var c = false
undefined
c + a
1
var d = "hi "
undefined
a + d
"truehi "