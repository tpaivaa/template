var wallboard = angular.module('wallboard', [])
wallboard.controller('wallCtrl', ['$scope','$http','$timeout', function ($scope,$http,$timeout) {
	$scope.details = {};
	$scope.details.connected = 'Hello World';
	$scope.details.busy = 'Hello World';
	$scope.details.unavailable = 'Hello World';
	$scope.details.else = 'Hello World';
	$scope.details.waitTime = 'Hello World';
	$scope.details.onQue = 'Hello World';
	$scope.details.serviceQuality = '0';
	$scope.header = 'Header';
	$scope.footer = 'Footer';

	// Function to get the data
	$scope.getData = function (){
		$http.get("http://localhost:3000/json")
		.then(function(response){ $scope.details = response.data; });
	}

	// Function to replicate setInterval using $timeout service.
	$scope.intervalFunction = function(){
		$timeout(function() {
			$scope.getData();
			$scope.intervalFunction();
		}, 5 * 60 * 1000)
	};

	// Get first data
	$scope.getData();
	// Kick off the interval
	$scope.intervalFunction();

}]);

