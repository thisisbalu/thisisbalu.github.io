---
title: How to use SimpleDateFormat in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-03T19:58:37+00:00
categories:
  - Java
tags:
  - simpledateformat
description: SimpleDateFormat is class for formatting and parsing of date and time. It also allows us to convert the text to date or date to the text format in the user defined formats.
---
**Package : **java.text.SimpleDateFormat

**Extends : **DateFormat class (java.text.DateFormat class extends java.text.Format, java.text.Format extends java.lang.Object)

**Implements : **Serializable Interface, Cloneable Interface.

**Brief Description : **SimpleDateFormat is class for formatting and parsing of date and time. It also allows us to convert the text to date or date to the text format in the user defined formats.

**How to format a date object using SimpledateFormat**


```java
//creating the simpledateformat with desired pattern
 SimpleDateFormat format = new SimpleDateFormat("yyyy.MM.dd G 'at' HH:mm:ss z");
 //date object with present date
 Date date = new Date();
 //parsing the date object to the desired string format
 String formattedString = format.format(date);
 ```

**How to parse the String to date Object using SimpleDateFormat**

```java
//creating the simpledateformat with desired pattern
SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
//date in string format
String dateString = "04/09/2014";
//Always when we are parsing we should surround with try catch
try {
    Date parsingDate = format.parse(dateString);
} catch (ParseException e) {
    System.out.println(e.getMessage());
}
```

** Different date and time patterns for SimpleDateFormat**

