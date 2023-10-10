---
title: How to use Regular Expressions in Java – Syntaxes
author: Bala Subramanyam Lanka
layout: post
categories:
  - Java
tags:
  - regex
description: Many languages like Java, Python, C#, Perl, Groovy  and others support Regular Expressions in their own way. Let us see how regular expressions are used and the syntax of different regular expressions in Java.
---
Many languages like Java, Python, C#, Perl, Groovy  and others support Regular Expressions in their own way. Let us see how regular expressions are used and the syntax of different regular expressions in Java.

Following are the List of Syntaxes

<table>
  <tr>
    <th>
      Expression
    </th>
    
    <th>
      Description
    </th>
  </tr>
  
  <tr>
    <td>
      ^
    </td>
    
    <td>
      beginning of line.
    </td>
  </tr>
  
  <tr>
    <td>
      $
    </td>
    
    <td>
      end of line.
    </td>
  </tr>
  
  <tr>
    <td>
      .
    </td>
    
    <td>
      any single character except newline.
    </td>
  </tr>
  
  <tr>
    <td>
      [&#8230;]
    </td>
    
    <td>
      any single character in brackets.
    </td>
  </tr>
  
  <tr>
    <td>
      [^&#8230;]
    </td>
    
    <td>
      any single character not in brackets
    </td>
  </tr>
  
  <tr>
    <td>
      A
    </td>
    
    <td>
      Beginning of entire string
    </td>
  </tr>
  
  <tr>
    <td>
      z
    </td>
    
    <td>
      End of entire string
    </td>
  </tr>
  
  <tr>
    <td>
      Z
    </td>
    
    <td>
      End of entire string except allowable final line terminator.
    </td>
  </tr>
  
  <tr>
    <td>
      re*
    </td>
    
    <td>
      0 or more occurrences of preceding expression.
    </td>
  </tr>
  
  <tr>
    <td>
      re+
    </td>
    
    <td>
      1 or more of the previous thing
    </td>
  </tr>
  
  <tr>
    <td>
      re?
    </td>
    
    <td>
      0 or 1 occurrence of preceding expression.
    </td>
  </tr>
  
  <tr>
    <td>
      re{ n}
    </td>
    
    <td>
      exactly n number of occurrences of preceding expression.
    </td>
  </tr>
  
  <tr>
    <td>
      re{ n,}
    </td>
    
    <td>
      n or more occurrences of preceding expression.
    </td>
  </tr>
  
  <tr>
    <td>
      re{ n, m}
    </td>
    
    <td>
      at least n and at most m occurrences of preceding expression.
    </td>
  </tr>
  
  <tr>
    <td>
      a|b
    </td>
    
    <td>
      either a or b.
    </td>
  </tr>
  
  <tr>
    <td>
      (re)
    </td>
    
    <td>
      Groups regular expressions and remembers matched text.
    </td>
  </tr>
  
  <tr>
    <td>
      (?: re)
    </td>
    
    <td>
      Groups regular expressions without remembering matched text.
    </td>
  </tr>
  
  <tr>
    <td>
      (?> re)
    </td>
    
    <td>
      independent pattern without backtracking.
    </td>
  </tr>
  
  <tr>
    <td>
      w
    </td>
    
    <td>
      word characters.
    </td>
  </tr>
  
  <tr>
    <td>
      W
    </td>
    
    <td>
      nonword characters.
    </td>
  </tr>
  
  <tr>
    <td>
      s
    </td>
    
    <td>
      whitespace. Equivalent to [tnrf].
    </td>
  </tr>
  
  <tr>
    <td>
      S
    </td>
    
    <td>
      nonwhitespace.
    </td>
  </tr>
  
  <tr>
    <td>
      d
    </td>
    
    <td>
      digits. Equivalent to [0-9].
    </td>
  </tr>
  
  <tr>
    <td>
      D
    </td>
    
    <td>
      nondigits.
    </td>
  </tr>
  
  <tr>
    <td>
      A
    </td>
    
    <td>
      beginning of string.
    </td>
  </tr>
  
  <tr>
    <td>
      Z
    </td>
    
    <td>
      end of string. If a newline exists, it matches just before newline.
    </td>
  </tr>
  
  <tr>
    <td>
      z
    </td>
    
    <td>
      end of string.
    </td>
  </tr>
  
  <tr>
    <td>
      G
    </td>
    
    <td>
      point where last match finished.
    </td>
  </tr>
  
  <tr>
    <td>
      n
    </td>
    
    <td>
      Back-reference to capture group number &#8220;n&#8221;
    </td>
  </tr>
  
  <tr>
    <td>
      b
    </td>
    
    <td>
      word boundaries when outside brackets. Matches backspace (0x08) when inside brackets.
    </td>
  </tr>
  
  <tr>
    <td>
      B
    </td>
    
    <td>
      nonword boundaries.
    </td>
  </tr>
  
  <tr>
    <td>
      n, t, etc.
    </td>
    
    <td>
      newlines, carriage returns, tabs, etc.
    </td>
  </tr>
  
  <tr>
    <td>
      Q
    </td>
    
    <td>
      Escape (quote) all characters up to E
    </td>
  </tr>
  
  <tr>
    <td>
      E
    </td>
    
    <td>
      Ends quoting begun with Q
    </td>
  </tr>
</table>

Using the above syntaxes we can use regular expressions in Java.