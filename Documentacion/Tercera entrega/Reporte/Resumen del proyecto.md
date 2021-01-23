Hasta este punto ya casi finalizamos el proyecto, a continuación resumiré lo avanzado:

* **Diseño**

Concluida la primera entrega, determinamos completamente el proyecto a desarrollar , el cual consta de un skill de Alexa (Amazon), al cual llamamos Ingenio Artificial, este será interactivo para el aprendizaje de niños entre un rango de ciertas edades. Luego de la segunda entrega se ha concluido el logo al igual que las posibles interacciones que los usuarios podrían tener con el skill , también se diseñado la lógica del skill gráficamente, el cual consta del proceso que el skill llevara al momento que un usuario lo invoque incluyendo los errores y las acciones que esta llevara a cabo para poder dar una respuesta al usuario .Se determinado casos de uso así como historias de usuario ,en la parte de la planeación del diseño se incluyó una lista de curiosidades a cerca de la IA.

* **Pruebas**

La primera prueba que hicimos fue cuando estábamos comprobando la factibilidad del proyecto, probamos Alexa y los servicios de Amazon, al final comprobamos que si era factible hacer el proyecto con dichos servicios.
A lo largo del proyecto hicimos 3 pruebas distintas: Pruebas alfa, Pruebas unitarias,  Pruebas de integración.

Para las pruebas cada integrante del equipo instalo el asistente de voz (Alexa) para probar skill, los códigos se implementaron desde la consola de Alexa skill kit se realizaron pruebas alfa, que consisten en ir realizando pruebas mientras el sistema está en desarrollo y para verificar que lo que se está desarrollando sea correcto y útil para el cliente. Se llevaron a cabo pruebas unitarias en los intents de la skill, se probó el intentLaunch, para verificar que la skill se inicie al pronunciar la frase "Alexa, abre ingenio artificial, y así se fueron probando con todos los intents (negación, afirmación, next, help, stop, etc.), al igual se implementó pruebas de integración, para verificar que el sistema funcione adecuadamente, y este nos llevó a implementar la prueba de subsistema, la cual verifica que todo el contenido sea correcto.

* **Implementación**

Por la parte del código, esta fue la parte más extensa de todos los sprints previos, cada developer fue trabajando en una característica de la skill. Al principio se comenzó con un código base que ofrece ASK (Alexa Skill Kit), el cual nos proporcionó una idea más clara de las posibles interacciones que puede tener la skill con el usuario y que algunas de ellas ya se encuentran definidas.
Toda la parte de código se organizó por GitHub, teníamos un código base en una rama principal y de ahí todos crearon una subrama para trabajar.

La primera característica que se implementó fue el LaunchIntent. Donde el usuario realizaba la invocación de la skill mediante el nombre que le fue asignado y esta respondía con un texto al azar, los cuales se obtenían de un archivo JS.<br>
Como segunda característica se habilitaron los intents básicos que son necesarios para una skill. Help, Stop, Negación, Afirmación y en nuestro caso el GetDatoCurioso que era el que daba el dato curioso.<br>
La tercera característica fue el Next Intent, el cual permitía generar otra curiosidad al Azar si el usuario lo deseaba.<br>
La cuarta característica fue agregar todos los enunciados posibles que el usuario podría decir al momento de solicitar un "Dato curioso"<br>
La quinta característica fue modificar el LaunchIntent con la finalidad de brindar una introducción o instructivo la primera vez que el usuario usaba la skill.

En pocas palabras nuestro proyecto es un bot que responde a los comandos de voz del usuario y ya tenemos listo un prototipo de la Skill el cual brinda curiosidades de la Inteligencia artificial cada vez que se invoca.

