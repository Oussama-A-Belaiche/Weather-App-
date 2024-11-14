const searchbtn = document.getElementsByClassName("searchbtn")[0];
const API = 'Your API here';




const byDefault  = async () => { 
    let errorcard = document.getElementById("ErrorCard");
    let card = document.getElementsByClassName("card")[0];
    let city = document.getElementsByClassName("searchbar")[0].value;

  try { 
    let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=London&appid=${API}&units=metric`);
    let data = await response.json();

    if (data.cod !== 200) throw new Error("City not found");

    // Update weather information
    document.getElementsByClassName("weather")[0].textContent = `${data.main.temp} °C`;
    document.getElementsByClassName("cityname")[0].textContent = data.name;
    document.getElementsByClassName("humidity")[0].textContent = `${data.main.humidity}% Humidity`;
    document.getElementsByClassName("windspeed")[0].textContent = `${data.wind.speed} km/h wind speed`;
    document.getElementsByClassName ("desc")[0].textContent  = data.weather[0].description
    console.log(data)
    
    // Update weather icon
    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementsByClassName("wathericon")[0].src = iconUrl;
    document.getElementsByClassName("wathericon")[0].alt = data.weather[0].description;
  }catch (error) {
    // Hide main card and show error card if there's an error
    card.style.display = "none";
    errorcard.style.display = "block";
}
}
const displayWeather = async () => {
    let errorcard = document.getElementById("ErrorCard");
    let card = document.getElementsByClassName("card")[0];
    let city = document.getElementsByClassName("searchbar")[0].value;
    try {
        // Hide error card if visible
        if (errorcard.style.display === "block") errorcard.style.display = "none";
        
        // Show main card if hidden
        if (card.style.display !== "block") card.style.display = "block";

        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API}&units=metric`);
        let data = await response.json();

        if (data.cod !== 200) throw new Error("City not found");

        // Update weather information
        document.getElementsByClassName("weather")[0].textContent = `${data.main.temp} °C`;
        document.getElementsByClassName("cityname")[0].textContent = data.name;
        document.getElementsByClassName("humidity")[0].textContent = `${data.main.humidity}% Humidity`;
        document.getElementsByClassName("windspeed")[0].textContent = `${data.wind.speed} km/h wind speed`;
        document.getElementsByClassName ("desc")[0].textContent  = data.weather[0].description
        console.log(data)
        
        // Update weather icon
        const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
        document.getElementsByClassName("wathericon")[0].src = iconUrl;
        document.getElementsByClassName("wathericon")[0].alt = data.weather[0].description;

    } catch (error) {
        // Hide main card and show error card if there's an error
        card.style.display = "none";
        errorcard.style.display = "block";
    }
};

// Event listener for the search button
byDefault()
searchbtn.addEventListener('click', displayWeather);
