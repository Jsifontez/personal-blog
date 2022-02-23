---
path: typescript-dia-1
date: 2022-02-23T02:31:37.725Z
title: TypeScript día 1
description: Primer día aprendiendo TypeScript
---
Tenía tiempo queriendo aprender Typescript y, finalmente, he comenzado. En este post resumiré lo que he aprendido en mi primer día.

Antes debo decir que estoy siguiendo los tutoriales de netninja sobre typescript.

## Qué es TypeScript

TypeScript o TS es un lenguaje de programación creado por Microsoft y que es un superset de javascript (JS). Pero ¿qué significa superset? Según [Free Dictionary](https://encyclopedia2.thefreedictionary.com/superset#:~:text=%5B%E2%80%B2s%C3%BC%C2%B7p%C9%99r%E2%80%9Aset,include%20other%20features%20as%20well.):

> Un lenguaje de programación que contiene todas las características de algún lenguaje dado y que se ha expandido o mejorado para incluir otras características

De acuerdo a esa definición, typescript es un lenguaje que extiende todas aquellas características que tiene javascript. Sin embargo, el código escrito en javascript es válido para typescript.

## Características de TypeScript

La principal característica de este lenguaje es que permite identificar el tipo de dato que se le puede asignar a las variables. De esta manera una variable que es declarada como cadena de texto no podrá recibir otro valor que no sea cadena de texto.

```tsx
// typescript
let edad = 23; // variable de tipo numerica
edad = "23"; // arroja error debido a que se cambio el tipo de dato que se le asigna de número a string
```

A diferencia de javascript que utiliza variables dinámicas, es decir, que una variable puede tomar cualquier valor una vez declarada.

```jsx
// javascript
let edad = 23; // variable de tipo numerica
edad = "23"; // no arroja error porque javascript lo permite
```

**Características adicionales**

Entre las características adicionales que agrega typescript se encuentra:

* Interfaces
* Namespaces
* Generics
* Abstract classes
* Data modifiers
* Optionals
* Function overloading
* Decorators
* Type utils
* readonly keyword

varias de ellas no las conozco y otras sólo las he visto en video. Así que mejor no especificaré qué es cada una de ellas. Por lo menos no en este post. 😅

## Compilar typescript

A pesar de que escribir código en typescript es muy similar a escribir código en javascript. TypeScript no puede ser ejecutado directamente en el navegador. La razón: los navegadores sólo entienden javascript. 😀

Para convertir código TS a JS, es necesario utilizar un compilador. El cual puedes instalar de forma global o por proyecto.

Para instalarlo de forma global, necesitas tener instalado *Node Package Manager* o *npm*, que viene instalado con [node.js](https://nodejs.org/es/).

Una vez instalado. Utilizas el comando `npm install -g typescript` y con eso solo esperas y ya se tiene disponible el comando `tsc` desde la terminal.

Puedes utilizar el comando de la siguiente manera:

* `tsc [documento-a].ts [documento-A].js`

De esta forma el compilador tomará el documento con el nombre *documento-a* y lo compilara en un documento de nombre *documento-A*. No es necesario especificar el nombre del documento al cual se compilara. A menos que sea muy necesario. El compilador ya lo hace por nosotros, tomando el mismo nombre del documento que estamos compilando. De esta forma el comando a utilizar sería:

* `tsc [documento-a].ts`

Sin embargo, se tiene que compilar de forma manual cada vez que sea necesario. Para que se compile el elemento de forma automática es necesario la bandera `-w` en el comando `tsc`:

* `tsc [documento-a].ts -w`

## Tipos en Typescript

Para declarar los tipos a las variables o parámetros se escribe el nombre, seguido de dos puntos (:), el tipo que se utilizará:

```tsx
let dia: number = 13
```

De esa forma declaramos la variable `dia` y sólo se le podrá asignar valores de tipo numérico. Pero ¿cuáles son los tipo que tenemos disponibles en TS?

Los principales tipos que existen en typescript son valores primitivos que tiene javascript y son: *cadenas de texto*, *números*, y *booleano*. Estos tipos se asignan con su respectivo nombre en inglés: `string`, `number` y `boolean`.

Esos tres tipos se utilizan para declarar cualquier variable, parámetros de funciones, los tipos que puede recibir un array o el atributo de un objeto:

```tsx
// para funciones se utiliza de la forma
function saludar(nombre: string) {
	console.log('Hola, ' + nombre);
}

saludar('Juan') // imprime en la consola 'Hola, Juan'
```

Arriba se puede ver como se crea una función que recibirá el argumento *nombre* y que debe ser un *string*. De esa forma si se le da un valor incorrecto, nos arroja un error de asignación:

```tsx
// para funcione se utiliza de la forma
function saludar(nombre: string) {
	console.log('Hola, ' + nombre);
}

saludar(5); // Error de asignación
```

## Arrays

En JS los array pueden recibir diferentes tipos de datos: texto, números, booleanos.

En TS los arrays pueden tener esos tipos de datos. Sin embargo, se debe asignar qué tipos de datos pueden recibir al inicio.

```tsx
// array que recibe un solo tipo de dato
let unicArray: string[] = ['hola', 'desde', 'array'];
```

A `unicArray` solamente se le puede agregar un nuevo valor o cambiar uno existente por uno de tipo *string* sino arrojará un error de asignación.

```tsx
// error de asignacion
unicArray.push(0);
unicArray[0] = true;

// no arroja error de asignacion
unicArray.push('elemento');
```

Para crear un array que reciba diferentes tipos de datos se utiliza los **union types**. Los **union types** también puedes utilizarse para crear diferentes elementos.

```tsx
// este array podrá recibir strings y numeros
let mixedArr: (string|number)[] = ['array', 24];

// esta variable podrá recibir numeros o booleanos
let naranjasCosechadas: number|boolean
```

Arriba se puede ver que para aplicar varios union types se utiliza el símbolo `|` seguido de los tipo de datos a recibir. Para el caso de los arrays se utiliza paréntesis.

## Objetos

En el caso de los objetos, se tiene que especificar el tipo de dato a cada propiedad que se quiera asignar. Antes de asignarla. Es decir, se estaría creando una estructura del objeto:

```tsx
let persona: {
	nombre: string,
	edad: number,
	sabeBailar: boolean
}
```

Con esa estructura podemos asignar solo las propiedades que se declaran y los tipos que se declaran.

```tsx
persona = {
	nombre: 'juan',
	edad: 25,
	sabeBailar: true
}

persona.edad = '18' // Error de asignacion

// asignando una propiedad no delcclrarda en la estructura
persona.hermanos = 2 // error 'hermanos' no existe en la esrucura declarada
```

## Tipo de dato ‘any’

El tipo **any** es utilizado principalmente cuando no se sabe qué valor va a recibir una variable. Con este se puede tener el mismo comportamiento de JS a la hora de asignar variables. Es decir, se puede asignar cualquier tipo de dato:

```tsx
let nombre: any = 'juan'
nombre = true
nombre = { edad: 23 }

// any para crear arrays
let anyArray: any[] = [] // puedo introducir cualquier tipo de dato
anyArray.push(5)
anyArray.push('yoshi')
anyArray.push(true)
```

## Hasta luego

Este fue el día 1 de TypeScript. Estoy emocionado por todo lo que viene y poder utilizarlo en proyecto.

Nos leemos

![bob esponja despidiéndose](assets/cya.gif)

### Referencias

- [TypeScript tutorial — Netninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI)
- [Overview of TypeScript](https://docs.microsoft.com/en-us/learn/modules/typescript-get-started/2-typescript-overview)