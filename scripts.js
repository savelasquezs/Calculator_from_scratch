function resolver(){
    switch(operacion){
        case('+'):
            answer = parseFloat(parte1) + parseFloat(parte2);
            break;
        case('-'):
            answer = parseFloat(parte1) - parseFloat(parte2);
            break;
        case('x'):
            answer = parseFloat(parte1) * parseFloat(parte2);
            break;
        case('/'):
            answer = parseFloat(parte1) / parseFloat(parte2);
            break;
    }
    resultado.value = answer;
}


function ingresarNum(numero){
    if(ayuda){
        resultado.value = "";  
        ayuda=false
    }
    resultado.value += numero;
    resumen.value += numero;
}


function operar(signo){
    if(parte1 && !parte2 && resultado.value){
        parte2 = resultado.value;
        resolver()
    }
    else if (parte1 && parte2){
        parte2=resultado.value;
        parte1=answer;
        resolver()
    }
    else if (parte1 && !parte2){
        parte2=resultado.value;
    }
    else  {
        parte1=resultado.value;
    }
    console.log(parte1, parte2)
    ayuda=true
    operacion = signo;
    resumen.value += signo;
}


const resultado = document.querySelector('.screen');
const resumen = document.querySelector('.resumen');
const numero1 = document.querySelector('.numero1');
const numero2 = document.querySelector('.numero2');
const numero3 = document.querySelector('.numero3');
const numero4 = document.querySelector('.numero4');
const numero5 = document.querySelector('.numero5');
const numero6 = document.querySelector('.numero6');
const numero7 = document.querySelector('.numero7');
const numero8 = document.querySelector('.numero8');
const numero9 = document.querySelector('.numero9');
const numero0 = document.querySelector('.numero0');
const mas = document.querySelector('.mas');
const menos = document.querySelector('.menos');
const por = document.querySelector('.por');
const dividido = document.querySelector('.dividido');
const igual = document.querySelector('.igual');
const doble = document.querySelector('.doble');
const punto = document.querySelector('.punto');
const borrar = document.querySelector('.borrar');

// parte 1 y parte 2 son los numeros que se van a operar, answer es el resultado de la operacion, y operacion es el simbolo que se va a utilizar
let parte1, parte2,answer,operacion;
// ayuda, si es verdadero, significa que la ultima tecla que se presiono es una tecla de operación, esto ayudara a limpiar la pantalla cuando se quiera agregar un nuevo numero al proceso.
let ayuda = false;



numero1.addEventListener('click',function(event){ingresarNum('1')});
numero2.addEventListener('click',function(event){ingresarNum('2')});
numero3.addEventListener('click',function(event){ingresarNum('3')});
numero4.addEventListener('click',function(event){ingresarNum('4')});
numero5.addEventListener('click',function(event){ingresarNum('5')});
numero6.addEventListener('click',function(event){ingresarNum('6')});
numero7.addEventListener('click',function(event){ingresarNum('7')});
numero8.addEventListener('click',function(event){ingresarNum('8')});
numero9.addEventListener('click',function(event){ingresarNum('9')});
numero0.addEventListener('click',function(event){ingresarNum('0')});
doble.addEventListener('click',function(event){ingresarNum('00')});
punto.addEventListener('click',function(event){ingresarNum('.')});

menos.addEventListener('click',function(event){operar('-')});
mas.addEventListener('click',function(event){operar('+')});
dividido.addEventListener('click',function(event){operar('/')});
por.addEventListener('click',function(event){operar('x')});

borrar.onclick=function(){
    resultado.value= "";
    parte1 = "";
    parte2 = "";
    operacion = "";
    resumen.value ="";
}

igual.onclick = function(){
    if (parte1 && parte2){
        parte2=resultado.value;
        parte1=answer;
        resolver()
    }
    else if (parte1 && !parte2){
        parte2=resultado.value;
    }
    resolver()
    console.log(parte1,parte2)
    resumen.value += "=";
}