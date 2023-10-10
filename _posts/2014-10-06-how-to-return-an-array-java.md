---
title: How to Return an Array Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-06T14:30:57+00:00
categories:
  - Java
tags:
  - array
toc:
  sidebar: left
description: In Java, Arrays can be returned from the method. Again same as passing parameters two types of arrays are there. Array of primitive datatypes and the array of derived datatypes.
---
In Java, Arrays can be returned from the method. Again same as passing parameters two types of arrays are there. Array of primitive datatypes and the array of derived datatypes.

  1. Method Returning An Array Of Primitive Type
  2. Method Returrning An Array Of Derived Type


## Return an array Java 

### Method Returning An Array Of Primitive Type

```java
package com.javaindetail.array;

import java.util.Arrays;

public class ArrayReturn {
  public static void main(String[] args) {
    ArrayReturn arrayReturn = new ArrayReturn();
    // Calling the method which returns an array
    int[] a = arrayReturn.returningArray();
    // printing the array
    System.out.println(Arrays.toString(a));
  }

  public int[] returningArray() {
    // creating an array
    int[] a = new int[3];
    // assigining the values
    a[0] = 30;
    a[1] = 10;
    a[2] = 20;
    return a;
  }
}
```

**Output**

```java
[30, 10, 20]
```

### Method Returrning An Array Of Derived Type

```java
package com.javaindetail.array;

class A {
  int i;
}

public class ArrayReturnDerived {
  public static void main(String[] args) {
    A[] a = methodOne();
    // printing array of objects
    System.out.println(a[0].i);
    System.out.println(a[1].i);
    System.out.println(a[2].i);
  }

  // Method returns an array of A-type
  static A[] methodOne() {
    // creating array of objects
    A[] a = new A[3];

    // initializing the objects in array
    a[0] = new A();
    a[1] = new A();
    a[2] = new A();
    // Setting values
    a[0].i = 10;
    a[1].i = 20;
    a[2].i = 30;

    return a;
  }
}
```

**Output**

```
10
20
30
```