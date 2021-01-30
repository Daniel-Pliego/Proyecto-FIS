/*
 * Copyright 2018-2019 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

// sets up dependencies
const Alexa = require('ask-sdk-core');
var persistenceAdapter = getPersistenceAdapter();

function getPersistenceAdapter() {
    // This function is an indirect way to detect if this is part of an Alexa-Hosted skill
    function isAlexaHosted() {
        return process.env.S3_PERSISTENCE_BUCKET ? true : false;
    }
    const tableName = 'user_firtstime';
    if(isAlexaHosted()) {
        const {S3PersistenceAdapter} = require('ask-sdk-s3-persistence-adapter');
        return new S3PersistenceAdapter({ 
            bucketName: process.env.S3_PERSISTENCE_BUCKET
        });
    } else {
        // IMPORTANT: don't forget to give DynamoDB access to the role you're to run this lambda (IAM)
        const {DynamoDbPersistenceAdapter} = require('ask-sdk-dynamodb-persistence-adapter');
        return new DynamoDbPersistenceAdapter({ 
            tableName: tableName,
            createTable: true
        });
    }
}
 // Se separaron todos los intents, para que sea mas facil la edicion.
let { LaunchRequestHandler } = require('./intents/launchRequestHandler');
let { HelpIntentHandler } = require('./intents/helpIntentHandler');
let { GetDatoCuriosoIntentHandler } = require('./intents/getDatoCuriosoIntentHandler');
let { GetDatoDiarioIntentHandler } = require ('./intents/getDatoDiarioIntentHandler');
let { CancelAndStopIntentHandler } = require ('./intents/cancelAndStopIntentHandler');
let { ResetHandler } = require ('./intents/resetHandler');
let { FallbackHandler } = require('./intents/fallbackHandler');
let { SessionEndedRequestHandler } = require('./intents/sessionEndedRequestHandler');
let { ErrorHandler } = require('./errors/errorHandler');

// Inicia interceptors
let { LocalizationInterceptor } = require('./interceptors/localizationInterceptor');
let { LoadAttributesRequestInterceptor } = require('./interceptors/loadAttributesRequestInterceptor');
let { SaveAttributesResponseInterceptor } = require('./interceptors/saveAttributesResponseInterceptor');
// Termina interceptors



// Inicia intents Preguntas
let { doubtIntenthandler} = require('./intents/doubtIntenthandler');

let { QuestiononeIntentHandler } = require('./intents/questions');
let { QuestiontwoIntentHandler } = require('./intents/questions');
let { QuestionthreeIntentHandler } = require('./intents/questions');
let { QuestionfourIntentHandler } = require('./intents/questions');
let { QuestionfiveIntentHandler } = require('./intents/questions');
let { QuestionsisIntentHandler } = require('./intents/questions');
let { QuestionsevenIntentHandler } = require('./intents/questions');
// Termina preguntas






const skillBuilder = Alexa.SkillBuilders.custom();

exports.handler = skillBuilder
  .addRequestHandlers(
    LaunchRequestHandler,
    GetDatoCuriosoIntentHandler,
    GetDatoDiarioIntentHandler,
    HelpIntentHandler,
    CancelAndStopIntentHandler,
    FallbackHandler,
    SessionEndedRequestHandler,
    ResetHandler,
    QuestiononeIntentHandler,
    QuestiontwoIntentHandler,
    QuestionthreeIntentHandler,
    QuestionfourIntentHandler,
    QuestionfiveIntentHandler,
    QuestionsisIntentHandler,
    QuestionsevenIntentHandler,
    doubtIntenthandler
  )
  .addRequestInterceptors(LocalizationInterceptor,LoadAttributesRequestInterceptor)
  .addResponseInterceptors(SaveAttributesResponseInterceptor)
  .withPersistenceAdapter(persistenceAdapter)
  .addErrorHandlers(ErrorHandler)
  .withCustomUserAgent('sample/basic-fact/v2')
  .lambda();
