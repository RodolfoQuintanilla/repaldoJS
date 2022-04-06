if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(res => console.log('correcto', res))
        .catch(err => console.log('fallo', err))
} else {
    console.log('No soportado');
}