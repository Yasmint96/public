/* 
web programming 2 - Zefat Academic Collage 
Ex3 - final project - Remember The Cow
Submitted to the lecturer: Boaz Miller

Students names : 
Yasmin Mokhtar 316358944
Lubna Abo Janb 322394917
May Hammad 206706004
*/
function addItem() {
    let add = document.getElementById("todolist");
    let addingitem = document.getElementById("itemtext");
    let li = document.createElement("li");
    li.setAttribute('id', addingitem.value);
    li.appendChild(document.createTextNode(addingitem.value));
    add.appendChild(li);


    // Clear the input field
    document.getElementById("itemtext").value = "";
    
}
// Creating a function to remove item from list
function removeItem() {
    let deleting= document.getElementById("todolist");
    let firstItem = deleting.querySelector("li");
    if (firstItem) {
        deleting.removeChild(firstItem);
    } else {
        alert("No items to remove.");
    }
    document.getElementById("AddToBottom").onclick = addItem;
        document.getElementById("DeleteTopItem").onclick = removeItem;
}