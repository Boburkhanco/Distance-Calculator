var piyoda = document.querySelector("#piyoda");
var minutP = document.querySelector("#minut-piyoda")
var velosiped = document.querySelector("#velosiped");
var minutV = document.querySelector("#minut-velosiped")
var mashina = document.querySelector("#mashina");
var minutM = document.querySelector("#minut-mashina")
var samalyot = document.querySelector("#samalyot");
var minutS = document.querySelector("#minut-samalyot")
var userAmount = document.querySelector("#masofa");
var submit = document.querySelector("#submit")



function calculateDistance() {
    var minutPiyoda = Math.round(((((userAmount.value) / 3.6) - (Math.floor((userAmount.value) / 3.6))).toFixed(2)) * 60)
    piyoda.textContent = Math.floor((userAmount.value) / 3.6)
    minutP.textContent = minutPiyoda;

    var minutVelosiped = Math.round(((((userAmount.value) / 20.1) - (Math.floor((userAmount.value) / 20.1))).toFixed(2)) * 60)
    velosiped.textContent = Math.floor((userAmount.value) / 20.1)
    minutV.textContent = minutVelosiped;

    var minutMashina = Math.round(((((userAmount.value) / 70) - (Math.floor((userAmount.value) / 70))).toFixed(2)) * 60)
    mashina.textContent = Math.floor((userAmount.value) / 70)
    minutM.textContent = minutMashina;

    var minutSamalyot = Math.round(((((userAmount.value) / 800) - (Math.floor((userAmount.value) / 800))).toFixed(2)) * 60)
    samalyot.textContent = Math.floor((userAmount.value) / 800)
    minutS.textContent = minutSamalyot;
}
submit.addEventListener("click", e => {
    e.preventDefault() 
    calculateDistance();
})

userAmount.addEventListener('keyup' , (e) => {
    if(e.which === 13) {
        calculateDistance();
    }
});
