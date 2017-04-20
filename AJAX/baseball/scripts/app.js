$(document).ready(function(){
	console.log('bases loaded');
	config();
});

var config = function() {
$('#team').on("click", function() {
	$.ajax({
		type: "GET",
		url: "json/data.json",
		dataType: "json"
	}).done(function(data, status) {
		console.log(data);	//works
		teamList(data);
	}).fail(function(xhr, status, error) {
		console.log(error + " FAIL ");
	});

	function teamList(data) {
		var $ul = $('<ul>');
		data.forEach(function(element) {
			var $li = $('<li>');
			var $a = $('<a>');
			$a.attr('href', element.url);
			$a.text(element.name);
			$li.append($a);
			$ul.append($li);
		});
		$('body').append($ul);
	};
});
}
