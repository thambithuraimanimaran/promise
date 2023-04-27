let dhurai = "https://restcountries.com/v3.1/all" ;


async function sai(){
    const data = await fetch(dhurai);
    const res =await data.json()
    let body = document.body
    for(let i=0;i<res.length;i++){
        body.innerHTML += `<div class="parent">
            <div class="child1">
                <img src=${res[i].flags.png} alt=${res[i].name.common}>
            </div>
            <div class="child2">
                <h3>${res[i].name.common}</h3>
                <p>${res[i].capital}</p>
                <p>${res[i].cca3}</p>
                <p>${res[i].region}</p>
            </div>
            <div class="child3">
                <button onclick="callweather(this)" lat=${res[i].latlng[0]} lng=${res[i].latlng[1]} >CLICK FOR WEATHER</button>
            </div>
        
        </div>`


    }
     console.log(res)
}
sai();


function callweather(ele){
    // const btn = document.querySelector(".child3")
    // const data = e.parentElement;
    const data = ele;
   const lat = data.getAttribute("lat");
   const lng = data.getAttribute("lng");
   const apiKey = "7232bf1238bda8af4639e22eeadf8b78"
    console.log(lat,lng);
    weather(lat,lng,apiKey);
}
async function weather(lat,lng,apiKey){
    const bata = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${apiKey}`);
    const result = await bata.json()
    var finalout = `
    main : ${result.weather[0].main}
    description : ${result.weather[0].description}
    `
    console.log(result);
     alert(finalout)
}



