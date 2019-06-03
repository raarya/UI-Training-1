// es5
function add (a,b) {
    return a+b
}

add(1,2)

//es6
const add = (a,b) => { return a+b } //this is how is the framework as per es6 version style

add(1,2)


var = 'redefine & reassign'
let = 'reassign but cannot redefine'
const = 'nor reassign nor redefined'
const a = 5; //this means that a can never be reassigned too as it is a constants


for(i=0;i<2;i++){
    let ab = 10
    console.log(ab+i)
}

////////
// function declarations
function add (a,b) {
    return a+b
}

// function expressions
var add = function(a,b){ //this is assigning a function to a variable which makes 'a' as a method
    return a+b
}

add(1,2)

