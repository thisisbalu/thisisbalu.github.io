---
title: Execution of Finally block with return statements
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-26T14:30:44+00:00
categories:
  - Java
tags:
  - finally
description: Finally is a keyword that is used as finally block in exception handling. Finally block is used with the try block and catch blocks. Finally block always executes when the try block exits.
---
_Will the code in the finally block be called and run after a return statement is executed in the try block?_  
_What if there is a return statement in the try block and the finally block as well?_  
_What if exception is thrown in the try block and the return statement in finally block?_

These are the common questions we get when we are using the finally block in exception handling. Let us see in detail about these flow of executions when we are using the return statements.

**Question :** Will the code in the finally block be called and run after a return statement is executed in the try block?

**Answer : **Yes the code in the finally block will be executed before the return statement is executed in try block.

**Tutorial : **

```java
package com.javaindetail.finallyBlock;

public class ReturnInTryBlock {

  public static int callReturnInTry() {
    try {
      System.out.println("try block starts");
      return 1;
    } 
    finally {
      System.out.println("finally block is run before method returns.");
    }
  }

  public static void main(String[] args) {
    System.out.println(ReturnInTryBlock.callReturnInTry());
  }
}
```

**Output :**

```java
try block starts
finally block is run before method returns.
1
```

** **

**Question : **What if there is a return statement in the try block and the finally block as well?

**Answer : **In this scenario also finally gets executed. The return statement in the finally block overrides the return statement in the try block.

**Tutorial : **

```java
package com.javaindetail.finallyBlock;

public class ReturnInTryAndFinally {

  public static int callReturnInTryAndFinally() {
    try {
      return 1;
    } 
    finally {
      return 2;
    }
  }

  public static void main(String[] args) {
    System.out.println(ReturnInTryAndFinally.callReturnInTryAndFinally());
  }

}
```

** Output : **

```java
2
```

&nbsp;

**Question : **What if exception is thrown in the try block and the return statement in finally block?

**Answer : **In this case finally return statement will override the exception that is thrown in the try block.

**Tutorial : **

```java
package com.javaindetail.finallyBlock;

public class ReturnInTryAndFinally {

  public static int callExceInTryAndReturnFinally(){
    try{
        throw new NoSuchFieldException();
    } finally {
        return 1;
    }
}

  public static void main(String[] args) {
    System.out.println(ReturnInTryAndFinally.callExceInTryAndReturnFinally());
  }

}
```

**Output : **

```java
1
```

** **

**Situations when finally will not run after the return statement**

  1. If Systen.exit() is called first.
  2. If JVM &#8211; Java Virtual Machine crashes.

&nbsp;

**NOTE** : A RETURN STATEMENT IN FINALLY BLOCK IS A BAD IDEA. IT IS NOT ENCOURAGED.