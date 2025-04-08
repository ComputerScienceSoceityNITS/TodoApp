let input = document.querySelector("input");
let addTask = document.querySelector("#addTask");
let ul = document.querySelector("ul");

let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];


if(tasksArray.length != 0){
    
    tasksArray.forEach(element => {
        let item = document.createElement("li");
        item.innerText = element;


        
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

    let dltbtn = document.createElement("button");
    dltbtn.classList.add("delete");
    dltbtn.innerText = "Completed";
    item.appendChild(dltbtn);
});

ul.addEventListener("click", function(event){
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
    
        localStorage.setItem("tasks", JSON.stringify(taskArray));

    }
);


// let dltbtns = document.querySelectorAll(".delete");

// for(dltbtn of dltbtns){
//     dltbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// };
