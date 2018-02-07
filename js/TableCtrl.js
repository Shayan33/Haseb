
app.controller('TableCtrl', ['$scope', function ($scope) {
	
	var datePrevent = "";
	var description = "";
	var projectName = "";
	var timer = "";
	var timeInterval = "";
	
	
	function generateTableRow() {
		
		var datePrevent = month + " " + "/" + " " + day;
		var description = $("searchBox").val();
		var projectName = "select project";
		
		if (hours == 0 && minute == 0) {
			var timer = "0" + "0" + ":" + "0" + "0";
		}
		else if (hours == 0 && minute < 10) {
			var timer = "0" + "0" + ":" + "0" + minute;
		}
		else if (hours == 0 && minute > 9) {
			var timer = "0" + "0" + ":" + minute;
		}
		else if (hours < 10 && minute == 0) {
			var timer = "0" + hours + ":" + "0" + "0";
		}
		else if (hours < 10 && minute < 10) {
			var timer = "0" + hours + ":" + "0" + minute;
		}
		else if (hours > 9 && minute == 0) {
			var timer = hours + ":" + "0" + "0";
		}
		else if (hours > 9 && minute < 10) {
			var timer = hours + ":" + "0" + minute;
		}
		else if (hours > 9 && minute > 9) {
			var timer = hours + ":" + minute;
		}
		
		var timeInterval =  hour + ":" + min + "&#8211" + Shour + ":" + Smin;
	
		return {
			datePrevent: datePrevent,
			description: description,
			projectName: projectName,
			timer: timer,
			timeInterval: timeInterval
		}
	}
	
	$scope.rowCollection = [];
	
	//for ( var task = 0; task < 1000; task++) {
		$scope.rowCollection.push(generateTableRow());
	//}
	
	$scope.displayedCollection = [].concat($scope.rowCollection);
	
	$scope.addNewTableRow = function addNewTableRow() {
		$scope.rowCollection.push(generateTableRow());
	};
	
	$scope.removeItem = function removeItem(row) {
		var index = $scope.rowCollection.indexOf(row);
		if (index !== -1) {
			$scope.rowCollection.splice(index, 1);
		}
	};

}]);

