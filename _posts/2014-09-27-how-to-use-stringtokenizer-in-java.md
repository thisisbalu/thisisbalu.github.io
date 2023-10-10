---
title: How to use StringTokenizer in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-27T14:30:33+00:00
categories:
  - Java
tags:
  - string-tokenizer
description: StringTokenizer in java is used to split or break a string into tokens based on a delimiter. Its methods do not distinguish among identifiers, numbers, and quoted strings.
---
**Package** : java.util.StringTokenizer  
**Extends** : java.lang.Object class  
**Implements** : Enumeration<Object>  
**Brief Description** : StringTokenizer in java is used to split or break a string into tokens based on a delimiter. Its methods do not distinguish among identifiers, numbers, and quoted strings.

**Syntax :** 

<pre>public StringTokenizer(String str)
 or
public StringTokenizer(String str, String delim)
 or
public StringTokenizer(String str, String delim, boolean returnDelims)
</pre>

**Tutorial :**

```java
package com.javaindetail.tokenizertutorial;

import java.util.StringTokenizer;

public class SplitUsingTokenizer {

  public static void main(String[] args) {

    String str = "welcome-to-javaindetail.com";
    StringTokenizer strToken = new StringTokenizer(str, "-");
    // stringtokenizer in java
    System.out.println("Splitting using StringTokenizer with - as delimiter");
    while (strToken.hasMoreTokens()) {
      System.out.println(strToken.nextElement());
    }
  }

}
```

**Output :**

```
welcome
to
javaindetail.com
```