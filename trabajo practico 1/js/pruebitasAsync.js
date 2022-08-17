/* 
console.log("Huguito");
setTimeout(()=>{
    console.log("Tequito TU FOKITO")
},3000)
console.log("Marcos");
console.log("Piroca");

for (let index = 0; index <= 300; index=index+2*6){
    console.log(index)
    if(index===300){
        console.log("gorda piroca")
    }
}
 */
//ej 
//definir fn comente
/* function primero(funcionSegunda, tiempoMiliSec){
    
    setTimeout(()=>{
        console.log("primero")
        funcionSegunda()
    }, tiempoMiliSec)
} */
// const primero = (funcionSegunda, tiempoMiliSec) =>{
    
//     setTimeout(()=>{
//         console.log("primero")
//         funcionSegunda()
//     }, tiempoMiliSec)
// }
/* function segundo(){
    console.log("segundo")
} */

// const segundo = ()=>{
//     console.log("segundo")
// }
// primero(segundo,2000)
/*
const miArray = ["Diego", "Armando", "Cubitos", "Leandro", "QEPD"];

miArray.forEach((nombre,indice)=>{
    console.log("El orden de ",nombre, " es : ",indice)
}
)

let aVerAlCine = miArray.filter(palabra => {return palabra.length >4})
console.log(aVerAlCine)

*/
/* 
const objetoEjemplo = {
    nombre:"Alancito",
    edad:23,
    domicilios:{
        real:"domi1",
        legal:"domi2"
    }

};
objetoEjemplo.apellido="Bonnetito";//agregado de attr en obj
console.log(objetoEjemplo)
console.log(objetoEjemplo["domicilios"])//vista del attr
console.log(objetoEjemplo.domicilios.legal)
objetoEjemplo.apellido = "Bonnet Caceres"
console.log(objetoEjemplo)

//eliminar un attr de un obj
delete objetoEjemplo.domicilios.real
console.log(objetoEjemplo)

objetoEjemplo.domicilios.real = "dom1"

console.log(objetoEjemplo)

console.log("edad" in objetoEjemplo)//retorna un boolean respondiendo la existencia del nombre de un attr
 */

/* 
let user = {}
user.name = "John";
user.surname = "Smith";
console.log(user)

user.name = "Peter";
console.log(user)

delete user.name
console.log(user)

user.setName = (neim)=>{
    user.name = neim;
}

user.setName("Rodrigo")
user.getAll = ()=>{
    return ("El nombre de: ",user.name,"\n Su apellido: ", user.surname)
}
console.log(user)

console.log(user.getAll())

for(let llavecita in user){
    console.log(llavecita)
} */

let prodAlgodon = {
    pirane: 420,
    laishi: 100,
    ibarreta: 250,
    "Palo Santo" : 120
}
let sum = 0;
for(let i in prodAlgodon){
    sum += prodAlgodon[i]
}
console.log(sum)
