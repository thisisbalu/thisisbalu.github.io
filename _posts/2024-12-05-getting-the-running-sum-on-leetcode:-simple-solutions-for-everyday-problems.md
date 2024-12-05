---
title: "Getting the Running Sum on LeetCode: Simple Solutions for Everyday Problems"
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

Hey there, fellow coders!  

Welcome back to my corner of the internet where I’m chronicling my daily LeetCode adventures. It’s kind of like a digital diary of all the weird and wonderful problems I tackle to keep my skills sharp, and today is no exception. In this post, I’ll be breaking down the LeetCode problem 1480: Running Sum of 1-D Array. Believe me, it’s easier than you think, so let’s dive right into it!

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

### How It Works  

1. **Initialization**: I start iterating from the second element (index 1, because you can’t sum nothing).   
2. **Running Sum Calculation**: For each subsequent number, I simply add the current number to the previous accumulated sum (that’s `nums[i - 1]`).  
3. **Direct Modification**: The beauty of this approach—pop that sum back in the original array. Efficiency win!  
4. **Returning the Result**: Finally, I return the modified `nums` array, and voila! You just made a running sum array with simple loops and some good old arithmetic.

### Complexity Analysis  

Let’s talk performance real quick.  
- **Time Complexity**: O(n), where n is the number of elements in the input array. You’re only looping through the array once!  
- **Space Complexity**: O(1), because we're modifying the input array in place. Just imagine how cluttered your workspace would be if you had to pull out new containers for everything… Not cool!

## Why It’s Useful  

Besides being a fun little exercise, understanding running sums can be super applicable in various areas like prefix sum calculations, cumulative frequency, and even in data streaming scenarios where you’re constantly tracking totals over time. Basically, if it has to do with sums, you're probably going to run into this kind of logic.

Moreover, it teaches you the importance of considering space and time complexity when you’re building your solutions. You don’t want to create a memory hog when a simple loop will suffice!

## Final Thoughts  

And there you have it—my solution for the LeetCode 1480 problem! I hope this gave you a handy little insight into how I tackle challenges. Solving these problems isn’t just about getting the right answer; it's about the journey of figuring things out and learning new concepts along the way. Just like remembering to save some chips for later!

I encourage you to play around with this code and try modifying the logic for added practice. Nothing like a good remix to really solidify your understanding!  

You can check out the original problem [here](https://leetcode.com/problems/running-sum-of-1d-array/) for a deeper dive.

That's all for today! Until next time, keep coding and don’t forget to save some snacks.  

References:  
- [LeetCode - Running Sum of 1-D Array](https://leetcode.com/problems/running-sum-of-1d-array/)  

Happy coding!