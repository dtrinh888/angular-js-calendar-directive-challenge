angular.module('calendarDemoApp', [])
	.controller('MonthCtrl', function($scope){
		
		var today = new Date();
		var day = today.getDay();
		var month = today.getMonth();
		var year = today.getFullYear();
		console.log('day', day);
		$scope.date = {
			day: day,
			month: month,
			year: year
		};
		/*console.log('??',$scope.date);*/

		$scope.today = today.toDateString();
		/*console.log('today', $scope.today);*/

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

		$scope.$watch('date', function(newDate){
			console.log('newdate', newDate);
			var range = CalendarRange.getMonthlyRange(new Date(newDate.year, newDate.month, 1));
			/*console.log('range',range);*/
			var totalWeeks = range.days.length/7;			
			var weeks = [];
			for(i=0; i<totalWeeks; i++){
				weeks[i] = [];
				/*console.log('weeks', weeks[5]);*/
				/*console.log('totalWeeks', totalWeeks);*/
				for(j=0; j<7; j++){
					/*console.log('days', j+(i*7));*/
					weeks[i].push(range.days[j+(i*7)]);
					/*console.log('j',j);
					console.log('weeks[i]', weeks[0]);*/
				}
			}
			$scope.weeks = weeks;
			console.log('scope.weeks',$scope.weeks[0][5]);
			console.log('date', $scope.weeks.date);
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