angular.module("myApp")
    .controller("carController",["$scope","itemsService",function($scope,itemsService){
        $scope.items=itemsService.getCarItem();
        $scope.delete=function(index){
            itemsService.removeCarItem(index);
            //$scope.items.splice(index,1);
        }
    }])
