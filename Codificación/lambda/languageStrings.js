/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    es: {
        translation: {
            SKILL_NAME: 'Aprende Inteligencia Artificial',
            GET_FACT_MESSAGE: 'Este es el dato curioso del día: ',
            HELP_MESSAGE: 'Puedes decir dime un dato curioso de IA  o puedes decir salir.. Cómo te puedo ayudar?',
            HELP_REPROMPT: 
             [ 
                'Quiéres otra?',
                'Quiéres otra curiosidad?',
                'Te gustaría saber más?',
                'Quiéres saber la siguiente?',
                'Quiéres la siguiente curiosidad?',
                'Te digo otra?',
                'Te digo la siguiente',
                'Te digo otra curiosidad?',
                'Te digo la siguiente curiosidad?'
                ],
            FALLBACK_MESSAGE: 'No te puedo ayudar con eso, solo brindo información de Inteligencia Artificial. Como te puedo ayudar?',
            FALLBACK_REPROMPT: 'Como te puedo ayudar?',
            ERROR_MESSAGE: 'Lo sentimos, se ha producido un error en la matrix',
            STOP_MESSAGE: 
             [
                'Adios!',
                'Que tengas un buen dia!',
                'Nos vemos',
                'Hasta la próxima',
                'Chao',
                ],
            FACTS:
                [
                'La inteligencia Artificial fue desarrollada por primera vez en 1958.',
                'Yo fuí creada con inteligencia artificial.',
                'La inteligencia artificial sustituirá el 38% de los puestos de trabajo en los Estados Unidos para el 2030.',
                'Cada vez más las máquinas van adquiriendo más conocimiento y se vuelven más autónomas.',
                'La inteligencia artificial está incluida en los productos y servicios que utilizamos a diario, ya sea para un servicio de transporte, agendar citas y crear recordatorios, o incluso cuando contactamos al área de servicio al cliente para solicitar soporte.',
                ],
        }
    }

}