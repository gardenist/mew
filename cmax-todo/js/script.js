var i = 0;
var btnClick = function(){
  let todoContent = document.getElementById("content").value;
  let todoList = document.querySelector("#listContents ul");
  let li = document.createElement('li');
  let input = document.createElement('input');
  input.type = "checkbox";
  input.id = "todo" + i;
  input.onchange = function() {
    alert(this.id); 
  } 
  let label = document.createElement('label');
  label.textContent = todoContent;
  li.appendChild(input); 
  li.appendChild(label);
  todoList.appendChild(li);
  i = i+1; 
  document.getElementById("content").value = '';
}


 