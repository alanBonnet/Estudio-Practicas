const { getUsuariosAsync } = require('./usuarios/users');
// function saludar(){}

// const funcionDeclarativa = () => {};

// () => {}

console.log('Inicio programa'); // 1
console.time('inicio');

getUsuariosAsync('Luis', (usuario) => { // 3
    console.log('Usuario 1:', usuario);
});

getUsuariosAsync('Sofia', (usuario) => { // 4
    console.log('Usuario 2:', usuario);
    console.timeEnd('inicio');
});

console.log('Fin programa'); // 2
