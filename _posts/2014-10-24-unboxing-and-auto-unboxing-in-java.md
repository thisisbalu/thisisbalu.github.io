---
title: Unboxing and Auto-Unboxing in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-24T04:00:05+00:00
categories:
  - Java
tags:
  - auto-unboxing
description: Boxing is the process of converting a primitive data type into its corresponding wrapper class object (e.g., int to Integer). Unboxing is the reverse process, where the wrapper class object is converted back to its primitive data type.
---
Unboxing and AutoUnboxing in Java is a simple concept.

**Unboxing**

Unwrapping the object into corresponding primitive data is called **Unboxing. **

**Tutorial**

```java
package com.javaindetail.wrapperclasses;

public class WrapperClasses {

  public static void main(String[] args) {
  
    Byte B = new Byte((byte) 10); //Wrapper Object
    byte bb = B.byteValue(); //Unwrapping object to primitive - Unboxing
    
    Short S = new Short((short) 12); //Wrapper Object
    short ss = S.shortValue(); //Unwrapping object to primitive - Unboxing
    
    Integer I = new Integer(152); //Wrapper Object
    int ii = I.intValue(); //Unwrapping object to primitive - Unboxing           

    Long L = new Long(50); //Wrapper Object     
    long l = L.longValue(); //Unwrapping object to primitive - Unboxing    

    Float F = new Float(20); //Wrapper Object   
    float f = F.floatValue(); //Unwrapping object to primitive - Unboxing 

    Double D = new Double(20.5); //Wrapper Object  
    double d = D.doubleValue(); //Unwrapping object to primitive - Unboxing   

    Boolean BLN = new Boolean(true); //Wrapper Object 
    boolean bln = BLN.booleanValue(); //Unwrapping object to primitive - Unboxing

    Character C = new Character('C'); //Wrapper Object
    char c = C.charValue(); //Unwrapping object to primitive - Unboxing          
  
  }

}

```

**Auto-Unboxing**

Beginning with JDK 5, Java added two important features: autoboxing and auto-unboxing. **Auto-Unboxing** is the process by which the value of a boxed object is automatically extracted (unboxed) from a type wrapper when its value is needed. There is no need to call a method such as intValue( ) or doubleValue( ).

**Tutorial**

```java
package com.javaindetail.wrapperclasses;

public class WrapperClasses {

  public static void main(String[] args) {
  
    Byte B = new Byte((byte) 10); //Wrapper Object
    byte bb = B; //Unwrapping object to primitive automatically - Auto-Unboxing
    
    Short S = new Short((short) 12); //Wrapper Object
    short ss = S; //Unwrapping object to primitive automatically - Auto-Unboxing
    
    Integer I = new Integer(152); //Wrapper Object
    int ii = I; //Unwrapping object to primitive automatically - Auto-Unboxing           

    Long L = new Long(50); //Wrapper Object     
    long l = L; //Unwrapping object to primitive automatically - Auto-Unboxing    

    Float F = new Float(20); //Wrapper Object   
    float f = F; //Unwrapping object to primitive automatically - Auto-Unboxing 

    Double D = new Double(20.5); //Wrapper Object  
    double d = D; //Unwrapping object to primitive automatically - Auto-Unboxing   

    Boolean BLN = new Boolean(true); //Wrapper Object 
    boolean bln = BLN; //Unwrapping object to primitive automatically - Auto-Unboxing

    Character C = new Character('C'); //Wrapper Object
    char c = C.charValue(); //Unwrapping object to primitive automatically - Auto-Unboxing          
  
  }

}

```