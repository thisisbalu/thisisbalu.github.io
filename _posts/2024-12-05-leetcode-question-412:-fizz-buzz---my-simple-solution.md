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
---

So, I’ve been diving deep into the Leetcode world lately, solving problems daily like a caffeine-fueled coding machine. Today, I’m going to share my approach to a classic: Leetcode Question 412 - Fizz Buzz. It’s a rite of passage for many programmers, and today you get to see how I tackled it— spoiler alert: it’s not rocket science!

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

### How It Works

1. **Initialization**: We kick things off by creating a `List<String>` called `answer` to hold our results.
  
2. **Looping through numbers**: With a simple for-loop, we run from 1 through `n`. For each number:

   - We start with an empty string called `ans`.
  
   - If the number is a multiple of 3, we append “Fizz” to `ans`.
  
   - If it’s a multiple of 5, we append “Buzz” to `ans`.
  
   - If `ans` is still empty (meaning the number isn’t a multiple of 3 or 5), we convert the integer to a string and assign that to `ans`.

3. **Collecting Results**: Finally, we add whatever is in `ans` to our `answer` list.

### Complexity Analysis

Now, let’s chat about performance because, let’s face it, nobody likes shit code that runs like a snail. 

- **Time Complexity**: This bad boy runs in O(n) time because we’re looping through numbers from 1 to `n`. Each iteration checks conditions and does basic string operations, so there are no hidden surprises here.

- **Space Complexity**: The space complexity is O(n) as well because we’re storing up to `n` strings in our list. That’s pretty standard for problems that require returning collections.

### Final Thoughts

There ya go! That’s my take on the Fizz Buzz problem. It's such a neat little exercise to get the coding juices flowing. Share your own approaches in the comments; I’m curious and always looking to up my coding game! 

References:
- [Leetcode Problem 412: Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)
- [Java Documentation](https://docs.oracle.com/javase/8/docs/api/)

And that's a wrap, folks! Happy coding, and remember: keep it funky.