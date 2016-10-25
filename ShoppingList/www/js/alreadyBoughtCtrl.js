/**
 * Created by Andrei on 10/25/2016.
 */
(function(){
  'use strict';

  angular.module("ShoppingList")
    .controller("BoughtController", BoughtController);

  BoughtController.$inject = ["ShoppingService"];
  function BoughtController (ShoppingService) {
    var vm = this;

    vm.items = ShoppingService.getBoughtItems();

    vm.removeItem = function (itemIndex) {
      ShoppingService.removeItem(itemIndex);
    }
  }

})();
