---
title: "LeetCode 485 - Finding Max Consecutive Ones: My Daily Struggle"
date: 2024-12-05T23:38:45+00:00
layout: post
categories:
  - LeetCode
  - Coding Challenges
tags:
  - Java
  - Algorithms
toc:
  sidebar: right
description: "In this post, I dive into my LeetCode journey and present my solution to the question 485, "Max Consecutive Ones," along with a complexity analysis and some references for further exploration."
---
---

Hey folks! Today, I'm back with another installment of my daily LeetCode grind. If you’re anything like me, you probably run into those annoying problems where your brain tries to conk out but then, you’ve just got to solve the damn thing. Today’s question is LeetCode 485 - "Max Consecutive Ones." Let’s jump right into it!

### The Problem

The problem asks us to find the maximum number of consecutive 1s in a binary array. You know, like if you have something like this:

`[1, 1, 0, 1, 1, 1]`

The maximum consecutive ones here is 3, right? Simple enough, that's how we roll. 

So, here’s the actual problem statement from LeetCode:

*Given a binary array `nums`, return the maximum number of consecutive `1`s in the array.*

### My Solution

Here's a straightforward solution I came up with while deep in the zone (you know what I mean). I've written it in Java, but if you're a Python aficionado or something else, you’ll get the gist!

```java
class Solution {
    public int findMaxConsecutiveOnes(int[] nums) {
        int fc = 0;  // This is for the final count
        int lc = 0;  // This is for the current count
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] == 0) {
                lc = 0; // If it's a zero, reset the current count
            } else {
                lc++; // Otherwise, just increment the current count
            }
            fc = Math.max(lc, fc); // Update max count
        }
        return fc; // Return the max consecutive ones
    }
}
```

#### How It Works

So, how does this bad boy do its thing? Here’s the deal:

- We run a loop through the entire array.
- Whenever we hit a 0, we reset the current count (since we can’t have ones after zero).
- When we encounter a 1, we just keep incrementing our current count.
- We keep updating our final count (`fc`) with the max of current count and final count.
- At the end of the loop, we simply return `fc`.

### Complexity Analysis

Let's break down the complexity a bit because that’s always a fun part, right?

- **Time Complexity:** O(n), where n is the length of the array. We only loop through the array once, so it’s pretty efficient.
- **Space Complexity:** O(1), since we’re using just a couple of extra variables and not any additional data structures.

### Conclusion

And there you have it, folks! My very own solution to LeetCode problem 485. It’s clean, it’s neat, and hell, it works! Each time I solve one of these LeetCode problems, I feel like I’ve leveled up my coding skills, even if just a smidge. It'll certainly make my day job a bit easier, I hope!

If you want to dive deeper or see examples of more coding problems, check out the following references:

- [LeetCode Problem 485](https://leetcode.com/problems/max-consecutive-ones/)
- [Good Article on Sliding Window Techniques](https://www.geeksforgeeks.org/window-sliding-technique/)
- [Data Structures and Algorithms in Java (Book)](https://www.amazon.com/Data-Structures-Algorithms-Java-Masoom/dp/1484240382)

Happy coding, and may your days be filled with consecutive ones (or fives, if you're feeling lucky)! Catch you on the flip side!