/* *
 * We create a language strings object containing all of our strings.
 * The keys for each string will then be referenced in our code, e.g. handlerInput.t('WELCOME_MSG').
 * The localisation interceptor in index.js will automatically choose the strings
 * that match the request's locale.
 * */

module.exports = {
    es: {
        translation: {
            SKILL_NAME: 'Ingenio Artificial',
            GET_FACT_MESSAGE: 'Este es el dato curioso del día: ',
            HELP_MESSAGE: 'Puedes decir dime un dato curioso de IA  o puedes decir salir.. Cómo te puedo ayudar?',
            WELCOME_MSG: 
            [ 
                'Bienvenido de nuevo, que haremos hoy?',
                'Hola, estoy de regreso, en que te puedo ayudar?',
                'Veo que ncesitas mi ayuda, prueba diciendo, dime un dato curioso',
                'Hoy estamos listos para aprender, prueba diciendo, un dato curiosos',
                'Nos volvemos a ver, hoy te gustaria aprender?. De ser así prueba diciendo, dame un dato',
            ],
            INTRODUCTION: 'Hola, soy un complemento para tu dispositivo Alexa y puedo ayudarte con datos curiosos de inteligencia artificial, que podrian ser interesantes para tu aprendizaje. Espero llevarme bien contigo y aprender juntos. Como primera instrucción puedes decirme. Dime una dato curioso.',
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
            FALLBACK_MESSAGE: 
            [
                'No te puedo ayudar con eso, solo brindo información de Inteligencia Artificial. Como te puedo ayudar?',
                'Prueba diciendolo una vez más',
                'Prueba diciendo, dime un dato curioso',
                'Creo que no te he entendido, prueba de nuevo',
                'Si necesitas ayuda prueba diciendo, Ayuda',
                'Creo que no puedo ayudarte con eso, por ahora solo brindo datos curiosos de IA',
                'Dimelo otra vez',
                'No puedo ayudarte con eso, lo siento :)',
                 ],
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
                'John McCarthy en 1995 usó por primera vez el termino inteligencia Artificial, en una conferencia que explicaba los principios del aprendizaje automático.',
                'A día de hoy, existen cuatro tipos de inteligencia artificial, Máquinas reactivas, Memoria limitada, Teoría de la mente, Autoconcienia',
                'Las aplicaciones como Facebook o Instagram, que usan filtros para las fotos. Hacen uso de patrones para reconocer el rostro de las personas.',
                'Yo fuí creada con inteligencia artificial y dominaré el mundo.',
                'Los coches más inteligentes, como los Tesla, pueden conducirse solos por la ciudad. Algo muy loco verdad?',
                'Existen otros bots inteligentes que pueden interactuar por voz. Te doy algunos ejemplos: Cortana, Google, Siri, entro otros. Pero yo soy la mejor!.',
                'Dentro de los próximos cinco años las personas podrán crear vínculos emocionales reales con las mascotas robóticas.',
                'Te has dado cuenta que la mayoria de las voces que usa una inteligencia artificial, son de mujeres? Bueno. Esto se debe a que las personas prefieren una voz femenina en sus asistentes virtuales. ',
                 'La inteligencia artificial se está utilizando para ayudar a abordar la crisis climática global. Te doy un ejemplo, ahora existen sistemas inteligentes que controlan la calefacción y luces de una casa. Todo esto ayuda a reducir o regular la cantidad de energia electrica que se consume.',
                'Gracias a la inteligencia artificial existen sistemas que pueden examinar la información del tráfico en toda la ciudad en tiempo real para ayudar a las personas a planificar eficientemente sus rutas de conducción.',
                'Sabias que hay una IA que se dedica a clasificar pepinos',
                 'Una empresa china hizo un refugio para gatos que usa IA y una cámara para abrir la puerta para que entren los gatos',
                'Una red neuronal es una forma de crear inteligencia artificial, funciona imitando vagamente el cerebro humano',
                'Las redes neuronales son muy poderosas, pero necesitan de una gran cantidad de datos',
                'El machine learning es una forma de crear inteligencia artificial, se usa mayormente para reconocer patrones, es muy útil en la bolsa de valores o para predecir qué película te gustaría ver',
                'Aunque la inteligencia artificial parezca algo lejano, hoy en día muchos productos tienen IA, ¡El futuro es hoy!',
                'Las redes sociales usan IA para predecir que contenido te gustaría ver y mostrártelo para que así te mantengas más tiempo usando la plataforma',
                'Uno de los primeros programas de inteligencia artificial fue “DENDRAL” creado en 1965, ayudaba a los biólogos y químicos a interpretar estructuras moleculares',
                'Deep blue fue el primer robot con IA fue hecho en 1996, es un robot que juega ajedrez y le ganó al campeón mundial de ajedrez',
                'Se creó un robot asesino que ya opera en Israel y corea del sur, este robot usa IA para fijar y matar objetivos de interés',
                'En 1982, Dickmanns consiguió que un vehículo eléctrico pudiese moverse a derecha e izquierda gracias a su visión artificial, fue el nacimiento de los vehículos autónomos.',
                'El 10 de febrero de 1996: el superordenador de IBM Deep Blue se impuso al entonces campeón, Garry Kaspárov, en la primera partida de un encuentro pactado a seis. Tras el susto inicial, el gran maestro ruso dominó con tres victorias, y dejó el marcador final en 4 a 2 a su favor.',
                'El robot Atlas es el robot humanoide bípedo desarrollado por Boston Dynamics. Mide 1.8 metros, pesa 80 Kilogramos y es capaz de realizar múltiples tareas, pero está orientado a las de búsqueda y rescate.',
                'El 15 de marzo de 2015, AlphaGo, una IA de Google, tumbó al campeón mundial de Go, Lee Sedol. El considerado como juego de estrategia más exigente del mundo, no fue un reto para esta IA de Google que doblegó al campeón por 4-1 tras cinco disputadas partidas.',
                'Mark Zuckerberg tiene ahora un nuevo "mayordomo virtual" en su hogar. Se llama Jarvis y es capaz hasta de jugar con la familia, tocar música, encender luces y reconocer a los visitantes para decidir si abre o no la puerta de casa. Es su mejor creación de inteligencia artificial.',
                'Facebook había tenido que desconectar dos máquinas porque habían creado un lenguaje propio e ininteligible para los humanos. La máquina se comunicaba en un inglés incorrecto y repetitivo que, sin embargo, para ella tenía un sentido muy concreto.',
                '¿Puede ser una inteligencia artificial más inteligente que otra? Pues parece que sí. Según las conclusiones publicadas por Business Insider. En 2016, el coeficiente intelectual de la inteligencia artificial de Google era de 47.3, por delante de la que ofrece el buscador chino Baidu (33), Bing (32) y Siri (24).',
                'Hace casi medio siglo, cuando los robots pertenecían al terreno de la ciencia ficción, nacía Shakey, un pionero que era capaz de percibir su entorno, planificar su ruta y desplazarse por su cuenta. Bill Gates o Arthur C. Clarke fueron algunas de las personalidades que se interesaron por “el primer robot móvil inteligente del mundo”.',
                'En 1966 desarrolló un programa con el que pretendía ser capaz de engañar a los humanos haciéndoles pensar que estaban hablando con otra persona. Se llamaba ELIZA, fue diseñado como un método para mostrar la superficialidad de la comunicación entre el hombre y la máquina. Lo hacía reconociendo palabras clave y preguntando sobre ellas como si fuera un psicólogo.',
                'En 2014 un ordenador ha superado por primera vez el test de Turing al convencer a un grupo de jueces que, en lugar de una programa informático, se trataba de un joven de 13 años llamado Eugene Goostman. El test de Turing es la prueba propuesta por Alan Turing en 1950 para comprobar si una máquina es inteligente. Y el programa creado por los ingenieros Vladimir Veselov y Eugene Demchenko, por primera vez, ha superado el reto.',

                ],
        }
    }

}