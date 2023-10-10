---
title: Custom Excerpt Length in WordPress
author: Bala Subramanyam Lanka
layout: post
date: 2015-03-16T15:45:27+00:00
categories:
  - Wordpress
tags:
  - custom-excerpt
description: In WordPress, excerpt means a _short extract from the blog post. _The default length of the excerpt in WordPress is 55 characters. For the customisation purposes setting user defined length to the excerpt in WordPress is needed at times.
---
In WordPress, excerpt means a _short extract from the blog post. _The default length of the excerpt in WordPress is 55 characters. For the customisation purposes setting user defined length to the excerpt in WordPress is needed at times. This needs adding a small php function in to functions.php file. As mentioned above default length of the excerpt is 55 characters, to override the  default functionality excerpt length we have to add a filter in the same file.

{% include figure.html path="assets/img/blog/custom_excerpt_length_in_wordpress.jpg" class="img-fluid rounded z-depth-1" zoomable=false %}

Add the following function and filter in your functions.php file to get the custom excerpt length in WordPress.

<pre class="language-php"><code>
//Custom Excerpt Length
function custom_excerpt_length( $length ) {
    return 35; // Setting the custom excerpt length in WordPress
}
//Adding a filter to override the default method excerpt length of WordPress
add_filter('excerpt_length', 'custom_excerpt_length', 999 );```

Thats all we have to for setting the custom excerpt length in WordPress. Happy Exploring and Happy Learning!