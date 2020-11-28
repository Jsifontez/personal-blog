---
path: 'dailycode#3'
date: 2020-11-28T06:31:32.020Z
title: 'DailyCode #3'
description: >-
  Aquí te cuento cómo aprendí a realizar Queries y Mutations con GraphQL y
  algunas cosas extras
---
![Lentes sobre una laptop con código detras](/assets/welcome-blog.jpeg)

Te doy la bienvenida al DailyCode #3. 🤗 Hoy fue un día en el cual avancé la mitad de lo planeado, pero aprendí cosas que aún tengo que digerir y puede que me sirvan para un post futuro. 🔥

Hoy continué realizando el tutorial de [graphql con react + apollo](https://www.howtographql.com/react-apollo/0-introduction/). Específicamente aprendí a realizar [Queries](https://www.howtographql.com/react-apollo/2-queries-loading-links/) y [Mutations](https://www.howtographql.com/react-apollo/3-mutations-creating-links/).

## Queries con Apollo Client

Existen 2 formas de realizar consultas con `ApolloClient`. La primera es utilizar el método `query` directamente en `ApolloClient`. Este método nos permitirá traer los datos del servidor y manejarlos como una promesa, te mostraré un ejemplo con una lista de amigos:

```jsx
client.query({
  query: gql`
    {
      listaDeAmigos {
        id
	nombre
	gruposEnComun
      }
    }
  `
}).then(response => console.log(response.data.listaDeAmigos))
```

La segunda forma, es utilizar la [render prop API](https://dev-blog.apollodata.com/introducing-react-apollo-2-1-c837cc23d926) de apollo. De esta forma se puede manejar los datos utilizando los componentes.

_React también tiene_ [_render props_](https://reactjs.org/docs/render-props.html) _(supongo que Apollo desarrolló su API de ellos) y, según la página de react:_

> Render props se refieres a la técnica de compartir código entre componentes utilizando una propiedad cuyo valor sea una función

<div style="width:40%;height:0;padding-bottom:20%;position:relative;"><iframe src="https://giphy.com/embed/UTq7MsmK92ZHIP6BH9" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><small><p><a href="https://giphy.com/gifs/The-Animal-Crackers-Movie-continue-as-i-was-saying-UTq7MsmK92ZHIP6BH9">via GIPHY</a></p></small>

Ahora, todo lo que debemos realizar es utilizar el component `<Query>` y pasarlo como propiedad la petición de datos que se desea realizar.

Cada proceso de petición es similar a los siguientes 3 pasos:

1. Asigna la petición a una constante que utiliza la función `gql`
   ```jsx
   const TRAER_AMIGOS = gql`
     {
       listaDeAmigos {
         id
         nombre
         gruposEnComun
       }
     }
   `
   ```
2. Utiliza el componente `<Query>` pasadole como props la petición realizada en el paso 1
3. Accede al resultado de la consulta que es compartido via _render prop function_
   ```jsx
   return (
     <Query query={TRAER_AMIGOS}>
       {() => data.listaDeAmigos.map(amigos => <Amigo key={amigo.id} amigo={amigo} />)}
     </Query>
   )
   ```

Y para que todo eso funcione, se debe importar el componente `Query` y la función `gql`.

```jsx
import { Query } from 'react-apollo'
import gql from 'graphql-boost'
```

### Funciones agregadas por apollo

Apollo agrega ciertas funciones a las `render prop funcition` de los componentes que podemos utilizar:

1. `loading`: Es un valor Booleano que será verdadero (`true`) mientras la respuesta de los datos aún no se ha recibido
2. `error`: Este argumento contiene toda la información del error en caso de que ocurra
3. `data`: Este es el valor de la respuesta recibida del servidor. En el caso de arriba, contiene  la `listaDeAmigos`

Existen más opciones que puedes encontrar en la documentación de [Apollo Queries](https://www.apollographql.com/docs/react/data/queries/#executing-a-query).

## La función gql

<div style="width:40%;height:0;padding-bottom:35%;position:relative;"><iframe src="https://giphy.com/embed/lKXEBR8m1jWso" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><p><a href="https://giphy.com/gifs/spongebob-squarepants-thinking-patrick-lKXEBR8m1jWso">via GIPHY</a></p>

Pudiste ver que las peticiones realizar se escribieron utilizando la función `gql` de `apollo-boost`. Como estamos utilizando GraphQL las peticiones se deben realizar en en el lengujae de GraphQL. Esto no puede ser hecho desde un archivo de javascript.

Para ello existe la función `gql` que sirve como un _parser_ para expresar las peticiones hacia GraphQL como una cadena de texto con [tagged templates](https://wesbos.com/tagged-template-literals).

## Realizar Mutaciones con Apollo Client

Hasta este momento aprendí muchas cosas que me sirvieron para ir más rápido en este tutorial, ya que los 3 pasos para realizar _queries_, se utilizan para realizar mutaciones.

Por lo tanto, se debe realizar lo siguiente

1. Escribir la mutación utilizar la función `gql`
   ```jsx
   const POST_MUTATION = gql`
     mutation PostMutation($description: String!, $url: String!) {
       post(description: $description, url: $url) {
         id
         createdAt
         url
         description
       }
     }
   `
   ```
2. Importar y utilizar el componente `<Mutation>` pasandole como props las variables que necesite
   ```jsx
   <Mutation mutation={POST_MUTATION} variables={{ description, url }}>
     {() => (
       <button onClick={`...`}>
         Submit
       </button>
     )}
   </Mutation>
   ```
3. Utilizar la función mutation que es inyectada en las `render prop function` del componente
   ```jsx
   <Mutation mutation={POST_MUTATION} variables={{ description, url }}>
     {postMutation => <button onClick={postMutation}>Submit</button>}
   </Mutation>
   ```

Y listo, ya puedes utilizar ese componente y ejecutar mutaciones a la base de datos.

## ¿Y los hooks?

Todo muy bonito y todo, peeeeeeeeero... No vi que utilizar hooks.

Bien, resulta que este tutorial fue escrito hace 3 años, utilizan la versión 16.2.0 de react, y los react hooks vienen con react 16.6.0.

Realizando una investigación pude encontrar que para utilizar los hooks con apollo necesitas instalar la dependencia `@apollo/react-hooks` y listo, ya puedes utilizar hooks para tus query, mutaciones y demás.

Yo voy a intentar actualizar el tutorial utilizando hooks. Ya encontré una buena guía 😏 que te dejaré en las referencias.

## Nos leemos

Debo resaltar que hay cosas que la forma de realizar mutaciones NO me quedó del todo clara. Por ello debo realizar una mejor investigación y quizá pueda que salga un post a parte de ello.

Debo resaltar que hay 2 cosas que NO me quedaron claras:

1. La forma de realizar mutationes
2. Qué son las `render prop function` de react y cómo funcionan

Puede que esos dos temas me sirvan para realizar post para poder entenderlos mejor.

Ahora me despido, muchas gracias por leer esto. Si te gustó este post (que lo uso a modo diario dev) puedes enviarme un tweet. Y vamos... Si no te gustó, también puedes hacerlo. De ambas formas estaré muy agradecido.

Un abrazo. 🤗 Nos leemos... 👋🏼

![bob esponja despidiéndose](/assets/cya.gif)

## Referencias

* [howtoGraphQL queries](https://www.howtographql.com/react-apollo/2-queries-loading-links/)
* [HowToGraphQL Mutations](https://www.howtographql.com/react-apollo/3-mutations-creating-links/)
* [Tagged List cómo funciona `gql`](https://wesbos.com/tagged-template-literals)
* [React render props](https://reactjs.org/docs/render-props.html)
* [Apollo with hooks](https://www.apollographql.com/docs/react/api/react/hooks/)
* [The React + Apollo Tutorial for 2020 (Real-World Examples)](https://www.freecodecamp.org/news/react-apollo-client-2020-tutorial/#apolloclientbasicsetup)
