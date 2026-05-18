---
draft: false
featured: none
authors:
  - Daniel Adrian
title: Basic Blog 
description: >-
  Basic Blog is a mostly lightweight, high-performance blog template built with Astro.
pubDate: 2025-08-02T07:46:00.000Z
license: MIT
series: blog project
tags:
  - astro 
  - tailwind 
  - js
image:
  src: >-
    https://res.cloudinary.com/dellp9a4z/image/upload/v1776091800/basic-blog_ouz5xk.jpg
  alt: >-
    Screenshot of the "Daniel Adrian" blog homepage featuring a dark UI and three featured articles with hand-drawn, sketch-style illustrations on a textured tan background. 
ogImage:
  src: https://res.cloudinary.com/dellp9a4z/image/upload/v1776091800/basic-blog_ouz5xk.jpg
---

**Basic Blog** is a mostly lightweight, high-performance blog template built with Astro 6.

**Features**

- Astro 6+ Ready:
  - Native Font Optimization
  - Pre-configured CSP (Content Security Policy) and security headers (optimized for Cloudflare, easily adaptable for Vercel or Netlify). 
- Responsive: mobile, tablet, and desktop devices.
- Stack: Astro, Tailwind, and JS.

## Deployment

You will find a `_headers` file located in the `/public` folder. This file handles the Content Security Policy (CSP) and XSS protections mainly for Cloudflare.

If you are deploying to Vercel or Netlify, simply move these rules to a `vercel.json` or `netlify.toml` file respectively.

## Configuration

### Environment Variables

For image delivery and related integrations, add your public Cloudinary config to `.env`:

```bash
PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name_here
```

### Site Settings & SEO

Global settings, SEO metadata, and navigation links are managed in `src/site.config.ts`.

Update `SITE_SETTINGS` to change your site title, description, and social media handles:

```typescript
export const SITE_SETTINGS = {
  title: "Daniel Adrian's site",
  description: "A space to explore ideas and share what I'm learning",
  owner: "Daniel Adrian",
  ogImages:
    "https://res.cloudinary.com/dellp9a4z/image/upload/v1756758385/og-home_ejuqq8.png",
  socials: [
    {
      icon: "github",
      label: "GitHub",
      url: "https://github.com/truedaniyyel",
      handle: "truedaniyyel",
    },
  ],
};
```

### Navigation (Header & Footer)

You can easily manage your site's menu structure by editing the header and footer exports:

```typescript
export const header = [
  {
    name: "Blog",
    url: "/blog",
  },
  {
    name: "Projects",
    url: "/projects",
  },
  {
    name: "About",
    url: "/about",
  },
];

export const footer = [
  {
    title: "Content",
    links: [
      {
        name: "Search",
        url: "/search",
      },
      {
        name: "Blog",
        url: "/blog",
      },
      {
        name: "Projects",
        url: "/projects",
      },
      {
        name: "About",
        url: "/about",
      },
    ],
  },
  {
    title: "Resources",
    links: [
    ],
  },
];
```

## Metadata & OG Images

You can define custom Open Graph images for both static pages and posts.

### For Static Pages

Pass the `ogImage` prop directly into the `<BaseLayout>` component:

```astro
<BaseLayout
    title="Search"
    description="Search articles and projects from Daniel Adrian."
    ogImage="https://res.cloudinary.com/.../og-search.png"
>
    </BaseLayout>
```

### For Blog Posts

Add the image details to the Frontmatter of your Markdown files. The template will automatically use this for the post's social sharing card:

```yaml
image:
  src: "https://res.cloudinary.com/.../how_to_build_trust.webp"
  alt: "A hand-drawn sketch representing stability with labels: 'Know', 'Like', and 'Trust'."
ogImage:
  src: "https://res.cloudinary.com/.../how_to_build_trust.webp"
```

## Image Optimization

This template uses Cloudinary paired with LQIP (Low-Quality Image Placeholders) to ensure a smooth loading experience. When an image is requested, a blurred placeholder is shown until the full-resolution image is ready.

You can find the implementation logic in `src/components/ui/OptimizedImage.astro`:

```astro
<div
    class={cn(
        "relative overflow-hidden bg-neutral-200 dark:bg-neutral-700",
        wrapperClass,
    )}
>
    {
        lqipUrl && (
            <img
                data-pagefind-ignore
                src={lqipUrl}
                alt=""
                aria-hidden="true"
                class={cn(
                    "absolute inset-0 h-full w-full scale-105 object-cover blur-xl",
                    imageClass,
                )}
                loading="eager"
                decoding="async"
            />
        )
    }

    <CldImage
        src={src}
        alt={alt}
        class={cn("absolute inset-0 h-full w-full object-cover", imageClass)}
        loading={loading}
        fetchpriority={fetchPriorityVal}
        format="auto"
        quality="auto"
        {...rest}
    />
</div>
```

## Fonts

Local fonts are stored in `src/assets/fonts/`. To add or change fonts:

1. Drop your `.woff2` files into the fonts folder.
2. Update the `astro.config.mjs` font provider:

```mjs
fonts: [
    {
      provider: fontProviders.local(),
      name: "YourFontName",
      cssVariable: "--font-custom",
      options: {
        variants: [{
            src: ["./src/assets/fonts/YourFont.woff2"],
            weight: "normal",
            style: "normal",
          }],
      },
    },
  ],
```

3. Update the variable in `src/styles/global.css`:

```css
font-family: var(--font-custom), system-ui, sans-serif;
```

*For more info on using remote fonts (Google Fonts, etc.), check the [Astro Font Provider Reference.](https://docs.astro.build/en/reference/font-provider-reference/)*

## Technical Details

Search: Powered by [Pagefind](https://pagefind.app/) for fast, static search.
Image Zoom: Integrated with `medium-zoom` for a clean light-box experience.
Icons: Handled via `astro-icon`.
Code Blocks: Rendered using `astro-expressive-code`.
