---
title: Removing Query Strings from Static Resources
author: Bala Subramanyam Lanka
layout: post
date: 2015-03-12T17:50:28+00:00
categories:
  - Wordpress
tags:
  - query
description: If you are a WordPress user, removing of query strings from static resources does matter in the website&#8217;s performance. When I was developing my blog&#8217;s theme I faced the same issues. 

---
If you are a WordPress user, removing of query strings from static resources does matter in the website&#8217;s performance. When I was developing my blog&#8217;s theme I faced the same issues. In order to remove the query strings from the static resources we can write a small piece of javascript or write a simple function in php. I would prefer writing the php code in the functions.php file to remove query strings from static resources.

Are you confused? What does query strings in url mean? Just look at the urls of my website shown below.

{% include figure.html path="assets/img/blog/remove-query-strings-from-static-resources.png" class="img-fluid rounded z-depth-1" zoomable=false %}

I guess you might understood what are query strings in the url, just the parameters we are passing after the _question mark_ in the url are called as the query strings.

## Why Query Strings from Static Resources must be removed?

We should remove all the query strings from static resources for the better caching at proxies. Caching is one of the important factor in terms of website&#8217;s performance. Resources with a &#8220;?&#8221; in the URL are not cached by some proxy caching servers. Let&#8217;s see how to remove all the query strings.

<pre class="language-java"><code>
//remove query strings from static resources
function _remove_script_version( $src ){ 
   $parts = explode( '?', $src ); 
   return $parts[0]; 
}
 
add_filter( 'script_loader_src', '_remove_script_version', 15, 1 ); 
add_filter( 'style_loader_src', '_remove_script_version', 15, 1 ); 
```

Thats all you should add into your functions.php file for removing query strings from static resources and make proxy caching better. All the best. Happy Learning!