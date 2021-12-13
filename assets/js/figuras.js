//Codigo del cuadrado 
function perimetroCuadrado(lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

//Codigo del triangulo

function perimetroTriangulo(lado1, lado2, base){
    const resultado = lado1 + lado2 + base;
    return resultado;
}

function areaTriangulo(base, altura){
    return (base * altura) / 2;
} 

//Codigo Circulo


function diametroCirculo(radio){
    return radio * 2;
} 
const PI = Math.PI;
function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI; 
}

function areaCirculo(radio){
    return (radio * radio) * PI;
}

// Interaccion con HTML
const formularioCuadrado = document.getElementById("formularioCuadrado");
const formularioTriangulo = document.getElementById("formularioTriangulo");
const formularioCirculo = document.getElementById("formularioCirculo");
const btnPerimetroCuadrado = document.getElementById("btn-perimetroCuadrado");
const btnAreaCuadrado = document.getElementById("btn-areaCuadrado");
const btnPerimetroTriangulo = document.getElementById("btn-perimetroTriangulo");
const btnAreaTriangulo = document.getElementById("btn-areaTriangulo");
const btnPerimetroCirculo = document.getElementById("btn-perimetroCirculo");
const btnAreaCirculo = document.getElementById("btn-areaCirculo");
formularioCuadrado.addEventListener("submit", (e)=>{
    e.preventDefault();
});
formularioTriangulo.addEventListener("submit", (e)=>{
    e.preventDefault();
});
formularioCirculo.addEventListener("submit", (e)=>{
    e.preventDefault();
});
btnPerimetroCuadrado.addEventListener('click',()=>{
    const input = document.getElementById("inputCuadrado");
    const resultado = document.getElementById("resultado-cuadrado");
    const valor = parseInt(input.value);
    const perimetro = perimetroCuadrado(valor);
    resultado.innerText = "Perimetro: " + perimetro;
    input.value = "";
});
btnAreaCuadrado.addEventListener('click', ()=>{
    const input = document.getElementById("inputCuadrado");
    const resultado = document.getElementById("resultado-cuadrado");
    const valor = parseInt(input.value);
    const area = areaCuadrado(valor);
    resultado.innerText = "Area: " + area;
    input.value = "";
});
btnPerimetroTriangulo.addEventListener('click', ()=>{
    const input = document.getElementById("inputTriangulo");
    const input1 = document.getElementById("inputTriangulo1");
    const input2 = document.getElementById("inputTriangulo2");
    const resultado = document.getElementById("resultado-triangulo");
    const valor = parseInt(input.value);
    const valor1 = parseInt(input1.value);
    const valor2 = parseInt(input2.value);
    const perimetro = perimetroTriangulo(valor,valor1,valor2);
    resultado.innerText = "Perimetro: " + perimetro;
    input.value = "";
    input1.value = "";
    input2.value = "";
    input3.value = "";
});
btnAreaTriangulo.addEventListener('click', ()=>{
    const input2 = document.getElementById("inputTriangulo2");
    const input3 = document.getElementById("inputTriangulo3");
    const resultado = document.getElementById("resultado-triangulo");
    const valor2 = parseInt(input2.value);
    const valor3 = parseInt(input3.value);
    const area = areaTriangulo(valor2,valor3);
    resultado.innerText = "Area: " + area;
    input2.value = "";
    input3.value = "";
});
btnPerimetroCirculo.addEventListener('click', ()=>{
    const input = document.getElementById("inputCirculo");
    const resultado = document.getElementById("resultado-circulo");
    const valor = parseInt(input.value);
    const perimetro = perimetroCirculo(valor);
    resultado.innerText = "Perimetro: " + perimetro;
    input.value = "";   
}); 
btnAreaCirculo.addEventListener('click', ()=>{
    const input = document.getElementById("inputCirculo");
    const resultado = document.getElementById("resultado-circulo");
    const valor = parseInt(input.value);
    const area = areaCirculo(valor);
    resultado.innerText = "Area: " + area;
    input.value = "";       
})
