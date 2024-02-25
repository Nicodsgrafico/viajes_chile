# Viajes Chile
**Prueba evaluada / Fullstack Javascript / Modulo 2**

## Recursos utilizados
- HTML5
- CSS3
- JS
- BOOTSTRAP 5
- FONTAWESOME V.6
- JQUERY

## Estructura

Este landing page esta estructurado de la siguiente forma en orden descendente dentro de la etiqueta principal ```<body>``` :

- ```<header>``` :
  - ```<nav>``` : Barra de navegación fija en la parte superior.
  - ```<div id="hero">``` : Este es el hero de la página, contiene un carrousel **componente de bootstrap** de 3 imagenes.

> Los links al realizar click se hace un scroll a la sección que se requiera visualizar.

- ```<main>``` :
  - ```<section>``` : Secciónes principales la página 
    - ```id="section-about"``` : Es la sección de "¿Quienes somos?, posee in título ```<h1>``` y un ```<div>``` que contiene los 3 textos con 3 iconos de **fontawesome**, estos estan ordenado con **clases bootstrap** row y cols.
    - ```id="section-featured"``` : Es la sección de "Destacados", posee un título ```<h2>``` y un ```<div>``` que contiene rows y cols en donde esta situado el **componente de bootstrap** de cards, las cuales son 4 en lg , en pares en el tamaño md y de a 1 en sm.
    - ```id="section_contact"``` : Es la sección de contacto, se utilizo un **componente de bootstrap** de formulario modificado para suplir el requerimiento. Este incluye nombre, asunto y mensaje, sin olvidar el botón de envio.

> En la etiqueta ```<main>``` estan todos las secciones principales de la página, cualquier nueva adición de contenido principal debe ir aquí.

- ```<footer>``` : Contiene el nombre de la marca junto con links ```<a>``` hacia las redes sociales de Viajes Chile.

## Estilos

Aqui se encontraran los estilos utilizados como colores y tipografía.

### Colores

- `#0ccaef`
- `#000000`
- `#ffffff`

>La mayoria de colores negros `#000000` estan por defecto, y los blancos `#ffffff` estan añadidos por clases de bootstrap.

### TIpografía

La tipografía usada en esta página es :

**ROBOTO**

En su versión variable, insertada en el CSS a travéz del import :

``` @import url('https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&display=swap');```


### Iconos 

Los iconos usados son traídos de **Fontawesome** en su *versión 6*, los cuales son :

- Para la sección quienes somos:
  - ```<i class="fa-solid fa-mountain"></i>```
  - ```<i class="fa-solid fa-plane"></i>```
  - ```<i class="fa-solid fa-route"></i>```

- Para el footer:
  - ```<i class="fa-brands fa-square-github"></i>```
  - ```<i class="fa-brands fa-linkedin></i>```
  - ```<i class="fa-brands fa-square-twitter"></i>```
  - ```<i class="fa-brands fa-square-facebook"></i>```


### Interacciónes JS

Aqui se detallan las interacciónes realizadas con javascript :

  - a