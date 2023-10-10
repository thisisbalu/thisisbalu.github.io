---
title: Finally Block in Java – In Detail
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-25T14:30:28+00:00
categories:
  - Java
tags:
  - finally
description: Finally is a keyword that is used as finally block in exception handling. Finally block is used with the try block and catch blocks. Finally block always executes when the try block exits.
---
Finally is a keyword that is used as finally block in exception handling. Finally block is used with the try block and catch blocks. Finally block always executes when the try block exits.

Placing cleanup code in a finally block is always a good practice, even when no exceptions are anticipated._

The general syntax looks like as follows

```java
try {
  // some code
}
catch (ArithmeticException x) {
  // some code
}
catch (NumberFormatException y) {
  // some code
}
catch (Exception y) {
  // some code
}
finally {
  // this code will be executed whether or not an exception
  // is thrown or caught
}
```

**Four Scenarios  of Finally Block **

  1. When try block is executed with no exceptions, finally block will be executed.
  2. When an exception is raised in try block, which is caught in one of the catch block, finally block will be executed right after the catch block executes.
  3. An exception is thrown in the try block and there&#8217;s no matching catch block in the method that can catch the exception. In this scenario, the call to the method ends, and the exception object is thrown to the enclosing method &#8211; as in the method in which the try-catch-finally blocks reside. But, before the method ends, the finally block is executed.
  4. Before the try block runs to completion it returns to wherever the method was invoked. But, before it returns to the invoking method, the code in the finally block is still executed. So, remember that the code in the finally block will still be executed even if there is a return statement somewhere in the try block.

**Points to Remember :**

  1. If the JVM(Java Virtual Machine) exits while the try or catch code is being executed, then the finally block may not execute.
  2. If the thread executing the try or catch code is interrupted or killed, the finally block may not execute even though the application as a whole continues.