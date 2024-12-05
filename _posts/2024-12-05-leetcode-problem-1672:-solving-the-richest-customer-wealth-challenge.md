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

### Complexity
- **Time Complexity**: O(m * n), where m is the number of customers and n is the number of banks. Clearly, we’re checking every account for every customer.
- **Space Complexity**: O(1), since we’re using only a few additional variables for calculations.

### References
- [LeetCode Problem 1672](https://leetcode.com/problems/richest-customer-wealth/)
- [Java Documentation](https://docs.oracle.com/javase/8/docs/api/)
