
document.getElementById('btn-deposit').addEventListener('click', function(){
   /**
    * get the element by id 
    * get the value form the element
    * convert string value to a number 
    */

   let neweDpositAmount = getInputFieldValueById('deposit-field');
    

   let previousDipositAmount = getDipositDisplay('diposit-total');
   
  
   // calculate new deposit total 
   let neweDposittotal = previousDipositAmount + neweDpositAmount;

   setTextElementValueById('diposit-total', neweDposittotal);
   
   // get pevious balance by using the function

   let previouBalanceTotal = getDipositDisplay('blns-total');
   let newBalanceTotal = previouBalanceTotal + neweDpositAmount;
   setTextElementValueById('blns-total', newBalanceTotal);


})