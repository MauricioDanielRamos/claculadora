import * as rls from "readline-sync";

let no1 : number = rls.questionInt("Ingrese un numero: ");
let no2 : number = rls.questionInt("Ingrese un numero: ");
let opcionMenu : number = rls.questionInt ("Ingrese 1 para sumar, 2 para restar y cualquier otra tecla para salir ");
let resultadoFuncion : number=0;

function calcularResultado (no1 : number, no2 : number, opcionMenu : number) : number {
    let resultado : number = 0;
    if (opcionMenu == 1) {
        resultado = no1 + no2;
    } else if (opcionMenu == 2) {
        resultado = no1 - no2;
    } /*else {
        resultado = ;
    };*/
    return resultado;
};

resultadoFuncion = calcularResultado (no1, no2, opcionMenu);


function dibujarGuionesN (numeroDeGuiones : number) {
    let i : number;
    let linea : string ="";
    for (i = 0; i <= numeroDeGuiones; i++) {
        linea = linea + "-";
    };
    console.log(linea);
};

dibujarGuionesN (resultadoFuncion);
console.log("el resultado es: ", resultadoFuncion);
dibujarGuionesN (50);