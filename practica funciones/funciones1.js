//Funciones syntax

// Tipos según su declaración
//1 declaración
function sumaDeclarado(a,b,c=20) {
    return a+b+c;
}

//2 expresión
const sumaExpresion = function(a,b,c=20){
    return a+b+c;
}

//3 flecha(arrow function)
const sumaArrow = (a,b,c=20) => {
    return a+b+c;
}
//3.1 arrow function without {} && return

const sumaArrowNotReturn = (a,b,c=20) => a+b+c;
sumaDeclarado(2,3,5);//10
sumaExpresion(2,3,5);//10
sumaArrow(2,3,5);//10
sumaArrowNotReturn(2,3,5);//10


//Ejercicio

//Create a function to aply off %15 && 30% a varios productos xd.

//agregado de productos
const producto1={
    nombre:"Remera",
    precio: 3000
}
const producto2={
    nombre:"Jeans",
    precio:5000
}

//resolución
//1 declaración
function obtenerPrecios(producto,descuento_abc){
    const precios = {
        a: producto.precio,
        b:producto.precio * 0.85,
        c:producto.precio * 0.7 
    }
    return "El precio es de $"+precios[descuento_abc];
}
console.log(obtenerPrecios(producto2,"b"))
//2 expresión
const obtenerPrecios1= function (producto,descuento_abc){
    const precios = {
        a: producto.precio,
        b:producto.precio * 0.85,
        c:producto.precio * 0.7 
    }
    return "El precio es de $"+precios[descuento_abc];
}
//3 flecha
const obtenerPrecios2=  (producto,descuento_abc) => {
    const precios = {
        a: producto.precio,
        b:producto.precio * 0.85,
        c:producto.precio * 0.7 
    }
    return "El precio es de $"+precios[descuento_abc];
};
//4 flecha implicita
const obtenerPrecios3=  (producto) => `Sin Descuento: ${producto["precio"]} \nCon Descuento del 15%: ${producto["precio"] * 0.85} \nCon Descuento del 30%: ${producto["precio"] * 0.7}`;
console.log(obtenerPrecios1(producto1,"a"));
console.log(obtenerPrecios2(producto1,"a"))
console.log(obtenerPrecios3(producto1));

