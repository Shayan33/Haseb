var second = 0;
var minute = second / 60;
var hours = minute / 60;
var temp, temp1;
var SwitchAgain;

		
function timer(SwitchAgain) {
	
	if (SwitchAgain) {
		
		hours = hourPause;	
		hours = (minute + 1) / 60;
		hours = Math.floor(hours) + temp1;
		
		console.log("minPause is" + minPause);
		minute = minPause;
		console.log("first min is" + minute);
		minute = (second + 1) / 60;
		console.log("min after second+1 is" + minute);
		minute = Math.floor(minute) + temp;
		console.log("min after floor is" + minute);
		console.log("temp is" + temp);
		
	}
	
	else {
		
		temp1 = hours;
		hours = (minute + 1) / 60;
		hours = Math.floor(hours) + temp1;
			
		console.log("temp inside else is" + temp);
		temp = minute;
		minute = (second + 1) / 60;
		minute = Math.floor(minute) + temp;
	}
		
			
	if (minute >= 60) {
		minute = 0;
	}
			
	second = second + 1;
			
	if (second >= 60) {
		second = 0;	
	}
			
	if (second < 10 && minute < 10 && hours < 10) {
		document.getElementById("timer-counter").innerHTML = "0" + hours + ":" + "0" + minute + ":" + "0" + second;
	}
		
	else if (second < 10 && minute < 10 && hours < 1) {
		document.getElementById("timer-counter").innerHTML =  "0" + "0" + hours + ":" + "0" + minute + ":" + "0" + second;
	}
	else if (second < 10 && minute < 10 && hours >= 10) {
		document.getElementById("timer-counter").innerHTML = hours + ":" + "0" + minute + ":" + "0" + second;
	}
			
	else if (minute <10 && hours < 10 && second >= 10) {
		document.getElementById("timer-counter").innerHTML = "0" + hours + ":" + "0" + minute + ":" + second;
	}
			
	else if (second < 10 && hours < 10 && minute >= 10) {
		document.getElementById("timer-counter").innerHTML = "0" + hours + ":" + minute + ":" + "0" + second;
	}
			
	else if (second < 10 && minute >= 10 && hours >= 10) {
		document.getElementById("timer-counter").innerHTML = hours + ":" + minute + ":" + "0" + second;
	}
			
	else if (second >= 10 && minute < 10 && hours >= 10) {
		document.getElementById("timer-counter").innerHTML = hours + ":" + "0" + minute + ":" + second;
	}
			
	else if (second >= 10 && minute >= 10 && hours < 10) {
		document.getElementById("timer-counter").innerHTML = "0" + hours + ":" + minute + ":" + second;
	}
			
	else {
		document.getElementById("timer-counter").innerHTML = hours + ":" + minute + ":" + second;
	}
	ID = window.setTimeout("timer();", 1000);
			
}

	