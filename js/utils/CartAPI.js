
var FluxCartActions = require('../actions/FluxCartActions');

module.exports = {
	// Load mock product data from localStorage in ProductData into
	// ProductStore via an Action
	getProductData: function() {
		var data = JSON.parse(localStorage.getItem('product'));
		FluxCartActions.receiveProduct(data);
	}
}