const notificarBtn = document.querySelector('#notificar');


notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(res => {
            console.log('El resultado es', res);
        });
})

const verNotificacion = document.querySelector('#verNotificacion')
verNotificacion.addEventListener('click', () => {
    if (Notification.permission === 'granted') {
        const notificacion = new Notification('Es la Notificacion', {
            icon: 'img/ccj.png',
            body: 'Codigo con juan aprende con proyectos reales'
        });
        notificacion.onclick = () => {
            window.open('https://developer.mozilla.org/es/docs/Web/API/Notifications_API/Using_the_Notifications_API')
        };
    }
})