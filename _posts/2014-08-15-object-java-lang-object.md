---
title: How to use Object Class Constructor
layout: post
description: How to utilize the Object Class Constructor in Java to create instances from a class blueprint. Learn about the essential constructor declarations and explore an example code snippet for practical implementation.
date: 2014-08-15T16:37:54+00:00
categories:
  - Java
tags:
  - Object
toc:
    beginning: false
---

Before going into the Object constructor let us know what is a constructor?

A class contains constructors that are invoked to create objects from the class blueprint. Constructor declarations look like method declarations except that they use the name of the class and have no return type.

Object class had one constructor with no parameters.

```java
public Object()
```

### Example Code Snippet:

```java
public class ObjectConstructorInDetail {
	public static void main(String[] args) {
		//Object() constructor creates an instance of Object class
		Object object = new Object();
	}
}
```