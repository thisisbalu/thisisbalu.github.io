---
title: How to copy an Array in Java – Four different ways
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-29T14:30:05+00:00
categories:
  - Java
tags:
  - array
description: In this enlightening post by Bala Subramanyam Lanka, you'll learn four distinct methods to efficiently copy arrays in Java. These techniques provide you with various approaches, highlighting the versatility of Java programming.
---
There are four ways to copy an array in Java. Following are the different ways

  1. Using for Loop
  2. Using copyOf() method of Array Class
  3. Using clone() Method
  4. Using arraycopy() method Of System Class



## Using for Loop

```java
package com.javaindetail.arraycopy;

public class UsingForLoop {

  public static void main(String[] args) {
    int[] a = { 1, 2, 3, 4, 5 }; 
    int[] b = new int[a.length]; 
    //copy an array in Java
    //copying a to b
    for (int i = 0; i &lt; a.length; i++) {
      b[i] = a[i];
    }
    
    //printing a
    System.out.print("A Array ::");
    for (int i = 0; i &lt; a.length; i++) {
      System.out.print(" "+a[i]);
    }
    
    //printing b
    System.out.print("nB Array ::");
    for (int i = 0; i &lt; b.length; i++) {
      System.out.print(" "+b[i]);
    }
    
  }

}
```

## Output

```java
A Array :: 1 2 3 4 5 
B Array :: 1 2 3 4 5
```

## Using copyOf() method of Array Class

```java
package com.javaindetail.arraycopy;

import java.util.Arrays;

public class UsingCopyOf {
  public static void main(String[] args) {
    int[] a = { 1, 2, 3, 4, 5 };
    // copy an array in Java
    // creating a copy of array 'a' using copyOf() method of java.util.Arrays
    int[] b = Arrays.copyOf(a, a.length);
    
    // printing a
    System.out.print("A Array ::");
    for (int i = 0; i &lt; a.length; i++) {
      System.out.print(" " + a[i]);
    }

    // printing b
    System.out.print("nB Array ::");
    for (int i = 0; i &lt; b.length; i++) {
      System.out.print(" " + b[i]);
    }

  }

}
```

## Output

```java
A Array :: 1 2 3 4 5
B Array :: 1 2 3 4 5
```

## Using clone() Method

```java
package com.javaindetail.arraycopy;

public class UsingClone {
  public static void main(String[] args) {
    int[] a = { 1, 2, 3, 4, 5 }; 
    // creating a copy of array 'a' using clone() method
    int[] b = a.clone();

    // printing a
    System.out.print("A Array ::");
    for (int i = 0; i &lt; a.length; i++) {
      System.out.print(" " + a[i]);
    }

    // printing b
    System.out.print("nB Array ::");
    for (int i = 0; i &lt; b.length; i++) {
      System.out.print(" " + b[i]);
    }
  }

}
```

## Output

```java
A Array :: 1 2 3 4 5
B Array :: 1 2 3 4 5
```

## Using arraycopy() method Of System Class

```java
package com.javaindetail.arraycopy;

public class UsingArrayCopy {
  public static void main(String[] args) {
    int[] a = { 1,2,3,4,5 }; 
              
    int[] b = new int[a.length];
    // copy an array in Java
    // creating a copy of array 'a' using arraycopy() method of System class
    System.arraycopy(a, 0, b, 0, a.length);

    // printing a
    System.out.print("A Array ::");
    for (int i = 0; i &lt; a.length; i++) {
      System.out.print(" " + a[i]);
    }

    // printing b
    System.out.print("nB Array ::");
    for (int i = 0; i &lt; b.length; i++) {
      System.out.print(" " + b[i]);
    }
  }

}
```

## **Output**

```java
A Array :: 1 2 3 4 5
B Array :: 1 2 3 4 5
```