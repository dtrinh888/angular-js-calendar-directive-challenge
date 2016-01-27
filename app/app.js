angular.module('calendarDemoApp', [])
	.controller('MonthCtrl', function($scope){
		
		var today = new Date();
		var month = today.getMonth();
		var year = today.getFullYear();

		$scope.date = {
			month: month,
			year: year
		};

		$scope.months = ['January', 'February', 'March', 'April',
						 'May', 'June', 'July', 'August',
						 'September', 'October', 'November', 'December'];

		var years = [];				 
		var yearsPrior = year - 20;
		for(i=yearsPrior; i<=year+20; i++){
			years.push(i);
		}
		$scope.years = years;
	});