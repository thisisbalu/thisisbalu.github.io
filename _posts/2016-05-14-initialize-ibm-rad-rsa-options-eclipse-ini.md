---
title: Initializing IBM RAD/RSA – eclipse.ini
author: Bala Subramanyam Lanka
layout: post
date: 2016-05-14T18:22:48+00:00
categories:
  - IBM
tags:
  - eclipse
  - ibm-rad
  - ibm-rsa
description: IBM has a mega line up in the IDE business. Some of the IDEs provided by IBM are Eclipse, Rational Application Developer, Rational Software Architect Designer, Rational Business Developer, etc, When it comes to enterprise java development or operational decision management or business modelling, people use mostly RAD/RSA.
---
IBM has a mega line up in the IDE business. Some of the IDEs provided by IBM are Eclipse, Rational Application Developer, Rational Software Architect Designer, Rational Business Developer, etc, When it comes to enterprise java development or operational decision management or business modelling, people use mostly RAD/RSA.

Before using those IDEs, it will be good if we know how to initialize them correctly while opening. Eclipse is available for free whereas other enterprise IDEs are not freeware. All of the enterprise IDEs are called as IBM Rational IDEs. Rational IDEs are nothing but enhanced versions of Eclipse with special features. That is why if we check the package structure of the Rational IDEs, Eclipse will the root package.

Eclipse startup is controlled by the options in **_$ECLIPSE_HOME/eclipse.ini_.** If _$ECLIPSE_HOME_ is not defined, the default eclipse.ini in your Eclipse installation directory. In the case of Mac, the **_Eclipse.app/Contents/MacOS_** is used.

## How eclipse.ini works?

When we launch RAD/RSA immediately &#8220;<span style="text-decoration: underline;"><em>eclipse.ini</em></span>&#8221; file will be checked for the options specified in it. Then the IDE will be launched with the options specified in the file. So, the options that we are going to specify in that ini file is important.

**Initialization file for Rational Software Architect:**

<pre class="lang:default decode:true" title="eclipse.ini">
-vm
jdk1.7.0_21/jre/bin/java.exe
-startup
plugins/org.eclipse.equinox.launcher_1.2.0.v20110502.jar
-install
c:/IBMRSA851
--launcher.library
plugins/org.eclipse.equinox.launcher.win32.win32.x86_64_1.1.100.v20110502
-vmargs
-xquickstart
-xms40m
-xmx1024m
-xmnx64m
-xgpolicy:gencon
-xscmx96m
-xshareclasses:name=IBMSDP_%U
-xnolinenumbers
-xx:MaxPermSize=128M
-xcompressedrefs
-Dcom.ibm.ws.management.event.max_polling_interval=1000
-Djava.util.Arrays.useLegacyMergeSort=true</pre>

## Important points to remember

  1. You can, and should, experiment with changes to the launch command from your Command Prompt/Terminal before changing the eclipse.ini itself.
  2. Each option and each argument to an option must be on its own line.
  3. All lines after -vmargs are passed as arguments to the JVM, so all arguments and options for eclipse must be specified before -vmargs (just like when you use arguments on the command-line)
  4. Any use of -vmargs on the command-line replaces all -vmargs settings in the .ini file unless &#8211;launcher.appendVmargs is specified either in the .ini file or on the command-line.
  5. Make a backup&#8211;keep a copy of the original contents on hand so you don&#8217;t break your installation and have to download it all again.

> Remember guys, any tool that is developed by IBM uses its own developer kit called IBM SDK which is built on top of Java. Therefore we can pass 3 types of options for jvm &#8211; [Garbage Collector command-line options][1](IBM SDK), [JIT and AOT command-line options][2](IBM SDK) and [JVM command-line options][3](JAVA)

