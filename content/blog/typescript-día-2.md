---
path: typescript-2
date: 2022-03-01T02:10:10.768Z
title: TypeScript día 2
description: Primer día aprendiendo TypeScript
---
Hoy es m día dos realizando el tutorial de [Netninja](https://www.youtube.com/c/TheNetNinja) sobre [TypeScript](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI). El día de hoy aprendí sobre:

* tsconfig
* Lo básico de funciones
* Alias de tipos
* Forma de una función

## tsconfing

La configuración de TS se utiliza para mejorar el proceso de trabajo.

Usualmente se trabaja en carpetas como `public` para los archivos que se leerán al final de compilar los archivos que se encuentren en la carpeta `src`.

Así se evita tener que correr el comando `tsc ./src/[archivo1].ts ./public/` cada vez que se requiera.

Para crear el archivo de configuración por defecto se utiliza el comando `tsc --init` que crea el archivo `tsconfig.json` en la carpeta raíz del proyecto.

En ese archivo es necesario indicarle el *directorio raíz* (`rootDir`). Donde el compilador tomará todos los archivos que estén allí para compilarlos.

Además también se puede indicar el *directorio de salida* (`outDir`). El cual es la carpeta donde se introducirá los archivos compilados.

Sin embargo, a pesar de que se indica el `rootDir`, typescript sigue tomando archivos fuera de esta carpeta. Para evitar eso, se le agrega `"include": ["src"]` al archivo de configuración.

## Básico de funciones

Al crear una variable con una función, typescript infiere que esa variable sólo aceptará funciones

Para especificar de forma explicita que la variable aceptará sólo funciones se hace de la siguiente manera:

```tsx
let comer: Function // con F mayuscula
```

Si queremos agregar un argumento que sea opcional que utiliza el símbolo `?` antes de especificar los/el tipo de dato que recibe. Si no se le asigna un valor, toma `undefined` por defecto.

```tsx
const sumar = (a: number, b: number, c: number|string) => {
  console.log(a + b)
  console.log(c) // imprime undefined si c no se le da un valor
}
```

También se puede especificar de forma explicita el tipo de dato que retorna la función. Si no se hace, la TS infiere en ese tipo de dato.

```tsx
const restar = (a: number, b: number): number => {
  return a - b
}
```

Retornar `void` significa que la función no retorna ningún valor.

## Alias de tipos de datos

Los alias de tipos es una forma de abreviar el tipo de dato de una variable. Con ello sólo se escribe una sola variable en lugar de todo los tipos necesarios siempre.

Evitamos escribir:

```tsx
const compra = (cantidad: string|number, fruta: string) => {
	console.log(`Se compró ${cantidad} de ${fruta}`);
}

const quienCompra = (user: {nombre: string, cantidad: string|nunber}) => {
  console.log(`${user.name} compro la fruta`);
}
```

Y pasamos a crear una variable que tome el valor de los tipos

```tsx
type StringOrNum = string | number;

const compra = (cantidad: StringOrNum, fruta: string) => {
	console.log(`Se compró ${cantidad} de ${fruta}`);
}
```

Lo que también sirve para objetos:

```tsx
type StringOrNum = string | number;
// se puede usra con objetovs
type objWithName = { name: string, cantidad: StringOrNum}

const compra = (cantidad: StringOrNum, fruta: string) => {
	console.log(`Se compró ${cantidad} de ${fruta}`);
}

const quienCompra = (user: objWithName) => {
  console.log(`${user.name} compro la fruta`);
}
```

## Forma de una función

En inglés es **function signature**, y es básicamente un alias para la función. O crear la estructura de función.

```tsx
// example 1
let saludar: (a: string, b: string) => void;

saludar = (name: string, greeting: string) => {
 console.log(`${name} says ${greeting}`);
}
```

Arriba se puede ve que saludar sólo aceptará 2 parámetros que serán *string* y no retornarán nada.

Si algo de eso se cambia. El compilador arrojará un error.

## Hasta luego

Bueno, eso fue lo que aprendí en el día dos los tutoriales de typescript. No sé si es muy largo o no. Pero seguiré creando estos posts.

Nos vemos



### Referencias

* [TypeScript tutorial — Netninja](https://www.youtube.com/playlist?list=PL4cUxeGkcC9gUgr39Q_yD6v-bSyMwKPUI)
* [](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)[TypeScript handbook](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)