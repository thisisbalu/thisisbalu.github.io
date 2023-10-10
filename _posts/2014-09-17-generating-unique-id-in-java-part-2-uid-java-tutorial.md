---
title: Generating Unique Id in Java Part 2 – UID Java Tutorial
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-17T14:30:13+00:00
categories:
  - Java
tags:
  - randomUUID
description: With reference to the previous [post][1], we had another way to generate the unique id in Java through UID class from the rmi server package in Java. This is an alternative method to use if we are still using Java versions below 5.
---
With reference to the previous [post][1], we had another way to generate the unique id in Java through UID class from the rmi server package in Java. This is an alternative method to use if we are still using Java versions below 5.

**UID Class in Java**

Package : java.rmi.server.UID  
Extends : Object  
Implements : Serializable

UID is an unique identifier that represents an identifier with respect to the host&#8217;s time. Working of the UID is mainly based on following things.

  1. Host takes more than one millisecond to reboot
  2. Host&#8217;s clock is never set to run backwards

**UID Java Tutorial**

```java
package com.javaindetail.UniqueId;

import java.rmi.server.UID;

public class UidInDetail {

  public static void main(String[] args) {
    UID uniqueId = null;
    for (int i = 1; i &lt;= 10; ++i) {
      uniqueId = new UID();
      System.out.println(i + " UUID : " + uniqueId);
    }

  }

}
```

**Output**

```
1 UID : -4987d52b:1487f9bdb27:-8000
2 UID : -4987d52b:1487f9bdb27:-7fff
3 UID : -4987d52b:1487f9bdb27:-7ffe
4 UID : -4987d52b:1487f9bdb27:-7ffd
5 UID : -4987d52b:1487f9bdb27:-7ffc
6 UID : -4987d52b:1487f9bdb27:-7ffb
7 UID : -4987d52b:1487f9bdb27:-7ffa
8 UID : -4987d52b:1487f9bdb27:-7ff9
9 UID : -4987d52b:1487f9bdb27:-7ff8
10 UID : -4987d52b:1487f9bdb27:-7ff7
```

 [1]: /generating-unique-id-in-java-part-1-uuid-java-tutorial/