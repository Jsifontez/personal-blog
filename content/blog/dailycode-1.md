---
path: 'DailyCode#1'
date: 2020-11-25T02:13:51.874Z
title: 'DailyCode #1'
description: Comienzo realizando un tutorial de ReactJs + Apollo Client
---
![Lentes en una computadora con código detras](/assets/welcome-blog.jpeg)

Hola. 👋🏼 A partir de hoy SI comienzo a publicar los \*DailyCode\* (si ya se que debí comenzar hace 2 semanas, pero se me complicaron unas cosas 😅). Pero comenzamos con el aprendizaje 🚀

Tengo pensado crear una app para seguimientos de hábitos. Será totalmente en JAMstack y utilizaré [Next.js](nextjs.org/) como framework, [Netlify](https://www.netlify.com) para el deploy y [FaunaDB](fauna.com) con [Netlify functions ](https://www.netlify.com/products/functions/)para manejar la base de datos. Sin embargo, FaunaDB se maneja con GraphQL y tengo poco conocimiento de lenguaje.

Por ello, desde que anuncié el [DailyCode](https://juansifontez.netlify.app/blog/dailycode/#0), estoy aprendiendo GraphQL con [HowToGraphQL](http://howtographql.com). Completé el tutorial para el Backend y ahora me encuentro con el de frontend con React y Apollo.

Bueno, debo decir que hoy fue que comencé el tutorial. Pensaba que iba a avanzar rápido porque tengo ciertos conocimientos de React. No obstante, en ver de seguir los pasos, quise utilizar el código del tutorial del backend pasado y me compliqué la existencia yo mismo.

Luego de decidir seguir los pasos del tutorial, pude instalar todas las dependencias, re-factoricé el orden de los componentes y estilos, descargue el código del servidor, realicé un deploy de la base de datos (PrimsaDB) y agregué dos elementos a la base de datos.

![funny suicide](/assets/suicide.gif)

### Aquí te explico cómo lo hice

El tutorial del frontend consta de 10 artículos. Yo tenía planteado realizar por lo menos 4 hoy.

Sin embargo, sólo pude realizar la instalación de las dependencias e iniciar el proyecto.

```jsx
yarn create react-app hackernews-react-apollo
```

Instalé las dependencias de Apollo Client:

```jsx
yarn add apollo-boost react-apollo graphql
```

Entre esas dependencias, se encontraban:

* `apollo-boost` el cual ofrece cierta comodidad porque agrupa cierto paquetes que se necesitan cuando se utiliza _Apollo Client_:
  * `apollo-client`: Donde ocurre toda la mágia
  * `apollo-cache-inmemory`: El paquete recomendado por el equipo de [howtographql](http://howtographql.com) para realizar cache (La verdad, no tengo ni idea de para que sirve 😅)
  * `apollo-link-http`: Un _Apollo Link_ para el manejo de _data fetching_ remotos
  * `apollo-link-error`: Un _Apollo Link_ para el manejo de errores
  * `apollo-link-state`: Un _Apollo Link_ para el manjero de estados locales
  * `graphql-tag`: Exporta las funciones de `gql` para las quieries y mutaciones for your queries & mutations
* `react-apollo` contiene todas las funciones para poder utilizar Apollo Client con React
* `graphql` contiene la implementación de referencia de GraphQL de Facebook. Apollo Client tambien utilizar cieartas de esas funcionalidades

Descargué el servidor del proyecto:

```jsx
curl https://codeload.github.com/howtographql/react-apollo/tar.gz/starter | tar -xz --strip=1 react-apollo-starter/server
```

Por último, realicé un deploy del servicio de base de datos de prisma:

```jsx
cd server
yarn install
yarn prisma deploy
```

![red rocket crossing the starts](/assets/rocket.gif)

## Nos Leemos

Para mañana intentaré completar 4 de los tutoriales para poder comenzar el desarrollo de la **Trackable App**. Cuentame si estas realizando algún proyecto y si te has encontrando algún problema en un [tweet](https://twitter.com/jsifontez_). No leemos 👋

![Bob Esponja despiédiendose](/assets/cya.gif)
