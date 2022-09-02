/* 

        Transformar todas las funciones declarativas en funciones flecha.

        Transformar las funciones en asíncronas con la palabra async.

        Colocar la url correcta del método fetch teniendo en cuenta el nombre de la función que la contiene.

        Luego de realizar el método fetch, implementar el método ".json()" sobre los datos obtenidos.

        Implementar await sobre todos los procesos asíncronos como consultas a la base de datos, conversión de formato json, etc.

        Selecconar las funciones retrasar, obtenerPcias, obtenerDptos, obtenerLocalidades, luego cortarlas y pegarlas en el archivo funciones-exportadas que se encuentra en la carpeta libs.

        Utilizar la palabra reservada export para exportar las funciones y que puedan ser utilizadas desde el archivo app.js. Pueden exportarlas una por una o como un solo objeto.

        Implementar bloques try catch para el manejo de errores.

 */
//----------------------------------------------------------------------------


// https://datosgobar.github.io/georef-ar-api/
const retrasar = milisegundos => new Promise(resolve => setTimeout(resolve, milisegundos));

// Función que retorna los datos de provincias
// function obtenerPcias() {
//     // await retrasar(1800);

//     const consulta = fetch('');
// }
export const obtenerPcias = async (provincia = "") => {
    try {
        (provincia.trim())
        ?provincia =`?nombre=${provincia}&`
        : provincia =`?`

        await retrasar(1800);
        const consulta = await fetch(`https://apis.datos.gob.ar/georef/api/provincias${provincia}aplanar=true&campos=completo&max=24`)
            .then(res => res.json())
            .then(respuestaObject => respuestaObject.provincias)
        return consulta
    } catch (error) {
        return error
    }
    
}

//----------------------------------------------------------------------------
// Función que retorna los datos de departamentos
// function obtenerDptos() {
//     // await retrasar(1391);

//     const consulta = fetch('');
// }

export const obtenerDptos = async (departamento = "") => {
    try {
        (departamento.trim())
        ? departamento = `?provincia=${departamento}&` 
        : departamento = `?`;
        await retrasar(1391);
        const consulta = await fetch(`https://apis.datos.gob.ar/georef/api/departamentos${departamento}aplanar=true&campos=completo&max=529`)
            .then(res => res.json())
            .then(respuestaObject => respuestaObject.departamentos );
        return consulta
    } catch (error) {
        return error
    }
}

//----------------------------------------------------------------------------
// Función que retorna los datos de localidades
// function obtenerLocalidades() {
//     // await retrasar(900);

//     const consulta = fetch('');
// }
export const obtenerLocalidades = async (localidad = "")=>{
    try {
        (localidad.trim())
        ? localidad = `?nombre=${localidad}&`
        : localidad = `?`;
        await retrasar(900);
        const consulta = await fetch(`https://apis.datos.gob.ar/georef/api/localidades${localidad}aplanar=true&max=4142`)
            .then(res => res.json())
            .then(respuestaObject => respuestaObject.localidades);
        return consulta
    } catch (error) {
        return error;
    }
}
export const consultarDatos =  async () => {
    try {
        const provincias =await  obtenerPcias();
        const dptos =await   obtenerDptos();
        const localidades =await   obtenerLocalidades();
        const infoDatos = {provincias,dptos,localidades}
            
        return infoDatos
    } catch (error) {
        return error
    }

}

//----------------------------------------------------------------------------
// Funcion para obtener todos los datos
// function consultarDatos() {
//     const provincias = obtenerPcias();
//     const dptos = obtenerDptos();
//     const localidades = obtenerLocalidades();

//     console.log(provincias);
//     console.log(dptos);
//     console.log(localidades);
// }

// consultarDatos();
      
//----------------------------------------------------------------------------

