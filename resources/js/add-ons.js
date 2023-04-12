let buttonTarget = document.getElementsByClassName('button');


Array.from(buttonTarget).forEach(element => {
    element.addEventListener("click",function () {
        element.style.backgroundColor = 'black';
    })
})

let sendButton = document.getElementById("sendbutton");

sendButton.onclick = function () {
    sendButton.style.backgroundColor = 'black';
}