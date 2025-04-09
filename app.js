let addTask = document.querySelector("#addTask");
let input = document.querySelector("input"); // Added input selector
let ul = document.querySelector("ul");

let tasksArray = JSON.parse(localStorage.getItem("tasks")) || [];


if (tasksArray.length !== 0) {
    tasksArray.forEach(element => {
        let item = document.createElement("li");
        item.innerText = element;

        let editbtn = document.createElement("button");
        editbtn.classList.add("edit");
        editbtn.innerText = "Edit";
        item.appendChild(editbtn);

        let dltbtn = document.createElement("button");
        dltbtn.classList.add("delete");
        dltbtn.innerText = "Completed";
        item.appendChild(dltbtn);

        ul.appendChild(item);
    });
}

addTask.addEventListener("click", function () {
    if (!input.value.trim()) return; // avoid empty tasks

    let item = document.createElement("li");
    item.innerText = input.value;
    tasksArray.push(item.innerText);
    ul.appendChild(item);
    localStorage.setItem("tasks", JSON.stringify(tasksArray));
    input.value = "";

    let editbtn = document.createElement("button");
    editbtn.classList.add("edit");
    editbtn.innerText = "Edit";
    item.appendChild(editbtn);

    let dltbtn = document.createElement("button");
    dltbtn.classList.add("delete");
    dltbtn.innerText = "Completed";
    item.appendChild(dltbtn);
});


ul.addEventListener("click", function (event) {
    if (event.target.nodeName === "BUTTON") {
        const target = event.target;
        let listItem = target.parentElement;
        let taskText = listItem.firstChild.textContent;

        if (target.classList.contains("delete")) {
            let index = tasksArray.indexOf(taskText);
            if (index !== -1) {
                tasksArray.splice(index, 1);
            }
            listItem.remove();
            localStorage.setItem("tasks", JSON.stringify(tasksArray));
            console.log("Deleted");
        }

        else if (target.classList.contains("edit")) {
            let currentText = taskText;

            listItem.innerHTML = ""; 

            let textarea = document.createElement("textarea");
            textarea.value = currentText;
            listItem.appendChild(textarea);
            textarea.focus();

            textarea.addEventListener("keydown", function (e) {
                if (e.key === "Enter") {
                    e.preventDefault();
                    let updatedText = textarea.value;

                    let index = tasksArray.indexOf(currentText);
                    if (index !== -1) {
                        tasksArray[index] = updatedText;
                    }

                    listItem.innerHTML = updatedText + " ";

                    let editbtn = document.createElement("button");
                    editbtn.classList.add("edit");
                    editbtn.innerText = "Edit";
                    listItem.appendChild(editbtn);

                    let dltbtn = document.createElement("button");
                    dltbtn.classList.add("delete");
                    dltbtn.innerText = "Completed";
                    listItem.appendChild(dltbtn);

                    localStorage.setItem("tasks", JSON.stringify(tasksArray));
                }
            });
        }
    }
});
