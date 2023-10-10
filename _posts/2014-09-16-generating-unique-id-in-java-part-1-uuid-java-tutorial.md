---
title: Generating Unique Id in Java Part 1 – UUID Java Tutorial
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-16T17:16:41+00:00
description: Generating the Unique Ids in Java is a very easy task. There are many ways to generate unique ids in Java, one of the best way is to use UUID class from the util package in Java.
categories:
  - Java
tags:
  - randomUUID

---
Generating the Unique Ids in Java is a very easy task. There are many ways to generate unique ids in Java, one of the best way is to use UUID class from the util package in Java.

**UUID &#8211; Universally Unique Identifier**

A universally unique identifier (UUID) is an identifier standard used in software construction, standardized by the Open Software Foundation (OSF) as part of the Distributed Computing Environment (DCE).

**UUID Class in Java**

UUID is an immutable class that represents 128 bit unique value.

Package : java.util.UUID  
Extends : Object  
Implements : Serializable, Comparable<UUID>

**UUID Java Tutorial**

```java
package com.javaindetail.UniqueId;

import java.util.UUID;

public class UuidInDetail {

  public static void main(String[] args) {
    UUID uniqueId = null;
    for (int i = 1; i &lt;= 10; ++i) {
      uniqueId = UUID.randomUUID();
      System.out.println(i+" UUID : " + uniqueId);
    }
  }

}
```

**Output**

```
1 UUID : 0ef35026-1d7b-48c6-be23-fffaac34a86f
2 UUID : fa84f0c3-3bff-406c-abf1-7c4fd76a6b18
3 UUID : 9ad28ac1-5423-4322-8201-f936df47f88f
4 UUID : 905f397e-6c53-4685-81e9-3513fa4e75d8
5 UUID : 80fe7617-1fe3-4ef0-a082-9744de00cdfe
6 UUID : c359d447-5589-4d49-b606-85577b871186
7 UUID : 2279ec39-f9b6-4937-be1b-e8f72b745751
8 UUID : 282bae31-6225-4d3a-9ec3-64abab336d1b
9 UUID : 2bc12341-c4f2-48c2-a2b5-77e4d1a99de3
10 UUID : 131d36c2-f921-41b7-88dd-c6fe550c87e6
```