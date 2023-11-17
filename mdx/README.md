```bash
yarn add @mdx-js/loader @mdx-js/react @next/mdx
```


```js
// next.config.js
const withMDX = require('@next/mdx')({
  extension: /\.mdx$/,
});

module.exports = withMDX({
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
});
```


```js
// tsconfig.json
{
  "include": [
    "mdx.d.ts"
  ]
}
```
