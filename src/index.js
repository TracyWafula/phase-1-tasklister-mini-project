


document.addEventListener("DOMContentLoaded", () => {
  // your code here
  //Selecting the form, the input element and the list element where to do items will be displayed.
  const form = document.querySelector("#create-task-form")
  const formInput = document.querySelector("#new-task-description")
  const taskList = document.querySelector("#tasks")
 
  function buildToDo(newItem){
    //Creating new list and paragraph element that will be appended to the task list.
      const newList = document.createElement("li");
      const newListItem = document.createElement("p");

      newListItem.textContent = newItem;
      newList.append(newListItem);
      taskList.append(newList);
    
  }
 //Handling form  submissions: appending users input to the TaskList.
  form.addEventListener("submit", (event) =>{
    event.preventDefault();
    const usersToDo = document.querySelector("#new-task-description").value
    buildToDo(usersToDo)
  
  
  });

 


  
});
