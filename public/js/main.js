const submitBtn = document.getElementById('submitBtn');
const cityName = document.getElementById('cityName');
const city_name = document.getElementById('city_name');
const temp_real_val = document.getElementById('temp_real_val');
const temp_status = document.getElementById('temp_status');
const datahide = document.querySelector(".middle_layer");

const getInfo = async(event) =>{
    event.preventDefault();
    let cityVal = cityName.value;
    if(cityVal === ""){
        city_name.innerText = `Please enter the city name`
        datahide.classList.add("data_hide");
    }else{
        try{
        let url = `http://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=7f0196de745b9ec827799966004be9d1`
        const response = await fetch(url);
        const data = await response.json();
        const arrData = [data];
        city_name.innerText = `${arrData[0].name}, ${arrData[0].sys.country}`;
        temp_real_val.innerText = arrData[0].main.temp;
        temp_status.innerText = arrData[0].weather[0].main;
        datahide.classList.remove("data_hide");
        }catch{
            city_name.innerText = `Please enter the city name properly`
            datahide.classList.add("data_hide");
        }
    }
}
submitBtn.addEventListener('click', getInfo);