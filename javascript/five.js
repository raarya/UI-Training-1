var a = 10
if( a == 10){
    console.log("a is acceptable")
} else if(a == 11) {
    console.log("a is ok")
}
else {
    console.log("a is rejected")
}

var a = 10
if( a == 10){
    console.log("a is acceptable")
} 
if(a == 11) {
    console.log("a is ok")
}


////////////////////////
var input = 1 
var input = prompt('Please eneter value')
if (input%2 == 0) {
    console.log('number is even')
} else {
    console.log('number is odd')
}

var confirm1 = confirm('do you want to leave') // confirm returns true and false
if (confirm1 == true) { //we can also use "if(confirm1){}""
    window.location.href="http://aakashhanda.me" //this command changes the URL on the current tab and goes there
} else{
    console.log( 'ok we are not going')
}