var person = {
	firstname: 'John',
	lastname: 'Doe',
	greet: function() {
		console.log('Hello, ' + this.firstname + ' ' + 
			this.lastname);
	}
};

person.greet()

//another way to call - by key
console.log(person['firstname']);
