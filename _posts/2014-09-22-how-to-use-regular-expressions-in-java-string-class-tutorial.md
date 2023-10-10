---
title: How to use Regular Expressions in Java – String Class Tutorial
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-22T14:30:36+00:00
categories:
  - Java
tags:
  - regex
description: Many languages like Java, Python, C#, Perl, Groovy  and others support Regular Expressions in their own way. Let us see how regular expressions are used and the syntax of different regular expressions in Java.
---
We can use Regular Expressions on String class in Java. It can be applied on the following Methods.

  1. public boolean matches(String regex) &#8211; Tells whether or not this string matches the given regular expression.
  2. public String[] split(String regex,int limit) &#8211;  Splits this string around matches of the given regular expression.
  3. public String[] split(String regex) &#8211;   Splits this string around matches of the given regular expression.
  4. replaceAll(String regex, String replacement) &#8211;    Replaces each substring of this string that matches the given regular expression with the given replacement.
  5. replaceFirst(String regex, String replacement) &#8211;  Replaces the first substring of this string that matches the given regular expression with the given replacement.


**Regex in String Class &#8211; Tutorial**

```java
package com.javaindetail.PatternTutorial;

public class StringRegexTutorial {

  public static final String TEXT_FOR_REGEX = "This is a technical blog about java. javaindetail.com is a technical blog. Explore everything in detail";

  public static void main(String[] args) {
    
    System.out.println(TEXT_FOR_REGEX.matches("\w.*"));
    
    // splitting the string with spaces
    String[] splitString = (TEXT_FOR_REGEX.split("\s+"));
    
    System.out.println(splitString.length);
    
    for (String string : splitString) {
      System.out.println(string);
    }
    
    // replace all whitespace with tabs
    System.out.println(TEXT_FOR_REGEX.replaceAll("\s+", "t"));
  }
}
```

**Output**

```java
true
16
This
is
a
technical
blog
about
java.
javaindetail.com
is
a
technical
blog.
Explore
everything
in
detail
This	is	a	technical	blog	about	java.	javaindetail.com	is	a	technical	blog.	Explore	everything	in	detail
```