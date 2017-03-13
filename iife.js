var firstname = 'Jane';

//ii function expression, behaves in a module like fashion
(function(lastname) {

	var firstname = 'John';
	console.log(firstname);
	console.log(lastname);

}('Doe')); //create a function and immediatedly invoke it


console.log(firstname)
