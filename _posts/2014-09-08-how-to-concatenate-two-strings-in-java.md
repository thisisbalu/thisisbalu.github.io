---
title: How to concatenate two strings in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-08T18:06:54+00:00
description: The basic operation we perform daily in Java is concatenating the strings. Concatenation of strings in Java can be achieved in three ways.
categories:
  - Java
tags:
  - string-concatenation
---
The basic operation we perform daily in Java is concatenating the strings. Concatenation of strings in Java can be achieved in three ways.

  1. Concatenation using + operator.
  2. Concatenation using concat() method of String class.
  3. Concatenation using append() method of StringBuffer class.

Now let us see the each concatenation in detail.

**Concatenation using + operator**

```java
package com.javaindetail.plusoperator;

public class ConcatUsingPlus {

  public static void main(String[] args) {
    String one = "javaindetail";
    String two = ".com";

    String concatenatedString = one + two;

    System.out.println("Concatenation through variables :: "
        + concatenatedString);

    String concatenatedString2 = "javaindetail" + ".com";

    System.out.println("Direct string concatenation :: " + concatenatedString2);
    System.out.println(concatenatedString + concatenatedString2);

  }

}

```

** Output:**

```java
Concatenation through variables :: javaindetail.com
Direct string concatenation :: javaindetail.com
javaindetail.comjavaindetail.com

```

&nbsp;

**Concatenation using concat() method of String class.**

```java
package com.javaindetail.plusoperator;

public class ConcatUsingConcatMeothod {

  public static void main(String[] args) {
    String s = "javaindetail";
    s = s.concat(".com");
    System.out.println(s);

  }

}

```

** Output**

```java
javaindetail.com

```

&nbsp;

**Concatenation using append() method of StringBuffer class**

```java
package com.javaindetail.plusoperator;

public class ConcatUsingApppend {

  public static void main(String[] args) {
    String one = "javaindetail";
    String two = ".com";

    StringBuffer buffer = new StringBuffer();
    buffer.append(one).append(two);

    System.out.println(buffer.toString());

  }

}
```

** Output**

```java
javaindetail.com
```