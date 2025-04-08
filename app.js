let addTask = document.querySelector("#addTask");
 let ul = document.querySelector("ul");
 
 let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];
 
 
 if(tasksArray.length != 0){
     
     tasksArray.forEach(element => {
         let item = document.createElement("li");
         item.innerText = element;
 
         let editbtn = document.createElement("button");
         editbtn.classList.add("edit");
         editbtn.innerText = "EditTask";
         item.appendChild(editbtn);
 
         
         let dltbtn = document.createElement("button");
         dltbtn.classList.add("delete");
         dltbtn.innerText = "Completed";
         item.appendChild(dltbtn);
 
         ul.appendChild(item);
     });
 }
 addTask.addEventListener("click", function(){
     let item = document.createElement("li");
     item.innerText = input.value;
     tasksArray.push(item.innerText);
     ul.appendChild(item);
     localStorage.setItem("tasks", JSON.stringify(tasksArray));
 
     input.value = "";
 
     let editbtn = document.createElement("button")
     editbtn.classList.add("edit")
     editbtn.innerText = "EditTask"
     item.appendChild(editbtn);
 
     let dltbtn = document.createElement("button");
     dltbtn.classList.add("delete");
     dltbtn.innerText = "Delete";
     dltbtn.innerText = "Completed";
     item.appendChild(dltbtn);
 });
 
 ul.addEventListener("click", function(event){
     if(event.target.nodeName == "BUTTON"){
     const target = event.target;
 
     
     if(target.classList.contains("delete")){
         let listItem = event.target.parentElement;
         let index = tasksArray.indexOf(listItem.firstChild.textContent);
         if (index !== -1) {
             tasksArray.splice(index, 1);
         }
         listItem.remove();
         localStorage.setItem("tasks", JSON.stringify(tasksArray));
 
         console.log("Deleted");
     }
     } else if (target.classList.contains("edit")) {
         let listItem = event.target.parentElement;
         let currentText = listItem.firstChild.textContent;
 
         
         listItem.innerHTML = "";
 
         
         let textarea = document.createElement("textarea");
         textarea.value = currentText;
         listItem.appendChild(textarea);
         textarea.focus();
 
         
         textarea.addEventListener("keydown", function (e) {
             if (e.key === "Enter") {
                 e.preventDefault(); 
                 let updatedText = textarea.value;
 
                 
                 listItem.innerHTML = updatedText + " ";
 
                 
                 let editbtn = document.createElement("button");
                 editbtn.classList.add("edit");
                 editbtn.innerText = "Edit";
                 listItem.appendChild(editbtn);
 
                 
                 let dltbtn = document.createElement("button");
                 dltbtn.classList.add("delete");
                 dltbtn.innerText = "Delete";
                 listItem.appendChild(dltbtn);
 
                 localStorage.setItem("tasks", JSON.stringify(tasksArray));
             }
         });
         localStorage.setItem("tasks", JSON.stringify(taskArray));
 
     }
 });
 
 
 // let dltbtns = document.querySelectorAll(".delete");
 
 // for(dltbtn of dltbtns){
 //     dltbtn.addEventListener("click", function(){
 //         let par = this.parentElement;
 //         par.remove();
 //     });
 // };