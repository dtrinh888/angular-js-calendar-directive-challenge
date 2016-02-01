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
		console.log($scope.today);
	}));
	fit('should be the 5th element in array', function(){
		expect($scope.date).toBe($scope.weeks[0][5]);
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

/*step 6 test directive*/
