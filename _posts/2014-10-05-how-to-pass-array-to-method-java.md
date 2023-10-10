---
title: How to pass Array to method Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-05T14:30:06+00:00
categories:
  - Java
tags:
  - array
description: Arrays can be passed as the parameter in Java. They are Passes-By-Reference which means when we pass the array copy of the objects are not passed just the reference of the array is passed. Arrays can be passed in two ways .
---
Arrays can be passed as the parameter in Java. They are Passes-By-Reference which means when we pass the array copy of the objects are not passed just the reference of the array is passed. Arrays can be passed in two ways .

1. Passing Primitive Type Array
2. Passing Derived Type Array


**Passing Primitive Type Array &#8211; Tutorial**

```java
package com.javaindetail.array;

import java.util.Arrays;

public class ArrayAsParameter {

  public static void main(String[] args) {
    int[] a = {1,2,3,4,5,6};
    // pass Array to method Java
    ArrayAsParameter arrayAsParameter = new ArrayAsParameter();
    
    System.out.println("Before :: "+Arrays.toString(a));
    arrayAsParameter.changeValues(a);
    System.out.println("After :: "+Arrays.toString(a));
  }
  
  public void changeValues(int[] arr){
    arr[2] = 100;
    arr[3] = 200;
  }

}
```

**Output**

```
Before :: [1, 2, 3, 4, 5, 6]
After :: [1, 2, 100, 200, 5, 6]
```

**Passing Derived Type Array &#8211; Tutorial**

```java
package com.javaindetail.array;

class UserObj {
  int i;
}

public class DerivedArraysAsParameter {

  public static void main(String[] args) {
    DerivedArraysAsParameter chan = new DerivedArraysAsParameter();
    UserObj[] obj = new UserObj[5];
    for (int i = 0; i &lt; 5; i++) {
      obj[i] = new UserObj();
      obj[i].i = i;
    }
    chan.changeValues(obj);
    for (int i = 0; i &lt; 5; i++) {
      System.out.println(obj[i].i);
    }

  }

  public void changeValues(UserObj[] user) {
    user[2].i = 200;
    user[3].i = 300;
  }

}
```

**Output**

```
0
1
200
300
4
```