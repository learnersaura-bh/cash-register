var billAmount = document.querySelector("#bill-amount");
var cashAmount = document.querySelector("#cash-amount");
var btnCheck = document.querySelector("#btn-check");
var errorMessage = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var notesWeHave = [ 2000, 500, 100, 20, 10 ,5 , 1];


btnCheck.addEventListener("click" , function clickEventHandler(){
    if(billAmount.value>0){
        if(cashAmount.value > billAmount.value){
 const cashToBeReturned = cashAmount.value - billAmount.value;
 calculateChange(cashToBeReturned);
        }
        else{errorMessage.innerText = "Customer needs to pay more than or equal to bill amount"}} 
  else{
    errorMessage.innerText = "Input amount is not valid, amount should be greater than zero" }
} );

function calculateChange(cashToBeReturned){
    for(let i=0; i < notesWeHave.length; i++){
        const numberOfNotes = Math.trunc(
            cashToBeReturned / notesWeHave[i]
            );
        cashToBeReturned= cashToBeReturned % notesWeHave[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

   
}




