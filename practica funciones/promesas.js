// Json 
// 1 crar un programa que pida al usuario que ingrese un numero
// devuelva un mensaje indicando si >0 <0 ó == 0
const signoNumeros = numero => {
    return new Promise((resolve,reject)=>{
        numero > 0
            ?resolve("Es un valor positivo.")
            : numero === 0
                ? resolve("El valor es igual a 0.")
                :numero<0
                    ? resolve("Es un valor negativo.")
                    : reject("El valor ingresado no es un número.");

                
    })
}
const numero2 = 2;
signoNumeros(numero2).then(valor => console.log(valor)).catch(err => console.log(err))
//2 pida un numero
//devuelve si es numero primo o no

const numeroPrimo = numero => {
    return new Promise((resolve,reject)=>{
        let cont=0;
        for(let i = 1;i<=numero;i++){
            if(numero%i===0){
                cont++
            }
        }
        const boolPrimo = cont===2;
        (boolPrimo)
        ? resolve("Es un número primo.")
        : reject("No es un número primo.")
    })
}
const numeroso=2;
numeroPrimo(numeroso).then(res => console.log(res)).catch(err => console.log(err))

//3 recibe número
// determina si es par o impar


const esPar = numero => {
    return new Promise((resolve, reject) => { 
        const esPrimo = (numero % 2) === 0;
        esPrimo 
        ? setTimeout(()=>{resolve("Es un número par.")},1000)
        : reject("Es un número impar.");
    });
}
const numero1 =1 ;
esPar(numero1).then(valor => console.log(valor)).catch(err => console.log(err))

// ESTADOS DE PROMISES: 1) PENDIENTE, 2) RESUELTO Y 3) RECHAZADO.

// 3 EJEMPLOS.

const pagarConTarjeta = precio => {
    return new Promise((resolve,reject)=>{
        const limite = 10000 ;

        (precio <= limite)
        ? resolve("Compra Aprobada")
        : reject("Compra Rechazada");
    })
}
const precio = 51000;
pagarConTarjeta(precio)
    .then(res => console.log(res))
    .catch(err => console.log(err));

    /* const pagarConTarjeta1 = precio => {
         new Promise((resolve,reject)=>{
            const limite = 10000 ;
    
            setTimeout(()=>{
                (precio <= limite)
            ? resolve("Compra Aprobada")
            : reject("Compra Rechazada");
            },6000)
        })
    };
    setTimeout(()=>{
        console.log(pagarConTarjeta(precio))
    },10000) */

const pagarConTarjeta2=(precio, estaConectado) =>{
    return new Promise((resolve, reject) =>{
        const limite = 10000;
        if(!estaConectado) reject( "No hay conexión con el servidor");
        
        setTimeout(()=>{
            (precio<=limite)
                ? resolve("Compra Aprobada")
                : reject("Compra Rechazada");
                
        },5000)
        
    })}

;
pagarConTarjeta2(100000, true)
    .then(res => console.log(res))
    .catch(err => console.log(err))



    
//el await no puede estar sin el async
// necesariamente al usar el async/await
// es mejor usar el try-catch, funciona mejor así

const  procesarPago = async () => {
    try {
        const res = await pagarConTarjeta2(1000, true);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
// una vez hecha la async function obviamente
// hay que llamarla para usarla
procesarPago();


//lo mismo pero pasandole parámetros para que trabaje
const  procesarPagoConParametrosxd = async (precio,isConnected) => {
    try {
        const res = await pagarConTarjeta2(precio, isConnected);
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}
procesarPagoConParametrosxd(100000,false);


/* const datos = async () =>{
    const res = await fetch("https://db-remaf.herokuapp.com/api")
    .t)hen(res => JSON.parse(res))
    .then(resJson => resJson)
    
}
console.log(datos()) */ //sirve solo el caso para navegadores no node.js