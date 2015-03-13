
var keyMirror = require('react/lib/keyMirror');

// Define action constants
module.exports = keyMirror({
	CART_ADD: null,			// Adds item to cart
	CART_REMOVE: null,		// Remove item from cart
	CART_VISIBLE: null,		// Shows or hides the cart
	SELECT_PRODUCT: null,	// Selects a product option
	RECEIVE_DATA: null		// Loads our mock data
});