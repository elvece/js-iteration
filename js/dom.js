//Prices DOM manipulation
var options = document.getElementsByTagName('select')[0].children;

var selected = document.getElementsByTagName('select')[0].selectedOptions;

var selectedArray = [];

document.getElementById("sum-all").addEventListener("click", function(){
  var result = sum(options);
  writeAnswer(result);
  }
);

document.getElementById("count-selected").addEventListener("click", function(){
  var result = count(selected);
  countAnswer(result);
  }
);

document.getElementById("sum-selected").addEventListener("click", function(){
  var result = sum(selected);
  writeAnswer(result);
  }
);

document.getElementById("average-all").addEventListener("click", function(){
  var result = avg(options);
  writeAnswer(result);
  }
);

document.getElementById("average-selected").addEventListener("click", function(){
  var result = avg(selected);
  writeAnswer(result);
  }
);

//Names DOM manipulation
var names = document.getElementsByClassName('all-names')[0].value;

var namesArray = names.split('\n');

function splitNames(namesArray){
  var namesArraySplit = 0;
  for (var i = 0; i < namesArray.length; i++) {
    namesArraySplit = namesArray[i].split(" ");
  }
  return namesArraySplit;
}

console.log(splitNames());










