---
path: 'dailycode#1'
date: 2021-01-25T05:45:15.121Z
title: 'DailyCode #5'
description: Nested Rendering en country-quiz y pagination en coffee-ecommerce
---
![Lentes sobre una laptop con código detras](/assets/welcome-blog.jpeg)

Hola de nuevo. Hoy mi sesión de código fue extensa, porque no sólo continué el proyecto de country-quiz, sino que también intenté realizar realizar algo para freecodecamp-ecomerce.

### Lo que planeaba hacer

En country-quiz planeaba cargar tanto las preguntas de opciones como la de banderas. Resaltando que esta no sabía cómo implementar la opción de las banderas. Sin embargo, hoy pude darme cuenta que la API entrega una URL de una image de la bandera del país.

Para el proyecto coffee-ecommerce si quería terminar la grilla según dice el [issue #20](https://github.com/freecodecamp-venezuela/ecommerce-coffee/issues/20), pero me compliqué mucho con Next.js y pagination.

### Country-quiz

Refactoricé el componente modal para traer un component que, según unas condiciones, muestre:

* _Seleccione el modo de juego_
* _Se está cargando las preguntas_
* _X es la capital de_

Por que tuve que agregar el nuevo componente:

```jsx
return(
  <h3>
    {gameMode === ""
      ? `Select game mode`
      : (isLoading
          ? `Loading ${gameMode} of... quiz...`
          : `${quiz.capital} is the capital of`
        )
    }
  </h3>
)
```

Para esto tuve que leer bien la documentación de react. Pero ahí no muestran como hacer "nested _conditional rendering_" lo cual tuve que leer un [artículo de Robin Wieruch](https://www.robinwieruch.de/conditional-rendering-react/#nested-conditional-rendering-in-react).

<div style="width:60%;height:0;padding-bottom:40%;position:relative;"><iframe src="https://giphy.com/embed/8fen5LSZcHQ5O" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><small><p><a href="https://giphy.com/gifs/the-simpsons-excellent-mr-burns-8fen5LSZcHQ5O">via GIPHY</a></p></small>

Lo siguiente que hice fue hacer que la respuesta de API tenga 4 países, cuando antes sólo tenía los datos de uno solo (que era generado de forma aleatoria). Afortunadamente para esto, la API tiene un endpoint para esto, pero necesitaba entregarle los códigos ISO 3166 de los países.

Realizando un update a la función `randomCountry()` que tengo en la carpeta `src/utils` para que retorne un array con diferentes códigos (claro, eso ya no la convierte en _randomCountry_, sino en_ randomCountries_. Pero igual no le cambié el nombre).

```jsx
export default function randomCountry() {
  const multipleCountries = []
  for (let i = 0; i < 4; i++) {
    const random = Math.floor(Math.random() * (COUNTRIES.length - 1))
    multipleCountries.push(COUNTRIES[random])
  }
  return multipleCountries
}
```

Luego editando la URL entregada durante el fetch utilizando template literals, solucionado este problema.

```jsx
const CODES = randomCountry()
const URL = `https://restcountries.eu/rest/v2/alpha?codes=${CODES[0]};${CODES[1]};${CODES[2]};${CODES[3]}`
```

Por último en country-quiz, modifiqué el componente `QuizList` para que mostrar las opciones de la pregunta, o para elegir el modo de juego. Para hacer esto utilicé otra [sección del artículo de Robin](https://www.robinwieruch.de/conditional-rendering-react/#conditional-rendering-in-react-if-else):

```jsx
function QuizList(props) {
  if(props.items.length) {
    return (
      <ul className="quiz__list">
        {props.items.map(item =>
          <ListItem text={item} key={item}/>
        )}
      </ul>
    )
  } else {
    return(
      <ul className="quiz__list">
        <ListItem
          text="city is the capital of..."
          changeGameMode={props.changeGameMode}
          gameMode="capital"
        />
        <ListItem
          text="flag belong to country..."
          changeGameMode={props.changeGameMode}
          gameMode="flag"
        />
      </ul>
    )
  }
}
```

### Coffee Ecommerce

En este proyecto no pude realizar mucho... nada, en realidad. Debido a que me confundí mucho en cómo implementar un "_pagination_" para la funcionalidad del Show more del [issue #20](https://github.com/freecodecamp-venezuela/ecommerce-coffee/issues/20).

Leí sobre el SSR de Next utilizando el `fetch` en la función `getStaticProps()` y que sólo se puede utilizar en componentes que se encuentran dentro del directorio `pages` (Al menos creo haber leído eso, no estoy 100% seguro). 

También sobre leí sobre cómo realizar _pagination_. Sin embargo fue un caso perdido porque no encontré cómo solucionarlo. Al final pedí ayuda al grupo y me dijeron que de momento sólo utilizara un splice.

## Nos leemos

Para mañana trataré de terminar la _feature_ sobre seleccionar la pregunta correcta en country-quiz y en coffee-ecommerce terminaré el _show more._

Un abrazo. 🤗 Nos leemos… 👋🏼

![Bob esponja despidiendose](/assets/cya.gif)

### Referencias

* [React Condition Rendering by Robin Wieruch](https://www.robinwieruch.de/conditional-rendering-react/#conditional-rendering-in-react-if-else)
* [React conditional rendering official docs](https://reactjs.org/docs/conditional-rendering.html)
