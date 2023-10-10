---
title: Boxing and Auto-Boxing in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-23T14:21:22+00:00
categories:
  - Java
tags:
  - auto-boxing
description: Boxing is the process of converting a primitive data type into its corresponding wrapper class object (e.g., int to Integer). Unboxing is the reverse process, where the wrapper class object is converted back to its primitive data type.
---
Boxing and AutoBoxing in Java is simple concept in Java.  

**Boxing**

Wrapping primitive content into an object is called **boxing**.

**Tutorial:**

```java
package com.javaindetail.wrapperclasses;

public class WrapperClasses {

  public static void main(String[] args) {

    byte b = 10; // Primitive Data Type
    Byte byteValue = new Byte(b); // Wrapping primitive Data Type into Object -
                                  // Boxing

    short s = 15; // Primitive Data Type
    Short shortValue = new Short(s); // Wrapping primitive Data Type into Object
                                     // - Boxing

    int i = 20; // Primitive Data Type
    Integer integerValue = new Integer(i); // Wrapping primitive Data Type into
                                           // Object - Boxing

    long l = 25; // Primitive Data Type
    Long longValue = new Long(l); // Wrapping primitive Data Type into Object -
                                  // Boxing

    float f = 12; // Primitive Data Type
    Float floatValue = new Float(f); // Wrapping primitive Data Type into Object
                                     // - Boxing

    double d = 18.58; // Primitive Data Type
    Double doubleValue = new Double(d); // Wrapping primitive Data Type into
                                        // Object - Boxing

    boolean bol = true; // Primitive Data Type
    Boolean bolValue = new Boolean(bol); // Wrapping primitive Data Type into
                                         // Object - Boxing

    char c = 'C'; // Primitive Data Type
    Character charValue = new Character(c); // Wrapping primitive Data Type into
                                            // Object - Boxing
  }

}
```

**Auto-Boxing**

Beginning with JDK 5, Java added two important features: autoboxing and auto-unboxing. **Autoboxing** is the process by which a primitive type is automatically encapsulated (boxed) into its equivalent type wrapper whenever an object of that type is needed. There is no need to explicitly construct an object.

**Tutorial**

```java
package com.javaindetail.wrapperclasses;

public class WrapperClasses {

public static void main(String[] args) {

byte b = 10; // Primitive Data Type
Byte byteValue = b; // Auto Boxing

short s = 15; // Primitive Data Type
Short shortValue = s; // Auto Boxing

int i = 20; // Primitive Data Type
Integer integerValue = i; // Auto Boxing

long l = 25; // Primitive Data Type
Long longValue = l; // Auto Boxing

float f = 12; // Primitive Data Type
Float floatValue = f; // Auto Boxing

double d = 18.58; // Primitive Data Type
Double doubleValue = d; // Auto Boxing

boolean bol = true; // Primitive Data Type
Boolean bolValue = bol; // Auto Boxing

char c = 'C'; // Primitive Data Type
Character charValue = c; // Auto Boxing
}

}
```