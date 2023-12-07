//Ejercicio de Ejemplo usando --> PROMISE

function mostrarPhone(mensaje){
    return new Promise(function(resolve, reject){
        if(mensaje){
            resolve("Obtuviste un " + mensaje.brand);
        }else{
            reject("Error");
        }
    });
}

function miPromesa(){
    return new Promise(function(resolve, reject){
        let isHomeworkDone = true;
        if(isHomeworkDone === true){
            let phone = {
                color: "negro",
                brand: "iPhone"
            }
            resolve(phone);
        }else{
            reject("No obtuviste un iPhone");
        }
    });
}

miPromesa().then(function(mensaje){
    return mostrarPhone(mensaje);
}).then(function(respuesta){
    console.log(respuesta);
}).catch(function(error){
   
    console.log(error);
});