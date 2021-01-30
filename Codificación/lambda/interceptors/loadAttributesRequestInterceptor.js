module.exports = {
    
    LoadAttributesRequestInterceptor : {
    async process(handlerInput) {
        if(handlerInput.requestEnvelope.session['new']){ //es una nueva sesion?
            const {attributesManager} = handlerInput;
            const persistentAttributes = await attributesManager.getPersistentAttributes() || {};
            //obtiene los atributos persistentes y los copia a los atributos de sesion
            handlerInput.attributesManager.setSessionAttributes(persistentAttributes);
        }
    }
}
    
};