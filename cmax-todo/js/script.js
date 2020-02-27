var i = 0;
var btnClick = function(){
  let todoContent = document.getElementById("content").value;
  let todoList = document.querySelector("#listContents ul");
  let li = document.createElement('li');
  let input = document.createElement('input');
  input.type = "checkbox";
  input.id = "todo" + i;
  let label = document.createElement('label');
  input.onchange = function() {
    let doneList = document.querySelector("#doneContents ul");
    if(this.checked) {
        doneList.appendChild(li);
        label.classList.add("done");
    }
    else {
        todoList.appendChild(li);
        label.classList.remove("done");
    }

/*  let li = document.createElement('li');
    let label = document.createElement('label');
    label.textContent = todoContent;
    li.appendChild(label);
    doneList.appendChild(li);
    this.parentNode.remove(); */

  } 
  label.textContent = todoContent;
  li.appendChild(input); 
  li.appendChild(label);
  todoList.appendChild(li);
  i = i+1; 
  document.getElementById("content").value = '';
}



 