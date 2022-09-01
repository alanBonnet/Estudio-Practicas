const validarArgumentosNumericos2 = (base, limite) =>{
    if(!Number(base)){
        throw new Error(`La base no es un número. Valor recibido: ${base || "estring"}`)
    }
    if(!Number(limite)){
        throw new Error(`El límite no es un número. Valor recibido: ${limite}`)
    }
    
    if(limite < 0){
        throw new Error(`El limite no puede ser mnor a cero, valor recibido: ${limite}`)
    }
}

module.exports = {
    validarArgumentosNumericos2
}