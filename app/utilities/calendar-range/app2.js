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
		//then increment i until i is less than or = to year+20
		for (var i=yearsPrior; i<=year+20; i++){
			//if for loop is true then push all the years into years array
			years.push(i);
		}

		//places years array into scope to be displayed in HTML
		$scope.years = years;	
		console.log('$scope.years' ,$scope.years);	

		//$scope.$watch watches $scope.date('date') and retrieves all information 
		//({month:month, year:year}) and passes into newDate
		$scope.$watch('date', function(newDate){
			console.log('newDate', newDate);
			//CalendarRange.getMonthlyRange() function was provided, found in calendarRange.js,
			//will generate the days that should be displayed for any given month.
			//The function gets called with a JS date object (var range = CalendarRange.getMonthlyRange(new Date());)
			//create new Date and pass in the current year and current month
			//
			//what is the 1 for???
			//
			var range = CalendarRange.getMonthlyRange(new Date(newDate.year, newDate.month, 1));
			console.log('range', range);
			//totalWeeks store how many weeks will be displayed on calendar for each month
			var totalWeeks = range.days.length / 7;
			//set empty array to store all the how many weeks for each month
			var weeks = [];
			//for loop explanation:
			//set i to 0;
			//if totalWeeks is greater than i;
			//then increment i until totalWeeks is no longer greater than i
			for(var i = 0; totalWeeks > i; i++){
				//if for loop is true
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
