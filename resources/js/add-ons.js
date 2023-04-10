let buttonTarget = document.getElementsByClassName('button');


buttonTarget.forEach(element => {
    element.addEventListener("click" , function (){
        element.style.backgroundColor = 'black';
    })
)