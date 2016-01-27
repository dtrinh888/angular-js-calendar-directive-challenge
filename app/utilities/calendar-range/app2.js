// your controller and directive code go here
angular.module('calendarDemoApp', [])
	.controller('MonthCtrl', function($scope){
		//get current date
		var today = new Date();
		//get current month
		var month = today.getMonth();
		//get current year
		var year = today.getFullYear();
		console.log(year);

		//object to store current month and year
		$scope.date = {
			month : month,
			year : year
		};
		console.log('$scope.date', $scope.date);
		console.log('var month', $scope.date.month);
		console.log('var year', $scope.date.year);

		//array for all 12 months
		$scope.months = ['January', 'February', 'March', 'April',
						 'May', 'June', 'July', 'August',
						 'September', 'October', 'November', 'December'];

		//empty array to store years				 
		var years = [];
		//variable for 20 years prior to current year
		var yearsPrior = year - 20;
		//for loop explanation:
		//i is set to years prior; 
		//if i is less than or = to current year + 20;
		//then increment i
		for (i=yearsPrior; i<=year+20; i++){
			//if for loop passes then push all the years into years array
			years.push(i);
		}

		//places years array into scope to be displayed in HTML
		$scope.years = years;	
		console.log('$scope.years' ,$scope.years);	

		//watch $scope.date to execute a callback whenever
		//'date' changes ('date' is $scope.date)
		//pass in newDate whenever the 'date' is changed
		$scope.$watch('date', function(newDate){
			console.log('newDate', newDate);
			//taken from calendarRange.js to retrieve the range of days
			//in each monthly range to show how many days per month to show
			//on calendar. 
			var range = CalendarRange.getMonthlyRange(new Date(newDate.year, newDate.month, 1));
			console.log('range', range);
			//
			var totalWeeks = range.days.length / 7;
			var weeks = [];
			for(var i = 0; totalWeeks > i; i++){
				weeks[i] = [];
				for(var j = 0; j < 7; j++) {
					console.log('days', j+(i*7));
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
