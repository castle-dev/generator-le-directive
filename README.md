# generator-le-directive [![Build Status](https://secure.travis-ci.org/castle-dev/generator-le-directive.png?branch=develop)](https://travis-ci.org/castle-dev/generator-le-directive)

> Generates a new directive based on Castle's conventions

## Installation

  `npm install -g generator-le-directive`

## Usage

Simply run the generator from the root of your app's folder

```bash
  cd client-web
  yo le-directive
```

![Demo](https://raw.githubusercontent.com/castle-dev/generator-le-directive/develop/generator-le-directive-demo.gif "Demo")

### Note

In order for the generator to work, your angular project must have a 'client/index.html' and a 'client/src/app/app.js' file. You can optionally add hooks for the generator to include the new files and modules in those two files with the hooks "<!-- YOEMAN HOOK -->" and "/*--YEOMAN-HOOK--*/" respectively.

## Dependencies

### What is Yeoman?

Basically, he wears a top hat, lives in your computer, and waits for you to tell him what kind of application you wish to create.

Not every new computer comes with a Yeoman pre-installed. He lives in the [npm](https://npmjs.org) package repository. You only have to ask for him once, then he packs up and moves into your hard drive. *Make sure you clean up, he likes new and shiny things.*

```bash
npm install -g yo
```

## License

MIT
