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
   #### 1. Transmisión
   #### 2. Recepción

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

### Método Aprendizaje
### Método Clasificación
### Método Razonamiento
### Método Optimización

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
   # Hogareños
   ## Mejora de electricidad del hogar
      1.AmeriTop - Luces solares para exteriores, superbrillantes LED con sensor de movimiento solar con iluminación de gran angular; 1600LM 6000K, 3 cabezales ajustables, IP65 impermeable iluminación de seguridad al aire última intervensión (blanco)
![luz solar](https://images-na.ssl-images-amazon.com/images/I/71dgZp8OFEL._AC_SL1500_.jpg)

      2.EconoHome Panel calentador de espacio de montaje en pared, con termostato, calentador de convección de 400 W, ideal para habitación de 120 pies cuadrados – calentador eléctrico de 120 V – ahorra hasta un 50% de costes de calefacción – Protección contra sobrecalentamiento
![panel solar](https://images-na.ssl-images-amazon.com/images/I/31PvzHh0FJL._AC_.jpg)

      3.Interruptor de luz inteligente de 3 vías, polo único, interruptor de luz WiFi funciona con Alexa y Google Assistant, control remoto, certificado UL, paquete de 2, color blanco
![interruptor](https://images-na.ssl-images-amazon.com/images/I/61d0iU-%2B4UL._AC_SL1000_.jpg)


      4.Steren SHOM-100 Tomacorriente Encendido Inalámbrico Wi-Fi

![conector inteligente](https://images-na.ssl-images-amazon.com/images/I/51tKL0A8DZL._AC_SL1200_.jpg)

   ## distribución de alimentos

      1.REFRIGERADOR FAMILY FRENCH DOOR SAMSUNG 24 PIES
![](https://cdn.homedepot.com.mx/productos/136234/136234-d.jpg)

      2.Cafetera Espresso Krups EA825511 Automática Premium Roja, Programable con sistema de auto encendido/apagado, Sistema Thermoblock, 15 bares de presión,1450W
![cafetera](https://images-na.ssl-images-amazon.com/images/I/81YECRdAKzL._AC_SL1500_.jpg)

      3.Ninja Foodi - Horno tostador digital de convección (10 en 1, con termómetro de capacidad XL y acabado de acero inoxidable)
![horno](https://images-na.ssl-images-amazon.com/images/I/81TvX3jF23L._AC_SL1500_.jpg)

      4.Purificador, humidificador y ventilador Dyson.
      Purifica, humidifica y te refresca automáticamente. 
![calentador](https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSukJh6k0c-jTp0FsQc5zOuokF0nZhB-1yzOZm9sOMZVUWmvO_jGh80BYosgFWe2SqGJ10jyW8ZXg&usqp=CAc)

      5.Licuadora Automática Inteligente De Calentamiento 1.7L, Con 10 Funciones De Mezcla 1000 Vatios De Alta Potencia, Adecuada Para Hacer Jugos De Batidos Y Otros Alimentos Mixtos, Color Dorado
![licuadora](https://images-na.ssl-images-amazon.com/images/I/51vtfQ1qSAL._AC_SL1001_.jpg)


   ## Limpieza
      1.iRobot Braava Jet M6 (6110) Ultimate Robot Mop- Conexión Wi-Fi, pulverizador de Chorro de precisión, Smart Mapping, Funciona con Alexa, Ideal para múltiples Habitaciones, Recarga y currículums
![trapeador inteligente](https://images-na.ssl-images-amazon.com/images/I/81xntNcNTPL._AC_SL1500_.jpg)

      2.YICI - Dispensador de jabón automático, 450 ml, sin contacto, dispensador de jabón líquido, con sensor inteligente, carga USB, para cocina, baño
![dispensador de jabon](https://images-na.ssl-images-amazon.com/images/I/61c0flTw7wL._AC_SL1500_.jpg)

      3.Multifuncional Hogar Usb Ultrasónico Lavavajillas Plato Era
![dispensador de jabon](https://http2.mlstatic.com/D_NQ_NP_2X_668973-CBT42818306456_072020-F.webp)

      4.Lavadora LG Automática WM22VV2S6B 22kg Silver
![lavadora inteligente](https://cdn1.coppel.com/images/catalog/pm/6351463-1.jpg)

   ## Inteligencia infantil

      1.4moms RockaRoo - Columpio para bebé, diseño de balancín Compacto con Movimiento Deslizante de Frente a atrás, Tela de Malla fría, Color Gris Oscuro
![columpio inteligente](https://images-na.ssl-images-amazon.com/images/I/818pfyzLwQL._AC_SL1500_.jpg)

      2.Fisher-Price - Touch 'N Learn Kinderbot
![robot](https://images-na.ssl-images-amazon.com/images/I/71auPbU3QpL._AC_SL1500_.jpg)

      3. Mtiny Coding Kit - 9 Languages
![coding](https://cdn.shopify.com/s/files/1/0081/1810/8231/products/mtiny_2048x2048.jpg?v=1604902518)

      4.Los Niños Inteligentes De Aprendizaje De Voz Diálogo Acompañando Al Ba
![niño inteligente](https://i.linio.com/p/567b59b72aed604bb4fd0459fa7bd27b-product.webp)
   ## Muebles
      1.Sillon Reclinable Electrico Con Audio Y Carga Inalambrica
![sofa inteligente](https://http2.mlstatic.com/D_NQ_NP_2X_820648-MLM31228944239_062019-F.webp)

      2.Mesa de centro inteligente con bocinas y refrigerador Bralf Sobro negro
![mesa para sala de estar](https://ss101.liverpool.com.mx/xl/1098030863.jpg)
   # Empresariales
   ## Análisis de datos y segmentación de clientes
      1.TABLEAU ES LA PLATAFORMA DE ANÁLISIS COMPLETA MÁS PODEROSA, SEGURA Y FLEXIBLE PARA TUS DATOS
   ## Servicio al cliente predictivo
      1.
   ## Previción de ventas y negocios
      1.
   ## Filtros de spam
      1.

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
