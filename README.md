# `burger-cross`

An configurable element that animates between a hamburger menu and a closing icon on click.

## Dependencies

Element dependencies are managed via [Bower](http://bower.io/). You can
install that via:

    npm install -g bower

Then, go ahead and download the element's dependencies:

    bower install


## Basic Usage

```
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

## Component Demo

If you wish to work on your element in isolation, we recommend that you use
[Polyserve](https://github.com/PolymerLabs/polyserve) to keep your element's
bower dependencies in line. You can install it via:

    npm install -g polyserve

And you can run it via:

    polyserve

Once running, you can preview your element at `http://localhost:8080/components/burger-cross/`


## Testing Your Element

Simply navigate to the `/test` directory of your element to run its tests. If
you are using Polyserve: `http://localhost:8080/components/burger-cross/test/`

### web-component-tester

The tests are compatible with [web-component-tester](https://github.com/Polymer/web-component-tester).
Install it via:

    npm install -g web-component-tester

Then, you can run your tests on _all_ of your local browsers via:

    wct

#### WCT Tips

`wct -l chrome` will only run tests in chrome.

`wct -p` will keep the browsers alive after test runs (refresh to re-run).

`wct test/some-file.html` will test only the files you specify.
