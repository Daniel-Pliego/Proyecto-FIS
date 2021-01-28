// LaunchRequestHandler
module.exports = {
    
    LaunchRequestHandler : {

    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'LaunchRequest';
    },
    handle(handlerInput) {
        const {attributesManager} = handlerInput;
        const requestAttributes = attributesManager.getRequestAttributes();
        const sessionAttributes = attributesManager.getSessionAttributes();
         const nuevoUser = sessionAttributes['new_user'];
         
        let speechText = requestAttributes.t('WELCOME_MSG');
        
        if(nuevoUser === undefined){
         sessionAttributes['new_user'] = 1;
         speechText = requestAttributes.t('INTRODUCTION');

        }
        
        return handlerInput.responseBuilder
        .speak(speechText)
        .reprompt('Hola, sigues por ahi?')
        .getResponse();
       
    }
}
    
    
};
    