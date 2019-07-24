'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope',function($scope) {




  $scope.model = { };

  $scope.deliveries =[
       {id:"uno",date:"Sunday 10th 2:28 PM",origin:"Houston,TX,36619",destination:"Atlanta,GA,30123",price:"250000",boxesNumber:"1"},
       {id:"dos",date:"Monday 11th 2:28 PM",origin:"Miami,FL,36619",destination:"Los Angeles,CA,30123",price:"251000",boxesNumber:"2"},
       {id:"tres",date:"Tuesday 12th 2:28 PM",origin:"Houston,TX,36619",destination:"Atlanta,GA,30123",price:"252000",boxesNumber:"3"}
      ];

   var cambio  =   function (){
     console.log('cambio');
   }

   $scope.checkboxModel = {
    s : false,
    c : false,
    h:false
  };

   
   var mostrar  =   function (num){
    
  }


}]);