var billAmount = document.querySelector("#bill-amount");
var cashAmount = document.querySelector("#cash-amount")
var btnCheck = document.querySelector("#btn-check")

function clickEventHandler(){
    console.log(billAmount.value);
}

btnCheck.addEventListener("click" , clickEventHandler )

