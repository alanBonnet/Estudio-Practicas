//importo dependencias
const {sumar,dividir,multiplicar,restar} = require("./helpers/operaciones")


// se desestructura obviando los primeros dos parametros
const [, , ...args] =process.argv;

// se utiliza map para recorrer los argumentos y obtener su valor numérico

const arguments = args.map(arg => arg.split("=")[1])// se utiliza split para obtener el valor numérico

//se desestructuran los valores numéricos obtenidos
const [base, limite] = arguments;

try {
    console.clear();
    const resultado = multiplicar(base, limite);
    console.log(resultado);
} catch (error) {
    console.log(error.message)
}