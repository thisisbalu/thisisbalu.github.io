---
title: How to sort Arrays in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-01T14:30:29+00:00
categories:
  - Java
tags:
  - array
description: Yes we have many sorting algorithms to sort elements. We used to implement one of the sorting algorithm to sort elements in previous programming languages like C, C++ etc.. But sorting an array in Java is a simple process.
---
Yes we have many sorting algorithms to sort elements. We used to implement one of the sorting algorithm to sort elements in previous programming languages like C, C++ etc.. But sorting an array in Java is a simple process. All we have to do is to use the sort method of Arrays class in Java.

Internally sort() method of java.util.Arrays class uses _<span style="text-decoration: underline;">Dual-Pivot Quicksort by Vladimir Yaroslavskiy, Jon Bentley, and Joshua Bloch.</span>_ This algorithm offers O(n log(n)) performance on many data sets that cause other quicksorts to degrade to quadratic performance, and is typically faster than traditional (one-pivot) Quicksort implementations.

**Tutorial**

```java
package com.javaindetail.arraysort;

import java.util.Arrays;

public class UsingSortMethod {
  public static void main(String[] args) {
    // sort arrays in java
    // array of byte
    byte[] b = { 5, 100, 1, 20 };
    // sorts elements of the specified array in ascending order
    Arrays.sort(b);
    // Printing Array
    System.out.println(Arrays.toString(b));

    // An array of short
    short[] s = { 4, 500, 1, 12, 9 };
    // sorts elements of the specified array in ascending order
    Arrays.sort(s);
    // Printing Array
    System.out.println(Arrays.toString(s));

    // An array of int
    int[] i = { 42, 12, 68, 21 };
    // sorts elements of the specified array in ascending order
    Arrays.sort(i);
    // Printing Array
    System.out.println(Arrays.toString(i));

    // An array of long
    long[] l = { 87912, 4212, 21158, 985000, 8561 };
    // sorts elements of the specified array in ascending order
    Arrays.sort(l);
    // Printing Array
    System.out.println(Arrays.toString(l));

    // An array of double
    double[] d = { 12.5, 87.4, 41.24, 14.9, 55.8 };
    // sorts elements of the specified array in ascending order
    Arrays.sort(d);
    // Printing Array
    System.out.println(Arrays.toString(d));

    // An array of char
    char[] c = { 'j', 'a', 'v', 'a', 'i', 'n', 'd', 'e', 't', 'a', 'i', 'l' };
    // sorts elements of the specified array in ascending order
    Arrays.sort(c);
    // Printing Array
    System.out.println(Arrays.toString(c));

    // An array of String
    String[] str = { "java", "in", "detail", "com" };
    // sorts elements of the specified array in ascending order
    Arrays.sort(str);
    // Printing Array
    System.out.println(Arrays.toString(str));

  }
}
```

**Output**

```
[1, 5, 20, 100]
[1, 4, 9, 12, 500]
[12, 21, 42, 68]
[4212, 8561, 21158, 87912, 985000]
[12.5, 14.9, 41.24, 55.8, 87.4]
[a, a, a, d, e, i, i, j, l, n, t, v]
[com, detail, in, java]
```