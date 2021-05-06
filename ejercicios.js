
function conversion(){
var dolares = 100;
var T_lempiras;
var T_euros;
var T_pesos;

T_lempiras = dolares*24.13;
T_euros = dolares*0.83;
T_pesos = dolares * 20.28;

console.log("Lempiras "+ T_lempiras+ " "+
"Euros "+T_euros+" "+"pesos "+T_pesos);
}

function triangulo(){
    var a=5;
    var b=3;
    var c=2;

    if(a==b && a==c && b==c){
        console.log("Equilatero");
        }
        else if (a==b && a==c && b==c){
        console.log("Isósceles");    
        }
        else{
        console.log("Escaleno");
        }
}

function arreglo(){
    let arreglo = [10, 5, 3, 2];
    let count = arreglo.length;
    suma = arreglo.reduce((previous, current) => current += previous);
    console.log(suma);
    console.log(suma / count);

}

