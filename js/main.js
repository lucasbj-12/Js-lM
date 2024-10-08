let nombres = prompt ("Ingrese su nombre:");
let apellidos = prompt ("Ingrese su apellido:");
console.log ("Hola " + nombres + " " + apellidos + "!");

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

////////! Funciones //////////////

function preguntarEjercicios(){
let ejercicios = prompt ("Que parte de su cuerpo le gustaria entrenar?")
console.log ("Usted entrenara: " + ejercicios)
};

preguntarEjercicios();
preguntarEjercicios();
preguntarEjercicios();

////////! Objetos //////////////

let cliente ={
nombre: "Alan",
Apellido: "Garcia",
Nacionalidad: "Argentino",
Experiencia: "Primera vez que entrena.",
}
console.log(cliente.nombre);
console.log(cliente.Experiencia);

function Rutinas(alimentacion, entrenamiento, seguimiento){
    this.alimentacion = alimentacion;
    this.entrenamiento = entrenamiento;
    this.seguimiento = seguimiento;
}
let rutinas2 = new Rutinas("Se envio por mail", "Entregado al alumno", "Esperando resultados del alumno");
let rutinas3 = new Rutinas("Aun no realizada", "En realizacion", "Seguimiento activo");

console.log(rutinas2);
console.log(rutinas3);

////////! Arrays //////////////

let objetivos = ["Reduccion de peso", "Tonificar", "Ganar masa muscular", "Ser mas saludable", "Cambiar habitos"];

for (let i = 0; i < 5; i++){
    console.log(objetivos[i]);
};

////////! Funciones de orden superior //////////////

const insumos =["Proteinas", "Creatinas", "Indumentaria", "Maquinarias"];

insumos.forEach((insumo) => {
console.log(insumo);
});

const carrito =[{
    titulo: "Proteinas",
    precio:17500,
    cantidad: 2
},
{
    titulo: "Creatina",
    precio: 32000,
    cantidad: 3
},
{
    titulo: "Indumentaria",
    precio: 25000,
    cantidad: 2
},
{
    titulo: "Maquinaria",
    precio: 125000,
    cantidad: 2
}
];

const total = carrito.reduce((acc, prod)=> acc + prod.precio + prod.cantidad, 0);
console.log(total);

const hoy = new Date();
const comienzo = new Date(2024, 11, 18, 16 );
console.log(comienzo);