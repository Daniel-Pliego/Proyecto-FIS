  const logic = require('../logic/logic');
  const utf8 = require('utf8');
module.exports = {
    
     GetDatoCuriosoIntentHandler : {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && (handlerInput.requestEnvelope.request.intent.name === 'GetDatoCuriosoIntent'
            || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent'   // <-- Necesario para que la skill diga otra curiosidad, cuando el usuario diga "SI"
            || handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NextIntent');// <-- Necesario para que la skill diga otra curiosidad, cuando el usuario diga "Siguiente"
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

      
        const response = await logic.fetchDatos(); //fetch dato

        let speechText = requestAttributes.t('API_ERROR_MESSAGE');
        if(response) {
            console.log(JSON.stringify(response));
            const results = response.items;
            speechText = requestAttributes.t('DATO_CURIOSO');
           
           var i = 0;

            i = Math.floor(Math.random() * results.length);
            var dato = utf8.decode(results[i].dato)
            speechText = dato;
        }
        
       
        return handlerInput.responseBuilder
            .speak(speechText + " " + requestAttributes.t('HELP_REPROMPT'))
            .reprompt(requestAttributes.t('HELP_REPROMPT')) // <-- Mantiene la sesión abierta, para que el usuario pida otra curiosidad
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), speechText)
            .getResponse();
    }
}
    
}