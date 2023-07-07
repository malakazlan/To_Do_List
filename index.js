const list = document.getElementById("list");
const inputbtn = document.getElementById("inputbtn");

document.getElementById("add").onclick = function () {
    if (inputbtn.value === '') {
        alert("Write something");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputbtn.value

        let deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "Delete";
        deleteBtn.className = "delete-btn";
        li.appendChild(deleteBtn);
        deleteBtn.addEventListener("click", function () {
            list.removeChild(li);
        });

        list.appendChild(li);
    }
    inputbtn.value = ''
    saveData();

};
function saveData() {
    localStorage.setItem("data", list.innerHTML);
}


if (localStorage.getItem("data")) {
    list.innerHTML = localStorage.getItem("data");
    //below this chatgpt help
    let deleteButtons = document.getElementsByClassName("delete-btn");
    for (let i = 0; i < deleteButtons.length; i++) {
      let deleteButton = deleteButtons[i];
      deleteButton.addEventListener("click", function() {
        let listItem = deleteButton.parentNode;
        listItem.remove();
        saveData();
      });
    }
  }
  
  
  
  
  
  
  