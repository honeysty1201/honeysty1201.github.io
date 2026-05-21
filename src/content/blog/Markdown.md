---
draft: false
featured: '3'
title: Markdown template
description: >
  markdown template for editing
pubDate: 2026-05-21T23:30:00.000Z
license: cc-by-nc-sa-4-0
series: ""
tags:
  - markdown
  - writing
  - template


image:
  src: https://res.cloudinary.com/dth0wdg3c/image/upload/v1779374689/%E3%82%BF%E3%82%99%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%88%E3%82%99_gqeukj.png

ogImage:
  src: https://res.cloudinary.com/dth0wdg3c/image/upload/v1779374689/%E3%82%BF%E3%82%99%E3%82%A6%E3%83%B3%E3%83%AD%E3%83%BC%E3%83%88%E3%82%99_gqeukj.png

---

# Markdown template

This page is a collection of Markdown templates you can use directly in this blog.  

## Basic text

<div class="markdown-template-grid">
  <section class="markdown-template-panel">
    <p class="markdown-template-label">Preview</p>
    <div class="markdown-template-body">
      <h3>Heading 3</h3>
      <p><strong>bold</strong>, <em>italic</em>, <mark>highlight</mark>, <code>inline code</code></p>
      <p><a href="/">internal link</a></p>
    </div>
  </section>
  <section class="markdown-template-panel">
    <p class="markdown-template-label">Markdown</p>
    <pre class="markdown-template-code"><code>### Heading 3

**bold**, *italic*, ==highlight==, `inline code`

[internal link](/)</code></pre>
  </section>
</div>

## List and quote

<div class="markdown-template-grid">
  <section class="markdown-template-panel">
    <p class="markdown-template-label">Preview</p>
    <div class="markdown-template-body">
      <ul>
        <li>first item</li>
        <li>second item</li>
      </ul>
      <ol>
        <li>step one</li>
        <li>step two</li>
      </ol>
      <blockquote>
        <p>This is a blockquote.</p>
      </blockquote>
    </div>
  </section>
  <section class="markdown-template-panel">
    <p class="markdown-template-label">Markdown</p>
    <pre class="markdown-template-code"><code>- first item
- second item

1. step one
2. step two

&gt; This is a blockquote.</code></pre>
  </section>
</div>

## Code block

<div class="markdown-template-grid">
  <section class="markdown-template-panel">
    <p class="markdown-template-label">Preview</p>
    <div class="markdown-template-body">
      <pre class="markdown-template-plain-pre"><code>const message = "hello markdown";

console.log(message);</code></pre>
    </div>
  </section>
  <section class="markdown-template-panel">
    <p class="markdown-template-label">Markdown</p>
    <pre class="markdown-template-code"><code>&#96;&#96;&#96;ts
const message = "hello markdown";

console.log(message);
&#96;&#96;&#96;</code></pre>
  </section>
</div>

Code blocks are syntax highlighted and include line numbers.

## Math

Math support is enabled with `remark-math` and `rehype-katex`.

Use `$...$` for inline math and `$$...$$` for display math.

Preview:

Inline math: $\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x)e^{-2\pi i x \xi}\,dx$

Display math:
$$
\mathcal{L}\{f(t)\}(s) = \int_{0}^{\infty} f(t)e^{-st}\,dt
$$

Markdown:

```md
Inline math: $\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x)e^{-2\pi i x \xi}\,dx$

$$
\mathcal{L}\{f(t)\}(s) = \int_{0}^{\infty} f(t)e^{-st}\,dt
$$
```

## Admonition

This blog supports callout blocks using the `:::type` container syntax.  
Available types are `info`, `note`, `tip`, `warning`, and `danger`.

Preview:

:::info
Info title
- message one
- message two
:::

Markdown:

```md
:::info
Info title
- message one
- message two
:::
```

### Other admonition types

```md
:::note
Note title
content
:::

:::tip
Tip title
content
:::

:::warning
Warning title
content
:::

:::danger
Danger title
content
:::
```

## Raw HTML

You can also use simple HTML inside Markdown. This is useful when you need small layout adjustments.

<div class="markdown-template-grid">
  <section class="markdown-template-panel">
    <p class="markdown-template-label">Preview</p>
    <div class="markdown-template-body">
      <div class="markdown-template-html-box">
        Custom HTML box
      </div>
    </div>
  </section>
  <section class="markdown-template-panel">
    <p class="markdown-template-label">Markdown</p>
    <pre class="markdown-template-code"><code>&lt;div class="markdown-template-html-box"&gt;
  Custom HTML box
&lt;/div&gt;</code></pre>
  </section>
</div>

## Copy template

```md
---
draft: false
featured: '1'
title: Your title
description: >
  short description
pubDate: 2026-05-21T23:30:00.000Z
license: cc-by-nc-sa-4-0
series:
tags:
  - tag one
  - tag two

image:
  src: https://example.com/cover.png

ogImage:
  src: https://example.com/cover.png
---

# Title

intro text

## Section

normal paragraph

:::info
optional callout
:::

Inline math: $\hat{f}(\xi) = \int_{-\infty}^{\infty} f(x)e^{-2\pi i x \xi}\,dx$
```
