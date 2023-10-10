---
title: How to remove white spaces in Java?
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-25T05:41:43+00:00
categories:
  - Java
tags:
  - regex
description: Removing white spaces in Java is simple. All we have to do is to use [Regex][1] and replaceAll() method of String class. A small tutorial is given below.
---
Removing white spaces in Java is simple. All we have to do is to use [Regex][1] and replaceAll() method of String class. A small tutorial is given below.

## remove white spaces in java {.offscreen}

**Tutorial &#8211; Remove white spaces in Java**

```java
package com.javaindetail.ReplaceWhiteSpaces;

public class ReplaceSpaces {

  public static void main(String[] args) {
    
    String sentence = "welcome      to   javaindetail.com this website is all about tutorials";
    System.out.println("Before replacing white spaces :: "+sentence);
    sentence = sentence.replaceAll("\s", ""); //remove white spaces in Java using regex
    System.out.println("After replacing white spaces :: "+sentence);

  }

}
```

**Output**

```
Before replacing white spaces :: welcome      to   javaindetail.com this website is all about tutorials
After replacing white spaces :: welcometojavaindetail.comthiswebsiteisallabouttutorials
```
