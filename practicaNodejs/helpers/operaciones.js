const {validarArgumentosNumericos2} = require("./validaciones")
const multiplicar = (base, limite) => {
    try {
        validarArgumentosNumericos2(base,limite);
        return "aea mongol"
    } catch (error) {
        return error.message
    }
}
const sumar = (base,limite) => base+limite;
const restar = (base,limite) => base-limite;
const dividir = (base,limite) => base/limite;

module.exports = {
    multiplicar,
    sumar,
    restar,
    dividir
}
console.log("hora")
console.log(multiplicar(2,2))