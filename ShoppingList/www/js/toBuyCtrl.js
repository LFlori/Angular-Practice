/**
 * Created by Andrei on 10/25/2016.
 */
(function(){
  'use strict';

  angular.module("ShoppingList")
    .controller("ToBuyController", ToBuyController);

  ToBuyController.$inject = ["ShoppingService"];
  function ToBuyController (ShoppingService) {
    var vm = this;

    vm.addItemToBuy = function (itemIndex) {
      ShoppingService.addItemToBuy(itemIndex);
    };

    vm.items = ShoppingService.showToBuyList();

    vm.type = ShoppingService.getType();

    vm.quantity = ShoppingService.getQuantity();

    vm.moveItem = function (itemIndex) {
      ShoppingService.moveItem(itemIndex);
    };
  }
})
();
