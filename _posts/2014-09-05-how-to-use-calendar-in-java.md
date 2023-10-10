---
title: How to use Calendar in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-04T19:59:16+00:00
categories:
  - Java
tags:
  - simpledateformat
description: There is a great confusion between Calendar class and GregorianCalendar class. Let us look into these classes in detail.  These classes are for providing the standard calendar for world.
---
There is a great confusion between Calendar class and GregorianCalendar class. Let us look into these classes in detail.  These classes are for providing the standard calendar for world.

#### <span style="text-decoration:underline;">Calendar Class is an Abstract Class</span>

**Package : **java.util.Calendar

**Extends : **Object class

**Implements : **Serializable Interface, Cloneable Interface, Comparable<Calendar> Interface

**Brief Description : **Calendar class is an abstract class in Java. This mean that we cannot instantiate the Calendar class. Java people defined this class as an abstract class because there are more than one calendar in world like Gregorian Calendar, Julian Calendar, etc.,. hence they defined it as abstract.

#### <span style="text-decoration:underline;">GregorianCalendar Class is a concrete subclass of Calendar</span>

**Package : **java.util.GregorianCalendar

**Extends :** Calendar class(java.util.Calendar extends java.lang.Onject)

**Implements :  **Serializable Interface, Cloneable Interface, Comparable<Calendar> Interface

**Brief Description : **Gregorian Calendar is one of the Calendar used widely in the world. GregorianCalendar class is a concrete class. Before using this Gregorian Calendar let us know What is a Gregorian Calendar?

The Gregorian calendar, also called the Western calendar and the Christian calendar, is internationally the most widely used civil calendar. It is named for Pope Gregory XIII, who introduced it in 1582. This calendar is modification of Julian Calendar.

**Default Values**

<table>
  <tr>
    <th>
      Field
    </th>
    
    <th>
      Default Value
    </th>
  </tr>
  
  <tr>
    <td>
      ERA
    </td>
    
    <td>
      AD
    </td>
  </tr>
  
  <tr>
    <td>
      YEAR
    </td>
    
    <td>
      1970
    </td>
  </tr>
  
  <tr>
    <td>
      MONTH
    </td>
    
    <td>
      JANUARY
    </td>
  </tr>
  
  <tr>
    <td>
      DAY_OF_MONTH
    </td>
    
    <td>
      1
    </td>
  </tr>
  
  <tr>
    <td>
      DAY_OF_WEEK
    </td>
    
    <td>
      the first day of week
    </td>
  </tr>
  
  <tr>
    <td>
      WEEK_OF_MONTH
    </td>
    
    <td>
    </td>
  </tr>
  
  <tr>
    <td>
      DAY_OF_WEEK_IN_MONTH
    </td>
    
    <td>
      1
    </td>
  </tr>
  
  <tr>
    <td>
      AM_PM
    </td>
    
    <td>
      AM
    </td>
  </tr>
  
  <tr>
    <td>
      HOUR, HOUR_OF_DAY, MINUTE, SECOND, MILLISECOND
    </td>
    
    <td>
    </td>
  </tr>
</table>

**How to get the instance of the calendar?**

```java
Calendar calendar1 = new GregorianCalendar(); //Current Instance
Calendar calendar2 = new GregorianCalendar(2013,1,28,13,24,56); //Initialising with other date
Calendar calendar3 = new GregorianCalendar(2013,0,31); //Initialising with other date
```

**How to get the values of the Calendar?**

