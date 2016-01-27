angular.module('calendarDemoApp', [])
	.controller('MonthCtrl', function($scope){
		
		var today = new Date();
		var month = today.getMonth();
		var year = today.getFullYear();

		$scope.date = {
			month: month,
			year: year
		};

		
	});