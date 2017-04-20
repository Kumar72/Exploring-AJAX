$(document).ready(function(){
	console.log('loaded table');
});

$.ajax({
	type: "GET",
	url: "https://kkane106.github.io/data.json",
	dataType: "json"
}).done(function(data, status){
	buildDOM(data);
}).fail(function(xhr, status, error){
	console.log(error);
});

function buildDOM(data) {
	data.forEach(function(element){
		var $h1 = $('<h1>');
		$h1.text(element.fname + " " + element.lname);
		$('body').append($h1);
	});
}
