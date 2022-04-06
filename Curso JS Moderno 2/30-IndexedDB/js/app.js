let DB;

document.addEventListener('DOMContentLoaded', () => {
    crmDB();

    setTimeout(() => {
        crearCliente();
    }, 5000);
});

function crmDB() {
    //Crear Bd 1.0
    let crmDB = window.indexedDB.open('crm', 1);

    // si hay error 
    crmDB.onerror = function() {
        console.log('Hubo un error a la hora de crear una BD');

        DB = crmDB.result;
    };

    //Si se creo bien
    crmDB.onsuccess = function() {
        console.log('Base de datos Creada');
    };

    //Configuracion de la BD
    crmDB.onupgradeneeded = function(e) {
        const db = e.target.result;

        const objectstore = db.createObjectStore('crm', {
            keyPath: 'crm',
            autoIncrement: true
        });
        //Definir columnas
        objectstore.createIndex('nombre', 'nombre', { unique: false });
        objectstore.createIndex('email', 'email', { unique: true });
        objectstore.createIndex('telefono', 'telefono', { unique: false });


        console.log('columnas creadas');
    };

}

function crearCliente() {
    let transaction = DB.transaction(['crm'], 'readwrite');

    transaction.oncomplete = function() {
        console.log('Transaccion Completada');
    };

    transaction.onerror = function() {
        console.log('Error');
    };

    const objectStore = transaction.objectStore('crm');

    const nuevoCliente = {
        telefono: 54654654654,
        nombre: 'roro',
        email: 'correo@correo.com'
    };

    const peticion = objectStore.add(nuevoCliente);
    console.log(peticion);
}