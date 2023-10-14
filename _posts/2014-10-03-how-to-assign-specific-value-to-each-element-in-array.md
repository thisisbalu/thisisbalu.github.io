---
title: How to assign specific value to each element in Array
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-03T14:30:09+00:00
categories:
  - Java
tags:
  - array
description: We can assign specific value to each element in the array in Java using the fill() method of java.util.Arrays class. This method is used mainly to initialize whole array at a time without looping through the array in Java. Let go through a tutorial.
---
We can assign specific value to each element in the array in Java using the fill() method of java.util.Arrays class. This method is used mainly to initialize whole array at a time without looping through the array in Java. Let go through a tutorial.

## Assign specific value to each element in Array

```java
package com.javaindetail.initializearray;

import java.util.Arrays;

public class InitiaizeArray {

  public static void main(String[] args) {
    // An array of int
    int[] i = new int[5];
    // Initializing the array with specific value
    Arrays.fill(i, 1);
    // Printing the array
    System.out.println(Arrays.toString(i));

    // An array of double
    double[] d = { 1.5, 4.8, 5.9, 23.521 };
    // Initializing the array with specific value
    Arrays.fill(d, 1.0923);
    // Printing the array
    System.out.println(Arrays.toString(d));

    // An array of boolean
    boolean[] boo = new boolean[5];
    // Initializing the array with specific value
    Arrays.fill(boo, true);
    // Printing the array
    System.out.println(Arrays.toString(boo));

    // An array of char
    char[] c = new char[10];
    // Initializing the array with specific value
    Arrays.fill(c, 'j');
    // Printing the array
    System.out.println(Arrays.toString(c));

    // An array of String
    String[] str = { "Java", "In", "Detail" };
    // Initializing the array with specific value
    Arrays.fill(str, ".com");
    // Printing the array
    System.out.println(Arrays.toString(str));
  }
}
```

**Output**

```java
[1, 1, 1, 1, 1]
[1.0923, 1.0923, 1.0923, 1.0923]
[true, true, true, true, true]
[j, j, j, j, j, j, j, j, j, j]
[.com, .com, .com]
```