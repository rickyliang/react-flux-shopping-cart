
// Import Facebook's Dispatcher library
var Dispatcher = require('flux').Dispatcher;

// Create dispatcher instance
var AppDispatcher = new Dispatcher();

// Convenience method to handle dispatch requests
AppDispatcher.handleAction = function(action) {
	this.dispatch({
		source: 'VIEW_ACTION', // vs API_ACTION if it comes from server
		action: action
	});
}

module.exports = AppDispatcher;