```java
package com.javaindetail.calendar;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class CalendarInDetail {

	public static void main(String[] args) {

		 // create a GregorianCalendar
		 Calendar calendar = new GregorianCalendar();

		 // print out a bunch of interesting things
		 System.out.println("CURRENT TIMEtt:t"+calendar.getTime());
		 System.out.println("nERAttt:t" + calendar.get(Calendar.ERA));
		 System.out.println("YEARttt:t" + calendar.get(Calendar.YEAR));
		 System.out.println("MONTHttt:t" + calendar.get(Calendar.MONTH));
		 System.out.println("WEEK_OF_YEARtt:t" + calendar.get(Calendar.WEEK_OF_YEAR));
		 System.out.println("WEEK_OF_MONTHtt:t" + calendar.get(Calendar.WEEK_OF_MONTH));
		 System.out.println("DATEttt:t" + calendar.get(Calendar.DATE));
		 System.out.println("DAY_OF_MONTHtt:t" + calendar.get(Calendar.DAY_OF_MONTH));
		 System.out.println("DAY_OF_YEARtt:t" + calendar.get(Calendar.DAY_OF_YEAR));
		 System.out.println("DAY_OF_WEEKtt:t" + calendar.get(Calendar.DAY_OF_WEEK));
		 System.out.println("DAY_OF_WEEK_IN_MONTHt:t"
		                    + calendar.get(Calendar.DAY_OF_WEEK_IN_MONTH));
		 System.out.println("AM_PMttt:t" + calendar.get(Calendar.AM_PM));
		 System.out.println("HOURttt:t" + calendar.get(Calendar.HOUR));
		 System.out.println("HOUR_OF_DAYtt:t" + calendar.get(Calendar.HOUR_OF_DAY));
		 System.out.println("MINUTEttt:t" + calendar.get(Calendar.MINUTE));
		 System.out.println("SECONDttt:t" + calendar.get(Calendar.SECOND));
		 System.out.println("MILLISECONDtt:t" + calendar.get(Calendar.MILLISECOND));
		 System.out.println("ZONE_OFFSETtt:t"
		                    + (calendar.get(Calendar.ZONE_OFFSET)/(60*60*1000)));
		 System.out.println("DST_OFFSETtt:t"
		                    + (calendar.get(Calendar.DST_OFFSET)/(60*60*1000)));

		 System.out.println("nCurrent Time, with hour reset to 3n");
		 calendar.clear(Calendar.HOUR_OF_DAY); // so doesn't override
		 calendar.set(Calendar.HOUR, 3);
		 System.out.println("ERAttt:t" + calendar.get(Calendar.ERA));
		 System.out.println("YEARttt:t" + calendar.get(Calendar.YEAR));
		 System.out.println("MONTHttt:t" + calendar.get(Calendar.MONTH));
		 System.out.println("WEEK_OF_YEARtt:t" + calendar.get(Calendar.WEEK_OF_YEAR));
		 System.out.println("WEEK_OF_MONTHtt:t" + calendar.get(Calendar.WEEK_OF_MONTH));
		 System.out.println("DATEttt:t" + calendar.get(Calendar.DATE));
		 System.out.println("DAY_OF_MONTHtt:t" + calendar.get(Calendar.DAY_OF_MONTH));
		 System.out.println("DAY_OF_YEARtt:t" + calendar.get(Calendar.DAY_OF_YEAR));
		 System.out.println("DAY_OF_WEEKtt:t" + calendar.get(Calendar.DAY_OF_WEEK));
		 System.out.println("DAY_OF_WEEK_IN_MONTHt:t"
		                    + calendar.get(Calendar.DAY_OF_WEEK_IN_MONTH));
		 System.out.println("AM_PMttt:t" + calendar.get(Calendar.AM_PM));
		 System.out.println("HOURttt:t" + calendar.get(Calendar.HOUR));
		 System.out.println("HOUR_OF_DAYtt:t" + calendar.get(Calendar.HOUR_OF_DAY));
		 System.out.println("MINUTEttt:t" + calendar.get(Calendar.MINUTE));
		 System.out.println("SECONDttt:t" + calendar.get(Calendar.SECOND));
		 System.out.println("MILLISECONDtt:t" + calendar.get(Calendar.MILLISECOND));
		 System.out.println("ZONE_OFFSETtt:t"
		        + (calendar.get(Calendar.ZONE_OFFSET)/(60*60*1000))); // in hours
		 System.out.println("DST_OFFSETtt:t"
		        + (calendar.get(Calendar.DST_OFFSET)/(60*60*1000))); // in hours
	}

}
```

