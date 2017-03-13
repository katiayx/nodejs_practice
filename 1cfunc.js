//function statement
function greet() {
	console.log('hi')
}
greet();

//functions are first-class
function logGreeting(fn) { //fn = function
	fn(); //invoke the function
}
logGreeting(greet); //it's not greet() -- which would then call the function

//function expression
var greetMe = function() { //function is an express, anon
	console.log('Hi Katia');
}

greetMe();

//still first-class
logGreeting(greetMe);

//use a function expression on the fly, if using function only only
logGreeting(function() {
	console.log('Hello Katia');
});
