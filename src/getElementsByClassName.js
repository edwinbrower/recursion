// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:

//You should use document.body, element.childNodes, and element.classList
var getElementsByClassName = function(className) {
	var result = [];
	
	function findClass(element){
		if (element.classList !== undefined && element.classList.contains(className)) {
			result.push(element);
		}
		for (var i=0; i<element.childNodes.length; i++){
			findClass(element.childNodes[i]);
		}
	};

	findClass(document.body);

	return result;
};
