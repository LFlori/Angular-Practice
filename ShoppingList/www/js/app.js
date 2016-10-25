(function(){
  'use strict';

  angular.module("ShoppingList", ['ionic']);

  // angular.module("ShoppingList", ['ionic'])
  //   .controller("ToBuyController", ToBuyController)
  //   .controller("BoughtController", BoughtController)
  //   .controller("ErrorController", ErrorController)
  //   .service("ShoppingService", ShoppingService);
  //
  // ToBuyController.$inject = ["ShoppingService"];
  // function ToBuyController (ShoppingService) {
  //   var toBuy = this;
  //
  //   toBuy.addItemToBuy = function (itemIndex) {
  //     ShoppingService.addItemToBuy(itemIndex);
  //   };
  //
  //   toBuy.items = ShoppingService.showToBuyList();
  //
  //   toBuy.type = ShoppingService.getType();
  //
  //   toBuy.moveItem = function (itemIndex) {
  //     ShoppingService.moveItem(itemIndex);
  //   };
  // }
  //
  // BoughtController.$inject = ["ShoppingService"];
  // function BoughtController (ShoppingService) {
  //   var alreadyBought = this;
  //
  //   alreadyBought.items = ShoppingService.getBoughtItems();
  //
  //   alreadyBought.addQuantity = function (itemIndex) {
  //     ShoppingService.addQuantity(itemIndex);
  //   };
  //
  //   alreadyBought.removeItem = function (itemIndex) {
  //     ShoppingService.removeItem(itemIndex);
  //   }
  // }
  //
  // ErrorController.$inject = ["ShoppingService"];
  // function ErrorController (ShoppingService) {
  //   var errorMessage = this;
  //   errorMessage.message = ShoppingService.getMessage();
  // }
  //
  // function ShoppingService () {
  //   var service = this;
  //
  //   var toBuyList = [];
  //   var boughtList = [];
  //   var message = "";
  //   var quantityList = [];
  //   var type = ["g", "kg", "piece(s)"];
  //
  //   service.addItemToBuy = function (item) {
  //     item = item.replace(/[^A-Z ]/ig, '');
  //     if(item.length <= 0) {
  //       message = "Please insert data first!";
  //       return;
  //     }
  //     if(toBuyList.indexOf(item) == -1) {
  //       toBuyList.push(item);
  //       message = "";
  //     }
  //     else {
  //       message = "The item is already in your shopping list!";
  //     }
  //   };
  //
  //   service.addQuantity = function (item){
  //     quantityList.push(item);
  //   };
  //
  //   service.moveItem = function (itemIndex) {
  //     boughtList.push(toBuyList[itemIndex]);
  //     toBuyList.splice(itemIndex, 1);
  //   };
  //
  //   service.removeItem = function (itemIndex) {
  //     boughtList.splice(itemIndex, 1);
  //   };
  //
  //   service.showToBuyList = function () {
  //     return toBuyList;
  //   };
  //
  //   service.getBoughtItems = function () {
  //     return boughtList;
  //   };
  //
  //   service.getMessage = function () {
  //     return message;
  //   };
  //
  //   service.getQuantity = function () {
  //     return quantityList;
  //   };
  //
  //   service.getType = function () {
  //     return type;
  //   };
  // }
})();
