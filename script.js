var button = document.getElementById("button");
var result = document.getElementById("result");
button.onclick= function() {
	var x = document.getElementById("x").value;
	var z = document.getElementById("z").value;
	var y = document.getElementById("y").value;
	result.innerHTML = "Could not find anything.";
	
	if (isNaN(x)) {
		result.innerHTML = "Field X is not a valid number!"
		return;
	}
	if (isNaN(z)) {
		result.innerHTML = "Field Z is not a valid number!"
		return;
	}
	if (isNaN(y)) {
		result.innerHTML = "Field Y is not a valid number!"
		return;
	}
	x = Number(x);
	z = Number(z);
	y = Number(y);
	
	var resultText = "";
	resultText = _basic(x, z, y, resultText);
	resultText = _advanced(x, z, y, resultText);
	if (x != z) {
		resultText = _advanced(z, x, y, resultText);
	}
	
	
	
	if (resultText != "") {
		result.innerHTML = resultText;
	}
	
	
	
	
	
	
	
}

function _basic(x, z, y, resultText) {
	if (x + z == y) {
		resultText = resultText + x + "+" + z + "=" + y + "<br />";
	}
	if (x * z == y) {
		resultText = resultText + x + "*" + z + "=" + y + "<br />";
	}
	
	return resultText;
}

function _advanced(x, z, y, resultText) {
	if (x / z == y) {
		resultText = resultText + x + "/" + z + "=" + y + "<br />";
	}
	if (x - z == y) {
		resultText = resultText + x + "-" + z + "=" + y + "<br />";
	}
	if (x % z == y) {
		resultText = resultText + x + "%" + z + "=" + y + "<br />";
	}
	if (Math.pow(x, z) == y) {
		resultText = resultText + x + "^" + z + "=" + y + "<br />";
	}
	
	return resultText;
}




















