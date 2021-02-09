---
path: dailycode-10
date: 2021-02-08T21:43:20.472Z
title: 'DailyCode #10'
description: Agrego iconos y animaciones a country quiz
---
![Lentes en una computadora con código detras](/assets/welcome-blog.jpeg)

Hola. 👋🏼 Espero que te encuentres bien. Bienvenido a otra entrada de **DailyCode**.

En estos últimos días no he podido trabajar en country quiz. Sin embargo hoy pude darme cuenta que todas las funcionalidades ya están listas y sólo me falta agregar detalles.

De estos últimos días he agregado unos iconos que se deben mostrar cuando se selecciona una pregunta correcta. Y también agregué ciertas animaciones.

## Agregando iconos

Esto fue sencillo. Bueno no tanto. Me costó descargar los iconos de [Material Design](https://material.io/) porque no encontraba como hacer. Sólo vi la opción de instalar todo el paquete de iconos y yo sólo quería dos.

Por los tanto una vez descargado los iconos, solamente tuve que utilizar un `img` y colocarle el atributo `src` la dirección donde se encontraba el archivo `.svg`.

```jsx
<span className="option">
  <img className="option__img"  src="check_circle_outline-white-24dp.svg" alt="rounded checked icon" />
  <img className="option__img"  src="close-black-24dp.svg" alt="X icon" />
</span>
```

Estos iconos van dentro de todos los  `ListItem` y se mostrarán solo cuando se seleccione una de las cuatro opciones.

Para no complicarme tanto con los estilos. A la clase `.list__item` le agregue un `display: flex` y centré el eje secundario, mientras que el principal los separé entre ellos:

```css
.list__item {
  ...
  display: flex;
  justify-content: space-between;
  align-items: center;
  ...
}
```

Como cambié el contenido del `<li>` dentro del componente `ListItem`. Para no generar un error en la función `handleChoice`, en la que se compara el interior del HTML con el estado `answer`, para verificar que la opción seleccionada es correcta. Se debe cambiar de `childNode.innerHTML` a `childNode.innerText`.

```jsx
...
const handleChoice = (choice, el) => {
  ...
  let correctAnswer

  for (let i = 0; i < 4; i++) {
    if (listItems[i].innerText === data.name) {
      correctAnswer = listItems[i]
    }
  }
  ...
}
```

## Agregando animaciones

Las animaciones no se me hizo un tema sencillo. Primero pensé en agregar las clases `answer--wrong` y `answer--correct` utilizando la función `setTimeout()` de Javascript.

Sin embargo, supuse esa no era la opción correcta porque eran varios eventos que tenía que pasar de forma asíncrona y podía ser un dolor de cabeza tratar de que una función no se ejecute antes que otra.

De modo que recordé que las animaciones de CSS pueden tener retraso. Por esa razón pensé en los tiempos de retraso de animaciones y agregar esta animación en la clase que se le agrega al elemento seleccionado.

Estas animaciones se llamarán `blinckedCorrectBg` y `blinkedWrongBg`. Serán igual, sólo que terminarán en colores diferentes.

```css
/* ListItem.css */

/* le asigno la animación a la clase que tendrá opción correcto*/
.answer--correct, .answer--correct:hover {
  animation: .8s blinkedCorrectBg linear 1 forwards;
}

/* Animación para cuando se seleccione la opción correcta */
@keyframes blinkedCorrectBg {
  0%, 40%, 80% {
    color: hsla(236.8, 54.4%, 59.6%, .8);
    background-color: white;
  }
  20%, 60%, 90% {
    color: white;
    background-color: #F9A826;
  }
  100% {
    color: white;
    border-color: green;
    background-color: green;
  }
}

/* Animación para la opción incorrecta */
@keyframes blinkedWrongtBg {
  0%, 40%, 80% {
    color: hsla(236.8, 54.4%, 59.6%, .8);
    background-color: white;
  }
  20%, 60%, 90% {
    color: white;
    background-color: #F9A826;
  }
  100% {
    color: white;
    border-color: red;
    background-color: red;
  }
}
```

En el código puedes ver que a la case `answer--correct` se le agrega la animación, la cual durará 0.8 segundos y los estilos finales serán los que queden en la clase.

Lo mismo lo realizo para la clase `answer--wrong`, la única diferencia es que el nombre la animación cambia a `blinkedWronBg`.

### Asignación de las clases

La manera de como se asignan estas clases cambian. Dado que la animación `blinkedCorrectBg` sólo ocurrirá cuando la opciones seleccionada sea correcta. No se realiza nada más porque la función `handleChoice` ya realiza esto.

```jsx
...
const handleChoice = (choice, el) => {
  if(choice === data.name) {
    el.classList.add("answer--correct")
  }
  el.classList.add("answer--wrong")
  ...
}
...
```

Igualmente, ya se asignaba la clase `answer--wrong` a la opción incorrecta. Con ello sólo falta agregar una clase llamada `answer--delay`. Que cambiará, con cierto retraso, el color de fondo de la respuesta correcta solo si la respuesta selecciona es la errada.

```jsx
// handleChoice function
...
el.classList.add("answer--wrong")
correctAnswer.classList.add("answer--delay")
...
```

Esta nueva clase retrasaba el cambio del color de fondo hasta que terminara `blinkedWrongBg`.

```css
/* ListItem.css */
...
.answer--delay {
  color: white;
  background-color: green;
  transition-delay: .8s;
  transition-duration: .2s;
}
...
```

## No es todo

Lo último agregado fueron dos `setTimeout()` la primera para mostrar el botón de `Show Next Quiz` y la segunda para mostrar los resultados.

```jsx
...
const handleChoice = (choice, el) => {
  // si la opcion es correcta
  if(choice === data.name) {
    el.classList.add("answer--correct")
    window.setTimeout( () => {
      setCorrectAnswers(correctAnswers + 1)
      setShowNextQuiz(true)
    }, 1000)
  }

  // sino
  el.classList.add("answer--wrong")
  correctAnswer.classList.add("answer--delay")
  window.setTimeout( () => {
    setGameOver(true)
    setGameMode("Results")
  }, 1400)
}
...
```

## Nos Leemos

Con todos esos cambios hechos, solo falta:

- Ordenar al azar las preguntar que se tiene como respuesta a la petición de API (para que no siempre esté en el primero puesto 😅)
- Mostrar los iconos de respuesta correcta e incorrecta
- Desactivas los eventos de clicks una vez se seleccione una pregunta

Luego terminaré esto. Por ahora, nos leemos 👋🏼

![Bob Esponja despiédiendose](/assets/cya.gif)

## Referencias

- [Transition CSS - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- [Animations CSS - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
- [Material Design Icons](https://material.io/resources/icons/?search=done&icon=check_circle_outline&style=baseline)
