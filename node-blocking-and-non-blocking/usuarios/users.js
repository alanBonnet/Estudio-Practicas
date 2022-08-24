// Blocking
function getUsuariosSync(name) {
    const comenzar = new Date().getTime();

    while (new Date().getTime() - comenzar <= 3000) {
        // Esperando...
    }

    return {
        id: Math.floor(Math.random() * 20),
        nombre: `Usuario ${name}`
    }
};

// Non Blocking
function getUsuariosAsync(name, callback) {
    const user = {
        id: Math.floor(Math.random() * 20),
        nombre: name
    }

    setTimeout(() => {
        callback(user);
    }, 3000);
}

module.exports = {
    getUsuariosSync,
    getUsuariosAsync
}