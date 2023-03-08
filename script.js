var BMRgivenHeight = document.getElementById("BMRheight");
var BMRmainWeight = document.getElementById("BMRweight");
var BMRmainAge = document.getElementById("BMRage");

function BMRheightValueFunc(){
    if (BMRheightValue.value == "inch") {
        BMRgivenHeight.setAttribute("placeholder", "Enter Your Height (in inch)");
    } else if (BMRheightValue.value == "cm") {
        BMRgivenHeight.setAttribute("placeholder", "Enter Your Height (in centimeter)");
    } else if (BMRheightValue.value == "meter") {
        BMRgivenHeight.setAttribute("placeholder", "Enter Your Height (in meter)");
    }
}
function BMRcalc(){
    var BMRmainHeight;
    if (BMRheightValue.value == "inch"){
        BMRmainHeight = BMRgivenHeight.value * 2.54;
    } else if (BMRheightValue.value == "cm"){
        BMRmainHeight = BMRgivenHeight.value;
    } else if (BMRheightValue.value == "meter"){
        BMRmainHeight = BMRgivenHeight.value * 100;
    }
    var BMRres;
    var BMRgenderValue=document.getElementById("BMRgenderValue");
    if(BMRgenderValue.value=="female") {
        var BMRdiboWeight=BMRmainWeight.value * 9.6
        var BMRdiboHeight=BMRmainHeight * 1.8
        var BMRdiboAge=BMRmainAge.value * 4.7
        BMRres=BMRdiboWeight+BMRdiboHeight-BMRdiboAge+655;
    }else if(BMRgenderValue.value == "male") {
        var BMRdiboWeight = BMRmainWeight.value * 13.7
        var BMRdiboHeight = BMRmainHeight * 5
        var BMRdiboAge = BMRmainAge.value * 6.8
        BMRres = BMRdiboWeight + BMRdiboHeight - BMRdiboAge + 66;
    }
    var BMRamr;
    var BMRamrvalue=documnet.getElementById("BMRamr");
    if(BMRamrvalue.value=="Sedentary"){
        BMRamr=BMRres*1.2
    }
    else if(BMRamrvalue.value=="Lightlyactive"){
        BMRamr=BMRres*1.375
    }
    else if(BMRamrvalue.value=="ModeratelyActive"){
        BMRamr=BMRres*1.55
    }
    else if(BMRamrvalue.value=="Actively"){
        BMRamr=BMRres*1.725
    }
    else if(BMRamrvalue.value=="Veryactive"){
        BMRamr=BMRres*1.9
    }
    BMRresInt = BMRamr
    BMRres = BMRres.toString();
        BMRres = BMRresInt.toFixed(3);
        var all = `<h5>Your BMR is ${BMRres}</h5>`;
        document.getElementById("BMRres").innerHTML = all;
}