

document.querySelector("form").addEventListener("submit",function(){
    event.preventDefault();
    let city=document.querySelector("#city").value;
    //console.log("hi");
    wfun(city);
})




async function  wfun(city) {
    try {
      //const url = 'https://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=c49c1e759be96735ec1c3053a1d2e738'
      const url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid=c49c1e759be96735ec1c3053a1d2e738"
      console.log(url);
      const res = await fetch(url)
      const jsonRes = await res.json()
      console.log(jsonRes);
      display(jsonRes);
    } catch(e) {
      console.log(e.toString())
    }
  }

  function display(data){
    document.querySelector("#imagedisplay").innerHTML="";
    if(data.weather.description=="clear sky"){
        var image=document.createElement("img");
        image.src="./sunimage.png";
        document.querySelector("#imagedisplay").append(image);
    }else{
        var image=document.createElement("img");
        image.src="./cloudimage.png";
        document.querySelector("#imagedisplay").append(image);
    }
    document.querySelector("#container1").innerHTML="";
    var box=document.createElement("div");
    var temp=document.createElement("p");
    temp.innerText="Temperature:"+data.main.temp;
    var pressure=document.createElement("p");
    pressure.innerText="Pressure:"+data.main.pressure;
    var humidity=document.createElement("p");
    humidity.innerText="Humidity:"+data.main.humidity;
    var windspeed=document.createElement("p");
    windspeed.innerText="WindSpeed:"+data.wind.speed;
    var sunrise=document.createElement("p");
    sunrise.innerText="Sunrise:"+data.sys.sunrise;
    var sunset=document.createElement("p");
    sunset.innerText="Sunset:"+data.sys.sunset;
    var description=document.createElement("p");
    description.innerText="Description:"+data.weather[0].description;
    box.append(temp,pressure,humidity,windspeed,sunrise,sunset,description);
    document.querySelector("#container1").append(box);
  }
  