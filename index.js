/* 
***************
		myArray
***************
A very simple javascript array utility library 

*/

const myArray = {
	// Declare top level vars
	toArrayObject: [],

	// forEach method
	forEach: function(array, callback){
		
		// Validate arguments
		if (array.constructor !== Array){
			throw "pass an array";
			return false;
		}
		if (callback.constructor !== Function){
			throw "pass a function";
			return false;
		}
		
		// Execute iteration
		for (var i = 0; i < array.length; i++){
			callback();
		}	
	},

	// toArray method (converts object to an array)
	toArray: function(obj){
		if (obj.constructor !== Object) {
			throw "pass an object";
			return false;
		}

		for (var i in obj){
			this.toArrayObject.push(obj[i]);
		}
		return this.toArrayObject;
	}

}




