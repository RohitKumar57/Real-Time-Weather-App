const cityName = document.getElementById('cityName')
const submitBtn = document.getElementById('submitBtn');
const city_name = document.getElementById('city_name')
const temp_status = document.getElementById('temp_status')
const temp_realVal = document.getElementById('temp_realVal')


const data_hide = document.querySelector('.middle_layer')


const getInfo =async(event)=>{
    event.preventDefault();//to remove query string localhost:8100/weather?
    // this helps to remove this ? symbol
    // alert('hii');

    
    // units=metric is used to give data in celcius
    // https://api.openweathermap.org/data/2.5/weather?q=Pune&appid=5f1991c77725ad566247a1555dd9359b
    let cityVal = cityName.value;
    // USING FETCH API
    if(cityVal===""){
        city_name.innerText= "Please Enter a city name to search....";
        data_hide.classList.add('data_hide');
    }
    else{
        try{
            // gives output of a particular city
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=5f1991c77725ad566247a1555dd9359b`;
    
            const response = await fetch(url);
            // this response converts data into object
            const data = await response.json();
            console.log(data);
            // converting this data in array
            const arrData = [data];

            city_name.innerText= `${arrData[0].name}, ${arrData[0].sys.country}`;

            temp_realVal.innerText = arrData[0].main.temp;


            // temp_status.innerText = arrData[0].weather.main;
            const tempMood = arrData[0].weather[0].main;
            // condition to check sunny or cloudy
            if(tempMood === "Clear"){
                temp_status.innerHTML = "<i class='fas  fa-sun' style='color: #eccc68'></i>"
            }
            else if(tempMood === "Clouds"){
                temp_status.innerHTML = "<i class='fas  fa-cloud' style='color: #f1f2f6'></i>"
            }
            else if(tempMood === "Rain"){
                temp_status.innerHTML = "<i class='fas  fa-cloud-rain' style='color: #a4b0be'></i>"
            }
            else{
                temp_status.innerHTML = "<i class='fas  fa-cloud' style='color: #f1f2f6'></i>"
            }

        data_hide.classList.remove('data_hide');

        }
        catch(err){
            city_name.innerText = "Please Enter the city name Properly";
            temp_status.innerText = "";
            temp_realVal.innerText = "";
        }

    }
}

submitBtn.addEventListener('click', getInfo)