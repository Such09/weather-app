//let URL = "https://api.weatherapi.com/v1/current.json?key=f165e44db9d54836a2335712261305&q=jalna";
let btn = document.querySelector("button");
let temp = document.querySelector("#temp");
let condition = document.querySelector("#condition");
let humidity = document.querySelector("#humidity");
let wind = document.querySelector("#wind");


// add all city in dropdown (select) through forEach loop

let dropdown = document.querySelector("#dropdown");    
citys.forEach(city => {
  let option = document.createElement("option");
  option.value = city;
  option.textContent = city;
  dropdown.appendChild(option);
});


let getData = (async () => {
    let city = document.querySelector("#dropdown").value;
    // console.log(city);
    let URL = `https://api.weatherapi.com/v1/current.json?key=f165e44db9d54836a2335712261305&q=${city}`;

    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();

    temp.innerText = `${data.current.temp_c}°C`;
    condition.innerText = data.current.condition.text;
    humidity.innerText = `${data.current.humidity} %`;
    wind.innerText = `${data.current.wind_kph} kph`;

    console.log(data.current.temp_c);
    console.log(data.current.condition.text);
    console.log(data.current.humidity);
    console.log(data.current.wind_kph);
});


btn.addEventListener("click", () =>{
    getData();
});