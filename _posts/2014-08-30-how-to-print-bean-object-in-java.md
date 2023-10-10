---
title: How to print bean object in Java
layout: post
date: 2014-08-30T19:52:12+00:00
categories:
  - Java
tags:
  - bean
description: To print any object in Java we have to convert it into string. The basic method we have to convert in to string is toString() method in java.lang.Object
---
To print any object in Java we have to convert it into string. The basic method we have to convert in to string is toString() method in java.lang.Object class. But this method by default prints the hexadecimal address value of the object. For example let us take the following Bean Class.

## PersonBean Class

```java
package com.javaindetail.bean;

public class PersonBean {
 private String firstName;
 private String lastName;
 private String age;
 private String address;

 public String getFirstName() {
 return firstName;
 }

 public void setFirstName(String firstName) {
 this.firstName = firstName;
 }

 public String getLastName() {
 return lastName;
 }

 public void setLastName(String lastName) {
 this.lastName = lastName;
 }

 public String getAge() {
 return age;
 }

 public void setAge(String age) {
 this.age = age;
 }

 public String getAddress() {
 return address;
 }

 public void setAddress(String address) {
 this.address = address;
 }
}
```

**Let us print this object in main method**

```java
package com.javaindetail.main;

import com.javaindetail.bean.PersonBean;

public class PrintBean {&lt;/strong&gt;

 public static void main(String[] args) {
 PersonBean bean = new PersonBean();
 bean.setFirstName("Java");
 bean.setLastName("In Detail");
 bean.setAddress("India");
 bean.setAge("21");

 System.out.println(bean.toString());
 }
}

```

**The output will be the name of the class followed by hexadecimal address**

```java
com.javaindetail.bean.PersonBean@42e816
```

**To print the bean object just override the toString() method of Object class. Check the following modified PersonBean Class**

```java
&lt;pre&gt;package com.javaindetail.bean;

public class PersonBean {
 private String firstName;
 private String lastName;
 private String age;
 private String address;

 public String getFirstName() {
 return firstName;
 }

 public void setFirstName(String firstName) {
 this.firstName = firstName;
 }

 public String getLastName() {
 return lastName;
 }

 public void setLastName(String lastName) {
 this.lastName = lastName;
 }

 public String getAge() {
 return age;
 }

 public void setAge(String age) {
 this.age = age;
 }

 public String getAddress() {
 return address;
 }

 public void setAddress(String address) {
 this.address = address;
 }

 //overriding toString() method of java.lang.Object class

 @Override
 public String toString(){
 return "PersonBean[firstname="+firstName+", lastname="+lastName+", age="+age+", address="+address+"]";
 }
}

```

**output when we use the same main method to print the bean object.**

```java
PersonBean[firstname=Java, lastname=In Detail, age=21, address=India]
```

Apart from this technique of printing the bean object, we can use the **Apache Commons Lang**. In order to use Apache Commons Lang we have to add that jar and add the following code to the bean class.

```java
public String toString() {
     return new ToStringBuilder(this).
       append("firstName", firstName).
       append("lastName", lastName).
       append("address", address).
       append("age", age).toString();
 }
```

or you can add these lines of code also instead of above

```java
public String toString() {
   return ToStringBuilder.reflectionToString(this);
 }
```

For Apache Commons Lang &#8211; <a href="http://commons.apache.org/proper/commons-lang/" target="_blank">Click Here</a>  
For Apache Commons Lang ToStringBuilder &#8211; <a href="http://commons.apache.org/proper/commons-lang/apidocs/org/apache/commons/lang3/builder/ToStringBuilder.html" target="_blank">Click Here</a>