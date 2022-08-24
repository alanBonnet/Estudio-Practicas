const { getUsuariosSync } = require('./usuarios/users.js');

console.log('Inicio programa'); // 1
console.time('inicio'); 

const usuarioUno = getUsuariosSync('Luis'); // 3
console.log('Usuario 1:', usuarioUno); // 4

const usuarioDos = getUsuariosSync('Sofia'); // 5
console.log('Usuario 2:', usuarioDos);	// 6

console.log('Fin programa'); // 2
console.timeEnd('inicio');