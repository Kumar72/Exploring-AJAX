$(document).ready(function(){
	console.log('loaded dex');
	dex();
});

var dex = function() {
	$('#create-form').remove();
	$.ajax({
		type: "GET",
		url: "http://52.25.225.137:8080/pokemon/data/poke?sorted=true",
		dataType: "json"
	}).done(function(data, status){
		pokeTable(data);
		$('#home').on('click', function() {
			$.ajax({
				type: "GET",
				url: "http://52.25.225.137:8080/pokemon/data/poke?sorted=true",
				dataType: "json"
			}).done(function(data, status){
				//refresh page
				$('#table').remove();
				$('#detail-table').remove();
				$('#create-form').remove();
				pokeTable(data);
			}).fail(function(xhr, status, error){
				console.log(error + "FAIL");
			});
		})

	}).fail(function(xhr, status, error){
		console.log(error + "FAIL");
	});
}
