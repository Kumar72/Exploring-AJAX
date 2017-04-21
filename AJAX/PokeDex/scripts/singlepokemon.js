function showPokemon(pokemon) {
	$('#create-form').remove();
	$('#table').remove();
	
	var $table = $('<table>');
		$table.attr('id', 'detail-table')
	var $tbody = $('<tbody>');

	var $tr = $('<tr>');
		$tr.addClass('table-row pokemon')
	var $td1 = $('<td>');
		var $img = $('<img>');
			$img.attr('src', pokemon.img);
		$td1.append($img);
	var $td2 = $('<td>');
		var $ul = $('<ul>');
			var $li = $('<li>');
				$li.text(pokemon.name)
			var $li1 = $('<li>');
				pokemon.types.forEach(function(array) {
					if($li1.text()) {
						$li1.text($li1.text()+", "+ array.name);
					}
					else {
						$li1.text("Type: "+array.name);
					}
				});
			var $li2 = $('<li>');
				// $li2.text('height: ');
			 	$li2.text('height: '+ pokemon.height)
			var $li3 = $('<li>');
				$li3.text('weight: '+pokemon.weight)
			$ul.append($li, $li1, $li2, $li3);
		$td2.append($ul);
	$tr.append($td1, $td2);

	$tr2 = $('<tr>');
	var $2td1 = $('<td>');
		$2td1.attr('colspan', 2);
		$2td1.append(pokemon.description);

	$tr2.append($2td1);

	$tbody.append($tr, $tr2);
	$table.append($tbody);
	$('div').append($table);
}
