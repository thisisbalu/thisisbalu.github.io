---
title: Final Keyword in Java – Three Main Uses
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-18T14:30:00+00:00
categories:
  - Java
tags:
  - final
description: In Java, the keyword final is a simple but powerful tool that allows us to write code that is more readable, enables the compiler to catch some logic errors, and prevents accidental misuse of classes and member functions.
---
In Java, the keyword final is a simple but powerful tool that allows us to write code that is more readable, enables the compiler to catch some logic errors, and prevents accidental misuse of classes and member functions.

Final keyword has mainly THREE USES as listed below

  1. a final class cannot be inherited.
  2. a final method cannot be overridden.
  3. final data members, parameters and local variables cannot change once they are declared with final keyword.

**Usage of Final in Class Tutorial**

```java
package com.javaindetail.finaluses;


final class FinalTutorial {
  public void display() {
    System.out.println("hello javaindetail");
  }
}

public class FinalClass extends FinalTutorial{
  public static void main(String[] args) {
    System.out.println("final tutorial");
  }
}

```

** Output**

```
Exception in thread "main" java.lang.Error: Unresolved compilation problem: 
	at com.javaindetail.finaluses.FinalClass.main(FinalClass.java:12)
```

**Usage of Final in method Tutorial**

```java
package com.javaindetail.finaluses;

class FinalTutorial {
  final public void display() {
    System.out.println("hello javaindetail");
  }
}

public class FinalClass extends FinalTutorial {
  public void display() {
    System.out.println("hello from final class");
  }

  public static void main(String[] args) {
    FinalClass class1 = new FinalClass();
    class1.display();
  }
}
```

**Output**

```
java.lang.VerifyError: class com.javaindetail.finaluses.FinalClass overrides final method display.()V
at java.lang.ClassLoader.defineClass1(Native Method)
at java.lang.ClassLoader.defineClassCond(Unknown Source)
at java.lang.ClassLoader.defineClass(Unknown Source)
at java.security.SecureClassLoader.defineClass(Unknown Source)
at java.net.URLClassLoader.defineClass(Unknown Source)
at java.net.URLClassLoader.access$000(Unknown Source)
at java.net.URLClassLoader$1.run(Unknown Source)
at java.security.AccessController.doPrivileged(Native Method)
at java.net.URLClassLoader.findClass(Unknown Source)
at java.lang.ClassLoader.loadClass(Unknown Source)
at sun.misc.Launcher$AppClassLoader.loadClass(Unknown Source)
at java.lang.ClassLoader.loadClass(Unknown Source)
Exception in thread "main"
```

**Final Usage in Variables Tutorial**

```java
package com.javaindetail.finaluses;

public class FinalVariables {

  public static void main(String[] args) {
    
    final int a = 10;
    final String str = "javaindetail";
    
    System.out.println("value of a is "+a);
    System.out.println("valuee of str is "+str);
    
    a = 20;
    str = "com";

  }

}
```

** Output**

```
Exception in thread "main" java.lang.Error: Unresolved compilation problems: 
	The final local variable a cannot be assigned. It must be blank and not using a compound assignment
	The final local variable str cannot be assigned. It must be blank and not using a compound assignment

	at com.javaindetail.finaluses.FinalVariables.main(FinalVariables.java:13)
```