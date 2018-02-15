function mySubmit () {
	alert("Thank you! Your data has been submitted!");
}

$(function(){
  const lastNames = ['Ms Red', 'Mrs Green', 'Mr Happy'];
  const firstNames = ['Pickle', 'Tomato', 'Herring'];
  const randomFirstIndex = Math.floor(Math.random() * firstNames.length);
  const randomLastIndex = Math.floor(Math.random() * lastNames.length);
  const randomName = lastNames[randomLastIndex] + ' ' + firstNames[randomFirstIndex];
  $('#full-name').prop('placeholder',randomName);
});