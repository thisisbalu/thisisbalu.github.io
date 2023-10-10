---
title: Custom Excerpt More and Custom Excerpt More Link in WordPress
author: Bala Subramanyam Lanka
layout: post
date: 2015-03-13T20:13:08+00:00
categories:
  - Wordpress
tags:
  - custom-excerpt
description: By default WordPress provides the custom excerpt with specific length of the letters(55) and followed by **[&#8230;]** symbol in the posts. By adding the following line we can display the excerpt.
---
Before talking about the custom excerpt more in WordPress let&#8217;s talk about the general meaning of the excerpt. It means a _short extract from anything_. So when it comes to the WordPress, excerpt means _a short extract from the blog post. _Excerpt in the blog is one of the important thing that every WordPress user uses it for the customisation.

By default WordPress provides the custom excerpt with specific length of the letters(55) and followed by **[&#8230;]** symbol in the posts. By adding the following line we can display the excerpt.

```php
<?php the_excerpt(); >
```

The default WordPress excerpt more will be shown like the following image

{% include figure.html path="assets/img/blog/custom-excerpt-1.png" class="img-fluid rounded z-depth-1" zoomable=true %}

##  How to add Custom Excerpt More?

Adding a custom excerpt more in the WordPress posts is very easy. Adding of simple lines of code in the functions.php file is needed. Let&#8217;s not talk in technical aspects, we are adding a small function in php to print &#8216;&#8230;&#8217; instead of printing &#8216;[&#8230;]&#8217; and also we tell to WordPress  to use our new lbs\_excerpt\_more instead of using the default excerpt_more function.

```php
//Defining custom excerpt more
function new_lbs_excerpt_more( $more ) {
  return '...';
}
//Telling wordpress to use new_lbs_excerpt_more function rather than default one
add_filter('excerpt_more', 'new_lbs_excerpt_more');
```

After adding these line in functions.php you can get the new defined custom excerpt in posts as shown in below picture

{% include figure.html path="assets/img/blog/custom-excerpt-2.png" class="img-fluid rounded z-depth-1" zoomable=true %}


## Adding a Custom Excerpt More Link

If we need to have a link instead of those symbols as shown in the above tutorial we have to return the anchor tag from the new\_lbs\_excerpt_more function.

```php
//Defining custom excerpt more
function new_lbs_excerpt_more( $more ) { 
 global $post;
 return '&lt;a class="more-link" href="'. get_permalink($post-&gt;ID) . '"&gt;'. __('Read More', 'lbs') .'&lt;/a&gt;';
}
//Telling wordpress to use new_lbs_excerpt_more function rather than default one
add_filter('excerpt_more', 'new_lbs_excerpt_more');
```

After adding these line in functions.php you can get the new defined custom excerpt in posts as shown in below picture

{% include figure.html path="assets/img/blog/custom-excerpt-3.png" class="img-fluid rounded z-depth-1" zoomable=true %}
