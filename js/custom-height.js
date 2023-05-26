
//Custom Height Class 1 
//Variable: 
// 1. DataOfFirstCalHeightClass = data
// 2. ArrayofFirstHeight = arrayHeight
// 3. FirstDataSet = mydata
// 4. FirstMaxValue = maxValue
// 5. FirstFinalValue = finalizeValue

$(document).ready(function () {
	//Select Class
	let DataOfFirstCalHeightClass = document.getElementsByClassName("cal-height-1");
	let ArrayofFirstHeight = [];

	//Push Data into array
	for (let i = 0; i < DataOfFirstCalHeightClass.length; i++) {
		let FirstDataSet = DataOfFirstCalHeightClass[i].offsetHeight;
		ArrayofFirstHeight.push(FirstDataSet);
	}

	//Get maximum value of array
	FirstMaxValue = Math.max(...ArrayofFirstHeight);

	//Convert Number to string
	let FirstFinalValue = (FirstMaxValue.toString()).concat("px");

	//Set Custom Height		
	$(".cal-height-1").css({
		height: function () {
			return FirstFinalValue;
		}
	});

});

//Custom Height Class 2
//Variable: 
// 1. DataOfSecCalHeightClass = DataOfFirstCalHeightClass
// 2. ArrayofSecHeight = ArrayofFirstHeight
// 3. SecDataSet = FirstDataSet
// 4. SecMaxValue = FirstMaxValue
// 5. SecFinalValue = FirstFinalValue

$(document).ready(function () {
	//Select Class
	let DataOfSecCalHeightClass = document.getElementsByClassName("cal-height-2");
	let ArrayofSecHeight = [];

	//Push Data into array
	for (let i = 0; i < DataOfSecCalHeightClass.length; i++) {
		let SecDataSet = DataOfSecCalHeightClass[i].offsetHeight;
		ArrayofSecHeight.push(SecDataSet);
	}

	//Get maximum value of array
	SecMaxValue = Math.max(...ArrayofSecHeight);

	//Convert Number to string
	let SecFinalValue = (SecMaxValue.toString()).concat("px");

	//Set Custom Height		
	$(".cal-height-2").css({
		height: function () {
			return SecFinalValue;
		}
	});

});

//Custom Height Class 3
//Variable: 
// 1. DataOfThirdCalHeightClass = DataOfSecCalHeightClass
// 2. ArrayofThirdHeight = ArrayofSecHeight
// 3. ThirdDataSet = SecDataSet
// 4. ThirdMaxValue = SecMaxValue
// 5. ThirdFinalValue = SecFinalValue

$(document).ready(function () {
	//Select Class
	let DataOfThirdCalHeightClass = document.getElementsByClassName("cal-height-3");
	let ArrayofThirdHeight = [];

	//Push Data into array
	for (let i = 0; i < DataOfThirdCalHeightClass.length; i++) {
		let ThirdDataSet = DataOfThirdCalHeightClass[i].offsetHeight;
		ArrayofThirdHeight.push(ThirdDataSet);
	}

	//Get maximum value of array
	ThirdMaxValue = Math.max(...ArrayofThirdHeight);

	//Convert Number to string
	let ThirdFinalValue = (ThirdMaxValue.toString()).concat("px");

	//Set Custom Height		
	$(".cal-height-3").css({
		height: function () {
			return ThirdFinalValue;
		}
	});

});


