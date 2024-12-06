---
title: "LeetCode 1295: Find Numbers with Even Number of Digits"
date: 2024-12-05T23:38:31+00:00
layout: post
categories:
  - Programming
  - Algorithms
tags:
  - LeetCode
  - Java
toc:
  sidebar: right
description: "In this post, I’m sharing my solution to LeetCode question 1295. Join me as I explore how to find numbers with an even number of digits in a simple and straightforward way!"
---
---

Hey there, fellow code wranglers! So, I’ve been diving into LeetCode problems day in and day out, and today I'm going to share a neat little solution for LeetCode question 1295: *Find Numbers with Even Number of Digits*. You know how it goes - some days you just churn out code while other days you stare at the screen like a total idiot. But hey, let’s crack on with it!

### The Problem

The problem is pretty straightforward, and honestly, it's one of those you can solve while enjoying your coffee. The goal is to find how many numbers in a given array have an even number of digits. 

So, here’s the deal:
- You’re given an integer array `nums`, and you have to return the count of numbers that have an even number of digits. 

### My Solution

Here’s the Java solution I whipped up. You can think of it as a classic counting problem, but we’re counting digits instead of things that matter—like pizza toppings or how many bugs we have to fix.

```java
class Solution {
    public int findNumbers(int[] nums) {
        int counter = 0; // Initialize a counter to track numbers with even digits
        for (int num : nums) {
            int digits = 0; // Variable to count the number of digits in the current number
            // Special handling for zero since it doesn't enter the loop
            if (num == 0) {
                digits = 1;
            }
            while (num > 0) { // This loop counts the digits
                num = num / 10; // Divide by 10 to drop the last digit
                digits++; // Increment digit count
            }
            if ((digits & 1) == 0) { // Check if digits are even using bitwise AND
                counter++; // Increment counter if we have an even digit number
            }
        }
        return counter; // Return the total count of even digit numbers
    }
}
```

### How It Works

Let me break this down for you:

- We start with a `counter` initialized to zero. This will store the count of numbers that have even digits.
- We loop through each number in the array. 
- For each number, we determine the number of digits by dividing the number by 10 until it hits zero. This way, we’re effectively counting how many times we can divide it—thus, counting the digits.
- If the digit count is even (checked using `(digits & 1) == 0`), we increase our `counter`.
- Finally, we return the `counter` which tells us how many numbers had an even number of digits.

### Complexity Analysis

Now let’s talk complexity, because, you know, that’s the good stuff.

- **Time Complexity**: O(N * D), where N is the number of elements in the `nums` array and D is the average number of digits in a number. This is because we potentially examine each digit in every number.
  
- **Space Complexity**: O(1) since we only use a fixed amount of space regardless of input size. Just a couple of integers to keep track of our counts.

### References

- [LeetCode Problem 1295](https://leetcode.com/problems/find-numbers-with-even-number-of-digits/)
- [Bit Manipulation](https://en.wikipedia.org/wiki/Bit_manipulation)

In conclusion, this problem is a fun little exercise on counting and a reminder that, sometimes, the simplest problems are the most satisfying to solve. So, give it a shot, and who knows, you might just surprise yourself with how quickly you can crank out solutions! Until next time, keep hacking away!