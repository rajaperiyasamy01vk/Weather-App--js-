

const apiKey = "fe6e6b1ca5a31f76b727547ccbd5625c"

const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric"


const searchIcon = document.querySelector(".search-icon");

let cityName = document.getElementById("w-input-box");



let start = document.querySelector(".start ")
start.classList.remove("d-none")

let wbuttom = document.querySelector(".w-buttom ")
let wdatacon = document.querySelector(".w-data-con")
let error = document.querySelector(".error")
let errorf = document.querySelector(".error-1")

searchIcon.addEventListener("click",()=>{


    

    fetch(apiUrl +`&appid=${apiKey}`+`&q=${cityName.value}`)
    .then((r)=>{
        return r.json()
    }).then((x)=>{
        console.log(x)
        start.classList.add("d-none")

        if(x.cod == 404){
            error.classList.remove("d-none")
            wbuttom.classList.add("d-none")
            wdatacon.classList.add("d-none")
            errorf.classList.add("d-none")
        }
        else{

            if(cityName.value ==""){
                errorf.classList.remove("d-none")
                error.classList.add("d-none")
                wbuttom.classList.add("d-none")
                wdatacon.classList.add("d-none")

            }else{
            error.classList.add("d-none")
            wbuttom.classList.remove("d-none")
            wdatacon.classList.remove("d-none")
            errorf.classList.add("d-none")

            document.querySelector(".city").innerHTML = x.name;

            document.querySelector(".temp").innerHTML = Math.round(x.main.temp)+"°C";

            document.querySelector(".humidity").innerHTML = Math.round(x.main.humidity)+"%";

            document.querySelector(".wind").innerHTML = Math.round(x.wind.speed)+" km/hr";
        
            let weatherImg= document.querySelector(".w-img")


            if(x.weather[0].main =="Clouds" ){
                weatherImg.src="img/clouds.png"
            }

            else  if(x.weather[0].main =="Clear" ){
                weatherImg.src="img/clear.png"
            }

            else  if(x.weather[0].main =="Drizzler" ){
                weatherImg.src="img/drizzle.png"
            }

            else  if(x.weather[0].main =="Mist" ){
                weatherImg.src="img/mist.png"
            }

            else  if(x.weather[0].main =="Rain" ){
                weatherImg.src="img/rain.png"
            }

            else  if(x.weather[0].main =="Snow" ){
                weatherImg.src="img/snow.png"
            }

            }
            

        }
        
    })

});





let navRigth = document.querySelector(".nav-rigth");

let navItem = navRigth.querySelectorAll("span")

let about  = document.querySelector(".about")
let help  = document.querySelector(".help")


navItem.forEach((x,i)=>{
    x.addEventListener("click",()=>{
       about.classList.add("d-none")
       help.classList.add("d-none")

       if(i==0){
        about.classList.remove("d-none")
        let svg = about.querySelector("svg")
        svg.addEventListener("click",()=>{
            about.classList.add("d-none")
        })
       }else{
        help.classList.remove("d-none")
        let svg = help.querySelector("svg")
        svg.addEventListener("click",()=>{
            help.classList.add("d-none")
        })
       }
    })
})



