// literal
var country = {name:'India', capital:'Delhi', population:239748787}
// as arrays are declared with sqare brackets, literals and objects are declared with curly braces

country
{name: "India", capital: "Delhi", population: 239748787}
country.name
"India"
country.capital
"Delhi"
country.population
239748787
country.climate="Hot" //we can add a new property to a literal/object and also define a value to it at the same time
"Hot"
country
{name: "India", capital: "Delhi", population: 239748787, climate: "Hot"}
country.population= 1000000000
1000000000
country
{name: "India", capital: "Delhi", population: 1000000000, climate: "Hot"}
delete country.climate //this is how we can delete a property on object/literal
true
country
{name: "India", capital: "Delhi", population: 1000000000}
country['name'] //accessing a property using square bracket notation
"India"
country['states']=30 //adding and defining a new property using square bracket notation
30
country
{name: "India", capital: "Delhi", population: 1000000000, states: 30}
delete country['population']
true


var country = {name:'India', capital:'Delhi', population:239748787
                , state:['MP','UP','AP']} //defining an array property inside a literal/object

//country.state[0] will give 'MP'
country.state.push('Delhi');

///////////////
Constructor

var car = new Object() // this is how also we can define an object
car.name= "Merc";
car.color= 'silver';
car.price= 98787098


var country = {name:'India', capital:'Delhi', population:239748787}
var out = [] //this is how we can define an empty array
for (a in country){ //this is how we can loop across every property of an object
    out.push(country[a])
}

var country = {name:'India', capital:'Delhi', population:239748787}
var out = ''
for (a in country){ //this is how we can loop across every property of an object
    out += country[a] + ','
}
out.slice(0, -1) //to remove the extra comma in the end


var country = {name:'India', capital:'Delhi', population:239748787}
Object.keys(country); // this gives an array of the keys in an object
["name", "capital", "population"]

var city1 = {name:'Delhi', capital:'Delhi', pincode: 110060}
var con = {...country, ...city1} //combining 2 objects; the same property will be taken only once
con
{name: "Delhi", capital: "Delhi", population: 239748787, pincode: 110060}

var city = [
        {name:'Delhi', capital:'Delhi', pincode: 110060},
        {name:'Maharastra', capital:'Mumbai', pincode: 110060},
        {name:'Hp', capital:'Shimla', pincode: 110060},
        {name:'Harayan', capital:'Chandigarh', pincode: 110060},
]
// this is the way to define an array of objects

city[0]
{name: "Delhi", capital: "Delhi", pincode: 110060}
city[0].name
"Delhi"
city[0]['name']
"Delhi"

var lastName = 'abc'
var firstname = 'Rex'
var bob = {
    firstName:"bob",
    age:'23',
    summary: function(){ //this is how we can define a function as a property inside an object
        return "Hi " +  this.firstName + this.lastname + " your age is "+ this.age 
    }
}
//this keyword here is used to refer to the variable in the same object or even outside the object like lastname, 
//if there is a variable outside the object with the same name, then the inner one is preferred