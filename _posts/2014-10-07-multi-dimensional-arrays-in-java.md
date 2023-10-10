---
title: Multi Dimensional Arrays in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-07T14:30:58+00:00
categories:
  - Java
tags:
  - array
description: Multi Dimensional arrays in Java can be termed as arrays of arrays. We can create two-dimensional, three-dimensional, four-dimensional or n-dimensional arrays in Java. Its quite simple to create arrays in Java, yet more the dimensions more the confusion.
---
Multi Dimensional arrays in Java can be termed as arrays of arrays. We can create two-dimensional, three-dimensional, four-dimensional or n-dimensional arrays in Java. Its quite simple to create arrays in Java, yet more the dimensions more the confusion. Let us see a quick tutorial. In this tutorial I&#8217;m going to take three-dimensional array as example.

**Tutorial**

```java
package com.javaindetail.multidimensional;

public class MultiDimensionalArray {
  public static void main(String[] args) {
    // One Dimensional Arrays
    int[] one = { 1, 2, 3 };
    int[] two = { 4, 5, 6 };
    int[] three = { 7, 8, 9 };
    int[] four = { 1, 1, 1 };
    int[] five = { 1, 4, 5 };
    int[] six = { 6, 7, 8 };
    int[] seven = { 9, 2, 1 };
    int[] eight = { 2, 2, 4 };
    int[] nine = { 2, 2, 7 };
    // Multi Dimensional Arrays in Java
    // Two Dimensional Arrays
    int[][] twoDimenOne = { one, two, three };
    int[][] twoDimenTwo = { four, five, six };
    int[][] twoDImenThree = { seven, eight, nine };

    // Three Dimensional Array
    int[][][] threeDimen = { twoDimenOne, twoDimenTwo, twoDImenThree };

    // printing one dimensional array
    System.out.println("One Dimensional Array");
    System.out.print("[");
    for (int i = 0; i &lt; one.length; i++) {
      System.out.print(one[i] + " ");
    }
    System.out.println("]");
    
    // printing two dimensional array
    System.out.println("Two Dimensional Array");
    for (int i = 0; i &lt; twoDimenOne.length; i++) {
      System.out.print("[");
      for (int j = 0; j &lt; twoDimenOne[i].length; j++) {
        System.out.print(twoDimenOne[i][j] + " ");
      }
      System.out.print("]");
      System.out.println();
    }
    
    // printing three dimensional array
    System.out.println("Three Dimensional Array");
    for (int i = 0; i &lt; threeDimen.length; i++) {
      System.out.print("[");
      for (int j = 0; j &lt; threeDimen[i].length; j++) {
        System.out.print("[");
        for (int k = 0; k &lt; threeDimen[i][j].length; k++) {
          System.out.print(threeDimen[i][j][k] + " ");
        }
        System.out.print("]");
      }
      System.out.print("]");
      System.out.println();
    }
  }
}
```

**Output**

```
One Dimensional Array
[1 2 3 ]
Two Dimensional Array
[1 2 3 ]
[4 5 6 ]
[7 8 9 ]
Three Dimensional Array
[[1 2 3 ][4 5 6 ][7 8 9 ]]
[[1 1 1 ][1 4 5 ][6 7 8 ]]
[[9 2 1 ][2 2 4 ][2 2 7 ]]
```