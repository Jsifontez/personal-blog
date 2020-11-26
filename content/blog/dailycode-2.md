---
path: dailycode-2
date: 2020-11-26T05:33:19.837Z
title: 'DailyCode #2'
description: Te explico cómo cambie varios estilos del blog y los problemas que encontré
---
![Lentes en una laptop y código detrás](/assets/welcome-blog.jpeg)

Bienvenido a otra entrada de DailyCode. Mi día hoy no fue según lo planeado, pero igual programé algo.

El día de hoy sólo corregí estilos del blog. Cuando agregué la entrada de [DailyCode#1](https://juansifontez.netlify.app/blog/dailycode-1/), el template del post tenía ciertos _bugs_ debido a los estilos del tag `<pre></pre>` , del cual no había aplicado ningún estilo.

## ¿Cuál es el tag `<pre>`?

El tag `<pre>` significa “_preformatted text_”, o en español "_texto preformateado_". El texto escrito dentro de este tag la fuente tiene un ancho fijo y conservará tanto espacios como saltos de lineas.

Como el tag conserva el ancho fijo del texto (si no se le provee ninguno), al escribir texto muy largos, el ancho de este sobrescribirá el que tiene el elemento padre.

Debido a que yo lo utilicé para escribir un comando de la terminal muy largo todo se salió de control. Para arreglarlo utilicé los estilos.

```CSS
.post__body > pre {
  max-width: 59vw;
}
```

<div style="width:40%;height:0;padding-bottom:30%;position:relative;"><iframe src="https://giphy.com/embed/1gUWdf8Z8HCxpM8cUR" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><small><p><a href="https://giphy.com/gifs/ariana-grande-thank-u-next-you-1gUWdf8Z8HCxpM8cUR">via GIPHY</a></p></small>

Bien. Con eso, ya tenía un gran problema arreglado. El siguiente a solucionar era arreglar los estilos del tag `<code>` que utilicé para representar dependencias que instalé.

## Tag `<code>`

Al igual que `<pre>`, `<code>` es utilizados para textos preformateados. Sin embargo, este tag es utilizado para indicar que el texto escrito dentro es un pequeño fragmento de código de programación.

Mi problema era que los todos los estilos del post están en una plantilla y tengo que escribir los estilos de la forma `.post__body > cualquier hijo estilo que quiera escribir` que es la regla de CSS donde se le da estilos a los elementos que sean hijos directos de `.post__body`.

Peeero... el `<code>` al cual quería dar estilos estaba dentro de una lista, que también tenía listas anidadas. Era algo así:

```CSS
<ul>
  <li>
    <code>dependencia</code>
    <ul>
      <li>
        <code>dependencia</code>
        <a>algún link</a>
      </li>
      ...
    </ul>
  </li>
  ...
</ul>
```

Por lo que decidí utilizar estilos globales para todo tag `<code>`, esté o no dentro de `.post__body`. Hice esto porque en ningún otro lado del blog aparecerá este elemento solo, excepto en los post. Por lo que los estilos quedaron:

```css
code {
  background-color: hsl(340, 70%, 90%);
  border-radius: .2rem;
  padding: .1rem .3rem .2rem;
  font-family: 'Ubuntu Mono', monospace;
}
```

Pero como esto es CSS, arreglar unos estilos pueden dañar otros, si no tienes en cuenta la cascada de estilos.

<div style="width:40%;height:0;padding-bottom:40%;position:relative;"><iframe src="https://giphy.com/embed/13FrpeVH09Zrb2" width="100%" height="100%" style="position:absolute" frameBorder="0" class="giphy-embed" allowFullScreen></iframe></div><small><p><a href="https://giphy.com/gifs/css-13FrpeVH09Zrb2">via GIPHY</a></p></small>

## Otro problemas con estilos

El nuevo problema a resolver era que dentro del tag `<pre>` estaba un `<code>`. Como estaba cambiando el color de fondo en `<code>` de forma global, también estaba afectando a los code dentro de `<pre>`. Por ello entré en crisis hasta que pensé en agregar el estilo ningún fondo a los `<code>` que sean hijos de `<pre>`:

```css
.post__body > pre > code {
  background: none;
}
```

De esta forma pase de tener esto:

![Vista de ejemplo del blogpost antes de aplicar estilos](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F36490fad-2c55-4954-9567-561231a17543%2FUntitled.png?table=block&id=a26b0ae5-8455-4b2a-bb2b-4f3507ea7b74&width=3030&userId=fd87b3a4-d13b-4aae-9095-8690d779fed7&cache=v2)

A algo como esto:

![Vista de ejemplo del blogpost después de aplicar estilos](https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F50eaf939-93eb-419e-8ee6-918ef21869a3%2FUntitled.png?table=block&id=1e06b8e4-092c-4eae-b8f8-b74558816c8e&width=3030&userId=fd87b3a4-d13b-4aae-9095-8690d779fed7&cache=v2)

## Otros cambios realizados

Ya que estaba agregando estilos, decidí agregar otros que no estaban.

El primero fue para las imágenes, las cuales tampoco tenían un estilo establecido sobre el ancho a tomar (Creo que gatsby las hacer responsive por defecto, de momento no lo sé).

Lo que quería era centrar las imágenes y GIF utilizados y aumentar el tamaño que ocupan. No encontré una forma de centrar las imágenes, de momento, porque no se me venía alguna propiedad a usar en un `p` que contiene una `img` sin cambiar todos los demás `p` que no tienen imagen.

Cambiar el tamaño que ocupan lo hice un con la propiedad `min-width`:

```css
.post__body > p img {
  min-width: 40%;
}
```

El último fue cambiar los estilos de un link que esta dentro de una lista anidada como la que mostré arriba.

Debido a que ya yo había agregado estilos a los links normales, sólo tenía que agregar un selector de CSS para el link que quería. De modo que agregué el selector:

```css
.post__body > ul > li > ul > li > a {...}
```

Sin embargo, este selector no soluciona todo mi problema, porque sólo agrega los estilos a los links que estan dentro de un `li` que tiene una lista anidada. No sé si el selector `.post__body a` me funcione, pero definitivamente lo probaré en otro momento.

## Nos leemos

Eso fueron todos los cambios que realicé hoy. Si sabes la respuesta al problema que tengo con los links, envíame un tweet (o un DM, si prefieres) y me ayudarás un montón. Si no igual, escríbeme y cuéntame sobre qué problema de programación tienes y, si puedo ayudarte lo haré con todo gusto. Nos leemos. 👋🏼

![Bob Esponja despidiéndose](/assets/cya.gif)

---------------

### Artículos de referencia

- CSS-TRICKS: [Considerations for styling the `pre` tag](https://css-tricks.com/considerations-styling-pre-tag/)
- MDN: [<code>: The Inline Code element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/code)
