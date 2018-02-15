function mySubmit () {
	const name = $('#full-name').val();
	const email = $('#email').val();
	const dob = $('#date-of-birth').val();
	const favbrand = $('#favbrand').val();
	const category = $('#category').val();
	const data = ('name: ' + name + '\n' + 'email: ' + email + '\n' + 'date of birth: ' + dob + '\n' + 'favourite brand: ' + favbrand + '\n' + 'category: ' + category);
	console.log(data);
	alert("Thank you! Your data has been submitted! You enetered the following details: " + '\n' + data);
}

$(function(){
	const lastNames = ['Ms Red', 'Mrs Green', 'Mr Happy'];
	const firstNames = ['Pickle', 'Tomato', 'Herring'];
	const randomFirstIndex = Math.floor(Math.random() * firstNames.length);
	const randomLastIndex = Math.floor(Math.random() * lastNames.length);
	const randomName = lastNames[randomLastIndex] + ' ' + firstNames[randomFirstIndex];
	$('#full-name').prop('placeholder',randomName);
});