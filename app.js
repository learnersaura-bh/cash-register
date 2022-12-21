var billAmount = document.querySelector("#bill-amount");
var cashAmount = document.querySelector("#cash-amount");
var btnCheck = document.querySelector("#btn-check");
var showMessage = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes");
var notesWeHave = [ 2000, 500, 100, 20, 10 ,5 , 1];


btnCheck.addEventListener("click" , function clickEventHandler(){
    if(billAmount.value>0){
        if(Number(cashAmount.value) > Number(billAmount.value)){
 const cashToBeReturned = Number(cashAmount.value) - Number(billAmount.value);
 calculateChange(cashToBeReturned);
        }
        else if(Number(cashAmount.value) === Number(billAmount.value)){
            showMessage.innerText = "Bill is paid, no need to return cash"
        }
        else{showMessage.innerText = "Customer needs to pay more than or equal to bill amount"}} 
  else{
    showMessage.innerText = "Input amount is not valid, amount should be greater than zero" }
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




