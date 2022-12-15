var billAmount = document.querySelector("#bill-amount");
var cashAmount = document.querySelector("#cash-amount");
var btnCheck = document.querySelector("#btn-check");
var errorMessage = document.querySelector("#error-message");
var noOfNotes = document.querySelector("no-of-notes")
var notesWeHave = [ 2000, 500, 100, 50, 10, 2, 1];

function clickEventHandler(){
    if(billAmount.value>0){
        if(cashAmount.value > billAmount.value){
 var cashToBeReturned = cashAmount.value - billAmount.value;
 calculateChange(cashToBeReturned);
        }
        else{errorMessage.innerText = "Customer needs to pay more than or equal to bill amount"}

  } 
  else{
    // errorMessage.innerText = "Input amount is not valid, amount should be greater than zero" }
}};



function calculateChange(cashToBeReturned){
    for(var i=0; i<notesWeHave.length;i++){
        var numberOfNotes = Math.trunc(cashToBeReturned/notesWeHave[i]);
        cashToBeReturned %= notesWeHave[i];
        noOfNotes[i].innerText = numberOfNotes;
    }


}


btnCheck.addEventListener("click" , clickEventHandler )

