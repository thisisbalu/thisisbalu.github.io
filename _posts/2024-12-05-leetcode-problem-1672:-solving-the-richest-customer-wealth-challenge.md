---
title: "LeetCode Problem 1672: Solving the Richest Customer Wealth Challenge"
date: 2024-12-05T00:31:05+00:00
layout: post
categories:
  - Programming
  - LeetCode Solutions
tags:
  - Java
  - Algorithm
toc:
  sidebar: right
description: "Dive into my journey of tackling LeetCode problem 1672, where I dissect the simplest way to find the richest customer in a matrix of accounts. Grab a coffee and let's code!"
---
---

Hey fellow coders! 

Today, I’m back to share my experience with another LeetCode problem, specifically **Problem 1672: Richest Customer Wealth**. If you've been coding for a while, you probably know that sometimes these things can feel like you're trying to solve a Rubik’s cube blindfolded, right? But this one is pretty straightforward, so let’s dive in!

### The Problem
You’re given a 2D array `accounts`, where each row represents a customer, and each column represents the amount of money they have in different banks. Your job is to find out which customer is the richest. In other words, you need to find out the maximum wealth among all customers.

Visualize it like this:

```
accounts = [[1, 2, 3],
            [3, 2, 1],
            [4, 5, 6]]
```

Here, the first customer has wealth of 6, the second has 6 as well, and the third has 15. So the answer is 15.

### The Solution
Here’s how I went about solving this thing in Java. I mean, it's pretty basic but hey, it works like a charm! Here’s the code:

```java
class Solution {
    public int maximumWealth(int[][] accounts) {
        int richKid = 0;  // Store the wealth of the richest customer
        for (int i = 0; i < accounts.length; i++) {  // Loop through each customer
            int custWealth = 0;  // Reset customer's wealth for each customer
            for (int j = 0; j < accounts[0].length; j++) {  // Loop through each bank account
                custWealth += accounts[i][j];  // Add the wealth for this customer
            }
            // Update richKid if current customer's wealth is greater
            richKid = Math.max(richKid, custWealth);
        }
        return richKid;  // Return the maximum wealth found
    }
}
```

### Breakdown of the Code
1. **Initialization**: We start by initializing `richKid` to 0. This variable will hold the maximum wealth as we process each customer.
2. **Outer Loop**: We loop through each customer (each row of the array).
3. **Inner Loop**: For each customer, we loop through their accounts (columns) to sum up their wealth.
4. **Wealth Comparison**: After calculating the wealth for each customer, we compare it to `richKid`. If this customer is richer, we update `richKid`.
5. **Return the Result**: At the end, we just return the wealth of the richest customer.

### Complexity
- **Time Complexity**: O(m * n), where m is the number of customers and n is the number of banks. Clearly, we’re checking every account for every customer.
- **Space Complexity**: O(1), since we’re using only a few additional variables for calculations.

### Final Thoughts
So there you have it—solved in under 15 minutes! It’s pretty satisfying to solve these problems, even if they can be a pain in the ass sometimes. The beauty of coding is that every little challenge is a chance to grow your skills. 

I love sharing these solutions on my blog, and I hope you find them helpful! Feel free to reach out if you run into any issues or want to discuss other ways to tackle similar problems.

### References
- [LeetCode Problem 1672](https://leetcode.com/problems/richest-customer-wealth/)
- [Java Documentation](https://docs.oracle.com/javase/8/docs/api/)

Until the next coding adventure, happy coding! Keep pushing those boundaries and let's code like there’s no tomorrow!