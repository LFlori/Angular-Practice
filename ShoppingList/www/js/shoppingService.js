/**
 * Created by Andrei on 10/25/2016.
 */
(function(){
  'use strict';

  angular.module("ShoppingList")
    .service("ShoppingService", ShoppingService);

  function ShoppingService () {
    var service = this;

    var toBuyList = [];
    var boughtList = [];
    var message = "";
    var quantity = "";
    var type = ["g", "kg", "piece(s)"];

    service.addItemToBuy = function (item) {
      item = item.replace(/[^A-Z ]/ig, '');
      if (item.length <= 0) {
        message = "Please insert data first!";
        return;
      }
      if (toBuyList.indexOf(item) == -1) {
        toBuyList.push(item);
        message = "";
      }
      else {
        message = "The item is already in your shopping list!";
      }
    };

    service.addQuantity = function (number) {
      quantity = number;
    };

    service.moveItem = function (itemIndex) {
      boughtList.push(toBuyList[itemIndex]);
      toBuyList.splice(itemIndex, 1);
    };

    service.removeItem = function (itemIndex) {
      boughtList.splice(itemIndex, 1);
    };

    service.showToBuyList = function () {
      return toBuyList;
    };

    service.getBoughtItems = function () {
      return boughtList;
    };

    service.getMessage = function () {
      return message;
    };

    service.getQuantity = function () {
      console.log(quantity);
    };

    service.getType = function () {
      return type;
    };
  }
})();
