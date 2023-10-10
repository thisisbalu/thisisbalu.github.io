---
title: JavaBean Standards in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-12T14:30:46+00:00
categories:
  - Java
tags:
  - javabeans
description: Today lets talk about Javabean Standards. JavaBeans are Java classes that have properties. For our purposes, think of properties as private instance variables. 
---
Today lets talk about Javabean Standards. JavaBeans are Java classes that have properties. For our purposes, think of properties as private instance variables. Since they&#8217;re private, the only way they can be accessed from outside of their class is through methods in the class. The methods that change a property&#8217;s value are called **setter** methods, and the methods that retrieve a property&#8217;s value are called **getter** methods.

## JavaBean Standards in Java and Property Naming Rules

  1. If the property is not a boolean, the getter method&#8217;s prefix must be get. For example, getSize()is a valid JavaBeans getter name for a property named &#8220;size.&#8221; Keep in mind that you do not need to have a variable named size. The name of the property is inferred from the getters and setters, not through any variables in your class. What you return from getSize() is up to you.
  2. If the property is a boolean, the getter method&#8217;s prefix is either get or is. For example, getStopped() or isStopped() are both valid JavaBeans names for a boolean property.
  3. The setter method&#8217;s prefix must be set. For example, setSize() is the valid JavaBean name for a property named size.
  4. To complete the name of a getter or setter method, change the first letter of the property name to uppercase, and then append it to the appropriate prefix (get, is, or set).
  5. Setter method signatures must be marked public, with a void return type and an argument that represents the property type.
  6. Getter method signatures must be marked public, take no arguments, and have a return type that matches the argument type of the setter method for that property.

## Examples of JavaBean Standards

```java
public void setMyValue(int v)
public int getMyValue()
public boolean isMyStatus()
```