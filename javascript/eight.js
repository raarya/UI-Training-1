var marks = [10,23,45,6,78,4]

var java = ["d","DF","dfge","rg"]
var java1 = [3,5,6,7,3,5,7]
var java2 = [true, false, false ,true]

var javascript = [3,4,"fd","fg",true, false,4,5,7,"dsf"] //only in JS, array can be a collection of heterogenous data
var javascript = [3,4,"fd","fg",true, false,4,5,7,"dsf"]
undefined
javascript.length //gives number of items in an array
10
javascript[0]
3
javascript[1]
4
javascript[10]
undefined
javascript[9]
"dsf"
javascript[javascript.length-1]
"dsf"


/*
push => add at the end
pop => take out from the last
shift => take out from the begining
unshift => add  at the begining
*/

var city = ["London", "newyork", "delhi", "amsterdam", "Sydeny"]

undefined
city.slice(1) //starts slicing from position 1 till end of array
(4) ["newyork", "delhi", "amsterdam", "Sydeny"]
var city = ["London", "newyork", "delhi", "amsterdam", "Sydeny"]

undefined
city.slice(3,4)
["amsterdam"]

//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items:
//and the original array now contains the remaining items only
city.splice(2,0,'Oakland','Vancover')
[]
city
(7) ["London", "newyork", "Oakland", "Vancover", "delhi", "amsterdam", "Sydeny"]
city.splice(4,1,'Mumbai')
["delhi"]
city
(7) ["London", "newyork", "Oakland", "Vancover", "Mumbai", "amsterdam", "Sydeny"]
city.splice(3,3,'Vanice')
(3) ["Vancover", "Mumbai", "amsterdam"]
city
(5) ["London", "newyork", "Oakland", "Vanice", "Sydeny"]
city.splice(3,1,'Delhi', 'Davos', 'Zurich')
["Vanice"]
city
(7) ["London", "newyork", "Oakland", "Delhi", "Davos", "Zurich", "Sydeny"]

// Es6 destructuring assignment
var a , b 
undefined
[a,b]=[1,2] //its a new format of assigning values to multiple variables at the same time
(2) [1, 2]
a
1
b
2


var city = ["London", "newyork", "Oakland", "Delhi", "Davos", "Zurich", "Sydeny"]
undefined
city.indexOf("newyork") //give the array position of the element in the argument
1
city.indexOf("davos")
-1
city.indexOf("Davos")
4
city.indexOf("mumbai")
-1
city.indexOf("pearth") 
-1
// -1 is the output of this command when the value is not in the array