$(document).ready(function(){
	console.log('loaded dex');
	dex();
});

var dex = function() {

	$.ajax({
		type: "GET",
		url: "http://52.25.225.137:8080/pokemon/data/poke?sorted=true",
		dataType: "json"
	}).done(function(data, status){
		console.log(data);	//DONE
		pokeTable(data);
	}).fail(function(xhr, status, error){
		console.log(error + "FAIL");
	});

	function pokeTable(data) {
		var $table = $('<table>');
		var $thead = $('<thead>');
			$thead.attr("id", "table-head");
		var $htr = $('<tr>');
		var $htd1 = $('<td>');
			$htd1.append("Dex #");
		var $htd2 = $('<td>');
			$htd2.append("Pokemon");
		var $htd3 = $('<td>');
			$htd3.append("Action");

		$htr.append($htd1, $htd2, $htd3);
		$thead.append($htr);

		var $tbody = $('<tbody>');
			$tbody.attr("id", "table-body");

		data.forEach(function(pokemon) {
			var $tr = $('<tr>');
			var $btd1 = $('<td>');
				$btd1.append(pokemon.pokeId);
			var $btd2 = $('<td>');
				$btd2.append(pokemon.name);
			var $btd3 = $('<td>');
				$btd3.append("delete");

		$tr.append($btd1, $btd2, $btd3);
		$tbody.append($tr);

		});
		$table.append($thead, $tbody);
		$('body').append($table);
	};

}
