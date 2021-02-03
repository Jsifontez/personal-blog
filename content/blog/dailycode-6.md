---
path: dailycode-6
date: 2021-02-02T06:52:31.838Z
title: 'DailyCode #6'
description: >-
  Explico como creo la funcionalidad de selección de pregunta correcta en
  country quiz
---
![Lentes sobre una laptop con código detras](/assets/welcome-blog.jpeg)

¡Hola! Espero que te encuentres muy bien. Yo me encuentro emocionado por los avances que he tenido, aunque han sido pocos he aprendido bastante con ellos.

El día de hoy me enfoqué en completar la funcionalidad de determinar si la pregunta era correcta o no en el proyecto de country quiz.

## Se muestra la opción seleccionada

Para comenzar a implementar esto pensé primero pensé que debía verificar qué opción estaba haciendo click. En modal cree un función que realizaba un `console.log` de la opción y esa función fue pasada como props hasta llegar a el componente `ListItem`.

```jsx
Modal.js
...
const handleChoice = (choice) => {
  console.log(choice) // muestra la opcion seleccionada
}

return(
...
  // QuizList es quien muestra el ListItem
  <QuizList handleChoice={handleChoice} />
	...
)
```

```jsx
QuizList.js
...
<ul>
  {props.items.map(item =>
    <ListItem countryChoice={props.handleChoice} text={item}/>
  }
</ul>
...
```

Con eso y utilizando `text` como argumento de `countryChoice` la consola puede mostrar la opción seleccionada.

```jsx
ListItem.js
...
const handleChoice = (ev) => {
  props.countryChoice(props.text, ev.target)
}
...
<li onClick{handleChoice}>{props.text}</li>
...
```

Aquí puedes ver que adicional al `text` también agregué como argumento de `countryChoice` el `ev.target` que es el valor del objeto HTML desde donde se dispara el evento (en nuestro caso el `<li>` ). Esto lo hice porque en ese valor se necesitará para mostrar la pregunta correcta, en caso de que seleccionemos la opción errónea.

## Agregando estilos a los elementos

Lo siguiente que tenía que hacer era verificar si el elemento seleccionado era la respuesta correcta o no.

```jsx
Modal.js
...
const handleChoice = (choice, element) => {
	if (choice === answer.name) {
		element.classList.add("answer--correct")
	} else {
		element.classList.add("answer--wrong")
	}
}
...
```

Básicamente: si la respuesta es correcta, el fondo del elemento cambia a verde, sino cambia a rojo. Pero ¿qué pasa con la opción correcta si el elemento seleccionado es errado?

![respuestas correcta del diseno de country quiz](/assets/country-quiz-answers.png)

Como lo muestra el diseño, si la opción seleccionada es errónea, se debe señalar en verde cuál era la respuesta correcta. Y no fue sencillo para mi hacerlo.

Primero pensé que react tenía una forma de listar todos los elementos con algún método, sin embargo, mientras investigaba no pude encontrar nada. ☹️ Así que la pregunta era cómo listaba esos elementos.

La respuesta vino del mismo `element` de la función `handleChoice`. Cómo `ev.target` retorna un objeto del DOM, este posee ciertos atributos a los cuales podemos hacer referencias. Uno de ellos es `parentElement` el cual no da información sobre el padre el elemento seleccionado.

Con el padre del elemento utilizar otro método llamado `children` el cual nos devuelve un colección HTML con la que podemos iterar sobre ella y verificar si el elemento es la respuesta correcta o no.

```jsx
Modal.js
...
const handleChoice = (choice, element) => {
	if (choice === answer.name) {
		element.classList.add("answer--correct")	
	} else {
		element.classList.add("answer--wrong")
	}
	// creamos la coleccion html con los items
	const listItems = element.parentElement.children
	// recorremos cada elemento de la lista verificando
	// que sea el verdadero
	for (let i = 0; i < listItems.length; i++) {
		if (listItems[i].innerHTML === answer.name) {
	    listItems[i].classList.add("answer--correct")
    }
	}
}
...
```

Y con ello ya podemos mostrar la respuesta correcta cuando la selección no lo es.

_Debo resalta que para las colecciones HTML no se pueden utilizar método como el `forEach()`. Razón por la cual utilicé un ciclo `for`_

## Nos leemos

Para mañana conseguiré intentaré realizar un fetch de otra preguntar, si la seleccionada es correcta y terminar el juego si es errónea.

De momento mándame un [tweet](twitter.com/jsifontez_) cuéntame qué te parecieron las decisión que tomé. ¿Has pensado alguna vez que las enfoque que tomar no es el correcto?

Un abrazo. Nos leemos.

![Bob esponja despidiéndose](/assets/cya.gif)
