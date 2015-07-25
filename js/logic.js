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

//in: names array, process: take names array and print to answer section UPDATE: function works
function printAllNames(){
  var namesArray = names.split('\n');
  var newArr = [];
  for (var i = 0; i < namesArray.length; i++){
    newArr.push(namesArray[i].split(" "));
  }
  return newArr;
}

//working on spliting names into first and last names
function splitNames(){
  var namesArray = names.split('\n');
  var newArr = [];
  newArr.push(namesArray[i].split(" "));
  return newArr;
}


  // for (var i = 0; i < namesArray.length; i++){
  //   newArr.push(namesArray[i].split(" "));

  //     for (var j = 0; j < newArr.length; j++){



  //       if (newArr[j].length > 2){

  //       newArr[j][1].concat(" ", newArr[j][2]);
  //     }
  //   }
  // }
  // return newArr;



//pseudo/practice code for splitting names into first and last:
  // for (var j = 0; j < newArr.length; j++) {
  //   if (newArr[j].length > 2){
  //     newArr[j][1].concat(" ", newArr[j][2]);


    // if (/*array has more than 3 indexes) {
    // /*push last two together*/;
    // else {
    //   take that split index and push it into a new array
    //   then access every first index of each object in new array for first name and second index for each object in new array for last name
    //   // var firstName = namesArray[0]av;
    //   // var lastName = namesArray[1];
    //   // namesArray[i].push(firstName, lastName);
    // }

  // }


  // return namesArray;
// }
