var paths = {
	jQuery: '../js/lib/jQuery/jQuery.js',
	underscore: '../js/lib/underscore/underscore.js',
	Backbone: '../js/lib/backbone/backbone.js',
	helpers: '../js/lib/helpers/helpers.js'
}

//shim helps to load the non-amd modules based on their dependency requirements and it loads them in linear order
var shim ={
	Backbone: {
		deps: ['underscore', 'jQuery'],
		exports: 'Backbone'
	}
}

//setup requirejs
require.config({
	paths: paths,
	shim: shim
});

require(["app"],function(App){
	console.log('app has been required');
	App.initialize();
});