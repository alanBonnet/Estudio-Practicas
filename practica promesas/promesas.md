# En esta carpeta uso funciones con promesas y async
```js
//La estructura normal de una promesa arrowfunction es
const promesaFuncion = (parametros) => {
    return new Promise(resolve, reject)=>{
        const evaluacion = true || parametros;//que retornen un true;
        (evaluacion)//se recibe la evaluación en una condicion de operador ternario
        ? resolve("En caso que sea válida la expresión")
        : reject("En caso de que no sea válido y se quiera manejar un error")
    }
}

//Ahora para usar la promesa se puede hacer de la siguiente manera
promesaFuncion(parametros)
    .then(respuestaValida => /*Ejemplo: consola devuelvo el resultado*/console.log(respuestaValida) )
    .catch(respuestaError => console.log(respuestaError))
```