module.exports = {
    
    
    QuestiononeIntentHandler : {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name=== 'QuestiononeIntent'
           
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('ANSWER');
        
        return handlerInput.responseBuilder
            .speak(speechText +" "+ requestAttributes.t('QUESTIONS_REPROMPT') )
            .reprompt(requestAttributes.t('AWAIT_RESPONSE'))// <-- necessary to keep the session open so users can request another fact
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), speechText)
            .getResponse();
    }
},

 QuestiontwoIntentHandler : {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'QuestiontwoIntent'
           
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('ANSWER2');
        
        return handlerInput.responseBuilder
            .speak(speechText +" "+ requestAttributes.t('QUESTIONS_REPROMPT') )
            .reprompt(requestAttributes.t('AWAIT_RESPONSE')) // <-- necessary to keep the session open so users can request another fact
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), speechText)
            .getResponse();
    }
},


 QuestionthreeIntentHandler : {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'QuestionthreeIntent'
          
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('ANSWER3');
        
        return handlerInput.responseBuilder
            .speak(speechText +" "+ requestAttributes.t('QUESTIONS_REPROMPT') )
            .reprompt(requestAttributes.t('AWAIT_RESPONSE')) // <-- necessary to keep the session open so users can request another fact
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), speechText)
            .getResponse();
    }
},



QuestionfourIntentHandler : {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'QuestionfourIntent'
          
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('ANSWER4');
        
        return handlerInput.responseBuilder
            .speak(speechText +" "+ requestAttributes.t('QUESTIONS_REPROMPT') )
            .reprompt(requestAttributes.t('AWAIT_RESPONSE')) // <-- necessary to keep the session open so users can request another fact
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), speechText)
            .getResponse();
    }
},

 QuestionfiveIntentHandler : {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'QuestionfiveIntent'
           
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('ANSWER5');
        
        return handlerInput.responseBuilder
            .speak(speechText +" "+ requestAttributes.t('QUESTIONS_REPROMPT') )
            .reprompt(requestAttributes.t('AWAIT_RESPONSE')) // <-- necessary to keep the session open so users can request another fact
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), speechText)
            .getResponse();
    }
},


 QuestionsisIntentHandler : {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'QuestionsisIntent'
           
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('ANSWER6');
        
        return handlerInput.responseBuilder
            .speak(speechText +" "+ requestAttributes.t('QUESTIONS_REPROMPT') )
            .reprompt(requestAttributes.t('AWAIT_RESPONSE')) // <-- necessary to keep the session open so users can request another fact
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), speechText)
            .getResponse();
    }
},


 QuestionsevenIntentHandler : {
    canHandle(handlerInput) {
        const request = handlerInput.requestEnvelope.request;
        return handlerInput.requestEnvelope.request.type === 'IntentRequest'
            && handlerInput.requestEnvelope.request.intent.name === 'QuestionsevenIntent'
           
    },
    handle(handlerInput) {
        const requestAttributes = handlerInput.attributesManager.getRequestAttributes();
        const speechText = requestAttributes.t('ANSWER7');
        
        return handlerInput.responseBuilder
            .speak(speechText +" "+ requestAttributes.t('QUESTIONS_REPROMPT') )
            .reprompt(requestAttributes.t('AWAIT_RESPONSE')) // <-- necessary to keep the session open so users can request another fact
            .withSimpleCard(requestAttributes.t('SKILL_NAME'), speechText)
            .getResponse();
    }
},


    
    
};