<table>
  <tr>
    <th>
      Letter
    </th>
    
    <th>
      Date or Time Component
    </th>
    
    <th>
      Presentation
    </th>
    
    <th>
      Examples
    </th>
  </tr>
  
  <tr>
    <td>
      G
    </td>
    
    <td>
      Era designator
    </td>
    
    <td>
      Text
    </td>
    
    <td>
      AD
    </td>
  </tr>
  
  <tr>
    <td>
      y
    </td>
    
    <td>
      Year
    </td>
    
    <td>
      Year
    </td>
    
    <td>
      1996; 96
    </td>
  </tr>
  
  <tr>
    <td>
      Y
    </td>
    
    <td>
      Week year
    </td>
    
    <td>
      Year
    </td>
    
    <td>
      2009; 09
    </td>
  </tr>
  
  <tr>
    <td>
      M
    </td>
    
    <td>
      Month in year
    </td>
    
    <td>
      Month
    </td>
    
    <td>
      July; Jul; 07
    </td>
  </tr>
  
  <tr>
    <td>
      w
    </td>
    
    <td>
      Week in year
    </td>
    
    <td>
      Number
    </td>
    
    <td>
      27
    </td>
  </tr>
  
  <tr>
    <td>
      W
    </td>
    
    <td>
      Week in month
    </td>
    
    <td>
      Number
    </td>
    
    <td>
      2
    </td>
  </tr>
  
  <tr>
    <td>
      D
    </td>
    
    <td>
      Day in year
    </td>
    
    <td>
      Number
    </td>
    
    <td>
      189
    </td>
  </tr>
  
  <tr>
    <td>
      d
    </td>
    
    <td>
      Day in month
    </td>
    
    <td>
      Number
    </td>
    
    <td>
      10
    </td>
  </tr>
  
  <tr>
    <td>
      F
    </td>
    
    <td>
      Day of week in month
    </td>
    
    <td>
      Number
    </td>
    
    <td>
      2
    </td>
  </tr>
  
  <tr>
    <td>
      E
    </td>
    
    <td>
      Day name in week
    </td>
    
    <td>
      Text
    </td>
    
    <td>
      Tuesday; Tue
    </td>
  </tr>
  
  <tr>
    <td>
      u
    </td>
    
    <td>
      Day number of week (1 = Monday, &#8230;, 7 = Sunday)
    </td>
    
    <td>
      Number
    </td>
    
    <td>
      1
    </td>
  </tr>
  
  <tr>
    <td>
      a
    </td>
    
    <td>
      Am/pm marker
    </td>
    
    <td>
      Text
    </td>
    
    <td>
      PM
    </td>
  </tr>
  
  <tr>
    <td>
      H
    </td>
    
    <td>
      Hour in day (0-23)
    </td>
    
    <td>
      Number
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      k
    </td>
    
    <td>
      Hour in day (1-24)
    </td>
    
    <td>
      Number
    </td>
    
    <td>
      24
    </td>
  </tr>
  
  <tr>
    <td>
      K
    </td>
    
    <td>
      Hour in am/pm (0-11)
    </td>
    
    <td>
      Number
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      h
    </td>
    
    <td>
      Hour in am/pm (1-12)
    </td>
    
    <td>
      Number
    </td>
    
    <td>
      12
    </td>
  </tr>
  
  <tr>
    <td>
      m
    </td>
    
    <td>
      Minute in hour
    </td>
    
    <td>
      Number
    </td>
    
    <td>
      30
    </td>
  </tr>
  
  <tr>
    <td>
      s
    </td>
    
    <td>
      Second in minute
    </td>
    
    <td>
      Number
    </td>
    
    <td>
      55
    </td>
  </tr>
  
  <tr>
    <td>
      S
    </td>
    
    <td>
      Millisecond
    </td>
    
    <td>
      Number
    </td>
    
    <td>
      978
    </td>
  </tr>
  
  <tr>
    <td>
      z
    </td>
    
    <td>
      Time zone
    </td>
    
    <td>
      General time zone
    </td>
    
    <td>
      Pacific Standard Time; PST; GMT-08:00
    </td>
  </tr>
  
  <tr>
    <td>
      Z
    </td>
    
    <td>
      Time zone
    </td>
    
    <td>
      RFC 822 time zone
    </td>
    
    <td>
      -0800
    </td>
  </tr>
  
  <tr>
    <td>
      X
    </td>
    
    <td>
      Time zone
    </td>
    
    <td>
      ISO 8601 time zone
    </td>
    
    <td>
      -08; -0800; -08:00
    </td>
  </tr>
</table>

**Example Program to show Different Date Formats**

```java
package com.javaindetail.simpledateformat;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class SimpleDateFormatInDetail {

	public static void main(String[] args) {
		Date date = new Date();
		SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy.MM.dd G 'at' HH:mm:ss z");
		System.out.println(dateFormat.format(date));
		dateFormat = new SimpleDateFormat("EEE, MMM d, ''yy");
		System.out.println(dateFormat.format(date));
		dateFormat = new SimpleDateFormat("h:mm a");
		System.out.println(dateFormat.format(date));
		dateFormat = new SimpleDateFormat("hh 'o''clock' a, zzzz");
		System.out.println(dateFormat.format(date));
		dateFormat = new SimpleDateFormat("K:mm a, z");
		System.out.println(dateFormat.format(date));
		dateFormat = new SimpleDateFormat("yyyyy.MMMMM.dd GGG hh:mm aaa");
		System.out.println(dateFormat.format(date));
		dateFormat = new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z");
		System.out.println(dateFormat.format(date));
		dateFormat = new SimpleDateFormat("yyMMddHHmmssZ");
		System.out.println(dateFormat.format(date));
		dateFormat = new SimpleDateFormat("yyyy-MM-dd'T'HH:mm:ss.SSSZ");
		System.out.println(dateFormat.format(date));
	}

}
```

**Output** 

```java
2014.09.04 AD at 01:12:53 IST
Thu, Sep 4, '14
1:12 AM
01 o'clock AM, India Standard Time
1:12 AM, IST
02014.September.04 AD 01:12 AM
Thu, 4 Sep 2014 01:12:53 +0530
140904011253+0530
2014-09-04T01:12:53.270+0530
```

**Example to parse the String to date object using SimpleDateFormat**

```java
package com.javaindetail.simpledateformat;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class ParsingInDetail {

	public static void main(String[] args) {
		// creating the simpledateformat with desired pattern
		SimpleDateFormat format = new SimpleDateFormat("dd/MM/yyyy");
		// creating date object
		Date parsingDate = new Date();
		// date in string format
		String dateString = "01/10/2024";
		// Always when we are parsing we should surround with try catch
		try {
			System.out.println("Date before parsing is " + parsingDate);
			parsingDate = format.parse(dateString);
			System.out.println("Date after parsing is " + parsingDate);
		} catch (ParseException e) {
			System.out.println(e.getMessage());
		}

	}

}
```

**Output**

```java
Date before parsing is Thu Sep 04 01:21:24 IST 2014
Date after parsing is Tue Oct 01 00:00:00 IST 2024
```