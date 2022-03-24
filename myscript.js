

let surname = 'Zack';
let firstname = 'Issahak';
let fullname = surname + firstname;

//alert(fullname);

//function use to group codes

//simple function
function onbulb(){
    document.getElementById('bolb').src = 'on bulb.png'
}

function offbulb(){
    document.getElementById('bolb').src = 'off.jpg'
}

// parametrized function
function popup( message){
    alert(message)
}

function myname(){
    document.getElementById('question').innerHTML = 'My Name is Mudasir';
}

let todos = [
    {
        mudasir: 'hi',
        ali: 'hello'
    }
]

console.log(todos[0].mudasir)

