---
title: Why WordPress restricts uploading SVG files?
author: Bala Subramanyam Lanka
layout: post
date: 2015-04-19T15:39:54+00:00
categories:
  - Wordpress
tags:
  - svg
  - upload-svg
description: WordPress media uploader restricts uploading SVG files into WordPress. It throws an error message &#8220;Sorry, this file type is not permitted for security reasons.
---
WordPress media uploader restricts uploading SVG files into WordPress. It throws an error message &#8220;Sorry, this file type is not permitted for security reasons.&#8221; Yes! for security reasons WordPress blocks uploading SVG files. Error Dialog will be as follows.

## SVG isn&#8217;t a problem, XML is a problem

Yes WordPress is not against SVG, but XML is the problem which is a security issue. Confused? let me explain. SVG is nothing but a wrapped XML, in short SVG is also a XML file. Hence due to XML there are certain security issues. After a thorough search i found some attacks performed using &#8212;

  * Distributed Denial of Service (DDOS) or Denial of Service (DOS)
  * XML Bomb Attack

**Distributed Denial of Service (DDOS) or Denial of Service (DOS) **can be performed using the XML which allows attacker to crash the server on which the website is running. In fact they can also access the folders present on the server (root folders like etc, dev, tmp) If they succeed in accessing etc folder they may be a chance of accessing passwords and usernames those are saved in that folder.

**XML Bomb Attack **which is also termed as the Billions Laughs is also a type of Distributed Denial of Service which is aimed at parsers of XML Documents. This type of attack creates the loop of nested attributes and entities which makes the script of gigabytes size, eventually RAM usage increases and makes server to hang up.

Hence due to these security issues, WordPress restricts users from uploading SVG files. Happy Learning! Happy Exploring!