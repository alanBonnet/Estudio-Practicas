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
function obtenerPcias() {
    // await retrasar(1800);

    const consulta = fetch('');
}
//----------------------------------------------------------------------------
// Función que retorna los datos de departamentos
function obtenerDptos() {
    // await retrasar(1391);

    const consulta = fetch('');
}
//----------------------------------------------------------------------------
// Función que retorna los datos de localidades
function obtenerLocalidades() {
    // await retrasar(900);

    const consulta = fetch('');
}



//----------------------------------------------------------------------------
// Funcion para obtener todos los datos
function consultarDatos() {
    const provincias = obtenerPcias();
    const dptos = obtenerDptos();
    const localidades = obtenerLocalidades();

    console.log(provincias);
    console.log(dptos);
    console.log(localidades);
}

consultarDatos();

//----------------------------------------------------------------------------