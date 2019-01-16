# A quick demonstration of Vue CLI 3 Target Lib usage

Demonstrate some uses of the --target lib functionality of [Vue CLI 3](https://cli.vuejs.org/guide/build-targets.html#library).

There are two entry files which are interesting: `src/library-entry.js` and `src/library-plugin.js`.

`library-entry` just imports two components and exports them as an object, so you can use them as demonstrated in the `library-demo.html`.

`library-plugin` actually builds a tiny Vue plugin, so you can use them with Vue.use() as demonstrated in the `plugin-demo.html`

## Project setup
```
npm install
npm run build-lib
```

