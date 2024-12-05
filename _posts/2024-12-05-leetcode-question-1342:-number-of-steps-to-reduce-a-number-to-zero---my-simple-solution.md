---
title: "LeetCode Question 1342: Number of Steps to Reduce a Number to Zero - My Simple Solution"
date: 2024-12-05T00:38:44+00:00
layout: post
categories:
  - LeetCode
  - Programming Challenges
tags:
  - Java
  - Coding
toc:
  sidebar: right
description: "In this post, I’ll walk you through my solution for LeetCode problem 1342—how to reduce a number to zero step by step. Let’s dive into the code and break it down!"
---

Let’s kick things off with the problem statement. The challenge is to find out how many steps it takes to reduce a number to zero, where the steps are defined as follows: 
- If the number is even, divide it by 2. 
- If it’s odd, subtract 1 from it.

Sounds straightforward, right? Like, how hard can it be to reduce an integer to zero with just those two operations? Well, let’s throw some Java code into the mix to show you how it’s done!

### My Java Solution

Here’s the code I came up with:

```java
class Solution {
    public int numberOfSteps(int num) {
        int i = 0; // This will count our steps
        while (num > 0) {
            i++; // Increment step count
            if (num % 2 == 0) {
                num = num / 2; // Even, so divide
            } else {
                num = num - 1; // Odd, so subtract
            }
        }
        return i; // Return total steps taken
    }
}
```

### A Quick Example

Let’s see this in action with an example. 

Say the input is `num = 14`. Here’s how the steps would play out:

- Start with `14` (even) → divide by `2` → `7`
- `7` (odd) → subtract `1` → `6`
- `6` (even) → divide by `2` → `3`
- `3` (odd) → subtract `1` → `2`
- `2` (even) → divide by `2` → `1`
- `1` (odd) → subtract `1` → `0`

So, the total steps would be `6`.

### Performance and Complexity

In terms of performance:
- **Time Complexity**: O(log n) — This is because every time you divide by 2, you effectively halve the number of operations needed.
- **Space Complexity**: O(1) — We're only using a fixed amount of space (the variable `i`).

### References
- [LeetCode Problem 1342](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)
- [Java Documentation](https://docs.oracle.com/javase/8/docs/api/)  
Happy coding!
