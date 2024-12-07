---
title: "LeetCode 977: Squares of a Sorted Array Solution"
date: 2024-12-05T23:38:12+00:00
layout: post
categories:
  - LeetCode
  - Programming Challenges
tags:
  - Coding
  - Algorithms
toc:
  sidebar: right
description: "In this post, I'm sharing my solution for LeetCode problem 977 - Squares of a Sorted Array. Let's dive into some coding magic and tackle problem-solving head-on!"
---
---

Let’s tackle LeetCode 977: Squares of a Sorted Array. Yeah, if you’ve spent any time on LeetCode, you know where we’re headed with this one. It’s all about taking a sorted array of integers, squaring them, and returning them in the same sorted order. Sounds simple, right? Well, there’s always a twist with these problems.

## Problem Statement

Given an integer array `nums` sorted in non-decreasing order, return an array of the squares of each number, also in non-decreasing order.

### Example

- Input: `nums = [-4,-1,0,3,10]`
- Output: `[0, 1, 9, 16, 100]`

## My Solution 

Here’s the Java code I cooked up for this problem:

```java
class Solution {
    public int[] sortedSquares(int[] nums) {
        int result[] = new int[nums.length];
        int left = 0;
        int right = nums.length - 1;

        for (int i = nums.length - 1; i >= 0; i--) {
            int square = 0;
            if (Math.abs(nums[left]) > Math.abs(nums[right])) {
                square = nums[left];
                left++;
            } else {
                square = nums[right];
                right--;
            }
            result[i] = square * square;
        }
        return result;
    }
}
```

## Complexity Analysis

- **Time Complexity**: O(n) — We are only making a single pass through the array.
- **Space Complexity**: O(n) — We are using a new array to hold the results.

## Conclusion

And there you have it! By using a two-pointer technique, we’ve managed to solve this problem in linear time. It's efficient, neat, and gets the job done without breaking a sweat. Now, all that’s left is to keep grinding those LeetCode problems. If you enjoyed this breakdown or have any questions, feel free to drop a comment!

## References

- [LeetCode Problem 977 - Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)
- [Two Pointers Technique Explained](https://www.geeksforgeeks.org/two-pointers-technique/) 

Happy coding! 🖖
