---
title: Java Versions and Features
layout: post
date: 2014-08-27T19:31:27+00:00
categories:
  - Java
tags:
  - java-features
description: Let's explore the evolution of Java through its various versions and features. From the foundational JDK 1.0 to the cutting-edge enhancements of J2SE 8.0, this comprehensive guide provides insights into the pivotal developments in Java's history.
giscus_comments: true
related_posts: true
---
Java is the language that is updated with new versions and features frequently. J2SE 8 is the present version of the Java. Lets drive into the history of the Java Versions and Features in detail. All the versions of the Java have their Code Names ([Click here for code names and release dates][1]) Following are the Versions and Features of Java.

**JDK 1.0**

  1. Originally called Oak.
  2. Initial release.
  3. The first stable version, JDK 1.0.2, is called Java 1.

**JDK 1.1**

  1. An extensive retooling of the AWT event model.
  2. Inner classes added to the language.
  3. JavaBeans.
  4. JDBC.
  5. RMI.
  6. Reflection which supported Introspection only, no modification at runtime was possible.
  7. JIT(Just In Time) compiler on Microsoft Windows platforms, produced for JavaSoft by Symantec.

**J2SE 1.2**

  1. Collections framework.
  2. Java String memory map for constants.
  3. Jar Signer for signing Java ARchive (JAR) files.
  4. Policy Tool for granting access to system resources.
  5. Java Foundation Classes (JFC) which consists of Swing 1.0, Drag and Drop, and Java 2D class libraries.
  6. Java Plug-in
  7. Scrollable result sets, BLOB, CLOB, batch update, user-defined types in JDBC.
  8. Audio support in Applets.

**J2SE 1.3**

  1. HotSpot JVM included (the HotSpot JVM was first released in April 1999 for the J2SE 1.2 JVM).
  2. RMI was modified to support optional compatibility with CORBA.
  3. Java Naming and Directory Interface (JNDI) included in core libraries (previously available as an extension).
  4. Java Platform Debugger Architecture (JPDA).
  5. JavaSound.
  6. Synthetic proxy classes.

**J2SE 1.4**

  1. Regular expressions.
  2. Exception chaining allows an exception to encapsulate original lower-level exception.
  3. Internet Protocol version 6 (IPv6) support.
  4. Non-blocking IO (named New Input/Output, NIO).
  5. Logging API.
  6. Image I/O API for reading and writing images in formats like JPEG and PNG.
  7. Integrated XML parser and XSLT processor (JAXP).
  8. Integrated security and cryptography extensions (JCE, JSSE, JAAS).
  9. Java Web Start included.
 10. Preferences API.

**J2SE 5.0**

  1. Generics.
  2. Enhanced for Loop.
  3. Autoboxing/Unboxing.
  4. Typesafe Enums.
  5. Varargs.
  6. Static Import.
  7. Metadata (Annotations).
  8. Instrumentation.
  9. Automatic stub generation for RMI objects.
 10. Swing: New skinnable look and feel, called synth.
 11. The concurrency utilities in package java.util.concurrent.
 12. Scanner class for parsing data from various input streams and buffers.

**J2SE 6.0**

  1. Scripting Language Support : Generic API for tight integration with scripting languages, and built-in Mozilla JavaScript Rhino integration.
  2. Dramatic performance improvements for the core platform and Swing.
  3. Improved Web Service support through JAX-WS.
  4. JDBC 4.0 support.
  5. Java Compiler API : an API allowing a Java program to select and invoke a Java Compiler programmatically.
  6. Upgrade of JAXB to version 2.0: Including integration of a StAX parser.
  7. Support for pluggable annotations.
  8. Many GUI improvements, such as integration of SwingWorker in the API, table sorting and filtering, and true Swing double-buffering (eliminating the gray-area effect).
  9. JVM improvements include: synchronization and compiler performance optimizations, new algorithms and upgrades to existing garbage collection algorithms, and application start-up performance.

**J2SE 7.0**

  1. JVM support for dynamic languages, with the new invokedynamic bytecode under JSR-292,[95] following the prototyping work currently done on the Multi Language Virtual Machine.
  2. Compressed 64-bit pointers.
  3. These small language changes (grouped under a project named Coin). 
      1. Strings in switch.
      2. Automatic resource management in try-statement.
      3. Improved type inference for generic instance creation, aka the diamond operator <>
      4. Simplified varargs method declaration.
      5. Binary integer literals.
      6. Allowing underscores in numeric literals.
      7. Catching multiple exception types and rethrowing exceptions with improved type checking.
  4.  Concurrency utilities.
  5. New file I/O library to enhance platform independence and add support for metadata and symbolic links. The new packages are java.nio.file and java.nio.file.attribute
  6. Timsort is used to sort collections and arrays of objects instead of merge sort.
  7. Library-level support for elliptic curve cryptography algorithms.
  8. An XRender pipeline for Java 2D, which improves handling of features specific to modern GPUs.
  9. New platform APIs for the graphics features originally implemented in version 6u10 as unsupported APIs.
 10. Enhanced library-level support for new network protocols, including SCTP and Sockets Direct Protocol.
 11. Upstream updates to XML and Unicode.

**J2SE 8.0**

  1. Lambda Expressions.
  2. Pipelines and Streams.
  3. Date and Time API.
  4. Default Methods.
  5. Type Annotations.
  6. Nashhorn JavaScript Engine.
  7. Concurrent Accumulators.
  8. Parallel operations.
  9. PermGen Error Removed.
 10. TLS SNI.

 [1]: http://javaindetail.com/2014/08/26/java-code-names/ "Java Code Names"