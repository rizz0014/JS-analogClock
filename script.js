// Guilherme Rizzo Castanheira
// Analog Clock - Lynda.com Exercise

// DOM selectors

const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

// CURRENT TIME

function liveClock() {
    var date = new Date();

    // console.log(date); // checking date

    let hr = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();

    // console.log("Hour: " + hr + " / Minute: " + min + " / Second: " + sec); // checking hour

    // HANDS POSITION

    let secPosition = sec*(360/60); // 360 degrees divided by 60 (sec)
    let minPosition = (min*(360/60))+(secPosition/60); // 360 degrees divided by 60 (min)
    let hrPosition = (hr*(360/120))+(min*(360/60)/12); // the same than previus, but divided by 12 parts

    // ROTATE HANDS SCRIPT

    HOURHAND.style.transform = 'rotate(' + hrPosition + 'deg)';
    MINUTEHAND.style.transform = 'rotate(' + minPosition + 'deg)';
    SECONDHAND.style.transform = 'rotate(' + secPosition + 'deg)';
}


// USING THE "setInterval" METHOD TO REPEATEDLY CALLS A FUNCTION

var interval = setInterval(liveClock, 1000); // by 1000 because the default method is miliseconds