---
title: What is meant by Regular Expression and Where it is used in Java
author: Bala Subramanyam Lanka
layout: post
categories:
  - Java
tags:
  - regex
description: Regular Expression, widely termed as Regex is a sequence of characters which forms a search pattern. It is used to match the patterns in the string or the text. Using the regex we can find a pattern and also we can replace the pattern(speaking in perspective with Java).
---
Regular Expression, widely termed as Regex is a sequence of characters which forms a search pattern. It is used to match the patterns in the string or the text. Using the regex we can find a pattern and also we can replace the pattern(speaking in perspective with Java). Always regex is applied to the string or text from left to right.

**Simple Example on Regex**

regex : java  
string : javaindetail.com

How many times regex is repeating in string? :: 1  
Is regex matching string? :: no  
Is regex present in string? :: yes

NOTE : Once a source character has been used in a match, it cannot be reused.

**Uses of Regular Expression**

  1. Search a pattern in string or text.
  2. Edit or Modify a pattern in string or text.
  3. To count how many times a pattern is matched.

**Where Regex is used in Java**

  1. Applied with Pattern and Matcher classes available in java.util.regex to compile and process the string based on regex.
  2. Applied with String.matches() to check whether the string matches the regex or not.
  3. Applied with String.split() to split the string with regex.
  4. Applied with String.replace() and String.replaceAll() to edit or modify the string based on regex.