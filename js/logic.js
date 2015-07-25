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
;

function splitNames(names){
  var namesArray = names.split('\n');
  for (var i = 0; i < namesArray.length; i++) {
    namesArray = namesArray[i].split(" ");
  } if (/*array has more than 3 indexes*/){
    /*push last two together*/;
    else {
      /*take that split index and push it into a new array
      then access every first index of each object in new array for first name and second index for each object in new array for last name
      // var firstName = namesArray[0]av;
      // var lastName = namesArray[1];
      // namesArray[i].push(firstName, lastName);
    }

  }


  return namesArray;
}

console.log(splitNames());















