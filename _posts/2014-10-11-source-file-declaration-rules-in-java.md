---
title: Source File Declaration Rules in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-10-11T14:30:01+00:00
categories:
  - Java
tags:
  - declaration
description: Today lets see rules associated with declaring classes, import statements, and package statements in a source file. We can call them as declaration rules in Java.
---
Today lets see rules associated with declaring classes, import statements, and package statements in a source file. We can call them as declaration rules in Java.

  1. There can be only one public class per source code file.
  2. Comments can appear at the beginning or end of any line in the source code file, they are independent of any of the positioning rules discussed here.
  3. If there is a public class in a file, the name of the file must match the name of the public class. For example, a class declared as public class Animal { } must be in a source code file named Animal.java.
  4. If the class is part of a package, the package statement must be the first line in the source code file, before any import statements that may be present.
  5. If there are import statements, they must go between the package statement (if there is one) and the class declaration. If there isn&#8217;t a package statement, then the import statement(s) must be the first line(s) in the source code file. If there are no package or import statements, the class declaration must be the first line in the source code file.
  6. import and package statements apply to all classes within a source code file. In other words, there&#8217;s no way to declare multiple classes in a file and have them in different packages, or use different imports.
  7. A file can have more than one nonpublic class.
  8. Files with no public classes can have a name that does not match any of the classes in the file.