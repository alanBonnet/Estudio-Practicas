/* 1)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 2 NUMEROS COMO ARGUMENTOS (x y z) EN EL CUAL
SI x ES MENOR QUE z, x DIVIDE A z, CASO CONTRARIO SE MULTIPLICAN. RETORNAR
EL RESULTADO

function ________(x,z){

	return
} */
const calculoMisterioso = (x,z) => {
    let resultado;
    (x < z)
    ? resultado = z/x
    : resultado = z*x;
    return resultado;
}
console.log(calculoMisterioso(2,8))
console.log(calculoMisterioso(8,2))
/* 2)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN VALOR COMO ARGUMENTO Y RETORNE DE QUE TIPO
ES (SI ES STRING, NUMBER, BOOLEAN, ETC)

function ________(a){

	return
} */

const tipoDeDato = valor => typeof valor ;
console.log(tipoDeDato("hola"));
console.log(tipoDeDato(2));
console.log(tipoDeDato([2,3,"a"]))
console.log(tipoDeDato({}))
console.log(tipoDeDato(true))

/* 3)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME 6 VALORES (a,b,c,d,e,f) COMO ARGUMENTOS
- a y b SE SUMAN
- EL RESULTADO DE LA SUMA SE RESTA CON c
- LUEGO SE MULTIPLICA POR d Y SE DIVIDE POR e
- FINALMENTE SE HACE LA POTENCIA CON EL EXPONENTE f.
- SE RETORNA EL RESULTADO
- TIP: RECORDAR EL ORDEN

function ________(a,b,c,d,e,f){

	return
} */
const calculoMisterioso1 = (a,b,c,d,e,f) => {
    let calculo = Math.pow( ( ((a + b ) - c ) * d ) / e ,f)
    return calculo
}
console.log(calculoMisterioso1(2,2,2,2,2,2))
/* 4)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO Y SE EXTRAIGA LOS
ULTIMOS 3 ELEMENTOS. RETORNAR EL RESULTADO COMO UN NUEVO ARRAY.

function ________([]){

	return
} */

const losUltimos3deUnArray = (arrayo) => {
    try {
       return arrayo.splice(arrayo.length -3);
    } catch (error) {
        return "El valor ingresado no es un array";
    }
}
console.log(losUltimos3deUnArray([2,3,4,5,6,7,8,9,4]))
console.log(losUltimos3deUnArray(2))
/* 5)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME UN ARRAY COMO ARGUMENTO, ORDENAR ALFABÉTICAMENTE
Y/O DE MAYOR A MENOR Y RETORNAR EL RESULTADO

function ________([]){

	return
} */
const ordenarArray = arrayo => {
    try {
        let ordenadoAlfabeticamente = arrayo.sort();
        let ordenadoMayorMenor = ordenadoAlfabeticamente.sort((a,b)=>b-a)
        return ordenadoMayorMenor;
    } catch (error) {
        return "El valor ingresado no es un array";
    }
};

console.log(ordenarArray(["a","c","a",6,1,4,3]))
console.log(ordenarArray("a"))
/* 6)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA COMO ARGUMENTO UN ARRAY (a) Y UN VALOR(b).
LA FUNCION DEBE REMOVER TODOS LOS ELEMENTOS DEL ARRAY IGUALES AL VALOR(b).
RETORNAR EL ARRAY FILTRADO

function ________(a,b){

	return
} */

const borrarElementsDeArray = (arrayo,valoresABorrar) => {
    try {
        return arrayo.filter(e => e !== valoresABorrar);
    } catch (error) {
        return "El valor ingresado no es un array";
    }
}
console.log(borrarElementsDeArray(["a","b","c","c","d"],"c"))
console.log(borrarElementsDeArray([1,6,2,4,2,4,5],2))
console.log(borrarElementsDeArray(true,2))
/* 7)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN ARRAY DE NUMEROS COMO ARGUMENTO Y QUE
RETORNE LA SUMA DE LOS ELEMENTOS DEL ARRAY. IDEM A ESTE APARTADO CREAR OTRA
FUNCIÓN QUE RETORNE EL PROMEDIO DE LOS ELEMENTOS DEL ARRAY.

function ________([]){

	return
}
 */

const sumaElementosArray = (arrayo) => {
    try {
        return arrayo.reduce((vAnterior,vPosterior) => {if(typeof vAnterior === "number" && typeof vPosterior === "number"){return vAnterior+vPosterior}else{meRompo}})
    } catch (error) {
        return "El valor ingresado no es un array o no todos los valores del array son numéricos"
    }
}
console.log(sumaElementosArray([2,2,2,2,2,90,5,20]))

/* 8)---------
IMPLEMENTAR UNA FUNCIÓN QUE TOME: OBJETO CON 2 O 3 PROPIEDADES Y UN STRING
COMO ARGUMENTOS. DEBE RETORNAR EL VALOR DE LA PROPIEDAD CUYA KEY SEA IGUAL
AL VALOR DEL STRING DEL ARGUMENTO

function ________({}, str){

	return
}
Ej: objeto({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre')
	Retorna 'Rosa'
*/

const rValoresObject = (objeto,texto) => objeto[texto];

console.log(rValoresObject({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'nombre'))
console.log(rValoresObject({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'apellido'))
console.log(rValoresObject({nombre: 'Rosa', apellido: 'Gomez', Tel: '12434'}, 'Tel'))

/* 9)---------
IMPLEMENTAR UNA FUNCIÓN QUE RECIBA UN OBJETO COMO ARGUMENTO Y RETORNAR
LA SUMA DE TODOS SUS VALORES.

function ________({}){

	return
} */
const sumaValoresObjeto = (objeto) =>{
    let sum = 0;
    for(let i in objeto){
        sum += objeto[i]
    }
    return sum
}
sumaValoresObjeto({pera:38,manzana:50,pizza:1400})