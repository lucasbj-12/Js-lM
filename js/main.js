let nombre = prompt ("Ingrese su nombre:");
let apellido = prompt ("Ingrese su apellido:");
console.log ("Hola " + nombre + " " + apellido + "!");

let nacimiento = parseInt(prompt("Ingrese su año de nacimiento"));
let anio_actual = 2024;
let resultado = anio_actual - nacimiento;
console.log(resultado);

////////! Algoritmo condicional//////////////
let peso = parseInt(prompt ("Ingrese su peso actual:"));
if(peso !==""){
    alert("Su peso actual es de: " + peso + " Kg.");
} else{
    alert("Debe ingresar su peso actual!")
};

////////! Opearodes Avanzados //////////////

let alumnos = "Lucas";

for (let i = 1; i < 5; i++){
    if (i === 2){
        continue;
    }
    console.log("Cantidad de dias de entrenamiento: " +i);
};

////////! Opearodes Avanzados //////////////

function preguntarEjercicios(){
let ejercicios = prompt ("Que parte de su cuerpo le gustaria entrenar?")
console.log ("Usted entrenara: " + ejercicios)
};

preguntarEjercicios();
preguntarEjercicios();
preguntarEjercicios();

////////! Funciones //////////////