function doSomeMath() {
	var a = 5;
	var b = 4;
	
	function mul(){
		return a*b;
	}

	return mul;
}

var theResult = doSomeMath();

console.log("The result: ", theResult());
