/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    es: {
        translation: {
            SKILL_NAME: 'Inteligencia Sintética',
            HELP_MESSAGE: [
                'Puedes decir, dime un dato curioso, o dame el dato curioso del día, ¿que haremos ahora?',
                'Te puedo ayudar, diciendo los datos curiosos más interesantes sobre inteligencia artificial, ó, si tienes alguna duda, dime, tengo una duda.',
                'Es un placer ayudarte. Mira, te diré mis funciones básicas. Puedo darte un dato curioso exclusivo. Todos los días tengo nuevo contenido, solo tienes que decir. Dime el dato curioso del día o puedo responder tus dudas, a preguntas frecuentes sobre inteligencia artificial, ¿Que te gustaría hacer?',
                'Hola, estoy aquí para ayudarte, te indico mis funciones basicas. Puedes decirme, dime un dato curioso, y te diré algo interesante sobre la inteligencia artificial. también puedo responder algunas preguntas frecuentes sobre el tema. Prueba diciendo. Tengo una duda. ¿Que te gustaría intentar?',
                ],
            PROGRESSIVE_MSG: 
            [ 
                'Obteniendo datos de la nube.',
                'Espera un momento.',
                'Buscando información para tí.',
                'Esperame un segundo.',
                'Dame un segundo, en lo que actualizo mis datos.',
            ],
            API_ERROR_MESSAGE: 
            [ 
                'Lo siento, ha habido un problema de acceso a la API externa. Por favor inténtalo otra vez.',
                'Vaya!, parece que tengo problemas al obtener esa información. Intentalo más tarde.',
                'Lo siento, mis sistemas detectan un problema al obtener la información. Prueba más tarde.',
                'Ocurrió un error al obtener esa información. Prueba de nuevo en unos minutos.',
                'Estoy teniendo problemas al extraer esa información. Intentalo otra vez, más tarde. ',
            ],
            DATO_CURIOSO: 
            [ 
                'Encontré esto para tí. ',
                'El dato curioso de hoy es: ',
                'Mis sistemas indican que el dato curioso de hoy es: ',
                'De acuerdo a mi base de datos, el dato curioso de hoy es: ',
                'El dato curioso de hoy, es el siguiente: ',
            ],
            AWAIT_RESPONSE: 
            [ 
                ' Te puedo ayudar en algo más?',
                ' ¿Interesante no?, prueba diciendo, Ayuda, para obtener más información de mi funcionamiento.',
                ' Algo más en lo que te pueda ayudar?.',
                ' Necesitas algo más?.',
                ' Muy interesante, prueba mañana con el mismo comando y obtendré nueva información para tí.',
            ],
            WELCOME_MSG: 
            [ 
                'Bienvenido de nuevo, que haremos hoy?.',
                'Hola, estoy de regreso, en que te puedo ayudar?.',
                'Veo que necesitas mi ayuda, prueba diciendo, dime un dato curioso.',
                'Hoy estamos listos para aprender, prueba diciendo, un dato curioso.',
                'Hola!, recuerda que puedes pedirme el dato curioso del día, todos los días hay nuevo contenido.',
                'Bienvenido, estoy aquí para ayudarte. Recuerda que si tienes dudas puedes decir. Tengo una duda.',
                'Nos volvemos a ver, hoy te gustaría aprender?. De ser así prueba diciendo, dame un dato.',
            ],
            INTRODUCTION: 'Hola, soy una skill para tu dispositivo Alexa y puedo ayudarte con datos curiosos, y respondiendo a tus preguntas sobre inteligencia artificial, que podrían ser interesantes para tu aprendizaje. Todos los días me estoy actualizando, para traer el mejor contenido para tí. Espero llevarme bien contigo y espero que podamos aprender juntos. Cuando necesites ayuda o dudas de lo que puedo hacer, puedes decir, Ayuda. Ahora, como primera instrucción puedes decirme. Dime un dato curioso, o dame el dato curioso del día.  ',
            HELP_REPROMPT: 
             [ 
                'Quiéres otra?',
                'Quiéres otra curiosidad?',
                'Te gustaría saber más?',
                'Quiéres saber la siguiente?',
                'Quiéres la siguiente curiosidad?',
                'Te digo otra?',
                'Te digo la siguiente?',
                'Te digo otra curiosidad?',
                'Te digo la siguiente curiosidad?'
                ],
             QUESTIONS_REPROMPT: 
             [ 
                'Si tienes otra pregunta, puedes decir, tengo una duda. Para conocer las preguntas que puedo responder.',
                'Si tienes otra duda, puedes decir, tengo una duda. Para conocer todas las preguntas frecuentes que puedo responder.',
                'Esa es toda la información que tengo registrada. Ahora prueba diciendo, responde mi duda, para conocer la lista de preguntas frecuentes.',
                'Ahora que sabes esa información puedes compartirla con tus amigos. Si quieres más información de las preguntas que puedo responder. Dime, tengo una duda.',

                ],
            FALLBACK_MESSAGE: 
            [
                'No te puedo ayudar con eso, solo brindo información de Inteligencia Artificial, y puedo responder a algunas preguntas frecuentes. Prueba diciendo, Ayuda.',
                'Prueba diciendolo una vez más',
                'No encontré una respuesta a lo que pides. Prueba diciendo, dime un dato curioso.',
                'No comprendo, prueba diciendo, Ayuda.',
                'Creo que no te he entendido, prueba de nuevo.',
                'No logro entender tu petición. Si necesitas ayuda prueba diciendo, Ayuda.',
                'Creo que no puedo ayudarte con eso, por ahora solo brindo datos curiosos de Inteligencia Artificial, y puedo responder algunas preguntas. Prueba diciendo, Ayuda.',
                'Dimelo otra vez',
                'No puedo ayudarte con eso, lo siento. ',
                'Lo siento, no logro entender eso. Prueba diciendo, Tengo una duda. ',
                'Veo que tengo problemas para entender tu petición, prueba diciendo, Ayuda.',
                'No logro comprender lo que necesitas, intenta con el comando, Dame el dato curioso del día.',
                'No logro comprender lo que necesitas, intenta con el comando, Tengo una duda',
                'No logro comprender lo que necesitas, intenta con el comando, Ayuda',
                 ],
            FALLBACK_REPROMPT: 'Como te puedo ayudar?',
            ERROR_MESSAGE: 'Lo sentimos, se ha producido un error en mis sistemas.',
            STOP_MESSAGE: 
             [
                'Adios!',
                'Que tengas un buen día!',
                'Nos vemos',
                'Hasta la próxima',
                'Chao',
                'Hasta luego',
                'Bueno, me despido, recuerda que mañana puedes pedirme el dato curioso del día.',
                'Adios!, espero escucharte pronto.',
                'Creo que es momento de irse, Nos vemos!',
                'Hasta luego, espero haberte ayudado.',
                ],

                
                // respuesta preguntas
                
                DOUBT_MSG:
                [
                    'Claro, dime que pasa ,te puedo ayudar respondiendo algunas de las  siguientes preguntas más  frecuentes: ¿cuáles son las ventajas de la inteligencia artificial?, ¿Quién inventó la Inteligencia Artificial?, ó ¿Por qué necesitamos la inteligencia artificial?, si quieres saber que otras preguntas puedo responder. Repite el mismo comando, o dime, Tengo una duda. ',
                    'Bien ,te puedo ayudar respondiendo algunas de las  siguientes preguntas más  frecuentes: ¿Qué es la inteligencia artificial?, ¿Cómo funciona el aprendizaje automático?, ¿Por qué es importante la inteligencia artificial?, si quieres saber que otras preguntas puedo responder. Repite el mismo comando, o dime, Tengo una duda. ',
                    'Te puedo ayudar respondiendo algunas de las  siguientes preguntas más  frecuentes: ¿Qué es la inteligencia artificial?, ¿Cómo funciona el aprendizaje automático?, ¿Por qué es importante la inteligencia artificial?, si quieres saber que otras preguntas puedo responder. Repite el mismo comando, o dime, Tengo una duda. ',
                    'Claro, dime que pasa ,te puedo ayudar respondiendo algunas de las  siguientes preguntas más  frecuentes: ¿cuáles son las ventajas de la inteligencia artificial?, ¿En qué año se creó la inteligencia artificial?, ó ¿Por qué necesitamos la inteligencia artificial?, si quieres saber que otras preguntas puedo responder. Repite el mismo comando, o dime, Tengo una duda. ',
                    ],
                ANSWER:
                [
                   'Claro, puedo ayudarte con eso. Mira, la primer ventaja, es que Se minimizan los errores,  la segunda es: LA inteligencia artificial es compatible con numerosos sectores e industrias, y por último, La inteligencia artificial optimiza al máximo los procesos de análisis, cuando nos referimos a una gran cantidad de datos.',
                   'Tengo buena información para tí. La inteligencia artificial tiene 3 ventajas principales. uno,  Se minimizan los errores, dos, LA inteligencia artificial es compatible con numerosos sectores e industrias. y tres, La inteligencia artificial optimiza al máximo los procesos de análisis, cuando nos referimos a una gran cantidad de datos.',
                ],
                
                ANSWER2:
                [
                   'Según mi base de datos, El término Inteligencia Artificial, fue inventado por John McCarthy, Marvin Minsky y Claude Shannon, en el año de 1956.',
                   'De acuerdo a mis registros. El término Inteligencia Artificial, fue inventado por John McCarthy, Marvin Minsky y Claude Shannon, en el año de 1956. ',
                ],
                
                ANSWER3:
                [
                   'Claro, La inteligencia artificial es necesaria, porque, Esto Permite que los programas de computación aprendan, en lugar de ser programados específicamente para realizar ciertas tareas. al igual que  facilita la vidad de los humanos  en ciertas áreas en las que se necesitan analizar grandes cantidades de datos. y esto contribuye a la  evolución futura.',
                   'La inteligencia artificial es muy necesaria, Esto Permite que los programas de computación aprendan, en lugar de ser programados específicamente para realizar ciertas tareas. al igual que  facilita la vidad de los humanos  en ciertas áreas en las que se necesitan analizar grandes cantidades de datos. y esto contribuye a la  evolución futura.',
                ],
                
                ANSWER4:
                [
                   'La verdad es que no existe una definicion específica, ni universal del término "Inteligencia Artificial", más bien se considera una disciplina de la informática, en el cual su desarrollo de máquinas y sistemas pueden llevar a cabo tareas de “aprendizaje automático". la inteligencia artificial es el nombre que se le asigna a una serie de tecnologías, con características o capacidades que antes eran exclusivas del intelecto humano. El término se aplica cuando una máquina imita las funciones cognitivas que los humanos asocian con otras mentes humanas, como aprender o resolver problemas.',
                   'La inteligencia artificial se considera una disciplina de la informática, en el cual su desarrollo de máquinas y sistemas pueden llevar a cabo tareas de “aprendizaje automático". la inteligencia artificial es el nombre que se le asigna a una serie de tecnologías, con características o capacidades que antes eran exclusivas del intelecto humano. El término se aplica cuando una máquina imita las funciones cognitivas que los humanos asocian con otras mentes humanas, como aprender o resolver problemas.',
                   'El término se aplica cuando una máquina imita las funciones cognitivas que los humanos asocian con otras mentes humanas, como aprender o resolver problemas.',
                ],
                
                ANSWER5:
                [
                   'El aprendizaje automático se basa a través de datos de entradas y salidas, también denominado machine learning, se refiere al proceso por el cual los ordenadores desarrollan el reconocimiento de patrones o la capacidad de aprender continuamente, y hacer predicciones basadas en datos, tras lo cual realizan ajustes sin haber sido programados específicamente para ello.',
                   'El aprendizaje automático, también denominado machine learning, se refiere al proceso por el cual los ordenadores desarrollan el reconocimiento de patrones o la capacidad de aprender continuamente, y hacer predicciones basadas en datos, por lo tanto siempre se están mejorando para tener resultados más precisos.',
                ],
                
                ANSWER6:
                [
                   'Esto es muy importante, porque, La inteligencia artificial tiene un impacto significativo en la creación, producción y distribución de bienes y servicios de índole económica y cultural. Está impulsando cada vez más importantes avances en todos los ámbitos y sectores. Resulta cada vez más evidente que comenzará a desempeñar un gran número de tareas rutinarias que, hasta ahora, han sido realizadas por los humanos.',
                   'Respondiendo a tu pregunta. La inteligencia artificial tiene un impacto significativo en la creación, producción y distribución de bienes y servicios de índole económica y cultural. Está impulsando cada vez más importantes avances en todos los ámbitos y sectores. Resulta cada vez más evidente que comenzará a desempeñar un gran número de tareas rutinarias que, hasta ahora, han sido realizadas por los humanos.',
                ],
                
                ANSWER7:
                [
                   'La inteligencia artificial ha sido usada en un amplio número de campos como la robótica, la comprensión y traducción de lenguajes, aprendizaje de palabras, entre más. Los principales y más destacados campos, donde podemos encontrar una evolución de la inteligencia artificial, son: Ciencias de la computación , Finanzas, Hospitales y medicina, Industria pesada, Servicio de atención al cliente, Transportación.',
                   'Me parece interesante que preguntes eso. La inteligencia artificial ha sido usada en un amplio número de campos como la robótica, la comprensión y traducción de lenguajes, aprendizaje de palabras, entre más. Los principales y más destacados campos, donde podemos encontrar una evolución de la inteligencia artificial, son: Ciencias de la computación , Finanzas, Hospitales y medicina, Industria pesada, Servicio de atención al cliente, Transportación, y asistentes virtuales.',
                ],
                
        }
    }

}