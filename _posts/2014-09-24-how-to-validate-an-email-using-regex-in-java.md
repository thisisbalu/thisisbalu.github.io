---
title: How to validate an email using Regex in Java
author: Bala Subramanyam Lanka
layout: post
date: 2014-09-24T14:30:54+00:00
categories:
  - Java
tags:
  - regex
description: Validating an email address in Java is quite simple with the Regular Expression(regex). I searched for many of the regular expression and found a simple way of validating an email.
---
Validating an email address in Java is quite simple with the Regular Expression(regex). I searched for many of the regular expression and found a simple way of validating an email.

**REGEX FOR EMAIL VALIDATING**

> ^[\_A-Za-z0-9-]+(\.[\_A-Za-z0-9-]+)\*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)\*(\.[A-Za-z]{2,})$ 

**email Validating Tutorial**

```java
package com.javaindetail.emailvalidation;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class EmailValidationRegex {
  private static final String EMAIL_VALIDATION_REGEX = "^[_A-Za-z0-9-]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9-]+)*(\.[A-Za-z]{2,})$";
  private static final String EMAIL1 = "baluatcomputerscience@javaindetail.com";

  public static void main(String[] args) {

    Pattern pattern = Pattern.compile(EMAIL_VALIDATION_REGEX);
    Matcher matcher = pattern.matcher(EMAIL1);

    if(matcher.matches()){
      System.out.println("Email is valid");
    }
    else{
      System.out.println("Email is invalid");
    }

  }
}
```

**Output**

```
Email is valid
```