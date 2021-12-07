submitBtn = document.querySelector('#submit');
let x = document.getElementById('location')
 submitBtn.addEventListener("click", getTimings)
let latid = document.getElementById('latitudeid')
let longid = document.getElementById('longitudeid')
let date = document.getElementById('date')
//let l1 = JSON.parse(latid.textContent);
//let l2 = JSON.parse(longid.textContent);
const api_url = `https://api.sunrise-sunset.org/json?lat=17.5112599&lng=78.504896&date=today`
//const api_url = `https://api.sunrise-sunset.org/json?lat=${l1}&lng=${l2}&date=today`

function navigatorFunction1() {
    console.log("hi");
}
function navigatorFunction()
{
    // document.getElementById("demo").innerHTML = "Hello World";
    console.log("hi");

    x.innerHTML = "hi";
    try {
        navigator.geolocation.getCurrentPosition(showPosition);
    } catch {
        x.innerHTML = err;
    }
    function showPosition(position) {
        x.innerHTML = "Latitude: " + position.coords.latitude +

            "<br>Longitude: " + position.coords.longitude;
        console.log("hei");
    }
    return x.innerHTML;
};

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
} else {
    x.innerHTML = "Geolocation is not supported by this browser.";
}


function showPosition(position) {
    latid.textContent = position.coords.latitude;
    longid.textContent= position.coords.longitude;
   // console.log("hei");
}

async function getTimings() {

    // Making an API call (request)
    // and getting the response back
    const response = await fetch(api_url);

    // Parsing it to JSON format
    const data = await response.json();
    console.log(data.results);
    console.log(api_url);
    console.log(latid);
}


$(function () {
    $("#date").datepicker();
    $("#date").on("change", function () {
        var selected = $(this).val();
        alert(selected);
    });
});