
window.React = require('react');
var ProductData = require('./ProductData');
var CartAPI = require('./utils/CartAPI');
var FluxCartApp = require('./components/FluxCartApp.react');

// Load mock product data into localStorage
ProductData.init();

// Load mock API call
CartAPI.getProductData();

// Render FluxCartApp controller view
React.render(
	<FluxCartApp />,
	document.getElementById('flux-cart')
);