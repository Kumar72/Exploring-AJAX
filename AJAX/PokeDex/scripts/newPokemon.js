function createPokemon(){
	console.log("INSIDE CREATE POKEMON");
	var $hr = $('<hr>');
	var $h3 = $('<h3>');
		$h3.text('Create Your Own Pokemon');
	var $form = $('<form>');
		$form.attr('name', 'create')
		$form.attr('id', 'create-form');
	var $fieldset = $('<fieldset>')
		$fieldset.addClass('form-group');

	var $label = $('<label>');
		$label.text('Dex Number: ');
	var $input = $('<input>');
		$input.attr('name', 'pokeId');
		$input.attr('type', 'text');
		$input.attr('id', 'DexNum');
		$input.addClass('form-input');
		$input.text("Dex Num")

	var $label1 = $('<label>');
		$label1.text('Name: ');
	var $input1 = $('<input>');
		$input1.attr('name', 'pokeId');
		$input1.attr('type', 'text');
		$input1.attr('id', 'name');
		$input1.addClass('form-input');

	var $br = $('<br>');
	var $br1= $('<br>');
	$fieldset.append($label, $input, $br, $label1, $input1, $br1);

	var $label2 = $('<label>');
		$label2.text('Height: ');
	var $input2 = $('<input>');
		$input2.attr('name', 'height');
		$input2.attr('type', 'number');
		$input2.attr('id', 'height');
		$input2.addClass('form-input');

	var $label3 = $('<label>');
		$label3.text('Weight: ');
	var $input3 = $('<input>');
		$input3.attr('name', 'weight');
		$input3.attr('type', 'number');
		$input3.attr('id', 'weight');
		$input3.addClass('form-input');

	$fieldset.append($label2, $input2, $label3, $input3);

	var $label4 = $('<label>');
		$label4.text('Type: ');
	var $input4 = $('<input>');
		$input4.attr('name', 'types');
		$input4.attr('type', 'text');
		$input4.attr('id', 'types');
		$input4.addClass('form-input');

	var $label5 = $('<label>');
		$label5.text('Image URL: ');
	var $input5 = $('<input>');
		$input5.attr('name', 'img');
		$input5.attr('type', 'text');
		$input5.attr('id', 'img');
		$input5.addClass('form-input');

	var $label6 = $('<label>');
		$label6.text('Description: ');
	var $input6 = $('<input>');
		$input6.attr('name', 'description');
		$input6.attr('type', 'text');
		$input6.attr('id', 'description');
		$input6.addClass('form-input');
	var $br2 = $('<br>');
	var $br3= $('<br>');
	var $br4= $('<br>');
	$fieldset.append($br2, $label4, $input4, $br3, $label5, $input5, $br4, $label6, $input6);

	var $button = $('<button>');
		$button.addClass('button');
		$button.text("Hatch Pokemon");
		$button.attr('id', 'on-click')

		$button.click(function(e) {
			e.preventDefault()

			var pokemon = {
				pokeId: $(create.pokeId).val(),
				name: $(create.name).val(),
				height: $(create.height).val(),
				weight: $(create.weight).val(),
				img: $(create.img).val(),
				description: $(create.description).val(),
			};
			$.ajax({
				type: "POST",
				url: "http://52.25.225.137:8080/pokemon/data/poke",
				dataType: "json",
				contentType: 'application/json',
				data: JSON.stringify(pokemon)
			}).done(function(data, status){
				console.log("CREATE SUCCESS");
				//refresh page
				dex();
			}).fail(function(xhr, status, error){
				console.log("FAIL");
			});
		})

	$form.append($fieldset, $button);
	$('body').append($hr, $h3, $form);

}
