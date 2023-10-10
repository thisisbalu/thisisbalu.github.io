---
title: How to print Array in array format in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-30T14:30:48+00:00
categories:
  - Java
tags:
  - array
  - arrays
description: In this enlightening post by Bala Subramanyam Lanka, you'll learn four distinct methods to efficiently copy arrays in Java. These techniques provide you with various approaches, highlighting the versatility of Java programming.

---
To print an array or to display an array in Java we used to iterate through the array using for loop and print them in sysout. But java.util.Arrays class have inbuilt method toString() which prints the array directly without looping through array. It prints in the format of square brackets with comma separated elements eg : [ 1, 2, 3, 4 ]

**Tutorial**

```java
package com.javaindetail.arraysort;

import java.util.Arrays;

public class UsingToStringMethod {

  public static void main(String[] args) {
    // array format in java
    // array of byte
    byte[] b = { 5, 100, 1, 20 };
    // Printing Array
    System.out.println(Arrays.toString(b));

    // An array of short
    short[] s = { 4, 500, 1, 12, 9 };
    // Printing Array
    System.out.println(Arrays.toString(s));

    // An array of int
    int[] i = { 42, 12, 68, 21 };
    // Printing Array
    System.out.println(Arrays.toString(i));

    // An array of long
    long[] l = { 87912, 4212, 21158, 985000, 8561 };
    // Printing Array
    System.out.println(Arrays.toString(l));

    // An array of double
    double[] d = { 12.5, 87.4, 41.24, 14.9, 55.8 };
    // Printing Array
    System.out.println(Arrays.toString(d));

    // An array of char
    char[] c = { 'j', 'a', 'v', 'a', 'i', 'n', 'd', 'e', 't', 'a', 'i', 'l' };
    // Printing Array
    System.out.println(Arrays.toString(c));

    // An array of String
    String[] str = { "java", "in", "detail", "com" };
    // Printing Array
    System.out.println(Arrays.toString(str));

  }

}
```

**Output**

```
[5, 100, 1, 20]
[4, 500, 1, 12, 9]
[42, 12, 68, 21]
[87912, 4212, 21158, 985000, 8561]
[12.5, 87.4, 41.24, 14.9, 55.8]
[j, a, v, a, i, n, d, e, t, a, i, l]
[java, in, detail, com]
```