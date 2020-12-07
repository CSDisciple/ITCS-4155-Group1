# Embed Gist Plugin

- Pure Javascript ( No Dependencies Required )
- Fully Support Modern Browser
- Write in ES6
- Easy install with npm/yarn
- Easy Integrete to Modern Framework (Vue/React/Angular)

### Install

```
npm install tui2tone/gist-embed --save

// OR

yarn add tui2tone/gist-embed
```

## Usage

Normal Usage
```
const Gist = require('gist-embed')

// Gist.embed(gistId, elm)
Gist.embed('9a63adf6c9b5d4be135449818cd747c3', document.getElementById("gist"))
```

Node.js get data or 
SSR Mode in Vue/React/Angular Usage
```
const Gist = require('gist-embed')

// Get Gist Data in Node.js (SSR) with Promise
Gist.get('9a63adf6c9b5d4be135449818cd747c3')
    .then((result) => {
        // return gist html document
    })
    .catch((error) => {

    })
```