


/**
 * add withdraw event handeler
 * get withdraw amount by using getInputFieldValueById function
 * get previous withdraw amount by using getDipositDisplay funtion
 * calculat new witdraw total and set the value
 * set new withdraw total by using set setTextElementValueById funtion
 * get previous blance total by using getDipositDisplay function
 * calculate new balance total
 * set balance total using setTextElementValueById
 */
document.getElementById('btn-withdroo').addEventListener('click', function(){
 let newWithdrawAmount = getInputFieldValueById('withdraw-inputfild');
 
 let previousWithdrawTotal = getDipositDisplay('witdraw-total');

 let newWitdrawTotal = previousWithdrawTotal + newWithdrawAmount ;

 setTextElementValueById('witdraw-total', newWitdrawTotal)
 
 let previouBalanceTotal = getDipositDisplay('blns-total');
 let newBalanceTotal = previouBalanceTotal - newWithdrawAmount;
 setTextElementValueById('blns-total', newBalanceTotal);

})