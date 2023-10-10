---
title: How to split a String in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-28T14:30:53+00:00
categories:
  - Java
tags:
  - string-tokenizer
description: StringTokenizer in java is used to split or break a string into tokens based on a delimiter. Its methods do not distinguish among identifiers, numbers, and quoted strings.
---
There are three better ways to split a string in Java.

  1. Using split() method of String Class
  2. Using StringTokenizer class of java.util package.
  3. Using useDelimiter() of Scanner Class.



**Using split() method of String Class**

<span style="text-decoration: underline;">Syntax</span>

<pre>public String[] split(String regex, int limit)
 or
public String[] split(String regex)
</pre>

** Tutorial**

```java
package com.javaindetail.splittutorial;

public class SplitTutorial {

  public static void main(String[] args) {

    String Str = new String("Welcome-to-javaindetail.com");

    System.out.println("Using limit 2 :" );
    for (String str: Str.split("-", 2)){
       System.out.println(str);
    }
    System.out.println("");
    System.out.println("Using limit 0 :" );
    for (String str: Str.split("-", 0)){
       System.out.println(str);
    }
    System.out.println("");
    System.out.println("without limit :" );
    for (String str: Str.split("-")){
       System.out.println(str);
    }

  }

}
```

**Output**

```java
Using limit 2 :
Welcome
to-javaindetail.com

Using limit 0 :
Welcome
to
javaindetail.com

without limit :
Welcome
to
javaindetail.com
```

**Using StringTokenizer class of java.util package.**

<span style="text-decoration: underline;">Syntax:</span>

<pre>public StringTokenizer(String str)
 or
public StringTokenizer(String str, String delim)
 or
public StringTokenizer(String str, String delim, boolean returnDelims)</pre>

** Tutorial**

```java
package com.javaindetail.splittutorial;

import java.util.StringTokenizer;

public class SplitUsingTokenizer {

  public static void main(String[] args) {

    String str = "welcome-to-javaindetail.com";
    StringTokenizer strToken = new StringTokenizer(str, "-");

    System.out.println("Splitting using StringTokenizer with - as delimiter");
    while (strToken.hasMoreTokens()) {
      System.out.println(strToken.nextElement());
    }
  }

}
```

**Output**

```java
Splitting using StringTokenizer with - as delimiter
welcome
to
javaindetail.com
```

**Using useDelimiter() of Scanner Class.**

<span style="text-decoration: underline;">Syntax:</span>

<pre>Scanner scanner = new Scanner(string).useDelimiter(delimiter);</pre>

**Tutorial**

```java
package com.javaindetail.splittutorial;

import java.util.Scanner;

public class SplitUsingScanner {

  public static void main(String[] args) {

    String str = "welcome-to-javaindetail.com";
    Scanner scanner = new Scanner(str).useDelimiter("-");

    while (scanner.hasNext())
        System.out.println(scanner.next());

    scanner.close();
  }

}
```

**Output**

```java
welcome
to
javaindetail.com
```