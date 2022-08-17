//Guardado de los invitados en el array
const Invitados = ["Lucas", "Matias", "Jose",
                   "Pedro", "Martina", "Marcelo",
                    "Esteban", "Marcela", "Martin"    
                  ];
// 1 Información del número de invitados.
console.log("Hay ",Invitados.length, " invitados.");
// 2 Información del nombre del último invitado según la lista.
console.log("El último invitado según la lista es: ",Invitados[Invitados.length-1]);
// 3
const ListaFinalInvitados = Invitados.map(e => e);

ListaFinalInvitados.splice(ListaFinalInvitados.indexOf("Pedro"),1)

// array.splice(PosicionElemento, CantidadElementos, ValorA[Agregar o Reemplazar](opcional if ValorA=>0)) 
// Si CantidadElementos > 0 Elimina
// Si CantidadElementos < 0 Agrega
// Si CantidadElementos == 0 Reemplaza

ListaFinalInvitados.push("Pedro");
//console.log(ListaFinalInvitados)
// 4 
ListaFinalInvitados.splice(ListaFinalInvitados.indexOf("Marcela"),1);
// ----

console.log(ListaFinalInvitados)
console.log(ListaFinalInvitados.sort());
console.log(ListaFinalInvitados.map(e => {return `${e}. Orden: ${ListaFinalInvitados.indexOf(e)+1} `}));


/* Invitados.forEach(e => {return console.log(e.sort())}) */
//js no bloqueante, simple thread, sincrónico




