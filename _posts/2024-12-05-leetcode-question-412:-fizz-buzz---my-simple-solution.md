---
title: "Leetcode Question 412: Fizz Buzz - My Simple Solution"
date: 2024-12-05T00:36:10+00:00
layout: post
categories:
  - Programming
  - Leetcode
tags:
  - FizzBuzz
  - CodingChallenges
toc:
  sidebar: right
description: "In this post, I’m sharing my resolution to Leetcode’s Fizz Buzz problem. It’s simple yet useful, so let's dive in together!"
---

### The Fizz Buzz Problem

Here’s the deal: you get a number `n`, and your task is to print an array with the numbers from 1 to `n`, but instead of multiples of 3, you do “Fizz”, multiples of 5 become “Buzz”, and for numbers that are multiples of both 3 and 5, you print “FizzBuzz”. Pretty straightforward, right? Let’s break it down. 

Here’s the full problem statement if you want to check it out:
- Write a program that outputs the string representation of numbers from 1 to `n`.
- But for multiples of three it should output “Fizz” instead of the number.
- For the multiples of five output “Buzz”.
- For numbers which are multiples of both three and five output “FizzBuzz”.

### My Fizz Buzz Solution

Here’s how I whipped this up in Java:

```java
import java.util.ArrayList;
import java.util.List;

class Solution {
    public List<String> fizzBuzz(int n) {
        List<String> answer = new ArrayList<>();
        for(int i = 1; i <= n; i++) {
            String ans = "";
            if(i % 3 == 0) ans += "Fizz";
            if(i % 5 == 0) ans += "Buzz";
            if(ans.isEmpty()) ans = String.valueOf(i);
            answer.add(ans);
        }
        return answer;
    }
}
```

### Complexity Analysis

Now, let’s chat about performance because, let’s face it, nobody likes shit code that runs like a snail. 

- **Time Complexity**: This bad boy runs in O(n) time because we’re looping through numbers from 1 to `n`. Each iteration checks conditions and does basic string operations, so there are no hidden surprises here.

- **Space Complexity**: The space complexity is O(n) as well because we’re storing up to `n` strings in our list. That’s pretty standard for problems that require returning collections.

References:
- [Leetcode Problem 412: Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)
- [Java Documentation](https://docs.oracle.com/javase/8/docs/api/)

And that's a wrap, folks! Happy coding, and remember: keep it funky.
