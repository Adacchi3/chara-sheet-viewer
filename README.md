# chara-sheet-viewer

## Overview
Call of Cthulhu(CoC) is a horror fiction role-playing game based on H.P.Lovecraft's story of the same name and the associated Cthulhu Mythos[[ref]](https://en.wikipedia.org/wiki/Call_of_Cthulhu_(role-playing_game)). In Japan, CoC has become popular in some communities by [the animations](https://nyaruko.com/).

The Open Graph protocol(OGP) enables any web page to become a rich object in a social graph[[ref]](http://ogp.me/). This basis is from knowlege representation, for instance, RDFa in [Semantic Web](https://en.wikipedia.org/wiki/Semantic_Web). Recently, we have seen Twitter and Facebook posts using OGP images to promote web pages.

In this project, I am developing the CoC Character Card Generator on firebase. This project has been developing by Vue.js and Firebase features(hosting, function, storage and database). SVG file was created by [Vectr](https://vectr.com/).

### Project setup
```
npm install
```

Also, you have to make `firebaseconfig.js` in the root directory. `firebaseconfig.js` content is below.

```
export const config = {
  apiKey: "your_apiKey",
  authDomain: "your_authDomain",
  databaseURL: "your_databseURL",
  projectId: "your_projectId",
  storageBucket: "your_storageBucket",
  messagingSenderId: "your_messagingSenderId"
};
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

## Memo (in Japanese)
SVGの扱い方がよくわからないようだった。これまでは`iタグ`を用いてfont awesomeを利用していたが、SVGファイルを直に扱うことは勉強する必要があるかもしれない。また、SVGのパラメータを変更するときの作法を勉強する必要があると考えた。D3.jsなどを使うことでSVGを扱う部分が隠蔽され、開発者がSVGを利用しやくなる一方で、開発者側のSVGに関する知識が欠落してしまうことを思い知らされた。

また、初めてVue.jsに触れ、実装してみた。これまではReact(+redux)を用いた実装をしてきたが、Vueは1つのvueファイルで、view, state, actionを網羅することができるのだと体感した。しかしながら、コンポーネントに対してのパラメータの受け渡し、Vuexや、より枠組みを強化したNuxt.jsといった状態管理は難しい部分であると改めて思った。今回はプロトタイプとして一通り動作するもの、いわゆる叩き台、を開発することに専念していたため、App.vueのソースコードが長くなってしまい、読みにくいものになってしまっている。今後、需要があれば、改善や改良を検討したい。