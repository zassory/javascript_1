

export const sumar = (num1 = 1,num2 = 1) => {

    return parseInt(num1) + parseInt(num2);
}

export const restar = (num1 = 1,num2 = 1) => {

    return parseInt(num1) - parseInt(num2);
}

export function sumar1(num1,num2){
    return parseInt(num1) + parseInt(num2);
}

export const getResultado = (html,result) => {
    html.innerHTML = result;
    html.style.color = "blue";
    html.style.fontSize = "2rem";
}

export const limpiar = (html1,html2) => {
    html1.innerHTML = "";
    html2.innerHTML = "";
}


//export const sumar3 = num1 => (parseInt(num1) + parseInt(num2));
    


