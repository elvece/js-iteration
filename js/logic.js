
function sum (selectedArray){
  var totalSum = 0;
  for (var i = 0; i < selectedArray.length; i++){
  totalSum += Number(selectedArray[i].value);
  }
    return totalSum;
}

function writeAnswer(word){
  var answer = document.getElementById('answer');
      answer.innerHTML = word;
}
