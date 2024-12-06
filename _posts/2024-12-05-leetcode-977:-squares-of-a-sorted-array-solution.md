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

Alright folks, let’s tackle LeetCode 977: Squares of a Sorted Array. Yeah, if you’ve spent any time on LeetCode, you know where we’re headed with this one. It’s all about taking a sorted array of integers, squaring them, and returning them in the same sorted order. Sounds simple, right? Well, there’s always a twist with these problems.

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

### Breakdown of the Solution

1. **Initialization**: We create an integer array `result` of the same length as `nums` to hold the squared values.
2. **Two Pointers Technique**: We set up two pointers: `left` (starting at the beginning of `nums`) and `right` (starting at the end of `nums`).
3. **Squaring Logic**: 
   - We iterate backward through the `result` array.
   - At each step, we compare the absolute values at the `left` and `right` pointers.
   - Depending on which absolute value is larger, we square it and place it in the correct position in the `result` array. 
   - We then move the corresponding pointer inward.
4. **Return Result**: Finally, we return the `result` array.

This approach ensures we only loop through `nums` once, so it’s efficient as hell.

## Complexity Analysis

- **Time Complexity**: O(n) — We are only making a single pass through the array.
- **Space Complexity**: O(n) — We are using a new array to hold the results.

## Conclusion

And there you have it! By using a two-pointer technique, we’ve managed to solve this problem in linear time. It's efficient, neat, and gets the job done without breaking a sweat. Now, all that’s left is to keep grinding those LeetCode problems. If you enjoyed this breakdown or have any questions, feel free to drop a comment!

## References

- [LeetCode Problem 977 - Squares of a Sorted Array](https://leetcode.com/problems/squares-of-a-sorted-array/)
- [Two Pointers Technique Explained](https://www.geeksforgeeks.org/two-pointers-technique/) 

Happy coding! 🖖