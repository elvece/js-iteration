
var options = document.getElementsByTagName('select')[0].children;

var selected = document.getElementsByTagName('select')[0].selectedOptions;

var selectedArray = [];

document.getElementById("sum-all").addEventListener("click", function(){
  var result = sum(options);
  writeAnswer(result);
  }
);

document.getElementById("sum-selected").addEventListener("click", function(){
  var result = sum(selected);
  writeAnswer(result);
  }
);

function writeAnswer(word){
  var answer = document.getElementById('answer');
      answer.innerHTML = word;

}

