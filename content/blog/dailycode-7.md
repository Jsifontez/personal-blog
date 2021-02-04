---
path: dailycode-7
date: 2021-02-03T21:43:20.472Z
title: 'DailyCode #7'
description: Termino fetch new quiz y try again en Country Quiz
---
![Lentes en una computadora con código detras](/assets/welcome-blog.jpeg)

Hola. 👋🏼 Espero que te encuentres bien. Bienvenido a otra entrada de **DailyCode**. El día de hoy logré completar las funcionalidades que me propuse [ayer](https://juansifontez.netlify.app/blog/dailycode-6/). Realizar un nuevo `fetch` de países si seleccionaba la opción correcta y mostrar un mensaje de *game over* si no.

## Nuevo fetch

Este nuevo fetch se ejecuta al darle click a un botón. Inicialmente, el botón se encuentra oculto, no se muestra y una vez que se selecciona la opción correcta es que se muestra.

Con esos pensamientos pude imaginar una nueva propiedad (nuevo *hook*) que se llama `showNextQuiz`, pensé en llamarlo de otra forma, pero esta me pareció la mejor. 😅

```jsx
// Modal.js

...
const [showNextQuiz, setShowNextQuiz] = useState(false)
...
{showNextQuiz &&
  <buttom onClick={fetchNewQuiz}>Next country</buttom>
}
...
```

Como ves, el botón ejecuta una función llamada `fetchNewQuiz` que se encargará de cambiar tres estados: 

- `isLoading` a `true` para que el component `Quiz` muestre un mensaje que se esta cargando el nuevo quiz
- `query` a `true` para ejecutar un nuevo *fetch*
- `showNextQuiz` a `false` **para dejar de mostrar el botón de traer el nuevo quiz.

```jsx
const fetchNewQuiz = () => {
  // mostrar el mensaje de 'cargando nuevo quiz'
  setLoading(true)
  // realizar el nuevo fetch
  setQuery(true)
  // dejar de mostrar el boton de next quiz
  setShowNextQuery(false)
}
```

### ¿Cuándo se muestra?

Todo muy lindo, pero ¿cuándo se muestra nuestro botón?

Cómo dije empezando el botón se debe mostrar si la pregunta seleccionada es correcta. Por ello, en la función `handleChoice`, creada en el [DailyCode](http://juansifontez.netlify.app/blog/dailycode-6/) pasado, debo cambiar el valor inicial de `showNextQuiz` a verdadero.

```jsx
Modal.js
...
const handleChoice = (choice, el) => {
  if(choice === data.name) {
    el.classList.add("answer--correct")
    setShowNextQuiz(true)
    }
...
```

Con todo esto ya está lista la funcionalidad de llamar la nueva pregunta.

<div style="width:50%;height:0;padding-bottom:40%;position:relative;"><iframe src="https://giphy.com/embed/3o7aD0WIf1WBYaTwfS" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><small><a href="https://giphy.com/gifs/Bounce-TV-3o7aD0WIf1WBYaTwfS">via GIPHY</a></small></p>

### No tan rápido

Yo estoy mostrando que todo lo hago en el componente padre (`Modal.js`) y donde debería ir. Sin embargo, el botón cree en el componente  `QuizList` y escribiendo este post es que me doy cuenta del error. 😅

## Funcionalidad Game Over

Para mostrar el mensaje de *game over* y, por lo tanto, mostrar un nuevo botón para volver a elegir el modo de juego, tuve que utilizar un nuevo estado con sea de tipo Boleano. Esta condición comienza siendo falsa y cambia una vez que se le da click a una opción incorrecta. Por lo tanto, la función `handleChoice` debe ser modificada.

```jsx
// Modal.js
...
// establecemos el nuevo estado
const [gameOver, setGameOver] = useState(false)
...
const handleChoice = (choice, el) => {
	if (choice === data.name) 
  ...
  else {
		...
    setGameOver(true)
    setGameMode("Game Over")
    ...
  }
}

```

Con eso ya estaría cambiando el modo de juego y con esa condición debo mostrar un mensaje en el componente `Quiz` que diga **Game Over**.

```jsx
// Quiz.js
...
if (props.gameOver) {
	return (
    <h3 style={{textAlign:'center'}}>
      {gameMode}
    </h3>
  )
} else {
  // muestra el componente normal
}
...
```

Lo último es mostrar un botón que al darle click cambie los estados `gameOver`, `gameMode`, `answer` **y **`options` a sus estados iniciales.

```jsx
// Modal.js
...
const tryAgain = () => {
  setGameOver(false)
  setGameMode("")
  setAnswer({})
  setOptions([])
}

...
return(
  ...
  {gameOver &&
    <buttom onClick={tryAgain}>Please try again</buttom>
  }
)
```

## Nos Leemos

La verdad, cuando lo pensé, no tenía idea de cómo programar todo esto pero pude separar todo en tareas más pequeñas y lo logré. 🥳

Si leíste todo este *log* envíame un [tweet](http://twitter.com/jsifontez_) y dime si me equivoqué en algo o tomé el enfoque que no debía.

![Bob Esponja despiédiendose](/assets/cya.gif)
