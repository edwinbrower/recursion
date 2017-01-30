// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
	//converts numbers and booleans to string
	if (typeof obj === "number" || typeof obj === "boolean") return ""+obj;
	if (obj === null) return "null";
	if (typeof obj === "string") return "\""+obj+"\"";
	if (Array.isArray(obj)) {
		var stringed= obj.map(function(x){
			return stringifyJSON(x);
		});
		return "["+stringed+"]"; 
	}
	if (typeof obj === "object") {
		/*var stringed = obj.map(function(x){
			return stringifyJSON(x);
		});
		return "{" + stringed + "}"; */

		/*
		var stringed = {};
		for (var x in obj) {
			stringifyJSON(x);
		} 
		return "{" + stringed + "}"; 
		*/
	} 
};

