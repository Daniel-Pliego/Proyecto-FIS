module.exports = {
    
    CancelAndStopIntentHandler : {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'AMAZON.CancelIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.StopIntent'
                || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent'); // <-- Cierra la sesion, si el usuario no quiere mas datos curiosos
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('STOP_MESSAGE');
        return handlerInput.responseBuilder
            .speak(speechText)
            .getResponse();
    }
}
    
};