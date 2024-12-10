//Primitive data types
//let const
//String, Numbers, Boolean, null, undefined

//let can be reassigned
// let age=20;

// age=21;

//const cannot be reassigned
// const name="Joemar";
// const isCool = true;
// const rating = 4.9;
// const x = null;
// const y = undefined;
// let z;

// console.log(typeof rating)

// //Concatenation
// console.log("My name is "+name+" and I am "+age+" years old!");
// //Template String
// const hello = `My name is ${name} and I am ${age}`
// console.log(hello)

const s = "Hello Hatdog";

console.log(s.toUpperCase());
console.log(s.toLowerCase());
console.log(s.substring(0,5).toUpperCase());
console.log(s.split(''));

const t = 'hatdog, ko, ako, kay, gwapo';

console.log(t.split(', '));

//Arrays - variables that hold multiple values

/* multi
line
comment */

// // const numbers = new Array(1,2,3,4,5);
// //You can also combine other data in a single array
// const fruits = ['apples', 'banana', 'oranges', 'pears', 10, true]

// //You can also add a value in array just using the index
// fruits[6] = 'hatdog'
// //Append a value in the array
// fruits.push('hehehe')
// //Add data to the beginning of the array
// fruits.unshift('Guava')
// //Remove the last index of the array
// fruits.pop();

// //Verify if the data is an array
// console.log(Array.isArray(fruits))
// //Find the index using a value
// console.log(fruits.indexOf('pears'))

// // console.log(numbers);
// console.log(fruits);

const person = {
    firstName: 'Joemar',
    lastName: 'Ygot',
    age: 21,
    hobbies: ['music', 'games', 'kdrama', 'sports'],
    address:{
        baranggay: 'Marigondon',
        city: 'Lapu-Lapu City',
        province: 'Cebu'
    }
}

console.log(person.firstName, person.lastName, person.hobbies[2], person.address.baranggay);

//You can also destructure
const { firstName, lastName, address: { city }} = person;

console.log(city);

//YOu can add properties like email etc.
person.email = 'joemarygot@gmail.com';

console.log(person);



//Array of objects

//NOTE: this structure is like JSON format
//the only difference is that there's double quotation
//in id like "id", "text", and "isCompleted"
const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with Minji',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Studying Web Development',
        isCompleted: false
    },
];

console.log(todos);
console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)



//Loops

//For Loops
for(let i = 0; i<todos.length; i++){
    console.log(`For loop Number: ${i}`);
    console.log(todos[i].text);
}

//While loops
let i = 0;
while( i < 10){
    console.log("While loop Number: "+i);
    i++;
}

// Foreach loop
for(let todo of todos){
    console.log(todo.text);
}

//forEach
todos.forEach(function(todo) {
    console.log(todo.text);
});
//Map
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);
//Filter
const todoCompleted= todos.filter(function(todo) {
    return todo.isCompleted === true;
});
console.log(todoCompleted);

//COmbine filter and map
const todoAll = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
})
console.log(todoAll);


//Conditionals
const x = 19;
const y = 19;

//NOTE: if the comparing ang value, use "==", else if you want to compare
//value and data types, use "===".

if(x == 10 || false){
    console.log("They are equal");
}
else if(x == y && true){
    console.log("X and Y are equal")
}
else if(x > 10){
    console.log("X is greater than the condition");
}
else{
    console.log("They are not equal and is less than the condition");
}

//Ternary operator
const temp = 11;

const color = temp > 10? 'red' : 'blue';

console.log(color);

//Switch
switch(color){
    case 'red':
        console.log('The color is RED');
        break;
    case 'blue':
        console.log('The color is BLUE');
        break;
    default:
        console.log('The color is neither RED and BLUE');
        break;
}


//Function
function addNums(num1 = 1, num2 = 2){
    console.log(num1 + num2);
}
//You can overwrite parameters
addNums(5,4);

const minusNums = (num1, num2) => {
    return num1 - num2;
}
console.log(minusNums(5,2))


//Object-Oriented Programming

//Constructor function
function Person(firstName, lastName, dob){
    this.firstName = firstName
    this.lastName = lastName
    this.dob = new Date(dob)
    this.getFullName = function() {
        return `${this.firstName} ${this.lastName}`
    }
}

Person.prototype.getBirthYear = function(){
    return this.dob.getFullYear()
}

class Human{
    constructor(firstName, lastName, dob){
        this.firstName = firstName
        this.lastName = lastName
        this.dob = new Date(dob)
        this.getFullName = function() {
            return `${this.firstName} ${this.lastName}`
        }
    }
    getBirthYear(){
        return this.dob.getFullYear();
    }
}

//Instantiate object
const person1 = new Person('Joemar', 'Ygot', '07-20-2003');
const person2 = new Person('Minji', 'Kim', '05-07-2004');

const human1 = new Human('Hatdog', 'Gwapo', '01-01-2001');

console.log(person1);
console.log(person1.dob);
console.log(person1.getFullName())
console.log(person2.getBirthYear());
console.log(person2.firstName)

console.log(human1.getBirthYear())
