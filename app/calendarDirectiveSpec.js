/*step 1 write a test that true is true to see if karma works*/
describe('test', function(){
	it('karma working?', function(){
		expect(true).toBe(true);
	});
});
/*step 2 write a test if today is january 1, 2016 then the 5th 
  element is today*/
describe('correctDate', function(){
	var $scope, ctrl;
	beforeEach(module("calendarDemoApp"));
	beforeEach(inject(function($controller, $rootScope){
		$scope = $rootScope.$new();
		ctrl = $controller('MonthCtrl', {
			$scope: $scope
		});
		$scope.date.month = 0;
		$scope.date.day = 1;
		$scope.date.year = 2016;
		$scope.$apply();
		console.log('scope.date',$scope.date);
		console.log('scope.weeks[0][5]', $scope.weeks[0][5]);

	}));
	it('should be the 5th element in array', function(){
		expect($scope.date.day).toBe($scope.weeks[0][5].day);
		expect($scope.date.month).toBe($scope.weeks[0][5].month);
		expect($scope.date.year).toBe($scope.weeks[0][5].year);
	});
});
/*step 3 write a test where if the month and year a january 2016 
  there should be number of bookend, weekday, weekends can be 
  written in one test with multilple expects*/
describe('totalBookends', function(){
	var $scope, ctrl;
	beforeEach(module("calendarDemoApp"));
	beforeEach(inject(function($controller, $rootScope){
		$scope = $rootScope.$new();
		ctrl = $controller('MonthCtrl', {
			$scope: $scope
		});
		totalBookends = function(){

		};
	}));
});

/*step 4 test to see how many months are in the drop down*/
describe('how many months in drop down', function(){
	var $scope, ctrl;
	beforeEach(module("calendarDemoApp"));
	beforeEach(inject(function($controller, $rootScope){
		$scope = $rootScope.$new();
		ctrl = $controller('MonthCtrl', {
			$scope: $scope
		});
	}));
	it('should be equal to 12 months', function(){
		expect($scope.months.length).toEqual(12);
	});
});
/*step 5 test to see how many years and if it is 20 years 
  ahead and before*/

describe('what year 20 years before and after today date', function(){
	var $scope, ctrl;
	beforeEach(module("calendarDemoApp"));
	beforeEach(inject(function($controller, $rootScope){
		$scope = $rootScope.$new();
		ctrl = $controller('MonthCtrl', {
			$scope: $scope
		});
	}));
	fit('should be 1996 and 2036', function(){
		expect($scope.date.year + 20).toEqual(2036);
		expect($scope.date.year - 20).toEqual(1996);
		expect($scope.years[0]).toBe(1996);
		expect($scope.years[40]).toBe(2036);
	});
}); 

/*	step 6 test directive: Remember though, this isn't actually testing the directive
	You'll still want to `$compile` the directive, then using the `element` you can query 
	and check that the various `td`s that are created have the appropriate classes*/
describe('calNav', function(){
	var $scope, scope, element, compiled, html;
	beforeEach(module('calendarDemoApp'));
	beforeEach(module('./app/calNav.html'));
	beforeEach(inject(function($rootScope, $compile){
		$scope = $rootScope.$new();
		html ='<table>' + 
					'<tr>' +
						'<th ng-repeat="day in days" class="text-center">' +
							'{{day}}' +
						'</th>' +
					'</tr>' +
					'<tr ng-repeat = "week in weeks">' +
						'<td ng-repeat="day in week" ng-class="{bookend: date.month != day.month,'+
						' weekend: !day.weekday, weekday: day.weekday, today === day.date.toDateString()}"' + 
							'{{day.day}}' +
						'</td>' +
					'</tr>' +
				'<table>';
		element = $compile(html)($scope);
		console.log('html',html);
		$rootScope.$digest();		
	}));
	it('should check <td> to have appropriate classes', function(){
		expect(element.find('td')[5][0]).hasClass('today');
	});
});