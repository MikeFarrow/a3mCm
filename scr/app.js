(function() {
	'use strict';

	angular
		.module('app', ['LocalForageModule', 'ngMaterial']);
})();

(function() {
	'use strict';

	angular
		.module('app')
		// This function returns the item in an array that matches a property
		.filter('getByProp', getByProp);

	function getByProp() {
		return function(propertyName, propertyValue, collection) {
			var i=0, len=collection.length;
			for (i; i<len; i++) {
				if (collection[i][propertyName] == propertyValue) {
					return collection[i];
				}
			}
			return null;
		}
	};
})();
