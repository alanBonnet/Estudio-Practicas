
/* 
        Transformar todas las funciones declarativas en funciones flecha.

        Iplementar los métodos .then y .catch necesarios para manejar las respuestas exitosas y/o los errores al invocar las funciones.

        Simplificar el código de las funciones.

        Transformar la función funcionCuatro() en una función asíncrona con la palabra reservada async e implementarla junto con await.

 */
//----------------------------------------------------------------
     // Promesa almacenada en una constante
     const promesa = new Promise((resolve, reject)=>{

        if( 10 === 11){
            resolve('Los valores son iguales');
        } else {
            reject('Los valores son distintos')
        }

    });


     const promesaUno = () => promesa;
    promesaUno(11).then(res => console.log(res)).catch(err=>console.log(err))
//----------------------------------------------------------------

    // Promesa dentro en una función.
    // function promesaDos(provincia){

    //     const promesa = new Promise( (resolve, reject)=> {
        
    //             if('Formosa' === provincia){
    //                 resolve('Usted está ubicado en Formosa');
    //             } else {
    //                 reject('Error al realizar la consulta')
    //             }

    //     });

    //     return promesa;
    // }

    // promesaDos("a")

    const promesaDos = provincia => new Promise((resolve, reject)=>{
        (provincia === "Formosa")
        ? resolve("Usted está ubicado en Formosa")
        : reject("Error al realizar la consulta")
    })

    promesaDos("Formosa").then(res => console.log(res)).catch(err => console.log(err))
//----------------------------------------------------------------

// function promesaTres(valorBooleano){

//     new Promise( ()=> {
//         ( true === valorBooleano )
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos')
//     })
    
// }

// promesaTres()
    const promesaTres = valorBoleano => new Promise((resolve, reject)=>{
        (true == valorBoleano)
        ? setTimeout(()=>{
            resolve("Los valores son iguales")
        },4000)
        : setTimeout(()=>{
            reject("Los valores son distintos")
        },5000)
    })
setTimeout(()=>{
    promesaTres(4==2+2).then(res=>console.log(res)).catch(err => console.log(err))
},10000)

//----------------------------------------------------------------

// function promesaCuatro(){

//     new Promise( ()=> {
//         ( true === arguments )
//         ? resolve('Los valores son iguales')
//         : reject('Los valores son distintos')
//     })
    
// }

// promesaCuatro()

const promesaCuatro = async (valorBoleano) => {
    try {
        const res = await promesaTres(valorBoleano);
        console.log(`${res} con await incorporado`)
    } catch (error) {
        console.log(error)
    }
}

promesaCuatro(4==2+2)
//----------------------------------------------------------------