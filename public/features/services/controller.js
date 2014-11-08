app.controller("ApplicationsEditCtrl", ["$scope", "$http", "ApplicationsService", "$routeParams", function ($scope, $http, ApplicationsService, $routeParams) {
    
    var appId = $routeParams.id;
    ApplicationsService.selectOne(appId, function (response) {

        $scope.newApplication = response;
    });

    $scope.update = function () {
        ApplicationsService.update(appId, $scope.newApplication, function (response) {
            window.history.go(-1);
            $scope.all();
        });

        
    };

    $scope.remove = function () {
        ApplicationsService.remove(appId, function () {
            window.history.go(-1);
            $scope.all();
        });
        
    };
}]);

app.controller("ApplicationsNewCtrl", ["$scope", "$http", "ApplicationsService", "$routeParams", function ($scope, $http, ApplicationsService, $routeParams) {
    $scope.create = function () {
        
        ApplicationsService.create($scope.application, function () {
            window.history.go(-1);
            $scope.all();
        });

    };
    

}]);

app.controller("ApplicationsListCtrl", ["$scope", "$http", "ApplicationsService", "$routeParams", function ($scope, $http, ApplicationsService, $routeParams) {
    $scope.renderServiceClients = function (response) {

        $scope.serviceClients = response;
    };

    $scope.all = function () {
        ApplicationsService.selectAll($scope.renderServiceClients);
    };

    $scope.all();
}]);
