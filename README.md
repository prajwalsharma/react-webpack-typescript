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

## Enable CSS Support

- Install `css-loader` & `style-loader` to enable support for css files.

```bash
npm i -D css-loader style-loader
```

- Include these loaders in `webpack.config.js` file.

## Enable Image & SVG Support

- Create `declarations.d.ts` file in `src` folder to enable importing images & svgs.
- Enable image & svg support in `webpack.config.js` file to enable image support.

## Webpack Config Environments

- Rename `webpack.config.js` to `webpack.common.js`
- Remove `mode: development` from this file.
- Create `webpack.dev.js` for development environment in `webpack` folder.
- Create `webpack.prod.js` for production environment in `webpack` folder.
- Create `webpack.config.js` in `webpack` folder.
- Install `webpack-merge` package:

```bash
npm i -D webpack-merge
```

- Update all the webpack files.
- Update the scripts in `package.json`

### Enable 'Fast Reloading/Hot Reloading'

-Install `react-refresh-webpack-plugin` and `react-refresh` packages.

```
npm install -D @pmmmwh/react-refresh-webpack-plugin react-refresh
```

- Update `webpack.dev.js` file
- Install `core-js` and `regenerator-runtime` packages.

```
npm i -D core-js regenerator-runtime
```
