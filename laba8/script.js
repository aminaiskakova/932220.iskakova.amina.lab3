function Add(){
    var row = document.querySelector(".row").cloneNode(true);
    var table = document.querySelector("#table");
    table.appendChild(row);
}

function Delete(button){
    button.parentElement.remove();
}

function Up(button){
    let row = button.parentElement.previousElementSibling;
    if (row){
        button.parentElement.after(row);
    }
}

function Down(button){
    let row = button.parentElement.nextElementSibling;
    if(row){
        button.parentElement.before(row);
    }
}

function Save(){
    let input_1 = document.querySelectorAll(".input1");
    let input_2 = document.querySelectorAll(".input2");

    var a = []
    for (var i = 1; i < input_1.length; i++){
        a.push(input_1[i].value + " : " + input_2[i].value);
    }
    a = JSON.stringify(a);
    a = '{' + a.slice(1, a.length - 1) + '}';

    let outputDiv = document.querySelector("#output");
    outputDiv.innerHTML = a;
}