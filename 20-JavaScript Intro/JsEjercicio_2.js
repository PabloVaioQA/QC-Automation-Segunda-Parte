//sumNumbers([10, "hello", 5, true, 8]) // should return 23

const lista = [10,"hello",5,true,8];


function sumNumbers(lista){
    let cont = 0;
    
    for(let i=0; i<5;i++){
        if(typeof(lista[i]) === 'number'){
            cont = cont + lista[i];
        }
    }
    
    console.log(cont)
}

sumNumbers(lista)

