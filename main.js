let closebtn = document.getElementsByClassName("close");

let i;
for (i = 0; i < closebtn.length; i++) {
    closebtn[i].addEventListener("click", remove);
}
function remove() {
    this.parentElement.style.display = "none";
}

let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function newElement() {
    let li = document.createElement("li");
    let inputValue = document.getElementById("textArea").value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Write something!");
    } else {
        document.getElementById("UL").appendChild(li);
    }
    document.getElementById("textArea").value = "";

    let span = document.createElement("SPAN");
    let txt = document.createTextNode("x");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    span.addEventListener("click", remove);
};

//add by using enter key 

let input = document.getElementById("textArea");

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("addButton").click();
    }
});

//clear items button work

function removeAll() {
    let lst = document.getElementsByTagName("ul");
    lst[0].innerHTML = "";
}