const fetch = require('node-fetch');
var https = require('https');
module.exports = {
   
   
    fetchDatoDiario(){
        const endpoint = 'http://forogeek.net/alexa/day/';
        const url = endpoint;
        const headers = {'User-Agent': 'AlexaSkillIngenio'};
        console.log(url);

        async function getJsonResponse(url, headers){
            const res = await fetch(url, {headers});
            return await res.json();
        }

        return getJsonResponse(url, headers).then((result) => {
            return result;
        }).catch((error) => {
            return null;
        });
    },
    
    fetchDatos(){
        const endpoint = 'http://forogeek.net/alexa/';
        const url = endpoint;
        const headers = {'User-Agent': 'AlexaSkillIngenio'};
        console.log(url);

        async function getJsonResponse(url, headers){
            const res = await fetch(url, {headers});
            return await res.json();
        }

        return getJsonResponse(url, headers).then((result) => {
            return result;
        }).catch((error) => {
            return null;
        });
    },
    
    callDirectiveService(handlerInput, msg) {
        // Call Alexa Directive Service.
        const {requestEnvelope} = handlerInput;
        const directiveServiceClient = handlerInput.serviceClientFactory.getDirectiveServiceClient();
        const requestId = requestEnvelope.request.requestId;
        const {apiEndpoint, apiAccessToken} = requestEnvelope.context.System;

        // build the progressive response directive
        const directive = {
          header: {
            requestId,
          },
          directive:{
              type: 'VoicePlayer.Speak',
              speech: msg
          },
        };
        // send directive
        return directiveServiceClient.enqueue(directive, apiEndpoint, apiAccessToken);
    }
}