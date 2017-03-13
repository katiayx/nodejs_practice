//function constructor: use init Cap 
function Person(firstname, lastname) {
	//when function constructor is called with new keyword,
	//this is automatically pointing to empty object
	this.firstname = firstname;
	this.lastname = lastname;
}

//can attach properties and methods to prototype
//this isn't the prototype of Person, it's the prototype of
//objects created from Person
Person.prototype.greet = function() {
	console.log('Hello, ' + this.firstname + ' ' + 
			this.lastname);
};


//what happens when using a function constructor is that any
//object created from the function constructor, its prototype will 
//point to the prototype property of function that you used to construct
//the object.

var john = new Person('John', 'Doe');
john.greet();




var jane = new Person('Jane', 'Doe');
jane.greet();



//to see the actual prototype object
console.log(john.__proto__);
console.log(jane.__proto__);
//check if they have the same prototype
console.log(john.__proto__ === jane.__proto__);