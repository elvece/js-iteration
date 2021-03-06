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
var names = document.getElementsByTagName("textarea")[0].value;

var ul = document.getElementById("printed-names");

document.getElementById("all-names").addEventListener("click", function(){
  ul.innerHTML = null;
  var result = printAllNames();//do i need argument?
  for (var i = 0; i < result.length; i++) {
  var li = document.createElement("li");
  li.innerHTML = result[i];
  ul.appendChild(li);
  }
});

document.getElementById("first-names").addEventListener("click", function(){
  ul.innerHTML = null;
  var result = firstNames();
  for (var i = 0; i < result.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = result[i];
    ul.appendChild(li);
  }
});

document.getElementById("last-names").addEventListener("click", function(){
  ul.innerHTML = null;
  var result = lastNames();
  for (var i = 0; i < result.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = result[i];
    ul.appendChild(li);
  }
});

document.getElementById("names-with-lengths").addEventListener("click", function(){
  ul.innerHTML = null;
  var result = nameLength();
  for (var i = 0; i < result.length; i++) {
    var li = document.createElement("li");
    li.innerHTML = result[i];
    ul.appendChild(li);
  }
});
