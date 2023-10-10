---
title: IBM WebSphere Application Server Garbage Collection Policies
author: Bala Subramanyam Lanka
layout: post
date: 2016-05-12T18:16:30+00:00
categories:
  - IBM
  - WebSphere Application Server
tags:
  - garbage-collection
description: As long as an object is being referenced, the JVM considers it alive. Once an object is no longer referenced and therefore is not reachable by the application code, the garbage collector removes it and reclaims the unused memory.
---
As long as an object is being referenced, the JVM considers it alive. Once an object is no longer referenced and therefore is not reachable by the application code, the garbage collector removes it and reclaims the unused memory. Java implicitly collects the garbage when objects are no longer referenced or  when Java heap is insufficient and unable to satisfy a request for storage, such as object creation, it automatically triggers garbage collection to free memory.

Although Java provides the Garbage Collection, IBM had its own developer kit(IBM SDK). Garbage collection IBM Developer Kit can be configured in four types. Since WebSphere Application Server is built using the IBM SDK, it supports four different types of GC.

### Optimize for throughput(<span style="text-decoration: underline;">optthruput</span>) Garbage Collection

  1. The Optthruput policy uses a single Java heap and will consume the entire heap before pausing the application and invoking a garbage collection.
  2. This is the default GC for the previous versions of WAS 8.

### Optimize for pause time(<span style="text-decoration: underline;">optavgpause</span>) Garbage Collection

  1. The Optavgpause policy also uses a single heap but performs as much garbage collection processing as possible in parallel with application processing. This reduces the time that the application is paused during garbage collection.
  2. It does not guarantee a particular pause time, but pauses are shorter than those produced by the default GC policy.

### Generational(<span style="text-decoration: underline;">gencon</span>) Garbage Collection

  1. The Generational policy uses two Java heaps, one for short-lived objects which is called as _**nursery heap**_ and one for longer-lived objects which is called as _**tenured heap**_. The two heaps can garbage collect independently, which improves overall efficiency.
  2. This is the default GC in WAS 8.

### Balanced Garbage Collection

  1. The Balanced policy is new in WebSphere Application Server V8 and splits the Java heap into regions that can be collected independently. It is designed to reduce the occasional long pause times that can be associated with large heaps.
  2. The Balanced policy produces a slight performance degradation relative to generational garbage collection. It is designed for 64-bit WebSphere Application Servers with heaps greater than 4 GB.

Happy Learning! Happy Exploring!!

_<span style="text-decoration: underline;"><strong>Sources</strong></span>:_

  * [_https://www.ibm.com/developerworks/_][1]
  * [_http://www.redbooks.ibm.com/_][2]

&nbsp;

 [1]: https://www.ibm.com/developerworks/
 [2]: http://www.redbooks.ibm.com/