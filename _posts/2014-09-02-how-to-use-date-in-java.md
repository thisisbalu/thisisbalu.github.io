---
title: How to use Date in Java
author: Bala Subramanyam Lanka
layout: post
categories:
  - Java
tags:
 - java-features
description: Although the Date class is intended to reflect coordinated universal time (UTC), it may not do so exactly, depending on the host environment of the Java Virtual Machine.
giscus_comments: true
related_posts: true
---
**Package : **java.util.Date

**Extends : **Object class

**Implements :  **Serializable class, Cloneable class, Comparable<date>

**Brief Description : **Date class is used to represent the specific instance of time with milliseconds precision introduced in JDK 1.0. Date class used prior to the JDK 1.1 for getting the date and time in the Java program.

Although the Date class is intended to reflect coordinated universal time (UTC), it may not do so exactly, depending on the host environment of the Java Virtual Machine. Nearly all modern operating systems assume that 1 day = 24 × 60 × 60 = 86400 seconds in all cases. In UTC, however, about once every year or two there is an extra second, called a &#8220;leap second.&#8221; The leap second is always added as the last second of the day, and always on December 31 or June 30. For example, the last minute of the year 1995 was 61 seconds long, thanks to an added leap second. Most computer clocks are not accurate enough to be able to reflect the leap-second distinction.

Hence Calendar class and DateFormat class are introduced for conversion of date and time in JDK 1.1. The corresponding methods in Date class are deprecated. In order to format the date in desired format we use the SimpleDateFormat class with the Date class to make the tutorial more understandable.

**Date Example in Java :**

```java
package com.javaindetail.date
import java.text.SimpleDateFormat;
import java.util.Date;

public class DateInDetail {

	public static void main(String[] args) {

		// creating the instance of date which
		// initialises with the current date and time of the system clock
		Date date = new Date();

		// methods to get the date individually
		System.out.println("Date is : " + date);
		System.out.println("Today's date is " + date.getDate());
		System.out.println("Today's time(milliseconds) is " + date.getTime());
		System.out.println("Today's day is " + date.getDay());
		System.out.println("Today's month is " + date.getMonth());
		System.out.println("Today's year is " + date.getYear());
		System.out.println("Today's hour is " + date.getHours());
		System.out.println("Today's minute is " + date.getMinutes());
		System.out.println("Today's seconds is " + date.getSeconds());
		System.out.println("Today's time zone offset is " + date.getYear());

		// initialising the date object by passing the user's date
		// To initialise the date object we have to pass string only in
		// yyyy/mm/dd format
		Date independence = new Date("1947/07/15");
		Date independence2 = new Date("1947/07/15");
		System.out.println("Our Independence is on " + independence);

		// To compare two dates
		if (date.after(independence)) {
			System.out.println("yes it is after");
		}
		if (independence.before(date)) {
			System.out.println("yes it is before");
		}
		if (independence.equals(independence2)) {
			System.out.println("yes they are equal");
		}

		// also a compare method available
		// returns 0 if equal 1 if greater than -1 if less than
		System.out.println("comparing two dates : "
				+ independence2.compareTo(independence));
		System.out.println("comparing two dates : "
				+ date.compareTo(independence));
		System.out.println("comparing two dates : "
				+ independence2.compareTo(date));

		// Formatting the date to user required format
		SimpleDateFormat dateFormat = new SimpleDateFormat("dd/MM/yyy");
		System.out.println("dd/mm/yyyy format is " + dateFormat.format(date));

		dateFormat = new SimpleDateFormat("yyyy/MM/dd");
		System.out.println("yyyy/mm/dd format is " + dateFormat.format(date));

		dateFormat = new SimpleDateFormat("MMM dd yy");
		System.out.println("MMM dd yy format is " + dateFormat.format(date));

		dateFormat = new SimpleDateFormat("dd-M-yyyy hh:mm:ss");
		System.out.println("dd-M-yyyy hh:mm:ss format is "
				+ dateFormat.format(date));
	}

}
```

For more date format patterns and time patterns [check with Oracle Docs][1]

**Output:**
```java
Date is : Tue Sep 02 23:03:13 IST 2014
Today's date is 2
Today's time(milliseconds) is 1409679193738
Today's day is 2
Today's month is 8
Today's year is 114
Today's hour is 23
Today's minute is 3
Today's seconds is 13
Today's time zone offset is 114
Our Independence is on Tue Jul 15 00:00:00 IST 1947
yes it is after
yes it is before
yes they are equal
comparing two dates : 0
comparing two dates : 1
comparing two dates : -1
dd/mm/yyyy format is 02/09/14
yyyy/mm/dd format is 2014/09/02
MMM dd yy format is Sep 02 14
dd-M-yyyy hh:mm:ss format is 02-9-2014 11:03:13
```

**NOTE : Many of the methods of Date class are Deprecated. Hence use of Date class in Java is not a good coding practice. For any of the date and time conversions and methods for for Calendar and SimpleDateFormat  (Check Here for Calendar in Java)**

 [1]: http://docs.oracle.com/javase/6/docs/api/java/text/SimpleDateFormat.html