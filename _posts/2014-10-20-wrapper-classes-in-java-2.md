---
title: Wrapper Classes in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-20T04:00:31+00:00
description: Lets see a simple java program to Wrap Primitive Data Types into Object using Wrapper Classes in Java
categories:
  - Java
tags:
  - wrapper-classes
---
Lets see a simple java program to Wrap Primitive Data Types into Object using Wrapper Classes in Java

**Tutorial**

```java
package com.javaindetail.wrapperclasses;

public class WrapperClasses {

  public static void main(String[] args) {

    byte b = 10; // Primitive Data Type
    Byte byteValue = new Byte(b); // Wrapping primitive Data Type into  Object

    short s = 15; // Primitive Data Type
    Short shortValue = new Short(s); // Wrapping primitive Data Type into  Object

    int i = 20; // Primitive Data Type
    Integer integerValue = new Integer(i); // Wrapping primitive Data Type into  Object

    long l = 25; // Primitive Data Type
    Long longValue = new Long(l); // Wrapping primitive Data Type into  Object

    float f = 12; // Primitive Data Type
    Float floatValue = new Float(f); // Wrapping primitive Data Type into  Object

    double d = 18.58; // Primitive Data Type
    Double doubleValue = new Double(d); // Wrapping primitive Data Type into  Object

    boolean bol = true; // Primitive Data Type
    Boolean bolValue = new Boolean(bol); // Wrapping primitive Data Type into  Object

    char c = 'C'; // Primitive Data Type
    Character charValue = new Character(c); // Wrapping primitive Data Type into  Object

  }
}

```