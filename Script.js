submitBtn = document.querySelector('#submit');
let x = document.getElementById('location')
 submitBtn.addEventListener("click", getTimings)
let latid = document.getElementById('latitudeid')
let longid = document.getElementById('longitudeid')
let lat = null;
let long = null;
let locationflag = true;
let date = document.getElementById('date')
//let l1 = JSON.parse(latid.textContent);
//let l2 = JSON.parse(longid.textContent);
//const api_url = `https://api.sunrise-sunset.org/json?lat=17.5112599&lng=78.504896&date=today`
//const api_url = `https://api.sunrise-sunset.org/json?lat=17&lng=78&date=today`



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
        locationflag = false;
    }



function showPosition(position) {
    latid.textContent = position.coords.latitude;
    longid.textContent = position.coords.longitude;
    lat = parseFloat(latid.textContent)
    long = parseFloat(longid.textContent)
   // console.log("hei");
}

async function getTimings() {
  
    // Making an API call (request)
    // and getting the response back
    if (locationflag) {
        const api_url = "https://api.sunrise-sunset.org/json?lat=" + lat + "&lng=" + long + "&date=" + date.value;

        const response = await fetch(api_url);

        // Parsing it to JSON format
        const data = await response.json();
        console.log(data.results);
        console.log(api_url);
        console.log(latid);
        sunriseel = document.getElementById('sunriseel');
        sunsetel = document.getElementById('sunsetel');
        console.log(typeof (data.results.sunrise));
        sunriseel.textContent = data.results.sunrise +" UTC(IST-5:30)";
        sunsetel.textContent = data.results.sunset + " UTC(IST-5:30)";
    }
}


