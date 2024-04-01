# Odin - Etch-a-Sketch

In this project, you’ll be creating a pretty neat toy to flex your DOM manipulation skills. You’re going to build a browser version of something between a sketchpad and an Etch-A-Sketch.

## Review

I started by defining a grid. I wanted the grid to be perfectly square, and  the whole <body> fully displayed on the page, without having to scroll.

I chose to set the body height to 100vh, and setting the same width/height between the minimum of 85vh and 80vw, I was making sure the grid was never scroll dependent depending on screen size.
```
body{
    height:100vh;
}
.container{
    width: min(85vh,80vw);
    height: min(85vh,80vw);
}
```

Then, I added the event listener to the container, and not to the individuals div "cards", by bubbling effect. The color was randomized by a simple `rgb()` and `Math.Random` concatenation. 

I added 2 checkboxes, one for the rainbow effect, one for the increased opacity.
- Rainbow was easy. If the checkbox was off, then the color would just be `rgb(0,0,0)`
- Opacaity was difficult. I found the property easily, but couldn't make it work to increase 10% by 10%. I discovered that the opacity property value is a string. So by using `+` I was effectively concatenating the old value and the new value, not adding them up. I then chose to substract a negative 10%, bypassing this issue.

I added the "Resize" button, to be able to draw a grid between 2 and 100 square a side.

## Links

- [Repo](https://github.com/RagingD0nkey/odin-etchasketch)
- [Live](https://ragingd0nkey.github.io/odin-etchasketch/)