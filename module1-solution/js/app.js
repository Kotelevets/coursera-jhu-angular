(function () {
'use strict';
  // AngularJS application
  angular.module('LunchCheck', [])
     .controller('LunchCheckController', LunchCheckController);

  // Properly inject $scope into the controller using the $inject property
  // to make sure to protect your code from minification.
  LunchCheckController.$inject = ['$scope'];

  // AngularJS controller
  function LunchCheckController($scope) {

  // data in model
  $scope.dishesList = '';
  $scope.message = '';
  $scope.messageClass = '';

  // display result in the view
  $scope.displayResult = function () {
    let dishesArray = getClearDishesArray($scope.dishesList);
    let resultMessage = 'Please enter data first';
    let messageClass  = 'red';

    if (!checkEmptyDishesList(dishesArray)) {
      resultMessage = checkDishesList(dishesArray) ? 'Enjoy!' : 'Too much!';
      messageClass  = 'green';
    }

    $scope.message = resultMessage;
    $scope.messageClass = messageClass;
  };

  // gets dishes array from entered dishes list
  // without extra spaces and empty substrings
  function getClearDishesArray (dishesList) {
    // divides the entered string into an ordered list of substrings
    // and puts these substrings into an array
    let dishesListArray = dishesList.split(',');
    // delete extra spaces from array item values
    dishesListArray = dishesListArray.map(item => item.trim());
    // delete empty strings (items) from array
    dishesListArray = dishesListArray.filter(item => item.length !== 0);
    return dishesListArray;
  }

  // checkEmptyDishesList ()- checks if dishes array is empty
  // do NOT consider an empty item,
  // i.e., , , as an item towards to the count
  function checkEmptyDishesList (dishesListArray) {
    let emptyList = true;
    if (dishesListArray.length !== 0)
      emptyList = false;
    return emptyList;
  }

  // checkDishesList() checks dishes array
  // do NOT consider an empty item,
  // i.e., , , as an item towards to the count
  function checkDishesList (dishesListArray) {
    const DISHES_QUANTITY_LIMIT = 3;
    let dishesListOK = true;
    // if the number of dishes is not OK - not checked
    if (dishesListArray.length > DISHES_QUANTITY_LIMIT)
      dishesListOK = false;
    return dishesListOK;
  }

}

})();
