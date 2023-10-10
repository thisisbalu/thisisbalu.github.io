---
title: How to create Array of Objects Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-04T14:30:48+00:00
categories:
  - Java
tags: array
description: In Java, Array of objects java can hold the references to any type of Object. ARRAY CAN CONTAIN ONLY REFERENCES TO THE OBJECTS, BUT NOT THE OBJECTS ITSELF. Let us see Tutorial
---
In Java, Array of objects java can hold the references to any type of Object. ARRAY CAN CONTAIN ONLY REFERENCES TO THE OBJECTS, BUT NOT THE OBJECTS ITSELF. Let us see Tutorial

## Array of Objects Java

```java
package com.javaindetail.array;

import java.util.Arrays;

class User {
  int u;
}

public class ArrayOfObjects {

  public static void main(String[] args) {
    //Array of objects Java
    User[] users = new User[5];

    // initialising the variable of the User class
    for (int i = 0; i &lt; 5; i++) {
      users[i] = new User();
      users[i].u = i;
    }
    // Printing the elements of Array
    for (int i = 0; i &lt; 5; i++) {
      System.out.print(users[i].u);
    }
    // We cannot use toString() method of Arrays class
    // It Prints the hashcode value of the objects as array reefereces to the Objects
    System.out.println("n" + Arrays.toString(users));
  }

}
```

## Output

```java
[com.javaindetail.array.User@a97b0b, com.javaindetail.array.User@cd2c3c, com.javaindetail.array.User@13582d, com.javaindetail.array.User@21b6d, com.javaindetail.array.User@56a499]
```