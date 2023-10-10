---
title: How to use equals method in java.lang.Object class
layout: post
date: 2014-08-16T18:15:17+00:00
categories:
  - Java
tags:
  - equals
description: This detailed tutorial covers the theory behind equals(), how it relates to hashCode(), and provides a practical example with code snippets for a deeper understanding of object comparison in Java.
giscus_comments: false
related_posts: true
thumbnail: 
---
Let us see equals method in detail in java in detail ;)

```java
public boolean equals(Object obj)
```

Indicates whether some other object is &#8220;equal to&#8221; this one.

The equals method implements an equivalence relation on non-null object references:

  * It is reflexive: for any non-null reference value x, x.equals(x) should return true.
  * It is symmetric: for any non-null reference values x and y, x.equals(y) should return true if and only if y.equals(x) returns true.
  * It is transitive: for any non-null reference values x, y, and z, if x.equals(y) returns true and y.equals(z) returns true, then x.equals(z) should return true.
  * It is consistent: for any non-null reference values x and y, multiple invocations of x.equals(y) consistently return true or consistently return false, provided no information used in equals comparisons on the objects is modified.
  * For any non-null reference value x, x.equals(null) should return false.

The equals method for class Object implements the most discriminating possible equivalence relation on objects; that is, for any non-null reference values x and y, this method returns true if and only if x and y refer to the same object (x == y has the value true).

Note that it is generally necessary to override the hashCode method whenever this method is overridden, so as to maintain the general contract for the hashCode method, which states that equal objects must have equal hash codes.

**Parameters:**

obj &#8211; the reference object with which to compare.

**Returns:**

true if this object is the same as the obj argument; false otherwise.

**Overriding equals and hashCode:**

If equals method is overridden in java then hashCode should be also overridden. They contact each other in the following manner.

  * If two objects are equal by equals() method then there hashcode must be same.
  * If two objects are not equal by equals() method then there hashcode could be same or different.

So this was the basic theory about equals method in Java. equals() method can be improved by implementing the following code. For illustration purpose we will see an example of StudentInfo class and discuss How to write equals() method in Java for that class.

**Example Code Snippet:**

```java
package com.javaindetail.object;

//Creating the bean object of a StudentInfo
class StudentInfo {
	private String firstName;
	private String lastName;

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

	//Overriding the equals method of Object class
	@Override
	public boolean equals(Object obj) {
		if (obj == this) {
			return true;
		}
		if (obj == null || obj.getClass() != this.getClass()) {
			return false;
		}

		StudentInfo guest = (StudentInfo) obj;
		return (firstName == guest.firstName || (firstName != null && firstName
				.equals(guest.getFirstName())))
				&& (lastName == guest.lastName || (lastName != null && lastName
						.equals(guest.getLastName())));
	}

	//If we are overriding the equals method we have to over ride the hashCode method too
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result
				+ ((firstName == null) ? 0 : firstName.hashCode());
		result = prime * result;
		result = prime * result
				+ ((lastName == null) ? 0 : lastName.hashCode());
		return result;
	}
}

/**
 *
 * @author Bala Subramanyam Lanka
 * overriding equals() method in detail in Java In Detail
 *
 */

public class EqualsMethodInDetail {
	public static void main(String args[]) {
		//Creating the objects for bean class and setting the values
		StudentInfo p = new StudentInfo();
		p.setFirstName("Java");
		p.setLastName("InDetail");

		StudentInfo q = new StudentInfo();
		q.setFirstName("Java");
		q.setLastName("InDetail");

		StudentInfo r = new StudentInfo();
		r.setFirstName("Python");
		r.setLastName("InDetail");

		System.out.println("Comparing p and q objects : "+p.equals(q));
		System.out.println("Comparing p and r objects : "+p.equals(r));
	}
}
```

**Output:**

```java
Comparing p and q objects : true
Comparing p and r objects : false
```