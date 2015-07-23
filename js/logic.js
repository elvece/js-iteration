
function writeAnswer(word){
  var answer = document.getElementById('answer');
      answer.innerHTML = "$" + word;
}

function countAnswer(word){
  var answer = document.getElementById('answer');
      answer.innerHTML = word;
}

function sum (selectedArray){
  var totalSum = 0;
  for (var i = 0; i < selectedArray.length; i++){
  totalSum += Number(selectedArray[i].value);
  }
    return totalSum.toFixed(2);
}

function count (selectedArray){
  var totalCount = 0;
  totalCount = selectedArray.length;
  return totalCount;
}

function avg (selectedArray){
  var sum = 0;
  var totalAvg = 0;
  for ( var i = 0; i < selectedArray.length; i++){
     sum += Number(selectedArray[i].value);
     totalAvg = sum/selectedArray.length;
  }
  return totalAvg.toFixed(2);
}

