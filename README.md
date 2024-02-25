# Viajes Chile :national_park:
**Prueba evaluada / Fullstack Javascript / Modulo 2**

## Recursos utilizados
- HTML5
- CSS3
- JS
- BOOTSTRAP 5
- FONTAWESOME V.6
- JQUERY

## Estructura

Este landing page está estructurado de la siguiente forma en orden descendente dentro de la etiqueta principal ```<body>``` :

- ```<header>``` :
  - ```<nav>``` : Barra de navegación fija en la parte superior.
  - ```<div id="hero">``` : Este es el hero de la página, contiene un carrousel **componente de bootstrap** de 3 imágenes.

> Los links al realizar click se hace un scroll a la sección que se requiera visualizar.

- ```<main>``` :
  - ```<section>``` : Secciones principales la página 
    - ```id="section-about"``` : Es la sección de "¿Quiénes somos?, posee un título ```<h1>``` y un ```<div>``` que contiene los 3 textos con 3 iconos de **fontawesome**, estos están ordenados con **clases bootstrap** row y cols.
    - ```id="section-featured"``` : Es la sección de "Destacados", posee un título ```<h2>``` y un ```<div>``` que contiene rows y cols en donde esta situado el **componente de bootstrap** de cards, las cuales son 4 en lg , en pares en el tamaño md y de a 1 en sm.
    - ```id="section_contact"``` : Es la sección de contacto, posee un título ```<h3>``` y se utilizó un **componente de bootstrap** de formulario modificado para suplir el requerimiento. Este incluye nombre, asunto y mensaje, sin olvidar el botón de envío.

> En la etiqueta ```<main>``` están todos las secciones principales de la página, cualquier nueva adición de contenido principal debe ir aquí.

- ```<footer>``` : Contiene el nombre de la marca junto con links ```<a>``` hacia las redes sociales de Viajes Chile.

## Estilos

Aquí se encontrarán los estilos utilizados como colores y tipografía.

### Colores

- `#0ccaef`
- `#000000`
- `#ffffff`

>La mayora de colores negros `#000000` están por defecto, y los blancos `#ffffff` están añadidos por clases de bootstrap.

### TIpografía

La tipografía usada en esta página es :

**ROBOTO**

En su versión variable, insertada en el CSS a través del import :

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


## Interacciónes JS

Aquí se detallan los componentes de Bootstrap JS  y otras interacciónes:

  - Bootstrap JS
    - Carousel : Se implementa en el hero de la página, dentro del ```<header>``` con 3 imágenes.
    - Tooltips : Se implementa en la seccion ```id="section-about"``` , que contiene un link que usa tooltip y redirige a otra sección al presionar.
    - Alerts : Se crea alerta al "enviar" la información por el ```<form>``` de contacto.

- Otras interacciónes JS :
  - ```<nav>``` : Al realizar scroll la barra deja de ser transparente y cambia a color `#000000`, para una mejor visualización de los elementos.
  - 


## Responsividad 

- El proyecto es responsivo hasta tamaños móviles de 320px de ancho aproximadamente.
- La sección "¿Quiénes somos?" desaparece en tamaños menores debido a la longitud del texto.
- La barra de navegación es responsiva con menu hamburguesa funcional.