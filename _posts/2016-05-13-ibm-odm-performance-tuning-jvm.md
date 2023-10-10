---
title: IBM Operational Decision Management(ODM) Performance Tuning – JVM
author: Bala Subramanyam Lanka
layout: post
date: 2016-05-13T16:18:48+00:00
categories:
  - ODM
tags:
  - jvm-tuning
description: JVM tuning is important for IBM ODM (Operational Decision Management) because Decision Server Rules and Decision Server Events are both Java Platform, Enterprise Edition (Java EE) applications that run on WebSphere Application Server. Optimal performance is, therefore, dependent upon the correct tuning of Decision Server, WebSphere Application Server, and the underlying JVM.
---
JVM tuning is important for IBM ODM (Operational Decision Management) because Decision Server Rules and Decision Server Events are both Java Platform, Enterprise Edition (Java EE) applications that run on WebSphere Application Server. Optimal performance is, therefore, dependent upon the correct tuning of Decision Server, WebSphere Application Server, and the underlying JVM.

Two key aspects of JVM tuning are the _**Garbage Collection Policy**_ and the **_JVM heap size_**.

### Garbage Collection Policy

For more information about the garbage collection policy in the IBM WebSphere Application Server, refer [here][1].

### Java Heap Size

The Java heap is an area of memory where objects used in a Java program are allocated.

  1. If the Java heap is too small, then garbage collection will occur too frequently, consuming a significant number of cycles reanalyzing the heap.
  2. Conversely, if the heap is too large, long pause times will occur each time the heap is analyzed and garbage collected (unless you are using the Balanced Garbage Collection policy).

Hence, care must be taken to ensure that the chosen heap size does not cause paging. Paging can occur if there is insufficient RAM to support the heap size in addition to the other processes running on the system. As a result, performance will be significantly degraded because data must be continually written and read from disk rather than main memory.

It is always good to use the preferred JVM setting in order to maintain the performance of the IBM ODM.

### 

### Preferred JVM Settings for ODM

The default, Generational garbage collection policy, is the preferred policy for most Operational Decision Management applications and is tuned with three key properties. Those properties are minimum heap size, maximum heap size, and nursery size (the nursery must be smaller than the minimum heap size). The optimal configuration will depend on the nature of the workload and the available memory.

<span style="text-decoration: underline;"><strong>For 32-bit JVM</strong></span>

  * Initial Heap Size : 1280 MB
  * Maximum Heap Size : 1280 MB
  * Generic JVM arguments : -Xgcpolicy:gencon -Xmn1024M

<span style="text-decoration: underline;"><strong>For 64-bit JVM</strong></span>

  * Initial Heap Size : 4096 MB
  * Maximum Heap Size : 4096 MB
  * Generic JVM arguments : -Xgcpolicy:gencon -Xmn2048M

_**Note: **__The first two parameters set the initial and maximum heap size. The third parameter sets the generational garbage collection policy and the size of the nursery heap. The nursery is used for short-lived objects; the remainder of the heap will be used for longer-lived objects. _

### Setting the JVM parameter from WebSphere Application Server Admin Console

Right click on the Server and select run as Administrative Console, then select as follows.

_Application Servers **->** server 1 **->** Java and Process Management **->** Process Definition **->** Java Virtual Machine._<figure id="attachment_1296" aria-describedby="caption-attachment-1296" style="width: 462px" class="wp-caption aligncenter">

[<img loading="lazy" class="wp-image-1296 size-full" src="http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/ibm-odm-performance-tuning-jvm.png" alt="ODM - WebSphere Application Server console for a 64-bit JVM" width="462" height="666" srcset="http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/ibm-odm-performance-tuning-jvm.png 462w, http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/ibm-odm-performance-tuning-jvm-208x300.png 208w" sizes="(max-width: 462px) 85vw, 462px" />][2]<figcaption id="caption-attachment-1296" class="wp-caption-text">WebSphere Application Server console  
for a 64-bit JVM</figcaption></figure> 

These are all the important aspects that must be followed for tuning the JVM in order to tune the performance of the IBM ODM. Happy Exploring! Happy Learning!!

&nbsp;

_<span style="text-decoration: underline;"><strong>Sources</strong></span>:_

  * [_http://www.redbooks.ibm.com/_][3]
  * [_http://www.ibm.com/support/knowledgecenter/SS7JFU\_7.0.0/com.ibm.websphere.express.doc/info/exp/ae/tprf\_tunejvm_v61.html_][4]

 [1]: http://www.balasubramanyamlanka.com/ibm-websphere-application-server-garbage-collection-policies/
 [2]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/ibm-odm-performance-tuning-jvm.png
 [3]: http://www.redbooks.ibm.com/
 [4]: http://www.ibm.com/support/knowledgecenter/SS7JFU_7.0.0/com.ibm.websphere.express.doc/info/exp/ae/tprf_tunejvm_v61.html