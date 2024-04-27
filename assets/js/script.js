

let numero1 = 0;
let numero2 = 0;

let result = 0;


let error1 = document.getElementById("error1");
let error2 = document.getElementById("error2");
let resultado = document.getElementById("resultado");

let btnSumar = document.getElementById("btnSumar");

let soloNumeros = /^[0-9]+$/;


btnSumar.addEventListener("click", function(){
    //e.preventDefault();

    error1.innerHTML = "";
    numero1 = document.getElementById("numero1").value;        

    if(numero1 === ""){
        error1.innerHTML = "Debe agregar el primer numero";
        error1.style.color = "red";
        return;
    }

    if(!soloNumeros.test(numero1)){
        error1.innerHTML = "Solo permite numeros";
        error1.style.color = "red";
        return;
    }
    
    numero2 = document.getElementById("numero2").value;

    if(numero2 === ""){
        error2.innerHTML = "Debe agregar el segundo numero";
        error2.style.color = "red";
        return;
    }

    result = parseInt(numero1) + parseInt(numero2);
    resultado.innerHTML = result;
    resultado.style.color = "blue";
    resultado.style.fontSize = "2rem";        

});










// Swal.fire({
//     title: "Atención",
//     text: "Debe agregar el segundo numero",
//     icon: "warning"
//   });