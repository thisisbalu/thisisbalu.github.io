---
title: Primitive Data Types in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-13T14:30:02+00:00
categories:
  - Java
tags:
  - datatype
description: There are eight primitive data types in Java byte, short, int, long, char, float, double, and boolean. These can be put in four groups.
---
There are eight primitive data types in Java:byte, short, int, long, char, float, double, and boolean. These can be put in four groups:

  1. <span style="text-decoration: underline;">Integers</span> **:** This group includes byte, short,int, and long, which are for whole-valued signed numbers.
  2. <span style="text-decoration: underline;">Floating-point numbers</span> <span style="text-decoration: underline;">:</span> This group includes float and double, which represent numbers with fractional precision.
  3. <span style="text-decoration: underline;">Characters</span> **:** This group includes char, which represents symbols in a character set, like letters and numbers.
  4. <span style="text-decoration: underline;">Boolean</span> **:** This group includes boolean, which is a special type for representing true/false values.



## Primitive Data Types in Java

<span style="text-decoration: underline;"><strong>Integers</strong></span>

Java defines four integer types: byte, short, int, and long. All of these are signed, positive and negative values. Java does not support unsigned, positive-only integers. Many other computer languages support both signed and unsigned integers.

  1. **byte** : The smallest integer type is byte. This is a signed 8-bit type that has a range from –128 to 127. Variables of type byte are especially useful when you’re working with a stream of data from a network or file. ex : byte b, c;
  2. **short **: short is a signed 16-bit type. It has a range from –32,768 to 32,767. It is probably the least-used Java type. ex : short sh;
  3. **int** :  The most commonly used integer type is int. It is a signed 32-bit type that has a range from –2,147,483,648 to 2,147,483,647. In addition to other uses, variables of type int are commonly employed to control loops and to index arrays. ex : int a, b;
  4. **long** : long is a signed 64-bit type and is useful for those occasions where an int type is not large enough to hold the desired value. The range of a long is quite large. This makes it useful when big, whole numbers are needed. ex : long timestamp;

<span style="text-decoration: underline;"><strong>Floating Point Types</strong></span>

Floating-point numbers, also known as real numbers, are used when evaluating expressions that require fractional precision.

  1. **float** : The type float specifies a single-precision value that uses 32 bits of storage. Single precision is faster on some processors and takes half as much space as double precision, but will become imprecise when the values are either very large or very small. Variables of type float are useful when you need a fractional component, but don’t require a large degree of precision. ex: float temperature;
  2. **double** : Double precision, as denoted by the double keyword, uses 64 bits to store a value. Double precision is actually faster than single precision on some modern processors that have been optimized for high-speed mathematical calculations. All transcendental math functions, such as sin( ), cos( ), and sqrt( ), return double values. ex : double largePrecisionValue;

<span style="text-decoration: underline;"><strong>Characters</strong></span>

In Java, the data type used to store characters is char.

  1. **char** : The char data type is a single 16-bit Unicode character. It has a minimum value of &#8216;u0000&#8217; (or 0) and a maximum value of &#8216;uffff&#8217; ex : char a, b;

<span style="text-decoration: underline;"><strong>Booleans</strong></span>

Java has a primitive type, called boolean, for logical values. It can have only one of two possible values, true or false.

  1. The boolean data type has only two possible values: true and false. Use this data type for simple flags that track true/false conditions. This data type represents one bit of information, but its &#8220;size&#8221; isn&#8217;t something that&#8217;s precisely defined. ex : boolean a, b;

**Default Values for Primitive Data Types is Java**

It&#8217;s not always necessary to assign a value when a field is declared. Fields that are declared but not initialized will be set to a reasonable default by the compiler. Generally speaking, this default will be zero or null, depending on the data type.

<table style="width: 200px;" border="1" summary="Default values for primitive types">
  <tr>
    <th id="h1" align="left">
      <strong>Data Type</strong>
    </th>
    
    <th id="h2" align="left">
      <strong>Default Value (for fields)</strong>
    </th>
  </tr>
  
  <tr>
    <td headers="h1">
      byte
    </td>
    
    <td headers="h2">
    </td>
  </tr>
  
  <tr>
    <td headers="h1">
      short
    </td>
    
    <td headers="h2">
    </td>
  </tr>
  
  <tr>
    <td headers="h1">
      int
    </td>
    
    <td headers="h2">
    </td>
  </tr>
  
  <tr>
    <td headers="h1">
      long
    </td>
    
    <td headers="h2">
      0L
    </td>
  </tr>
  
  <tr>
    <td headers="h1">
      float
    </td>
    
    <td headers="h2">
      0.0f
    </td>
  </tr>
  
  <tr>
    <td headers="h1">
      double
    </td>
    
    <td headers="h2">
      0.0d
    </td>
  </tr>
  
  <tr>
    <td headers="h1">
      char
    </td>
    
    <td headers="h2">
      &#8216;u0000&#8217;
    </td>
  </tr>
  
  <tr>
    <td headers="h1">
      String (or any object)
    </td>
    
    <td headers="h2">
      null
    </td>
  </tr>
  
  <tr>
    <td headers="h1">
      boolean
    </td>
    
    <td headers="h2">
      false
    </td>
  </tr>
</table>

&nbsp;