---
title: Uploading SVG files through WordPress Media Uploader
author: Bala Subramanyam Lanka
layout: post
date: 2015-04-17T17:03:50+00:00
categories:
  - Wordpress
tags:
  - svg
  - upload-svg
description: Uploading SVG files through media uploader in WordPress is an issue faced by all the WordPress users or the bloggers who are interested in adding SVG image files in to their posts.
---
Uploading SVG files through media uploader in WordPress is an issue faced by all the WordPress users or the bloggers who are interested in adding SVG image files in to their posts. SVG ([Scalable Vector Graphics][1]) files are very popular because of their infinite scalability. Besides this, 

SVGs have many advantages over traditional jpegs, pngs, bmps etc.,. If we try to upload the SVG file into WordPress media uploader it throws the following error dialogue.

But we can fix this error by adding following simple function and a filter in functions.php file in the WordPress.

```php
//Uploading SVG files through WordPress Media Uploader
function custom_mime_types( $mime ){
    $mime['svg'] = 'image/svg+xml';
    $mime['svgz'] = 'image/svg+xml';
    return $mime;
}

add_filter( 'upload_mimes', 'custom_mime_types' );
```

This solves the problem of uploading the SVG files. But there is a small problem, the uploaded SVG files (images) cannot be displayed properly in the media uploader grid. Happy Learning! Happy Exploring!