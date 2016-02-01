angular.module('calendarDemoApp', [])
	.controller('MonthCtrl', function($scope){
		
		var today = new Date();
		var day = today.getDay();
		var month = today.getMonth();
		var year = today.getFullYear();
		$scope.date = {
			day: day,
			month: month,
			year: year
		};


		$scope.today = today.toDateString();


		$scope.days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday',
						'Thursday', 'Friday', 'Saturday'];

		$scope.months = ['January', 'February', 'March', 'April',
						 'May', 'June', 'July', 'August',
						 'September', 'October', 'November', 'December'];

		var years = [];				 
		var yearsPrior = year - 20;
		for(i=yearsPrior; i<=year+20; i++){
			years.push(i);
		}
		$scope.years = years;
		console.log('years', $scope.years[40]);

		$scope.$watch('date', function(newDate){
			console.log('newdate',new Date(newDate.year, newDate.month, 1));
			var range = CalendarRange.getMonthlyRange(new Date(newDate.year, newDate.month, 1));
			var totalWeeks = range.days.length/7;			
			var weeks = [];
			for(i=0; i<totalWeeks; i++){
				weeks[i] = [];
				for(j=0; j<7; j++){
					weeks[i].push(range.days[j+(i*7)]);
				}
			}
			$scope.weeks = weeks;
		}, true);
	})
	.directive('calNav', function(){
		return {
			restrict: 'E',
			transclude: true,
			scope: true,
			templateUrl: './calNav.html'
		};
	});