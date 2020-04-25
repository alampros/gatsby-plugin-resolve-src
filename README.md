# gatsby-plugin-resolve-src
Gatsby plugin to resolve imports from your project's `/src` directory

This plugin modifies your webpack config to allow imports from your `/src` directory, such as:

```js
import MyComponent from 'components/MyComponent'
```

...instead of

```js
import MyComponent from '../../components/MyComponent'
```

# Usage

Add it to your project

```sh
yarn add gatsby-plugin-resolve-src
```

Then add it to your `gatsby-config.js`:

```js
{
  plugins: [
    'gatsby-plugin-resolve-src',
  ]
}
```

## VSCode Configuration

You have to tell VS Code how to find your modules by creating a `tsconfig.json` (or `jsconfig.json`) file in your project root. For example:

```json
{
  "compilerOptions": {
    "baseUrl": "./src",
    "paths": {
      "*": [
        "types/*",
        "*"
      ]
    }
  },
}
```

See [#9](https://github.com/alampros/gatsby-plugin-resolve-src/issues/9) for more info.

## ESLint Configuration

If using `eslint-plugin-import`, you have to tell ESLint how to find your modules by configuring the default `node` resolver in your eslint config. For example:

```json
{
  "settings": {
    "import/resolver": {
      "node": {
        "moduleDirectory": ["node_modules", "src"]
      }
    }
  }
}
```

If your project is linting filetypes besides `.js`, you will have to add them explicitly. See the node resolver [documentation](https://www.npmjs.com/package/eslint-import-resolver-node) for more details.

## Options

### `srcPath` (file path)

Default: `path.resolve(__dirname, '../../src')`

The full path to your `/src` directory.

#### Yarn Workspaces

To resolve your `src` directory when using yarn workspaces, use the srcPath option:

```
{
  resolve: 'gatsby-plugin-resolve-src',
  options: {
    srcPath: path.resolve(__dirname, 'src'),
  },
},
```