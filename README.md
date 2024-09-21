<p align="center">
 <h2 align="center">:package: rehype-dir</h2>
 <p align="center">A rehype plugin to set text direction attributes</p>
  <p align="center">
    <a href="https://github.com/ahmedrowaihi/rehype-dir/issues">
      <img alt="Issues" src="https://img.shields.io/github/issues/ahmedrowaihi/rehype-dir?style=flat&color=336791" />
    </a>
    <a href="https://github.com/ahmedrowaihi/rehype-dir/pulls">
      <img alt="GitHub pull requests" src="https://img.shields.io/github/issues-pr/ahmedrowaihi/rehype-dir?style=flat&color=336791" />
    </a>
    <br />
    <br />
  <a href="https://github.com/ahmedrowaihi/rehype-dir/issues/new/choose">Report Bug</a>
  <a href="https://github.com/ahmedrowaihi/rehype-dir/issues/new/choose">Request Feature</a>
  </p>

<p align="center"><strong>A rehype plugin to set text direction attributes for HTML elements</strong>✨</p>

# Getting started

## Installation

```bash
npm install rehype-dir
```

Or with yarn:

```bash
yarn add rehype-dir
```

## Usage

Basic usage:

```javascript
import rehype from 'rehype'
import rehypeDir from 'rehype-dir'

rehype()
  .use(rehypeDir, {
    forceLTR: ['code', 'pre'],
    forceRTL: ['blockquote'],
    forceAuto: ['p'],
    topLevelAuto: true
  })
  .process(yourHtml)
```

## Recommended Usage with rehype-sectionize

For optimal results, we recommend using `rehype-dir` in conjunction with `@hbsnow/rehype-sectionize`. This combination allows for better structure and direction control in your HTML content.

First, install both plugins:

```bash
npm install rehype-dir @hbsnow/rehype-sectionize
```

Then, use them together with the following recommended settings:

```javascript
import rehypeSectionize from "@hbsnow/rehype-sectionize";
import rehypeDir from "rehype-dir";

// In your rehype configuration:
rehype()
  .use(rehypeSectionize)
  .use(rehypeDir, {
    topLevelAuto: true,
    forceLTR: ["pre", "code", "table"],
    forceAuto: ["section", "h1", "h2", "h3", "h4", "h5", "h6", "p"],
  })
  .process(yourHtml)
```

If you're using a framework that supports rehype plugins (like Next.js with MDX), you can configure it like this:

```javascript
const config = {
  // ...other config options
  rehypePlugins: [
    rehypeSectionize,
    [
      rehypeDir,
      {
        topLevelAuto: true,
        forceLTR: ["pre", "code", "table"],
        forceAuto: ["section", "h1", "h2", "h3", "h4", "h5", "h6", "p"],
      },
    ],
  ],
};
```

These settings will:

1. Use `rehypeSectionize` to wrap content in `<section>` tags.
2. Set the top-level direction to 'auto'.
3. Force left-to-right direction for `<pre>`, `<code>`, and `<table>` elements.
4. Set automatic direction for `<section>`, heading elements, and paragraphs.

This configuration ensures that your content is well-structured and has appropriate text direction settings for different types of content.

## Options

- `forceLTR`: An array of tag names to force left-to-right direction.
- `forceRTL`: An array of tag names to force right-to-left direction.
- `forceAuto`: An array of tag names to force automatic direction.
- `topLevelAuto`: A boolean to set the top-level direction to 'auto'.

## API

### `rehypeDir(options)`

#### `options`

##### `forceLTR`

Type: `string[]`
Default: `[]`

An array of HTML tag names that should have their direction set to left-to-right.

##### `forceRTL`

Type: `string[]`
Default: `[]`

An array of HTML tag names that should have their direction set to right-to-left.

##### `forceAuto`

Type: `string[]`
Default: `[]`

An array of HTML tag names that should have their direction set to auto.

##### `topLevelAuto`

Type: `boolean`
Default: `false`

If true, sets the direction of the top-level element to 'auto'.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/ahmedrowaihi/rehype-dir/issues).

## Show your support

Give a ⭐️ if this project helped you!

## 📝 License

Copyright © 2024 [Ahmed Rowaihi](https://github.com/ahmedrowaihi).<br />
This project is [MIT](LICENSE) licensed.
