---
draft: false
title: Gaussian Splatting
description: >
  Notes and thoughts on 3D Gaussian Splatting, real-time rendering,
  and language-aware scene representations.
pubDate: 2026-05-18T16:30:00.000Z
license: cc-by-nc-sa-4-0
tags:
  - gaussian splatting
  - 3dgs
  - computer vision
  - language field

image:
  src: https://honeysty1201.github.io/images/gsplat.png
  alt: Gaussian Splatting visualization
ogImage:
  src: https://honeysty1201.github.io/images/gsplat.png

---

# Gaussian Splatting

## What is Gaussian Splatting?

3D Gaussian Splatting (3DGS) is a real-time neural rendering method that represents a scene using a set of learnable 3D Gaussians instead of dense voxels or neural radiance fields.

Each Gaussian typically contains:

$$
G_i = \{ \mu_i, \Sigma_i, o_i, c_i \}
$$

where:

- $\mu_i$ : 3D position
- $\Sigma_i$ : covariance matrix
- $o_i$ : opacity
- $c_i$ : color

Unlike NeRF, which requires expensive neural network inference during rendering, Gaussian Splatting directly rasterizes these primitives on the GPU.

This makes rendering significantly faster!

---

## Rendering Equation

The rendered color of a pixel can be written as:

$$
C = \sum_i T_i \alpha_i c_i
$$

where:

$$
T_i = \prod_{j=1}^{i-1}(1-\alpha_j)
$$

represents accumulated transparency.

The formulation is conceptually similar to volumetric rendering in NeRF.

---

## Why It Became Popular

3DGS achieved:

- Real-time rendering
- High visual quality
- Efficient optimization
- Easier scene editing

This caused a rapid shift from NeRF-based pipelines toward Gaussian-based representations.

---

## Relation to Language Fields

Many recent works attempt to combine Gaussian Splatting with semantic embeddings such as CLIP.

The overall idea becomes:

```txt
Image → Feature Embedding → 3D Gaussian Representation
```

This enables:

- Open-vocabulary querying
- Semantic localization
- Scene understanding
- Retrieval in 3D space

However, several questions remain:

1. Do we actually need full 3D reconstruction for language understanding?
2. How consistent are CLIP embeddings across views?
3. Can semantic understanding emerge from geometry alone?

These are currently active research topics.

---

## Personal Thoughts

My current impression is that many language field methods still rely heavily on scene-specific optimization.

While they achieve impressive querying performance, they may not yet represent a truly generalized spatial understanding system.

I am especially interested in:

- lightweight representations
- monocular settings
- retrieval-oriented language fields
- dynamic scene understanding
- hierarchical semantic structures

---

## References

- Kerbl et al., *3D Gaussian Splatting for Real-Time Radiance Field Rendering*
- LERF
- LangSplat
- SLARM
- 4DLangSplat