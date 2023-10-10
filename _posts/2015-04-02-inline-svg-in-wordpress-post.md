---
title: Inline SVG in WordPress Post
author: Bala Subramanyam Lanka
layout: post
date: 2015-03-23T18:54:03+00:00
categories:
  - Wordpress
tags:
  - inline-svg
  - svg
description: Scalable Vector Graphics (SVG) is a trending technology. As SVG is infinitely scalable graphics, it is widely used. There is a problem in using these graphics inside the a WordPress post.
---
[Scalable Vector Graphics (SVG)][1] is a trending technology. As SVG is infinitely scalable graphics, it is widely used. There is a problem in using these graphics inside the a WordPress post. Yes, there are two problems with SVG in WordPress post. First thing is that you cannot upload a SVG image into the WordPress uploads and the second one is we cannot use inline SVG in WordPress post.

{% include figure.html path="assets/img/blog/inline_svg_wordpress.jpg" class="img-fluid rounded z-depth-1" zoomable=false %}

When I was writing an article about the svg, I came across this issues. However i found solution for one of the issue.

## How to fix inline SVG in WordPress Post?

I found that when we add inline SVG in WordPress post, it does not render in browser. This is because WordPress automatically discard some SVG tags while saving and rendering. Solution for this problem is to add inline SVG in post without any line breaks. **_Make sure that there are no line breaks in the whole SVG tag_**. Let me show you an example!

```php
<svg width="280" height="280"><circle cx="140" cy="140" r="135" stroke="green" stroke-width="4" fill="yellow" /></svg>
```

## Output

Note : Add SVG tag after your post is completed because inline SVG will be working in text editor but not in visual editor! So add your inline SVG at necessary position in text editor and publish directly. Happy Exploring! Happy Learning!