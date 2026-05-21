---
draft: false
featured: '1'
title: LangSplat
description: >
    The pioneering work that opened the modern direction of language field
  
pubDate: 2026-05-19T16:30:00.000Z
license: cc-by-nc-sa-4-0
series: 3d reconstruction
tags:
  - gaussian splatting
  - 3dgs
  - computer vision
  - language field

image:
  src: https://res.cloudinary.com/dth0wdg3c/image/upload/v1779155620/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2026-05-19_10.52.18_inc2pw.png
ogImage:
  src: https://res.cloudinary.com/dth0wdg3c/image/upload/v1779155620/%E3%82%B9%E3%82%AF%E3%83%AA%E3%83%BC%E3%83%B3%E3%82%B7%E3%83%A7%E3%83%83%E3%83%88_2026-05-19_10.52.18_inc2pw.png

---

# LangSplat

## What is language field?

The main idea of a language field is to construct semantic feature vectors not only on images, but directly on the represented 3D space itself.
First, we reconstruct the scene using a 3D representation such as 3D Gaussian Splatting (3DGS), which gives us a set of 3D Gaussians distributed throughout the space. Then, by allocating semantic vectors to each Gaussian, we can think of the whole space as being filled with semantics, somewhat in a human-like way.

Moreover, these semantic features are mostly driven by CLIP features, where OpenAI’s CLIP acts as a vision-language model (VLM) that binds natural language and visual representations into a shared embedding space. Because of this property, we can query the space using open-vocabulary natural language.

An important point here is that CLIP features are image-aligned. This means that semantic understanding is originally attached to 2D image regions rather than explicit 3D structures. Still, by combining 3D reconstruction methods such as 3DGS with VLM-based semantic features, the ultimate motivation of language fields is to build a 3D space that is full of meaning. In such a representation, we can directly ask natural language queries about the whole space and localize where the queried object or concept exists.

As mentioned above, the image-aligned nature of CLIP introduces several challenges, such as ambiguous boundaries and background mixing. Some of these issues can be alleviated using segmentation or masking methods. However, the more fundamental problem is that CLIP is inherently a 2D representation, while the target space is 3D. Therefore, one of the central problems in language field research is how to effectively distill or project 2D semantic features into 3D Gaussian representations. This is still an open problem, and many recent works propose different approaches for transferring semantic features from images to 3D Gaussians.

This article introduces one of the pioneering papers that opened up the direction of modern language field research: LangSplat, which constructs a language field using 3DGS, SAM, and CLIP.

It is also important to note that these three components — 3DGS, CLIP, and Segment Anything Model — appear repeatedly in many recent language field works. In that sense, LangSplat became one of the major turning points after LERF and strongly influenced the later research direction of language fields.

## LangSplat

:::info
LangSplat
- First 3D Gaussian Splatting-based framework for constructing 3D language fields.
- Leveraged SAM-based hierarchical semantics to alleviate semantic ambiguity and improve object boundary understanding in 3D space.
- Introduced a scene-specific encoder-decoder to compress semantic features and reduce the large memory cost of explicit CLIP feature modeling.
:::

