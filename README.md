## React-Webpack-Typescript

- Create directory.
- Create folder 'src'.
- Create `.gitignore` file in root.
- Create `index.html` file in `src` directory.
- Create `package.json` using below command:

```bash
npm init --y
```

- Install React & React-DOM.

```bash
npm i react react-dom
```

- Install Typescript as dev dependency.

```bash
npm i typescript @types/react @types/react-dom -D
```

- Create `tsconfig.json` file.
- Create `App.tsx` & `index.tsx` files.
- Install `Babel` to convert `React & Typescript` to `Javascript`

```bash
npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/preset-typescript
```

- Create `.babelrc` file.
- Install `Webpack` as dev dependency

```bash
npm i -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

- Install `babel-loader`

```bash
npm i -D babel-loader
```

- Create `webpack` folder in root.
- Create `webpack.config.js` file.
- Add `npm start` script in `package.json` file.
- Install `css-loader` & `style-loader` to enable support for css files.

```bash
npm i -D css-loader style-loader
```

- Include these loaders in `webpack.config.js` file.
