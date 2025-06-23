const input = document.getElementById("enterTask");
const button = document.getElementById("submitBtn");
const listTable = document.getElementById("listTable");

button.addEventListener("click", function(){
    const task = input.value.trim();

    if (task !== ""){
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("todo-item");

        const taskText = document.createElement("span");
        taskText.textContent = task;

        const completeBtn = document.createElement('button');
        completeBtn.textContent = "Done"
        completeBtn.addEventListener("click", function() {
          taskDiv.classList.toggle('completed');
        });
  
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete"
        deleteBtn.addEventListener("click", function(){
          listTable.removeChild(taskDiv);
        });
  
        taskDiv.appendChild(taskText);
        taskDiv.appendChild(completeBtn);
        taskDiv.appendChild(deleteBtn);
  
        listTable.appendChild(taskDiv);
  
        input.value = ''; 
      
    }
});

  