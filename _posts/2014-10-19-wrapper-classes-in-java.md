---
title: Wrapper Classes in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-19T04:00:49+00:00
categories:
  - Java
tags:
  - datatypes
description: Java is an Object Oriented Language which views everything as an object. For an instance a simple file can be treated as an object, an address of a system can be seen as an object, an image can be treated as an object (with java.awt.Image)
---
Java is an Object Oriented Language which views everything as an object. For an instance a simple file can be treated as an object, an address of a system can be seen as an object, an image can be treated as an object (with java.awt.Image) and a simple data type can be converted into an object (with wrapper classes).

## What are Wrapper Classes in Java?

Wrapper class are defined as a class in which a primitive value is wrapped up. These primitive wrapper classes are used to represent primitive data type values as objects. The Java platform provides wrapper classes for each of the primitive data types.

## Why Wrapper Classes are introduced in Java?

  1. As Java is an Object Oriented Language, which views everything as an Object. To replace the primitive Data types in Java Wrapper classes are introduced.
  2. Second main thing is to support Collections API in Java. We know that collections take input in Object format, obviously primitive data types cannot be used with collection framework. Wrapper Classes replaces primitive data types in collections Framework in Java.

## What are the uses of Wrapper Classes in Java?

  1. To convert simple data types into objects, that is, to give object form to a data type; here constructors are used.
  2. To convert strings into data types (known as parsing operations), here methods of type parseXXX() are used.

## Hierarchy of Wrapper Classes<figure id="attachment_433" aria-describedby="caption-attachment-433" style="width: 713px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/wrapper-classes.jpg" class="img-fluid rounded z-depth-1" zoomable=false %}


##  List of Wrapper Classes in Java

<table style="width: 300px;">
  <tr>
    <th>
      Primitive Data Type
    </th>
    
    <th>
      Wrapper class
    </th>
  </tr>
  
  <tr>
    <td>
      byte
    </td>
    
    <td>
      Byte
    </td>
  </tr>
  
  <tr>
    <td>
      short
    </td>
    
    <td>
      Short
    </td>
  </tr>
  
  <tr>
    <td>
      int
    </td>
    
    <td>
      Integer
    </td>
  </tr>
  
  <tr>
    <td>
      long
    </td>
    
    <td>
      Long
    </td>
  </tr>
  
  <tr>
    <td>
      float
    </td>
    
    <td>
      Float
    </td>
  </tr>
  
  <tr>
    <td>
      double
    </td>
    
    <td>
      Double
    </td>
  </tr>
  
  <tr>
    <td>
      char
    </td>
    
    <td>
      Character
    </td>
  </tr>
  
  <tr>
    <td>
      boolean
    </td>
    
    <td>
      Boolean
    </td>
  </tr>
</table>
