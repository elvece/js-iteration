//Prices functions
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

//Names functions


function printAllNames(){
  var namesArray = names.split('\n');
  return namesArray;
}


function firstNames(){
  var first = printAllNames();
  var newArr = [];
  for (var i = 0; i < first.length; i++){
    newArr.push(first[i].split(" ")[0]);
  }
  return newArr;
}

function lastNames(){
  var last = printAllNames();
  var newArr = [];
    for (var i = 0; i < last.length; i++){
    newArr.push(last[i].split(" ")[1]);
  }
  return newArr;
}

function nameLength(){
  var length = printAllNames();
  var newArr = [];
  for (var i = 0; i < length.length; i++){
    var result = length[i] + " - " + length[i].length;
    newArr.push(result);
  }
  return newArr;
}

