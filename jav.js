
var myVar = setInterval(myTimer, 1000);

function myTimer() {
    var d = new Date();
    var sec = d.getSeconds();
    var min = d.getMinutes();
    var houre = d.getHours();
       const degree_Persec = ((sec / 60) * 360) + 90;
    document.getElementById("second-hand").style.transform = `rotate(${degree_Persec}deg)`;
    const degree_Permin = ((min / 60) * 360) + 90;
    document.getElementById("minute-hand").style.transform = `rotate(${degree_Permin}deg)`;
    const degree_Perhoure = ((houre  / 12) * 360) + 90;
    document.getElementById("houre-hand").style.transform = `rotate(${degree_Perhoure}deg)`;
    }
    
