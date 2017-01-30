// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

/*
var script = document.createElement("script");
script.src = "http://path/to/underscor.js";
document.body.appendChild(script); */

var stringifyJSON = function(obj) {
	//converts numbers and booleans to string
	if (typeof obj === "number" || typeof obj === "boolean") return ""+obj;
	//covers null
	if (obj === null) return "null";
	//string-->JSON string
	if (typeof obj === "string") return "\""+obj+"\"";
	//array to string
	if (Array.isArray(obj)) {
		var stringed= obj.map(function(x){
			return stringifyJSON(x);
		});
		return "["+stringed+"]"; 
	}
	//object to string\
	if (typeof obj === "object") {
		var stringed = [];
		for (var x in obj) {
			if (typeof(obj[x]) === 'function' || obj[x] === undefined) {continue;}
			var res = stringifyJSON(x) + ":" +stringifyJSON(obj[x]);
			stringed.push(res);
		} 
		return "{" + stringed + "}";
		// might need to isEqual {} = {}. getting {,} instead of {};
		/*var stringed = Object.keys(obj).map(function(x){
			if (typeof obj[x] === "undefined" || typeof obj[x] === "function") {return "";}
			return stringifyJSON(x) + ":" +stringifyJSON(obj[x]);
		}); */
		return "{" + stringed + "}";   
	} 
	return obj;
};