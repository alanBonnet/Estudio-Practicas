/* 
    EJ: 1
    Simular una carrera entre 3 personas
        Juan, Mario, Martín
    Orden de largada: será siempre el siguiente
        1° Juan,2° Mario, 3° Martin

    Orden de llegada: se determina con el nombre de cada uno vaya apareciendo en la consola
     de modo que el ganador será aquel sea el primero en aparecer

    Utilizando solamente el setTimeout()
        y sin alterar el orden de largada escribir el codigo necesario
        para obtener los sig resultados:
            Vuelta nro1 : 
                Mario, Martín, Juan
            Vuelta nro2 :
                Juan, martín, Mario
            Vuelta nro3 :
                Martín, Juan y mario
            Vuelta final : 
                Mario, Juan y Martín
*/


/* 
console.log("-----------------PUMMM---------------");
console.log("Y salen los competidores con Juan en la delantera, en el medio Mario y último Martín!!!");

const vuelta1 = ()=>{
    setTimeout(()=>{
        console.log("Juan");
    },1000)
        console.log("Mario")
        console.log("Martin")
    setTimeout(()=>{
        console.log("Primera vuelta completada, vaya estos competidores si que son fantásticos!!")
    },5000)
    setTimeout(() => {
        console.log("---------------------------------------")
    }, 5001);
}

const vuelta2 = () => {
        console.log("Juan");
    setTimeout(()=>{
        console.log("Mario")
    },2000);
    setTimeout(()=>{
        console.log("Martin")
    },1000);
    setTimeout(() => {
        console.log("---------------------------------------")
    }, 2001);
}
const vuelta3 = () => {
    setTimeout(()=>{
        console.log("Juan");
    },1000)
    setTimeout(()=>{
        console.log("Mario")
    },2000);
        console.log("Martin")
    setTimeout(() => {
        console.log("---------------------------------------")
    }, 2001);
}
const vueltaFinal = () => {
    setTimeout(()=>{
        console.log("Juan");
    },1000)
        console.log("Mario")
    setTimeout(()=>{
        console.log("Martin")
    },2000);
    setTimeout(()=>{
        console.log("Y el ganador es Marioooo!")
    },3000)
    setTimeout(() => {
        console.log("---------------------------------------")
    }, 3001);
}
(carrera =  () =>{
     vuelta1()
     setTimeout(() => {
        vuelta2()
     }, 6000);
     setTimeout(() => {
        vuelta3()
     }, 10000);
     setTimeout(() => {
        vueltaFinal()
     }, 15000);
})() */

let salidaHTML = document.getElementById('salida');


const listRepo = async () => {
    const repos = await fetch("https://api.github.com/repositories")
    const result = await repos
    return result;
}

listRepo()
.then(res => res.json())
.then(res => {
        console.log(res)
        salidaHTML.innerHTML= ""
        res.forEach(element => {
            salidaHTML.innerHTML +=  ` Nombre owner ${element.id} : ${element.owner.login}.
                                        <br />
                                        <br />
                                    `
            }
        )
    }
)
.catch(err => setTimeout(() => {salidaHTML.innerHTML = err}, 5000))