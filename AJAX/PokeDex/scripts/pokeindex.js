function pokeTable(data) {
	var $table = $('<table>');
		$table.attr('id', 'table')
	var $thead = $('<thead>');
		$thead.attr("id", "table-head");
	var $htr = $('<tr>');
	$htr.addClass('table-row header')
	var $th1 = $('<th>');
		$th1.append("Dex #");
	var $th2 = $('<th>');
		$th2.append("Pokemon");
	var $th3 = $('<th>');
		$th3.append("Action");

	$htr.append($th1, $th2, $th3);
	$thead.append($htr);

	var $tbody = $('<tbody>');
		$tbody.attr("id", "table-body");

	data.forEach(function(pokemon) {
		var $tr = $('<tr>');
		$tr.addClass('table-row pokemon')
		var $td1 = $('<td>');
			$td1.append(pokemon.pokeId);
			var pokeId= pokemon.pokeId;
		var $td2 = $('<td>');
			$td2.append(pokemon.name);
			$td2.attr("pokeId", pokeId);
			$td2.on('click', function(){
				$.ajax({
					type: "GET",
					url: "http://52.25.225.137:8080/pokemon/data/poke/"+pokeId,
					dataType: "json"
				}).done(function(data, status){
					console.log(data);	//DONE
					showPokemon(data);
				}).fail(function(xhr, status, error){
					console.log(error + "FAIL");
				});
			});
		var $td3 = $('<td>');
		var $delbut = $('<button>');
			$delbut.attr('id', 'delete');
			$delbut.text('Delete');
				$delbut.click(function(e){
					e.preventDefault()
					$.ajax({
    					type: "DELETE",
    					url: "http://52.25.225.137:8080/pokemon/data/poke/"+pokeId
					}).done(function(data, status){
						console.log(data);	//DONE
						$('#table').remove();
						dex();
					}).fail(function(xhr, status, error){
						console.log(error + "FAIL");
					});
				})
			$td3.append($delbut);

	$tr.append($td1, $td2, $td3);
		if(parseInt(pokemon.pokeId)%2 == 0){
			$tr.addClass('even')
		}
		else {
			$tr.addClass('odd')
		}
	$tbody.append($tr);
	});
	$table.append($thead, $tbody);
	$('body').append($table);
	createPokemon();
};
