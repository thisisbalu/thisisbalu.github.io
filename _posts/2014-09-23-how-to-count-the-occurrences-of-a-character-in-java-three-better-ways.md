---
title: How to count the occurrences of a character in Java – Three Better Ways
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-23T14:30:00+00:00
categories:
  - Java
tags:
  - string
description: In this comprehensive tutorial by Bala Subramanyam Lanka, you'll discover three efficient methods for counting the occurrences of a character in Java strings. These techniques not only showcase different approaches but also highlight the versatility of Java programming.

---
There are three ways.

  1. Using charAt &#8211; Traditional For Loop
  2. Using toCharArray &#8211; Enhanced For Loop
  3. Using replaceAll &#8211; Efficient Way without Looping


**NO 1 Using charAt &#8211; Tutorial**

```java
package com.javaindetail.PatternTutorial;

public class repeatedCharacters {
  public static void main(String args[]){
    String str = "javaindetail.com";
    
    int counter = 0;
    for( int i=0; i&lt;str.length(); i++ ) {
        if( str.charAt(i) == 'a' ) {
            counter++;
        } 
    }
    System.out.println(counter);
  }
}
```

**NO 2 Using toCharArray &#8211; Tutorial**

```java
package com.javaindetail.PatternTutorial;

public class repeatedCharacters {
  public static void main(String args[]){
    String str = "javaindetail.com";
    
    int counter = 0;
    for(char c : str.toCharArray()) {
        if( c == 'a' ) {
            counter++;
        } 
    }
    System.out.println(counter);
  }
}
```

**NO 3 Using replaceAll &#8211; Tutorial**

```java
package com.javaindetail.PatternTutorial;

public class repeatedCharacters {
  public static void main(String args[]){
    String str = "javaindetail.com";
    
    int counter = str.length() - str.replaceAll("a", "").length();
    
    System.out.println(counter);
  }
}
```
