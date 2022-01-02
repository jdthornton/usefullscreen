# @jdthornton/usefullscreen

[![npm (scoped)](https://img.shields.io/npm/v/@jdthornton/usefullscreen.svg)](https://www.npmjs.com/package/@jdthornton/usefullscreen)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@jdthornton/usefullscreen.svg)](https://www.npmjs.com/package/@jdthornton/usefullscreen)

React fullscreen hook.

## Install

```
$ npm install @jdthornton/usefullscreen
```

## Usage

```js
import useFullscreen from "@jdthornton/usefullscreen";

function App (){

  const [ isFullscreen, toggleFullscreen ] = useFullscreen();

  return(
    <button type="button" onClick={toggleFullscreen}>
      Fullscreen
    </button>
  )
}
```
