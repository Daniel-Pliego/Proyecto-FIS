module.exports = {
    
    doubtIntenthandler : {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
        && handlerInput.requestEnvelope.request.intent.name === 'doubtIntent'
    },
       handle(handlerInput) {
           const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
           const speechText= requestAttributes.t('DOUBT_MSG');
         
           return handlerInput.responseBuilder
               .speak(speechText)
               .reprompt(speechText)
               .withSimpleCard(requestAttributes.t('SKILL_NAME'),speechText)
               .getResponse();
    }
}
    
};