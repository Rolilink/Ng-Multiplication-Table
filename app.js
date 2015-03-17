/**
* ngCalc Module
*
* AngularJs Multiplication Table
*/
angular.module('ngCalc', []).
controller('MultiplicationController', ['$scope','$attrs', function($scope,$attrs){
  $scope.numberLimit = $attrs.initialNumberLimit || 10;

  $scope.numbers = function(){
    var numbers = [];

    for (var i = 0; i < $scope.numberLimit ; i++) {
      numbers.push(i + 1);
    };

    return numbers;
  };

  $scope.compute = function(a,b){
    return a * b;
  };

}]);