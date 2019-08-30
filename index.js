import App from './components/App.html';
var arr = [];
function save() {
  var x = document.getElementById("list-input").value;
  if (x == "") {
    document.getElementById("error").innerHTML = ("Please enter an item");
  } else {
    var ul = document.getElementById("list-output");
    var li = document.createElement("li");
    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.value = document.getElementById("list-input").value;
    checkbox.name = "list";
    document.getElementById("error").innerHTML = ('');
    li.appendChild(checkbox);
    li.appendChild(document.createTextNode(checkbox.value));
    ul.appendChild(li);
    arr.push([checkbox.value]);
  }
  document.getElementById("list-input").value = '';
}
function showchecked() {
  var inputs = document.getElementById('output').getElementsByTagName('input');
  var arr2 = [];
  for (var i = 0; i < arr.length; i++) {
    if (inputs[i].checked == true) {
      arr2.push(arr[i]);
    }
  }
  view(arr2, "Checked Item(s) are:");
}
function showUnchecked() {
  var inputs = document.getElementById('output').getElementsByTagName('input');
  var arr3 = [];
  for (var i = 0; i < arr.length; i++) {
    if (inputs[i].checked != true) {
      arr3.push(arr[i]);
    }
  }
  view(arr3, "Unchecked Item(s) are:");
}
function showAll() {
  view(arr, "All Item(s) are:");
}
function view(array, heading) {
  document.getElementById("heading").innerHTML = (heading);
  if (array.length == 0) {
    document.getElementById("items").innerHTML = ("No item");
  }
  else {
    document.getElementById("items").innerHTML = array.join("<br>");
  }
}
