---
title: How to search an element in an array in java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-02T14:30:22+00:00
categories:
  - Java
tags:
  - array
description: Searches the specified array of ints for the specified value using the binary search algorithm. The array must be sorted (as by the sort(int[]) method) prior to making this call. If it is not sorted, the results are undefined. 
---
In Java searching an element in an array is simple. All we have to use is java.util.Arrays class binarySearch() method.

Searches the specified array of ints for the specified value using the binary search algorithm. The array must be sorted (as by the sort(int[]) method) prior to making this call. If it is not sorted, the results are undefined. If the array contains multiple elements with the specified value, there is no guarantee which one will be found.

## Search an element in an array in java

```java
package com.javaindetail.arraysort;

import java.util.Arrays;

public class UsingBinarySearchMethod {
  public static void main(String[] args) {
    // search an element in an array in java
    // An array of int
    int[] intArray = { 1, 2, 3, 4, 5 };
    // Sorting
    Arrays.sort(intArray);
    // Printing Array
    System.out.println(Arrays.toString(intArray));

    // Searching the value
    System.out.println(Arrays.binarySearch(intArray, 1));
    System.out.println(Arrays.binarySearch(intArray, 13));

    // An array of char
    char[] charArray = { 'j', 'a', 'v', 'a', 'i', 'n', 'd', 'e', 't', 'a', 'i', 'l' };
    // Sorting
    Arrays.sort(charArray);
    // Printing Array
    System.out.println(Arrays.toString(charArray));

    // Searching the character
    System.out.println(Arrays.binarySearch(charArray, 'j'));
    System.out.println(Arrays.binarySearch(charArray, 'z'));

    // An array of String
    String[] strArray = { "java", "in", "detail", "com" };
    // Sorting
    Arrays.sort(strArray);
    // Printing Array
    System.out.println(Arrays.toString(strArray));

    // Searching the string in the array
    System.out.println(Arrays.binarySearch(strArray, "in"));
    System.out.println(Arrays.binarySearch(strArray, "second"));
  }

}
```

## Output

```
[1, 2, 3, 4, 5]
0
-6
[a, a, a, d, e, i, i, j, l, n, t, v]
7
-13
[com, detail, in, java]
2
-5

```