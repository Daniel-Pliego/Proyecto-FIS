# Implementación (Código)
Hablando un poco sobre el código, esta fue la parte más extensa de todos los sprints previos, cada developer fue trabajando en una característica de la skill. Al principio se comenzó con un código base que ofrece ASK (Alexa Skill Kit), el cual nos proporcionó una idea más clara de las posibles interacciones que puede tener la skill con el usuario y que algunas de ellas ya se encuentran definidas.

Toda la parte de código se organizó por GitHub, teníamos un código base en una rama principal y de ahí todos crearon una sub rama para trabajar. La primera característica que se implementó fue el LaunchIntent. Donde el usuario realizaba la invocación de la skill mediante el nombre que le fue asignado y esta respondía con un texto al azar, los cuales se obtenían de un archivo JS.

Como segunda característica se habilitaron los intents básicos que son necesarios para una skill. Help, Stop, Negación, Afirmación y en nuestro caso el GetDatoCurioso que era el que daba el dato curioso. La tercera característica fue el Next Intent, el cual permitía generar otra curiosidad al Azar si el usuario lo deseaba.

La cuarta característica fue agregar todos los enunciados posibles que el usuario podría decir al momento de solicitar un "Dato curioso"

La quinta característica fue modificar el LaunchIntent con la finalidad de brindar una introducción o instructivo la primera vez que el usuario usaba la skill.
