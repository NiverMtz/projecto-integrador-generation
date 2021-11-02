
const APIController = (function() {
    //Claves 
    const clientId = 'c69f3ddae39f4420b1a2154940bd1b47';
    const clientSecret = '3c882df458c1499489589365765a9a87';

    // Métodos privados   / Solicitud de Acceso a la API
    const _getToken = async () => {
            //URL proporcionada por Spotify
                //Fetch sirve para hacer peticiones a un servidor
        const result = await fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            //Encabezado - Objeto
            headers: {
                //tipo de contenido 
                'Content-Type' : 'application/x-www-form-urlencoded', 
                //autorización 
                'Authorization' : 'Basic ' + btoa(clientId + ':' + clientSecret)
            },
            //Tipos de datos que se estan procesando 
            body: 'grant_type=client_credentials'
        });
            //Resultado de la peticion conviertiendolo a un objeto
        const data = await result.json();
        //hacer solicitudes
        return data.access_token;
    }
    //canciones
    const _getTrack = async (token, trackEndPoint) => {

        const result = await fetch(`${trackEndPoint}`, {
            method: 'GET',
            headers: { 'Authorization' : 'Bearer ' + token}
        });

        const data = await result.json();
        return data;
    }
    return {
        
        getTrack(token, trackEndPoint) {
            return _getTrack(token, trackEndPoint);
        }
    }
    
})();
