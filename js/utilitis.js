function getInputFieldValueById(inputFieldId){
  let inputField = document.getElementById(inputFieldId);
  let inputFieldString = inputField.value;
  let inputFieldValue = parseFloat(inputFieldString);
  inputField = '';
  return inputFieldValue;
}

function getDipositDisplay(dipoDisplayId){
  let dipositDisplay = document.getElementById(dipoDisplayId);
  let dipositDisplayString = dipositDisplay.innerText;
  dipositDisplayAmount = parseFloat(dipositDisplayString);
  return dipositDisplayAmount ;
}

 function setTextElementValueById(dipoDisplayId, newValue){
  let dipositDisplay = document.getElementById(dipoDisplayId);
  dipositDisplay.innerText = newValue;
 }