Of all the options those are given in the initialization file, JVM options are important. So, I am giving a brief intro of some options that we pass to JVM. Those are as follows &#8211;

  * <span class="keyword parmname parmname"><em><strong>-Xquickstart</strong></em> : </span>The effect is faster compilation times that improve startup time, but longer running applications might run slower. <span class="ph">When the AOT compiler is active (both shared classes and AOT compilation enabled), <span class="keyword parmname parmname">-Xquickstart</span> causes all methods to be AOT compiled. The AOT compilation improves the startup time of subsequent runs, but might reduce performance for longer running applications.</span> <span class="keyword parmname parmname">-Xquickstart</span> can degrade performance if it is used with long-running applications that contain hot methods. The implementation of <span class="keyword parmname parmname">-Xquickstart</span> is subject to change in future releases. By default, <span class="keyword parmname parmname">-Xquickstart</span> is disabled..Another way to specify a behavior identical to <span class="keyword parmname parmname">-Xquickstart</span> is to use the <span class="keyword parmname parmname">-client</span> option. These two options can be used interchangeably on the command line.
  * _**-Xms<size>**_ : Set initial Java heap size.
  * _**-Xmx<size>**_ : Set maximum Java heap size.
  * _**-Xmnx<size>**_ : By default, this option is set to 25% of the value of the <span class="keyword parmname parmname">-Xmx</span> option. This option returns an error if you try to use it with <span class="keyword parmname parmname">-Xmn</span>. You can use the <span class="keyword parmname parmname">-verbose:sizes</span> option to find out the values that the VM is currently using. If the scavenger is disabled, this option is ignored.
  * _**&#8211;**_Xgpolicy_**:<value>**_ : To select the IBM&#8217;s Garbage Collection Policy. Please check [here][4] for the IBM Garbage Collection Policy for in-depth understanding.
  * _**-Xscmx<size>**_ : This option applies only if a cache is being created and no cache of the same name exists. The default cache size is platform-dependent. You can find out the size value being used by adding <strong class="ph b">-verbose:sizes</strong> as a command-line argument. Minimum cache size is 4 KB. Maximum cache size is platform-dependent. The size of the cache that you can specify is limited by the amount of physical memory and paging space available to the system. The virtual address space of a process is shared between the shared classes cache and the Java™ heap. Increasing the maximum size of the Java heap reduces the size of the shared classes cache that you can create.
  * _**-Xshareclasses**_ : To disable shared class cache for **WebSphere** Application Server, add &#8211;**Xshareclasses**:none as a generic JVM argument through the admin console. See more information about this in the information center on Tuning the IBM virtual machine for Java.
  * _**-Xnolinenumbers**_ : If you start the JVM with <span class="keyword parmname parmname">-Xnolinenumbers</span> when creating a new shared classes cache, the Class Debug Area is not created. The option <span class="keyword parmname parmname">-Xnolinenumbers</span> advises the JVM not to load any class debug information, so there is no need for this region. If <span class="keyword parmname parmname">-Xscdmx</span> is also used on the command line to specify a non-zero debug area size, then a debug area is created despite the use of <span class="keyword parmname parmname">-Xnolinenumbers</span>.
  * _**-XX:MaxPermSize=<size>**_ : It is used to set size for Permanent Generation. The Permanent Generation is where class files are kept. These are the result of compiled classes and JSP pages. If this space is full, it triggers a Full Garbage Collection. If the Full Garbage Collection cannot clean out old unreferenced classes and there is no room left to expand the Permanent Space, an Out‐of‐ Memory error (OOME) is thrown and the JVM will crash.

Happy Learning! Happy Exploring!!

&nbsp;

Sources:

  * <https://wiki.eclipse.org>
  * <http://www.ibm.com/developerworks/rational/library/rational-ide-v9/>
  * [https://www.ibm.com/support/knowledgecenter/SSYKE2\_7.0.0/com.ibm.java.aix.71.doc/diag/appendixes/cmdline/commands\_gc.html][5]
  * [https://www.ibm.com/support/knowledgecenter/SSYKE2\_7.0.0/com.ibm.java.zos.71.doc/diag/appendixes/cmdline/commands\_jit.html][6]
  * [https://www.ibm.com/support/knowledgecenter/SSYKE2\_7.0.0/com.ibm.java.zos.71.doc/diag/appendixes/cmdline/commands\_jvm.html?lang=en][3]

 [1]: https://www.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.aix.71.doc/diag/appendixes/cmdline/commands_gc.html?lang=en
 [2]: https://www.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.zos.71.doc/diag/appendixes/cmdline/commands_jit.html?lang=en
 [3]: https://www.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.zos.71.doc/diag/appendixes/cmdline/commands_jvm.html?lang=en
 [4]: http://www.balasubramanyamlanka.com/ibm-websphere-application-server-garbage-collection-policies/
 [5]: https://www.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.aix.71.doc/diag/appendixes/cmdline/commands_gc.html
 [6]: https://www.ibm.com/support/knowledgecenter/SSYKE2_7.0.0/com.ibm.java.zos.71.doc/diag/appendixes/cmdline/commands_jit.html