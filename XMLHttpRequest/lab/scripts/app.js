var onload = function() {
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'https://kkane106.github.io/data.json');
	xhr.onreadystatechange = function() {
		//status checks the http status
		//readyState checks for 4 which translates to done obtaining the request
		if (xhr.status < 400 && xhr.readyState === 4) {
		//here we are parsing our text into object
		var data = JSON.parse(xhr.responseText);
		console.log(data);
		console.log(data[0].fname);
		console.log(data[0].lname);
	}
	 else if (xhr.readyState === 4 && xhr.status >= 400) {
		console.error('ERROR!!!!');
	}
	}
	xhr.send(null);
}

//another way to do this
// var ajax = function (method, url, callback) {
// 	var xhr = new XMLHttpRequest();
// 	xhr.open(method, url);
//
// 	if (xhr.status < 400 && xhr.readyState === 4) {
// 	callback(xhr.responseText);
// 	}
//	xhr.send(null);
// }
