const death = document.querySelector(".death")
const confirmed = document.querySelector(".confirmed")
const recovered = document.querySelector('.recovered');
const inhos = document.querySelector('.inhos')
const body = document.body

const btn = document.querySelector('#btn');

btn.addEventListener("click",()=>{
    body.classList.toggle("dark-mode")
})

fetch("https://covid19.th-stat.com/api/open/today")
.then(response=> response.json())
.then(data => {
    confirmed.innerHTML = data.Confirmed;
    death.innerHTML = data.Deaths;
    recovered.innerHTML = data.Recovered;
    inhos.innerHTML = data.Hospitalized;
})
.catch(error=>console.log(error))