---
path: dailycode-9
date: 2021-02-05T21:43:20.472Z
title: 'DailyCode #9'
description: Refactorizo el componente Quiz y agrego un spinner
---
![Lentes en una computadora con código detras](/assets/welcome-blog.jpeg)

Hola. 👋🏼 Espero que te encuentres bien. Bienvenido a otra entrada de **DailyCode**. Hoy fue un día de refactorizar componentes y agregar un spinner.

## Refactorización del componente Quiz

Tome la decisión de comenzar a refactorizar el componente Quiz porque era diferente de leer el componente y también porque quise agregar las preguntas de *la bandera X a cuál país pertenece.*

Por ello refactorizar para mostrar diferentes Quiz dependiendo del estado `gameMode` se haría más sencillo.

El componente `Quiz` tenía la forma de:

```jsx
// Quiz.js
...
function Quiz ({ gameMode, isLoading, quiz}) {

  let quizText

  if (gameOver && gameMode === 'Results') {
    quizText = <h3 style={{textAlign:'center'}}>
      {gameMode}
    </h3>
  } else {
    quizText = <h3>
      {gameMode === ""
      ? `Select game mode`
      : (isLoading
          ? `Loading ${gameMode} of... quiz...`
          : `${quiz.capital} is the capital of`
        )
      }
    </h3>

return quizText
...
```

<div style="width:50%;height:0;padding-bottom:60%;position:relative;"><iframe src="https://giphy.com/embed/eh7W3dJGvRa4FymAPf" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><small><p><a href="https://giphy.com/gifs/tiktok-dog-pitbull-big-eh7W3dJGvRa4FymAPf">via GIPHY</a></p></small>


Se ve horrible, lo sé. Lo que se me ocurrió para mejorarlo fue dividirlo en 3 componentes que dependerán de las propiedades `isLoading` y `gameMode`.

Cree el componente `IsLoading`, `CapitalQuiz` y `FlagQuiz`. Y se cargarían sin tantas condiciones anidadas.

```jsx
// IsLoading.js
...
const IsLoading = (props) => {
  return (
    <h3>
      Loading {props.mode} of... quiz...
    </h3>
  )
}
...
```

```jsx
// FlagQuiz.js
...
const FlagQuiz = (props) => {

  return(
    <h3>
      <img className="flag-img" src={props.flag} alt={`${props.country} flag`}/>
      Which country does this flag belong to?
    </h3>
  )
}
...
```

```jsx
// CaptialQuiz.js
...
function CapitalQuiz (props) {

  return (
    <h3> {props.capital} is the capital of</h3>
  )
}
...
```

Como puedes observas, todos los componentes retornan un elemento `<h3>`. Ya sólo falta llamarlos en `Quiz.js`.

```jsx
// Quiz.js
...
if (isLoading) {
  return <IsLoading mode={gameMode} isLoading={isLoading}/>
}
if (gameMode === "capital") {
  return <CapitalQuiz capital={quiz.capital}/>
}
if (gameMode === "flag") {
  return (
    <FlagQuiz country={quiz.name} flag={quiz.flagUrl} />
  )
}
return <h3>Select the game mode</h3>    
...
```
<div style="width:50%;height:0;padding-bottom:40%;position:relative;"><iframe src="https://giphy.com/embed/3kuSo744UIPJjcJUEn" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><small><p><a href="https://giphy.com/gifs/MaxisOfficial-approved-chopped-stamped-3kuSo744UIPJjcJUEn">via GIPHY</a></p></small>

El componente `IsLoading` se mostrará solo si la propiedad `isLoading` es verdadero. Mientras que `FlagQuiz` y `CapitalQuiz` lo harán dependiendo del modo de juego elegido.

No obstante se puede dar el caso que ningún modo de juego este seleccionado. Para ello es el último `return <h3>...</h3>`, en caso que ninguna condición se cumpla, que muestre ese `h3`.

## Creando el componente spinner

El componente `Spinner.js` es el más sencillo. Será solo un `div` que tenga la clase `spinner` para realizar la animación con `@keyframes`.

```jsx
// Spinner.js
...
return(
  <div className="spinner__container">
    <div className="spinner"></div>
  </div>
)
...
```

```jsx
// Spinner.css
spinner__container {
  display: flex;
  justify-content: center;
}

.spinner {
  width: 5em;
  height: 5em;
  border-radius: 50%;
  border: 15px solid hsla(236.8, 54.4%, 59.6%, .6);
  border-top-color: hsl(236.8, 54.4%, 59.6%);
  animation: spinner 1s linear infinite;
}

@keyframes spinner {
  from { transform: rotate(0deg) }
  to { transform: rotate(360deg) }
}
```

Como puedes leer, el spinner tiene el mismo alto y ancho para que sea un cuadrado y `border-radius: 50%` para que sea un círculo.

Con la propiedad `animation` le digo cual es la animación (`keyframs`) a utilizar. La animación dura 1 segundo, el progreso ( `timing function`) es lineal y las iteraciones son infinitas.

Para darle el toque un elemento girando sobre otro solamente se debe dar diferentes colores a los bordes.

Por último, en `keyframes` se debe establecer que rote de 0 grados a 360 grados.

El elemento `.spinner__container` sólo lo utilizo para centrar el spinner a lo ancho.

## Nos Leemos

Ya queda poco para terminar la aplicación. Falta afinar algunos detalles, agregar unas animaciones. Por último, creo que agregaré un timer para que se sienta la presión de tiempo.

Todo eso lo haré en los días subsiguientes. Por ahora. Nos leemos. 👋🏼 

![Bob Esponja despiédiendose](/assets/cya.gif)

### Referencias

- [React Conditional Rendering](https://reactjs.org/docs/conditional-rendering.html)
- [CSS Animation MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/animation)
