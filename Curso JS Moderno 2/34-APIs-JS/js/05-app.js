document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'visible') {
        console.log('repreoducir');
    } else {
        console.log('En pausa');
    }
});