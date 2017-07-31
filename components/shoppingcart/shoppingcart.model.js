/* eslint-disable */
(function() {
  var MODULE_NAME = 'shoppingcartModel',
    NETCENTRIC_NAMESPACE = 'nn';

  window[NETCENTRIC_NAMESPACE] = window[NETCENTRIC_NAMESPACE] || {};

  window[NETCENTRIC_NAMESPACE][MODULE_NAME] = function() {
    _getCart = function() {
      return {
        total: 0,
        products: []
      };
    };

    return {
      init: function(initialState) {},

      getCart: _getCart,

      addProducts: function(newOrExistingProducts) {
        return _getCart();
      },

      changeProductQuantity: function(product, newQuantity) {
        return _getCart();
      },

      removeProducts: function(productsToDelete) {
        return _getCart();
      },

      destroy: function() {},
    };
  };
})();
