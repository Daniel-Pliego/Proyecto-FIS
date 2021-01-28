module.exports = {
    
ResetHandler : {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'DeleteIntent';
  },
  handle(handlerInput) {
    const requestAttributes = handlerInput.attributesManager.setSessionAttributes({})
    
  return handlerInput.responseBuilder
.speak("Datos de sesión borrados")
.withSimpleCard('', "Datos de sesión borrados")
.withShouldEndSession(true)
.getResponse()
  },
}

    
};