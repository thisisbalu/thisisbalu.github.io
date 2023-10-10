---
title: Write Once Run Anywhere WORA
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-18T04:00:48+00:00
categories:
  - Java
tags:
  - wora
description: What is Write Once Run Anywhere WORA? In simple we can term it as Cross Platform Compatibility. It is some times Expressed as WORE &#8211; Write Once Run Everywhere.
---
What is Write Once Run Anywhere WORA? In simple we can term it as Cross Platform Compatibility. It is some times Expressed as WORE &#8211; Write Once Run Everywhere. 

When a program has WORA capability, then it should work on devices that use all of the popular versions of Windows, the Mac OS, Linux, Android, Solaris, NetWare, HP-UX, or any other OS or platform, whether the physical machine happens to be a mainframe, a desktop computer, a notebook computer, a tablet device, or a smartphone. The WORA capability requires that each machine&#8217;s OS contain modifications that interpret the compiled WORA program&#8217;s bytecode so that the machine&#8217;s processor can perform the WORA program&#8217;s instructions. In the case of Java, for example, each device&#8217;s OS must have its own version of JVM (Java virtual machine) built-in.

## How Java achieves Write Once Run Anywhere WORA?

The key that allows Java to solve both the security and the portability problems just described is that the output of a Java compiler is not executable code. Rather, it is bytecode. Bytecode is a highly optimized set of instructions designed to be executed by the Java run-time system, which is called the Java Virtual Machine (JVM). In essence, the original JVM was designed as an interpreter for bytecode. This may come as a bit of a surprise since many modern languages are designed to be compiled into executable code because of performance concerns. However, the fact that a Java program is executed by the JVM helps solve the major problems associated with web-based programs. Here is why.

Translating a Java program into bytecode makes it much easier to run a program in a wide variety of environments because only the JVM needs to be implemented for each platform. Once the run-time package exists for a given system, any Java program can run on it. Remember, although the details of the JVM will differ from platform to platform, all understand the same Java bytecode. If a Java program were compiled to native code, then different versions of the same program would have to exist for each type of CPU connected to the Internet. This is, of course, not a feasible solution. Thus, the execution of bytecode by the JVM is the easiest way to create truly portable programs. The fact that a Java program is executed by the JVM also helps to make it secure. Because the JVM is in control, it can contain the program and prevent it from generating side effects outside of the system. As you will see, safety is also enhanced by certain restrictions that exist in the Java language.<figure id="attachment_427" aria-describedby="caption-attachment-427" style="width: 463px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/platform-independent-wora.jpg" class="img-fluid rounded z-depth-1" zoomable=false %}

In general, when a program is compiled to an intermediate form and then interpreted by a virtual machine, it runs slower than it would run if compiled to executable code. However, with Java, the differential between the two is not so great. Because bytecode has been highly optimized, the use of bytecode enables the JVM to execute programs much faster than you might expect.

Although Java was designed as an interpreted language, there is nothing about Java that prevents on-the-fly compilation of bytecode into native code in order to boost performance. For this reason, Sun began supplying its HotSpot technology not long after Java’s initial release. HotSpot provides a Just-In-Time (JIT) compiler for bytecode. When a JIT compiler is part of the JVM, selected portions of bytecode are compiled into executable code in real time, on a piece-by-piece, demand basis. It is important to understand that it is not practical to compile an entire Java program into executable code all at once, because Java performs various run-time checks that can be done only at run time. Instead, a JIT compiler compiles code as it is needed, during execution. Furthermore, not all sequences of bytecode are compiled—only those that will benefit from compilation. The remaining code is simply interpreted. However, the just-in-time approach still yields a significant performance boost. Even when dynamic compilation is applied to bytecode, the portability and safety features still apply, because the JVM is still in charge of the execution environment.
