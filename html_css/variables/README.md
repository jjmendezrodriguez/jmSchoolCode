# CSS Variables

This file demonstrates the use of CSS variables to define and reuse values throughout the stylesheet.

## Global Variables

Global variables are defined using the `:root` selector, which allows them to be accessed anywhere in the CSS file.

        :root {
        --red: #ff6f69;
        --beige: #ffeead;
        --yellow: #ffcc5c;
        --main-color: var(--red);
        }

### Notes

- Variables are defined with `--` followed by the variable name and value.
- Variables can reference other variables, but the referenced variable must be defined before it is used.

## Usage

Variables can be used in the CSS file by using the var(--variable-name) syntax. They can also be accessed in the HTML file using the style attribute.

        html,
        body {
        background: var(--beige);
        color: var(--red);
        }

## DOM Access

Variables can be accessed in the DOM using JavaScript with the `getComputedStyle()` function, which is useful for themes like dark mode.

## Styles

The following styles are applied using the defined variables:

        html,
        body {
        background: var(--beige);
        color: var(--red);
        }

        h1,
        p {
        color: var(--red);
        }

### Where can apply variables?

**¿Dónde se pueden aplicar las variables en CSS?**
Las variables CSS se pueden usar en casi cualquier propiedad, incluyendo, pero no limitado a, las siguientes:

**Color y Tipografía:**

- `color`: para el color del texto.
- `background-color`: color de fondo.
- `border-color`: color del borde.
- `font-family`: familia de fuentes.
- `font-size`: tamaño de fuente.
- `font-weight`: grosor de la fuente.

**Espaciado y Tamaños:**

- `margin`: márgenes alrededor del elemento.
- `padding`: espacio interno de un elemento.
- `width y height`: ancho y alto del elemento.
- `border-radius`: radios para esquinas redondeadas.
- `gap`: espacio entre elementos en layouts flexibles o grid.

**Posicionamiento y Layout:**

- `top`, `right`, `bottom`, `left`: para posicionamiento absoluto o fijo.
- `z-index`: para la superposición de elementos.
- `flex-basis`, `flex-grow`, `flex-shrink`: para control de layout flexible.
- `grid-template-columns` y `grid-template-rows`: configuración de rejilla.

**Sombra y Opacidad:**

- `box-shadow`: para aplicar sombras a los bordes de un elemento.
- `text-shadow`: para sombras en el texto.
- `opacity`: para definir la transparencia del elemento.

**Transiciones y Animaciones:**

- `transition-duration`, `transition-delay`, `transition-timing-function`: para controlar la duración y efecto de las transiciones.
- `animation-duration`, `animation-delay`, `animation-timing-function`: para definir las animaciones.
