# gatsby-plugin-resolve-src
Gatsby plugin to resolve imports from your project's `/src` directory

This plugin modifies your webpack `resolve` node to allow imports from your `/src` directory, such as:

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

