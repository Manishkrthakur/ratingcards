const mainContainer=document.querySelector(".main_container")
const thankYou=document.querySelector(".thank-you")
const submit=document.getElementById("submit")
const rateAgain=document.getElementById("rate-again")
const raTing=document.getElementById("rating")
const rates=document.querySelectorAll(".btn")

submit.addEventListener("click",() =>{
    thankYou.classList.remove("hidden")
    // mainContainer.classList.add("hidden1")
    mainContainer.style.display="none"
})

rateAgain.addEventListener("click",() =>{
    thankYou.classList.add("hidden")
    mainContainer.style.display="block"
})

rates.forEach((rate) =>{
    rate.addEventListener("click", ()=>{
      raTing.innerHTML=rate.innerHTML
    })
})