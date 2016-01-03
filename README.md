# `burger-cross`

A configurable web component that animates between a hamburger menu and a closing icon on click.

## Demo

Check out a [live-demo](https://kylecoberly.github.io/burger-cross/demo) of the component.

## Installing

`bower install kylecoberly/burger-cross`

## Basic Usage

```
<head>
    <link rel="import" href="bower_components/burger-cross/burger-cross.html">
</head>
<body>
    <burger-cross
        container-dimension="150px"
    ></burger-cross>
    <script>
        var burgerCross = document.getElementsByTagName("burger-cross")[0];
        burgerCross.addEventListener("burgerCross", function(event){
            // Get current state of menu with event.detail.isOpen
        });
    </script>
</body>
```

## API

The following properties are configurable, and take legal CSS values:

* `container-dimension="100px"`
* `burger-color="#333"`
* `transition-speed="0.3s"`
* `cross-color="hsl(0, 50%, 50%)"`
* `container-color="#fff"`

By default, the menu starts closed. To start it open, you can pass `isOpen` to the menu.

## Tests

Tests are located in the `/test` directory of the `gh-pages` branch.
