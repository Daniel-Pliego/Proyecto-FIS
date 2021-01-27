const Alexa = require('ask-sdk-core');
module.exports = {
    
     SessionEndedRequestHandler : {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        console.log(`~~~~ Session ended: ${JSON.stringify(handlerInput.requestEnvelope)}`);
        // Cualquier logica de limpieza, va aqui
        return handlerInput.responseBuilder.getResponse(); // aviso que enviamos una respuesta vacía
    }
}
    
};