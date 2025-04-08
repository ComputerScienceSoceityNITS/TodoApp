let input = document.querySelector("input");
let addTask = document.querySelector("#addTask");
let ul = document.querySelector("ul");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        addTask.click();
    }
});
addTask.addEventListener("click", function(){
    let item = document.createElement("li");
    item.innerText = input.value;
    ul.appendChild(item);
    input.value = "";

    let dltbtn = document.createElement("button");
    dltbtn.classList.add("delete");
    dltbtn.innerText = "Delete";
    item.appendChild(dltbtn);
});

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let listItem = event.target.parentElement;
        listItem.remove();
        console.log("Deleted");
    }

});

// let dltbtns = document.querySelectorAll(".delete");

// for(dltbtn of dltbtns){
//     dltbtn.addEventListener("click", function(){
//         let par = this.parentElement;
//         par.remove();
//     });
// };
