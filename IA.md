# IA

## Contenido temático
1. [Creación de IA](#creación-de-ia)


 
    1. [Método de la introspección](#método-de-la-introspección)

       1. [Percepción basada en la información obtenida de nuestros cinco sentidos](#percepción-basada-en-la-información-obtenida-de-nuestros-cinco-sentidos)

          1. [La visión](#1-la-visión)
          2. [La audición](#2-la-audición)
          3. [El olfato](#3-el-olfato)
          4. [EL gusto](#4-el-gusto)
          5. [EL tacto](#5-el-tacto)

       2. [Uso de lenguaje natural para el pensamiento](#uso-de-lenguaje-natural-para-el-pensamiento)
          1. [Transmisión](#1-transmisión)
          2. [Recepción](#2-recepción)

       3. [Estructura de la inteligencia artificial](#estructura-de-la-inteligencia-artificial)

          1. [Entrada](#1-entrada)
             1. [Percepción (visión, etc.)](#1-percepción-visión-etc)
                1. [Técnicas](#1-técnicas)
                   1. [Sistemas difusos](#1-sistemas-difusos)
                   2. [Red neuronal MLP](#2-red-neuronal-mlp)
                   3. [Red neuronal convolucional](#3-red-neuronal-convolucional)
                   4. [Inteligencia de enjambre](#4-inteligencia-de-enjambre)
                   5. [Sistema inmune artificial](#5-sistema-inmune-artificial)
                2. [Mensajes en lenguaje natural (diálogo)](#2-mensajes-en-lenguaje-natural-diálogo)
                3. [Datos](#3-datos)
                4. [Problemas](#4-problemas)
          2. [Procesamineto](#2-procesamineto)
             1. [Razonamiento](#1-razonamiento)
             2. [Representacion de conocimiento (modelo del mundo)](#2-representacion-de-conocimiento-modelo-del-mundo)
             3. [Aprendizaje automático](#3-aprendizaje-automático)
             4. [Procesamiento de lenguaje natural](#4-procesamiento-de-lenguaje-natural)
          3. [Reacción](#3-reacción)
             1. [Resolución de problemas](#1-resolución-de-problemas)
             2. [Respuestas en lenguaje natural (diálogo)](#2-respuestas-en-lenguaje-natural-diálogo)
             3. [Acciones (como en robótica o agentes)](#3-acciones-como-en-robótica-o-agentes)

    2. [Método Aprendizaje](#método-aprendizaje)
    3. [Método Clasificación](#método-clasificación)
    4. [Método Razonamiento](#1-razonamiento)  
    5. [Método Optimización](#método-optimización)
- [IA](#ia)
  - [Contenido temático](#contenido-temático)
  - [Creación de IA](#creación-de-ia)
    - [Método de la introspección](#método-de-la-introspección)
      - [Percepción basada en la información obtenida de nuestros cinco sentidos](#percepción-basada-en-la-información-obtenida-de-nuestros-cinco-sentidos)
      - [1. La visión](#1-la-visión)
      - [2. La audición](#2-la-audición)
      - [3. El olfato](#3-el-olfato)
      - [4. EL gusto](#4-el-gusto)
      - [5. EL tacto](#5-el-tacto)
      - [Uso de lenguaje natural para el pensamiento](#uso-de-lenguaje-natural-para-el-pensamiento)
      - [1. Transmisión](#1-transmisión)
      - [2. Recepción](#2-recepción)
      - [Estructura de la inteligencia artificial](#estructura-de-la-inteligencia-artificial)
      - [1. Entrada](#1-entrada)
      - [1. Percepción (visión, etc.)](#1-percepción-visión-etc)
      - [1. Técnicas](#1-técnicas)
      - [1. Sistemas difusos](#1-sistemas-difusos)
      - [2. Red neuronal MLP](#2-red-neuronal-mlp)
      - [3. Red neuronal convolucional](#3-red-neuronal-convolucional)
      - [4. Inteligencia de enjambre](#4-inteligencia-de-enjambre)
      - [5. Sistema inmune artificial](#5-sistema-inmune-artificial)
      - [2. Mensajes en lenguaje natural (diálogo)](#2-mensajes-en-lenguaje-natural-diálogo)
      - [3. Datos](#3-datos)
      - [4. Problemas](#4-problemas)
      - [2. Procesamineto](#2-procesamineto)
      - [1. Razonamiento](#1-razonamiento)
      - [2. Representacion de conocimiento (modelo del mundo)](#2-representacion-de-conocimiento-modelo-del-mundo)
      - [3. Aprendizaje automático](#3-aprendizaje-automático)
      - [4. Procesamiento de lenguaje natural](#4-procesamiento-de-lenguaje-natural)
      - [3. Reacción](#3-reacción)
      - [1. Resolución de problemas](#1-resolución-de-problemas)
      - [2. Respuestas en lenguaje natural (diálogo)](#2-respuestas-en-lenguaje-natural-diálogo)
      - [3. Acciones (como en robótica o agentes)](#3-acciones-como-en-robótica-o-agentes)
    - [Método Aprendizaje](#método-aprendizaje)
    - [Método Clasificación](#método-clasificación)
    - [Método Razonamiento](#método-razonamiento)
    - [Método Optimización](#método-optimización)
  - [Productos de la IA](#productos-de-la-ia)
    - [Investigación científica](#investigación-científica)
      - [Redes neuronales](#redes-neuronales)
      - [Vision de máquina](#vision-de-máquina)
      - [Algoritmos genéticos](#algoritmos-genéticos)
      - [Descubrir fármacos](#descubrir-fármacos)
    - [Mejora en la calidad de vida](#mejora-en-la-calidad-de-vida)
      - [Máquinas traductoras](#máquinas-traductoras)
      - [Robot de conversación](#robot-de-conversación)
      - [Asistente digital virtual](#asistente-digital-virtual)
      - [Lingüística computacional](#lingüística-computacional)
      - [Prótesis inteligentes](#prótesis-inteligentes)
    - [Hogareños](#hogareños)
      - [Mejora de electricidad del hogar](#mejora-de-electricidad-del-hogar)
      - [distribución de alimentos](#distribución-de-alimentos)
      - [Limpieza](#limpieza)
      - [Inteligencia infantil](#inteligencia-infantil)
      - [Muebles](#muebles)
    - [Empresariales](#empresariales)
      - [Análisis de datos y segmentación de clientes](#análisis-de-datos-y-segmentación-de-clientes)
      - [Servicio al cliente predictivo](#servicio-al-cliente-predictivo)
      - [Previción de ventas y negocios](#previción-de-ventas-y-negocios)
      - [Filtros de spam](#filtros-de-spam)
  - [Debate ético sobre IA](#debate-ético-sobre-ia)
    - [Beneficios de la IA](#beneficios-de-la-ia)
      - [Medicina](#medicina)
      - [Arte](#arte)
      - [Ciencia](#ciencia)
      - [Ambiente](#ambiente)
      - [Automatización de trabajos](#automatización-de-trabajos)
    - [Riesgos de la IA](#riesgos-de-la-ia)
      - [Películas de ciencia ficción](#películas-de-ciencia-ficción)
      - [IA todopoderosa](#ia-todopoderosa)
      - [Pérdida de trabajos](#pérdida-de-trabajos)
      - [Singularidad](#singularidad)
    - [Conclusión](#conclusión)
      - [El ying y el yang](#el-ying-y-el-yang)
      - [Mal uso de la IA](#mal-uso-de-la-ia)
      - [Conclusión final](#conclusión-final)
- [Referencias](#referencias)

[Referencias](#referencias)

---


<!--- Jerarquía 1 --->
## Creación de IA
<!--- Jerarquía 2 --->
### Método de la introspección

   #### Percepción basada en la información obtenida de nuestros cinco sentidos

   #### 1. La visión
   #### 2. La audición
   #### 3. El olfato
   #### 4. EL gusto
   #### 5. EL tacto

   #### Uso de lenguaje natural para el pensamiento

El lenguaje nos hace lo que somos. Ningún animal tiene un lenguaje; claro, los animales tienen sus sistemas de comunicación, pero nunca llegan a nivel de abstracción que desarrollaron los humanos. 


Entonces, de un lado, los humanos reciben la información a través del lenguaje y absorben toda la experiencia de la sociedad grabada en los textos y en palabras de los otros individuos. Del otro lado.

El lenguaje natural es nuestra principal manera de representar el conocimiento en nuestro modelo del mundo. También podemos reaccionar no solo con las acciones físicas, sino en forma verbal entrando en un diálogo. Esta interacción determina la estructura de la inteligencia artificial como ciencia que modela la inteligencia humana, Esta conlleva un l flujo de la información, con su entrada, procesamiento y salida en forma de las reacciones posibles.

![flujo de informacion](documentacion/recursos/flujo.png "flujo de información") 
      
A la percepción —que es en su gran parte la visión, los otros sentidos casi no se utilizan en la IA en su estado actual— le corresponde el área de procesamiento de imágenes y reconocimiento de patrones en imágenes.

El área de procesamiento de lenguaje natural (PLN) es una parte grande de la IA moderna.   

#### 1. Transmisión:

En el PLN se analizan la estructura de lenguaje humano y sus manifestaciones en los lenguajes específicos como el español, el inglés, el ruso, etc. para fines de la construcción de los modelos computacionales.

#### 2. Recepción:

También se estudian los métodos de cómo hacer que las computadoras entienden los textos, implementando análisis morfológico, sintáctico y semántico.
su objeto de estudio —el lenguaje natural— es fácilmente separable de los objetos de estudio de las otras áreas de la IA.

   #### Estructura de la inteligencia artificial

   #### 1. Entrada
   #### 1. Percepción (visión, etc.)
   #### 1. Técnicas
   #### 1. Sistemas difusos
   #### 2. Red neuronal MLP
   #### 3. Red neuronal convolucional
   #### 4. Inteligencia de enjambre
   #### 5. Sistema inmune artificial
   #### 2. Mensajes en lenguaje natural (diálogo)
   #### 3. Datos
   #### 4. Problemas
   #### 2. Procesamineto
   #### 1. Razonamiento
   #### 2. Representacion de conocimiento (modelo del mundo)
   #### 3. Aprendizaje automático
   #### 4. Procesamiento de lenguaje natural
   #### 3. Reacción
   #### 1. Resolución de problemas
   #### 2. Respuestas en lenguaje natural (diálogo)
   #### 3. Acciones (como en robótica o agentes)


## Método Aprendizaje

   Denominado en inglés **Machine Learning**.   

   El objetivo de esta rama (metodo) de la inteligencia artificial es el desarrollo de algoritmos que modifican o adaptan su desempeño con el fin de mejorar la tarea para la cual han sido programados. La mayor parte de los programas computacionales no tiene esta característica. 

   Por ejemplo:

   Al escribir un programa para multiplicar números enteros, al programa se le dan como datos de entrada un par de números y se obtiene como salida el producto de éstos. Este programa nunca cambia la función que relaciona la entrada y la salida, siempre que se dé como entrada el par 3,6 , el resultado será siempre 18.  En este caso ***no hay aprendizaje***.

   Pensemos ahora en un algoritmo que “aprenda” a reconocer los números nones sin darle la definición de éstos. Entonces, lo que se hace es darle al programa algunos ejemplos de entrenamiento como se haría con un niño al que se quiere enseñar el concepto. 
   
   Es decir, se le da una muestra de números pares e impares informando al programa cuáles corresponden a cada categoría. El programa, por sí mismo, debe “descubrir” el concepto de número impar y, eventualmente, aplicarlo a nuevos ejemplos no presentados con anterioridad.

   *El aprendizaje automático está enfocado a estudiar y desarrollar teorías y métodos para diseñar algoritmos de este tipo.*

## Método Clasificación

   Dentro del área de aprendizaje automático(Machine Learning), Existe un campo especializado llamado   aprendizaje de conceptos o  método de clasificación , cuyo propósito es identificar conceptos a partir de un conjunto de datos y representar el concepto en forma apropiada. En el caso más sencillo, el concepto se define como una función que hace corresponder a un conjunto de atributos un indicador que toma solamente dos valores, correspondientes a los ejemplos positivos del concepto y a los ejemplos negativos del concepto respectivamente.

El aprendizaje de conceptos es solamente una de tantas especialidades dentro del campo de aprendizaje automático.

 Pueden ser como :

Bias: Criterios de Selección de Hipótesis

Árboles de Decisión

## Método Razonamiento
## Método Optimización

## Productos de la IA

   ### Investigación científica
   #### Redes neuronales
   #### Vision de máquina
   #### Algoritmos genéticos
   #### Descubrir fármacos
   ### Mejora en la calidad de vida
   #### Máquinas traductoras
   #### Robot de conversación
   #### Asistente digital virtual
   #### Lingüística computacional
   #### Prótesis inteligentes
   ### Hogareños
   #### Mejora de electricidad del hogar
   #### distribución de alimentos
   #### Limpieza
   #### Inteligencia infantil
   #### Muebles
   ### Empresariales
   #### Análisis de datos y segmentación de clientes
   #### Servicio al cliente predictivo
   #### Previción de ventas y negocios
   #### Filtros de spam

<!--- Jerarquía 1 --->
## Debate ético sobre IA

   ### Beneficios de la IA
   #### Medicina
   #### Arte
   #### Ciencia
   #### Ambiente
   #### Automatización de trabajos
   ### Riesgos de la IA
   #### Películas de ciencia ficción
   #### IA todopoderosa
   #### Pérdida de trabajos
   #### Singularidad
   ### Conclusión
   #### El ying y el yang
   #### Mal uso de la IA
   #### Conclusión final


---
   # Referencias

