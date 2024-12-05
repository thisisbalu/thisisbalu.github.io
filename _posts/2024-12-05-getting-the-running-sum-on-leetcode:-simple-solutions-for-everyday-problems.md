---
title: "LeetCode Problem 1480: Sum"
date: 2024-12-05T00:26:07+00:00
layout: post
categories:
  - LeetCode
  - Programming
tags:
  - Java
  - Algorithms
toc:
  sidebar: right
description: "Join me as I walk through my daily grind of solving LeetCode problems. Today, I’m sharing my take on the Running Sum challenge with a simple Java solution!"
---
---

## The Problem  

The challenge is pretty straightforward: you’re given an array of integers and you need to return a new array where each element is the running sum of the previous elements in the input array. The running sum at index \(i\) is defined as the sum of all elements from index 0 to index \(i\).

For example, if you have an input array:
```
[1, 2, 3, 4]
```
The output should be:
```
[1, 3, 6, 10]
```
Pretty simple, right? It’s like that moment when you realize that your snack stash has been dwindling down to nothing while you’re binge-watching your favorite series… suddenly you’ve eaten all the chips! Anyway, let’s code!

## The Solution  

Alright, let me break down the code I submitted for this problem. I crafted a neat little Java solution that does the job in one pass. Here it is:

```java
class Solution { 
    public int[] runningSum(int[] nums) { 
        for (int i = 1; i < nums.length; i++) { 
            nums[i] = nums[i - 1] + nums[i]; 
        } 
        return nums; 
    } 
}
```

### Complexity Analysis  

Let’s talk performance real quick.  
- **Time Complexity**: O(n), where n is the number of elements in the input array. You’re only looping through the array once!  
- **Space Complexity**: O(1), because we're modifying the input array in place. Just imagine how cluttered your workspace would be if you had to pull out new containers for everything… Not cool!

References:  
- [LeetCode - Running Sum of 1-D Array](https://leetcode.com/problems/running-sum-of-1d-array/)  
