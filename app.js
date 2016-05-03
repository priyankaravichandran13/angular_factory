var application =angular.module('myapp', []);

application.service('random', function(){
	var randomObject = {};
	var num= Math.floor(Math.random()*10);
	randomObject.generate = function(){
		return num;

	};
	return randomObject;

});

application.controller('myController',function($scope, random){

	$scope.randomClick = function(){
		$scope.randomNumber = random.generate();
	};


});