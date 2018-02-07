var counter = 1;
var counterForAgain = 1;
var JDate = require('jdate');
endDate = "null";
var begin = 0;
var totaltime = 0;



app.controller('BoxCtrl', function($scope) {

	$scope.prjSwitch = false;
	$scope.TimerRow = [];
	$scope.ListPrj = [];
	$scope.projectLabel = 'انتخاب پروژه';

	if (begin == 0) {
		$scope.intialSeen = true;
	}


	$scope.removeRow = function(index) {
		$scope.TimerRow.splice(index, 1);

		if ($scope.TimerRow.length == 0) {
			$scope.TimerRow = [];
		}
	};

	$scope.timeIntervalMaker1 = function() {

		if (hour == 0 && min == 0) {
			var timeInterval = "0" + "0" + ":" + "0" + "0";
		} else if (hour == 0 && min < 10) {
			var timeInterval = "0" + "0" + ":" + "0" + min;
		} else if (hour == 0 && min > 9) {
			var timeInterval = "0" + "0" + ":" + min;
		} else if (hour < 10 && min == 0) {
			var timeInterval = "0" + hour + ":" + "0" + "0";
		} else if (hour < 10 && min < 10) {
			var timeInterval = "0" + hour + ":" + "0" + min;
		} else if (hour > 9 && min == 0) {
			var timeInterval = hour + ":" + "0" + "0";
		} else if (hour > 9 && min < 10) {
			var timeInterval = hour + ":" + "0" + min;
		} else if (hour > 9 && min > 9) {
			var timeInterval = hour + ":" + min;
		}

		return timeInterval
	};

	$scope.timeIntervalMaker2 = function() {

		if (Shour == 0 && Smin == 0) {
			var timeInterval2 = "0" + "0" + ":" + "0" + "0";
		} else if (Shour == 0 && Smin < 10) {
			var timeInterval2 = "0" + "0" + ":" + "0" + Smin;
		} else if (Shour == 0 && Smin > 9) {
			var timeInterval2 = "0" + "0" + ":" + Smin;
		} else if (Shour < 10 && Smin == 0) {
			var timeInterval2 = "0" + Shour + ":" + "0" + "0";
		} else if (Shour < 10 && Smin < 10) {
			var timeInterval2 = "0" + Shour + ":" + "0" + Smin;
		} else if (Shour > 9 && Smin == 0) {
			var timeInterval2 = Shour + ":" + "0" + "0";
		} else if (Shour > 9 && Smin < 10) {
			var timeInterval2 = Shour + ":" + "0" + Smin;
		} else if (Shour > 9 && Smin > 9) {
			var timeInterval2 = Shour + ":" + Smin;
		}

		return timeInterval2
	};

	$scope.timerShow = function() {

		if (hours == 0 && minute == 0) {
			var timer = "0" + "0" + ":" + "0" + "0";
		}
		if (hours == 0 && minute < 10) {
			var timer = "0" + "0" + ":" + "0" + minute;
		} else if (hours == 0 && minute > 9) {
			var timer = "0" + "0" + ":" + minute;
		} else if (hours < 10 && minute == 0) {
			var timer = "0" + hours + ":" + "0" + "0";
		} else if (hours < 10 && minute < 10) {
			var timer = "0" + hours + ":" + "0" + minute;
		} else if (hours > 9 && minute == 0) {
			var timer = hours + ":" + "0" + "0";
		} else if (hours > 9 && minute < 10) {
			var timer = hours + ":" + "0" + minute;
		} else if (hours > 9 && minute > 9) {
			var timer = hours + ":" + minute;
		}

		return timer
	};
	
	$scope.trueTime = function() {
		
		truemin = minStop - minPause;
		truehour = hourStop - hourPause;
		
		if (truehour == 0 && truemin == 0) {
			var timer = "0" + "0" + ":" + "0" + "0";
		}
		if (truehour == 0 && truemin < 10) {
			var timer = "0" + "0" + ":" + "0" + truemin;
		} else if (truehour == 0 && truemin > 9) {
			var timer = "0" + "0" + ":" + truemin;
		} else if (truehour < 10 && truemin == 0) {
			var timer = "0" + truehour + ":" + "0" + "0";
		} else if (truehour < 10 && truemin < 10) {
			var timer = "0" + truehour + ":" + "0" + truemin;
		} else if (truehour > 9 && truemin == 0) {
			var timer = truehour + ":" + "0" + "0";
		} else if (truehour > 9 && truemin < 10) {
			var timer = truehour + ":" + "0" + truemin;
		} else if (truehour > 9 && truemin > 9) {
			var timer = truehour + ":" + truemin;
		}

		return timer
	};

	$scope.PlayBuild = function() {

		$scope.intialSeen = false;
			
			if (counter == 1) {
				
				ID = window.setTimeout("timer(false);", 1000);
				$('#searchButton').css('background-color', '#FF3333');
				$("#searchButton").val(" توقف ");

				counter = 0;

				playDate = new JDate;
				month = playDate.getMonth();
				day = playDate.getDate();

				startDate = playDate.format('dddd DD MMMM YYYY');

				playDateG = new Date();
				hour = playDateG.getHours();
				min = playDateG.getMinutes();

			}
		
			else if (counter == 0) {

				clearTimeout(ID);
				$('#searchButton').css('background-color', '#297ACC');
				$("#searchButton").val(" شروع ");
				$("#timer-counter").empty();
				//$scope.TimerRow[0].projectName = $scope.projectLabel;
				
	
				stopDate = new Date();
				Smonth = stopDate.getMonth();
				Sday = stopDate.getDay();
				Shour = stopDate.getHours();
				Smin = stopDate.getMinutes();
	
				if (begin == 0) {
					$(".all-table-content-class").empty();
				}

				var newrow;
	
				if ($scope.TimerRow.length == 0) {
					newrow = {
						'projectName' : $scope.projectLabel,
						'description' : $scope.description,
						'datePrevent' : month + " " + "/" + " " + day,
						'timer' : $scope.timerShow(),
						'timeInterval' : $scope.timeIntervalMaker1(),
						'timeInterval2' : $scope.timeIntervalMaker2()
					}
				}

				else {
					newrow = {
						'projectName' : $scope.projectLabel,
						'description' : $scope.description,
						'datePrevent' : month + " " + "/" + " " + day,
						'timer' : $scope.timerShow(),
						'timeInterval' : $scope.timeIntervalMaker1(),
						'timeInterval2' : $scope.timeIntervalMaker2()
					}
				}
				
				for ( var i = 0; i < $scope.TimerRow.length; i++) {
					//if ($scope.TimerRow[i-1].datePrevent != $scope.TimerRow[i].datePrevent) {
						//for ( var j = 0; j < i-1; j++) {
					
					var timer = $scope.TimerRow[i].timer;
					//hourtotal = timer.substring(0, 2);
					mintotal = timer.substring(3, 5);
					
							console.log("$scope.TimerRow[i].timer is" + mintotal);
							totaltime = totaltime + mintotal;
							console.log(totaltime);
						//}
						var newRow;
						newRow = {
								'totalTime' : totaltime
						}
						
						$scope.TimerRow.unshift(newRow);
						
					//}
				}
			
				if ($scope.projectName == null) {
					$scope.visible = false;
				} else {
					$scope.visible = true;
				}

				counter = 1;
				second = 0;
				minute = second / 60;
				hours = minute / 60;
				$scope.description = '';
	
				$scope.TimerRow.unshift(newrow);
				$scope.projectLabel =  'انتخاب پروژه';
			};
	};

	$scope.AddManually = function() {

		var newrow;

		if ($scope.TimerRow.length == 0) {
			newrow = {
				'projectName' : $scope.prNameManually,
				'description' : $scope.descriptionManually,
				'datePrevent' : $scope.dateManually,
				'timer' : $scope.timeManually,
				'timeInterval' : '--',
				'timeInterval2' : '--'
			}
		}

		else {
			newrow = {
				'projectName' : $scope.prNameManually,
				'description' : $scope.descriptionManually,
				'datePrevent' : $scope.dateManually,
				'timer' : $scope.timeManually
			}
		}

		if (begin == 0) {
			$(".all-table-content-class").empty();
		}

		$scope.TimerRow.unshift(newrow);

		$scope.prNameManually = '';
		$scope.descriptionManually = '';
		$scope.dateManually = '';
		$scope.timeManually = '';
	};

	$scope.PlayAgain = function(id, Switch, row) {
			
		if (Switch == false) {
			
			row.isStart = !row.isStart;
			
			var idTemp = id;			
			var timer = row.timer;
			hourPause = timer.substring(0, 2);
			minPause = timer.substring(3, 5);
			
			if (counterForAgain == 1) {
				
				ID = window.setTimeout("timer(true);", 1000);
				$('#searchButton').css('background-color', '#FF3333');
				$("#searchButton").val(" توقف ");
				$scope.iconSwitch = true;
				
				playDate = new JDate;
				month = playDate.getMonth();
				day = playDate.getDate();

				startDate = playDate.format('dddd DD MMMM YYYY');

				playDateG = new Date();
				hour = playDateG.getHours();
				min = playDateG.getMinutes();
				
				counter = 0;
				counterForAgain = 0;
				
			}
			
			
			else if (counterForAgain == 0) {
				
				$('#searchButton').css('background-color', '#297ACC');
				$("#searchButton").val(" شروع ");
				$("#timer-counter").empty();
				
				stopDate = new Date();
				Smonth = stopDate.getMonth();
				Sday = stopDate.getDay();
				Shour = stopDate.getHours();
				Smin = stopDate.getMinutes();
				
				var newrow;
				hourStop = $scope.timerShow().substring(0, 2);
				minStop = $scope.timerShow().substring(3, 5);

				newrow = {
					'projectName' : row.projectName,
					'description' : row.description,
					'datePrevent' : month + " " + "/" + " " + day,
					'timer' : $scope.trueTime(),
					'timeInterval' : $scope.timeIntervalMaker1(),
					'timeInterval2' : $scope.timeIntervalMaker2()
				}
			
				if ($scope.projectName == null) {
					$scope.visible = false;
				} else {
					$scope.visible = true;
				}

				$scope.description = '';
				$scope.TimerRow.unshift(newrow);
				
				second = 0;
				minute = second / 60;
				hours = minute / 60;
				counterForAgain = 1;
				counter = 1;
				clearTimeout(ID);
			}
		}
		
		
		
		if (Switch == true) {

				if (idTemp == null) {
					return;
				}
				
			else {
					$('#searchButton').css('background-color', '#297ACC');
					$("#searchButton").val(" شروع ");
					$("#timer-counter").empty();
					
					stopDate = new Date();
					Smonth = stopDate.getMonth();
					Sday = stopDate.getDay();
					Shour = stopDate.getHours();
					Smin = stopDate.getMinutes();
					
					var newrow;

					newrow = {
						'projectName' : $scope.TimerRow[idTemp].projectName,
						'description' : $scope.TimerRow[idTemp].description,
						'datePrevent' : month + " " + "/" + " " + day,
						'timer' : $scope.timerShow(),
						'timeInterval' : $scope.timeIntervalMaker1(),
						'timeInterval2' : $scope.timeIntervalMaker2()
					}
				
					if ($scope.projectName == null) {
						$scope.visible = false;
					} else {
						$scope.visible = true;
					}

					$scope.description = '';
					$scope.TimerRow.unshift(newrow);
					
					second = 0;
					minute = second / 60;
					hours = minute / 60;
					counterForAgain = 1;
					counter = 1;
					clearTimeout(ID);

				}	
		}
	};

	$scope.hoverIn = function(id) {
		if ($scope.TimerRow[id].projectName == "") {
			$scope.prjSwitch = true;
		}
	};
	
	$scope.hoverOut = function(id) {
		$scope.prjSwitch = false;
	};
	
	$scope.Chooseprj = function(proj, rowID, mainTableRow, row) {
		
		if (mainTableRow == 0) {
			//var tempName = $scope.ListPrj[id].prjName;
			if ($scope.TimerRow.length == 0) {
				return;
			}
			else {
				//$scope.TimerRow[0].projectName = tempName;
				row.projectName = proj.prjName;
			}
		}
		
		if (mainTableRow == 1) {
			$scope.projectLabel = proj.prjName;
		}
	};

	$scope.Createprj = function() {

		var newlistrow;

			newlistrow = {
				'prjName' : $scope.projectName
			};
		$scope.ListPrj.push(newlistrow);
		$scope.projectName = '';

	};

	$scope.ChangeBackPrjColor1 = function() {
		$('#backgroundPrj').css('background-color', '#B20000');
		$('#myCanvas').css('background-color', '#B20000');
	};

	$scope.ChangeBackPrjColor2 = function() {
		$('#backgroundPrj').css('background-color', '#FFCC66');
		$('#myCanvas').css('background-color', '#FFCC66');
	};

	$scope.ChangeBackPrjColor3 = function() {
		$('#backgroundPrj').css('background-color', '#FF99CC');
		$('#myCanvas').css('background-color', '#FF99CC');
	};

	$scope.ChangeBackPrjColor4 = function() {
		$('#backgroundPrj').css('background-color', '#338033');
		$('#myCanvas').css('background-color', '#338033');
	};
	$scope.ChangeBackPrjColor5 = function() {
		$('#backgroundPrj').css('background-color', '#D119FF');
		$('#myCanvas').css('background-color', '#D119FF');
	};
	$scope.ChangeBackPrjColor6 = function() {
		$('#backgroundPrj').css('background-color', '#0066FF');
		$('#myCanvas').css('background-color', '#0066FF');
	};
	$scope.ChangeBackPrjColor7 = function() {
		$('#backgroundPrj').css('background-color', '#FF7519');
		$('#myCanvas').css('background-color', '#FF7519');
	};
	$scope.ChangeBackPrjColor8 = function() {
		$('#backgroundPrj').css('background-color', '#E6E600');
		$('#myCanvas').css('background-color', '#E6E600');
	};
	$scope.ChangeBackPrjColor9 = function() {
		$('#backgroundPrj').css('background-color', '#19D1A3');
		$('#myCanvas').css('background-color', '#19D1A3');
	};
	$scope.ChangeBackPrjColor10 = function() {
		$('#backgroundPrj').css('background-color', '#474719');
		$('#myCanvas').css('background-color', '#474719');
	};
	$scope.ChangeBackPrjColor11 = function() {
		$('#backgroundPrj').css('background-color', '#996633');
		$('#myCanvas').css('background-color', '#996633');
	};
	$scope.ChangeBackPrjColor12 = function() {
		$('#backgroundPrj').css('background-color', '#006666');
		$('#myCanvas').css('background-color', '#006666');
	};

});
