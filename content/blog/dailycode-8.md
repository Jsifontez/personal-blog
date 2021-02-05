---
path: dailycode-8
date: 2021-02-04T21:43:20.472Z
title: 'DailyCode #8'
description: Refactorizo el componente Modal y creo un nuevo componente
---
![Lentes en una computadora con código detras](/assets/welcome-blog.jpeg)

Hola. Espero que te encuentres bien. Bienvenido a otra entrada de **DailyCode**.

El día de hoy realicé una refactorización del componente `Modal.js` en **country quiz**. Lo hice porque tuve que crear otro componente que mostrara cuántas respuestas correctas.

Para ello tuve que crear un nuevo estado llamado `correcAnswers` y sumarle 1 cuando la respuesta seleccionada fuese correcta.

```jsx
// Modal.js
const [correctAnswers, setCorrectAnswers] = useState(0)
...
const handleChoice = (choice, el) => {

  if(choice === data.name) {
    el.classList.add("answer--correct")
    setCorrectAnswers(correctAnswers + 1)
    setShowNextQuiz(true)
  }
  ...
}
```

Luego crear el nuevo componente llamado `Results.js` que estaría conformado por:

- Una imagen
- Un Subtítulo que diga Results
- Un párrafo mostrando el número de respuestas acertadas
- Botón para llamar a la función `tryAgain`

```jsx
// Results.js

...
const Results = (props) => {
  const handleTryAgain = () => {
    props.tryAgain()
  }

  return(
    <div className={results.modal}>
      <img src="winners.svg" alt="two people celebrating around a winner cup"/>
      <h2 className={results.result}>Results</h2>
      <p className={results.text}>
        You got <span>{props.answers}</span> correct answers
      </p>
      <button className={results.button} onClick={handleTryAgain}>Try again</button>
    </div>
  )
}
...
```

Puedes ver que las `className` de los elementos están de la forma `results.modal` eso es debido a que utilicé **CSS Modules** para importar los nuevos estilos.

La razón de utilizas modules  es porque el elemento padre del componente  también tiene la clase modal, igual a la del elemento padre de `Modal.js` y necesitaba que tuviesen estilos diferentes. *Aunque pensándolo mejor, pude haberlo llamado de otra forma y listo.* 😅🤣

Ya sólo faltaba colocar una condición para mostrarlo en `Modal.js` y la condición que utilicé es si el estado `gameOver === true`.

```jsx
// Modal.js
...

if (!gameOver) {
  return (
    ...
    // todo el quiz
    ...
    )
  } else {
    return (
      <Results
        tryAgain={tryAgain}
        answers={correctAnswers}
      />
    )
  }
```

## Nos Leemos

Puedes ver que no utilicé el nuevo componente dentro de la que ya existía. Por ello los estoy tratando como si fuesen componentes diferentes (en realidad, lo son 🤣). Sin embargo, debo crear un componente totalmente nuevo para el quiz ya que dejé todo el elemento completo y se ve horrible.

Ese nuevo componente lo voy a crear mañana, de momento es todo por hoy.

Envíame un [tweet](http://twitter.com/jsifontez_) y dime qué te pareció mi solución. Nos leemos 👋🏼

![Bob Esponja despiédiendose](/assets/cya.gif)
