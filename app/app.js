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

		$scope.$watch('date', function(newDate){
			console.log('newdate', newDate);
			var range = CalendarRange.getMonthlyRange(new Date(newDate.year, newDate.month, 1));
			console.log('range',range);
			var totalWeeks = range.days.length/7;			
			var weeks = [];
			for(i=0; i<totalWeeks; i++){
				weeks[i] = [];
				console.log('weeks', weeks);
				console.log('totalWeeks', totalWeeks);
				for(j=0; j<7; j++){

					console.log('days', j+(i*7));
					weeks[i].push(range.days[j+(i*7)]);
					console.log('j',j);
					console.log('wtf', weeks[i]);
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