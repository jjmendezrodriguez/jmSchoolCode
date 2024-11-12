# Animations with CSS

This project demonstrates various CSS animations and transitions to enhance the visual appeal of web elements. The examples provided showcase different techniques to create smooth and engaging animations using CSS properties.

## Table of Contents

- [Animations with CSS](#animations-with-css)
  - [Table of Contents](#table-of-contents)
  - [Overview](#overview)
  - [Files Included](#files-included)
  - [CSS Animations](#css-animations)
    - [Exercise 1](#exercise-1)
    - [Exercise 2](#exercise-2)
    - [Exercise 3](#exercise-3)
    - [Box Animation](#box-animation)
  - [How to Use](#how-to-use)
  - [Conclusion](#conclusion)

## Overview

This project contains examples of CSS animations and transitions applied to HTML elements. The goal is to demonstrate how to create smooth transitions and engaging animations that can be used to enhance user experience on web pages.

## Files Included

- `animations.css`: Contains the CSS styles and animations.
- `index.html`: The HTML file that includes elements to demonstrate the animations.

## CSS Animations

### Exercise 1

This example demonstrates a transition effect on a heading element. When the user hovers over the heading, the color and font size change smoothly.

        .exercise-1 {
        color: darkblue;
        font-size: 15px;
        transition: color 1s, font-size 2s;
        }

        .exercise-1:hover {
        color: brown;
        font-size: 25px;
        letter-spacing: 10px;
        word-spacing: 10px;
        }

### Exercise 2

This example shows a delayed transition effect on a heading element. The font size changes with a delay when the user hovers over the heading.

        .exercise-2 {
        color: red;
        font-size: 15px;
        transition-property: font-size;
        transition-duration: 1s;
        transition-delay: 1s;
        transition-timing-function: ease;
        }

        .exercise-2:hover {
        color: green;
        font-size: 25px;
        }

### Exercise 3

This example combines multiple transition properties to create a smooth effect on a heading element when hovered over.

        .exercise-3 {
        color: blue;
        font-size: 15px;
        transition: all 1s ease-in-out 1s;
        }

        .exercise-3:hover {
        color: yellow;
        font-size: 25px;
        }

### Box Animation

This example demonstrates a basic animation applied to a box element. The box grows in size over a duration of 2 seconds.

        .box {
        width: 100px;
        height: 100px;
        background: red;
        border: 2px solid black;
        animation-name: grow;
        animation-duration: 2s;
        animation-timing-function: ease;
        animation-iteration-count: infinite;
        }

        @keyframes grow {
        0% {
        width: 100px;
        height: 100px;
        background: red;
        }
        50% {
        width: 150px;
        height: 150px;
        background: green;
        }
        100% {
        width: 100px;
        height: 100px;
        background: blue;
        }
        }

## How to Use

1. Clone the repository to your local machine.
2. Open the `index.html` file in your browser to see the animations in action.
3. Modify the CSS properties in `animations.css` to experiment with different animation effects.

## Conclusion

This project provides a foundation for creating engaging CSS animations and transitions. By understanding and utilizing these techniques, you can enhance the visual appeal and user experience of your web projects. Feel free to build upon these examples and create your own unique animations. For more information, refer to the `animations.css` file.