**Output**

```java

CURRENT TIME : Fri Sep 05 00:52:18 IST 2014

ERA : 1
YEAR : 2014
MONTH : 8
WEEK_OF_YEAR : 36
WEEK_OF_MONTH : 1
DATE : 5
DAY_OF_MONTH : 5
DAY_OF_YEAR : 248
DAY_OF_WEEK : 6
DAY_OF_WEEK_IN_MONTH : 1
AM_PM : 0
HOUR : 0
HOUR_OF_DAY : 0
MINUTE : 52
SECOND : 18
MILLISECOND : 496
ZONE_OFFSET : 5
DST_OFFSET : 0

Current Time, with hour reset to 3

ERA : 1
YEAR : 2014
MONTH : 8
WEEK_OF_YEAR : 36
WEEK_OF_MONTH : 1
DATE : 5
DAY_OF_MONTH : 5
DAY_OF_YEAR : 248
DAY_OF_WEEK : 6
DAY_OF_WEEK_IN_MONTH : 1
AM_PM : 0
HOUR : 3
HOUR_OF_DAY : 3
MINUTE : 52
SECOND : 18
MILLISECOND : 496
ZONE_OFFSET : 5
DST_OFFSET : 0

```

** ****How to update the date manually?**

```java
package com.javaindetail.calendar;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class CalendarSettingInDetail {

	public static void main(String[] args) {

		Calendar calendar = new GregorianCalendar();
		System.out.println("BEFORE SETTING THE CALENDAR :: " + calendar.getTime());

		//setting a date
		calendar.set(Calendar.YEAR, 2014);
		calendar.set(Calendar.MONTH, 11);
		calendar.set(Calendar.MINUTE, 33);

		System.out.println("AFTER SETTING THE CALENDAR :: " + calendar.getTime());

	}

}
```

**Output**

```java
BEFORE SETTING THE CALENDAR :: Fri Sep 05 01:12:27 IST 2014
AFTER SETTING THE CALENDAR :: Fri Dec 05 01:33:27 IST 2014
```

**How to add or subtract date to Calendar**

```java

package com.javaindetail.calendar;

import java.util.Calendar;
import java.util.GregorianCalendar;

public class CalendarAddSubInDetail {

	public static void main(String[] args) {
		Calendar calendar = new GregorianCalendar(2013,10,28);
		System.out.println("Today's Date : " + calendar.getTime());

		//add one month
		calendar.add(Calendar.MONTH, 1);
		System.out.println("After adding one month : " + calendar.getTime());

		//add one year
		calendar.add(Calendar.YEAR, 1);
		System.out.println("After adding one year : " + calendar.getTime());

		//subtract 10 days
		calendar.add(Calendar.DAY_OF_MONTH, -10);
		System.out.println("After subtracting 10 days : " +calendar.getTime());

		//subtract 10 years
		calendar.add(Calendar.YEAR, -10);
		System.out.println("After subtracting 10 years : " +calendar.getTime());

	}

}

```

**Output**

```java

Today's Date : Thu Nov 28 00:00:00 IST 2013
After adding one month : Sat Dec 28 00:00:00 IST 2013
After adding one year : Sun Dec 28 00:00:00 IST 2014
After subtracting 10 days : Thu Dec 18 00:00:00 IST 2014
After subtracting 10 years : Sat Dec 18 00:00:00 IST 2004

```

Check how to use Date in Java [Click Here][1]

Check how to use SimpleDateFormat [Click Here][2]

 [1]: http://javaindetail.com/2014/09/02/how-to-use-date-in-java/
 [2]: http://javaindetail.com/2014/09/04/how-to-use-simpledateformat-in-java/