let buttonTarget = document.getElementsByClassName('button');


Array.from(buttonTarget).forEach(element => {
    element.addEventListener("click",function () {
        element.style.backgroundColor = 'black';
    })
})

