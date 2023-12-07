//Ejercicio 3 - LOOPS - Parte 1

console.log("Ejercicio Loops - Parte 1");

for(let i=1; i<=20; i++){

    if(i%2 == 0){
        console.log(i +" El numero es Par ")
        if(i%5 == 0){
            console.log(i + " También es divisible por 5");
        }
    }else{
        console.log(i +" El numero es Impar ")

        if(i%5 == 0){
            console.log(i + " También es divisible por 5");
        }
    }

}

//Ejercicio 3 - LOOPS - Parte 2

console.log("Números primos entre 1 y 100:");

// Función para verificar si un número es primo
function esPrimo(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// Bucle para encontrar y mostrar los números primos entre 1 y 100
for (let i = 1; i <= 100; i++) {
    if (esPrimo(i)) {
        console.log(i);
    }
}