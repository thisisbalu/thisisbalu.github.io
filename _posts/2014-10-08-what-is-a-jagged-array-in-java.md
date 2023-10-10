---
title: What is a Jagged Array in Java
layout: post
date: 2014-10-08T14:30:09+00:00
description: Java's jagged arrays, also known as ragged arrays, in this comprehensive tutorial. Learn to work with multi-dimensional arrays of varying sizes with practical examples and a provided code snippet for hands-on practice.
categories:
  - Java
tags:
  - array
  - arrays
  - jagged array
toc:
  sidebar: left

---
Jagged array in Java are Multi-Dimensional arrays with different array sizes. Jagged Arrays are sometimes termed as Ragged Arrays. Lets go through a quick tutorial

## Jagged Array in Java

```java
package com.javaindetail.multidimensional;

public class JaggedArray {
  public static void main(String[] args) {

    // Jagged Two Dimensional Array as it had differnet length arrays
    int[][] jaggedArray = new int[3][];

    // One Dimensional Array of different lengths
    int[] one = { 1, 2, 3 };
    int[] two = { 4, 5, 6, 7 };
    int[] three = { 8, 9, 10, 11, 12 };

    // Initializing elements of Jagged Array
    jaggedArray[0] = one;
    jaggedArray[1] = two;
    jaggedArray[2] = three;

    // Printing Jagged Array
    System.out.println("Jagged Array");
    for (int i = 0; i &lt; jaggedArray.length; i++) {
      System.out.print("[");
      for (int j = 0; j &lt; jaggedArray[i].length; j++) {
        System.out.print(jaggedArray[i][j] + " ");
      }
      System.out.print("]");
      System.out.println();
    }

  }

}
```

### Output
```
Jagged Array
[1 2 3 ]
[4 5 6 7 ]
[8 9 10 11 12 ]
```