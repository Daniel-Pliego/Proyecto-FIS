  const logic = require('../logic/logic');
  const utf8 = require('utf8');
module.exports = {
  
    
  GetDatoDiarioIntentHandler : {
    canHandle(handlerInput) {
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'GetDatoDiario';
    },
    async handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();

        try {
            // call the progressive response service
            await logic.callDirectiveService(handlerInput, requestAttributes.t('PROGRESSIVE_MSG'));
          } catch (error) {
            // if it fails we can continue, but the user will wait without progressive response
            console.log("Progressive directive error : " + error);
        }

      
        const response = await logic.fetchDatoDiario(); //fetch dato

        let speechText = requestAttributes.t('API_ERROR_MESSAGE');
        if(response) {
            console.log(JSON.stringify(response));
            const results = response.items;
            speechText = requestAttributes.t('DATO_CURIOSO');
            results.forEach((curiosidad, index) => {
                console.log(curiosidad);
                
                if(curiosidad.dia === '1'){
                var dato = utf8.decode(curiosidad.dato)
                    speechText += dato + "  ";
                }
                   
            });
        }
        speechText += requestAttributes.t('AWAIT_RESPONSE');

        return handlerInput.responseBuilder
            .speak(speechText)
            .reprompt(requestAttributes.t('AWAIT_RESPONSE'))
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), speechText)
            .getResponse();
    }
}
    
}