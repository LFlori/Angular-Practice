/**
 * Created by Andrei on 10/25/2016.
 */
(function(){
  'use strict';

  angular.module("ShoppingList")
    .controller("ErrorController", ErrorController);

  ErrorController.$inject = ["ShoppingService"];
  function ErrorController (ShoppingService) {
    var vm = this;
    vm.message = ShoppingService.getMessage();
  }
})();
