---
title: "LeetCode Question 383: Ransom Note Solution Breakdown"
date: 2024-12-05T00:43:10+00:00
layout: post
categories:
  - LeetCode
  - Programming Challenges
tags:
  - Java
  - Algorithms
toc:
  sidebar: right
description: "In this post, I'll walk you through my daily grind of solving LeetCode problems, focusing on problem 383: Ransom Note. Get ready for some code!"
---
---

### Problem Statement

The problem states:

Given two strings `ransomNote` and `magazine`, return `true` if you can construct the `ransomNote` from the `magazine` and `false` otherwise.

Each letter in the `magazine` can only be used once in the `ransomNote`.

So, if you’re wondering whether you have enough letters in the magazine to create a ransom note, this is the problem that will help you check!

### My Solution

After scratching my head for a bit (and sipping on some of that sweet, sweet coffee), I came up with a solution in Java. Here’s the code I submitted:

```java
import java.util.HashMap;
import java.util.Map;

class Solution {
    public boolean canConstruct(String ransomNote, String magazine) {
        Map<Character, Integer> magazineLetter = new HashMap<>();

        // Count each letter's occurrences in the magazine
        for (int i = 0; i < magazine.length(); i++) {
            char m = magazine.charAt(i);
            int currentCount = magazineLetter.getOrDefault(m, 0);
            magazineLetter.put(m, currentCount + 1);
        }

        // Check each letter in the ransom note
        for (int i = 0; i < ransomNote.length(); i++) {
            char r = ransomNote.charAt(i);
            int currentCount = magazineLetter.getOrDefault(r, 0);
            if (currentCount == 0) {
                return false; // Not enough letters
            }
            magazineLetter.put(r, currentCount - 1); // Use one letter
        }

        return true; // Successfully constructed the ransom note
    }
}
```

### Complexity Analysis

- **Time Complexity:** O(m + n), where m is the length of the `magazine` and n is the length of the `ransomNote`. We traverse both strings linearly, so this is pretty efficient.

- **Space Complexity:** O(1) in terms of the character set size, since we’re only using a fixed-size `HashMap` for the alphabet (assuming we're only dealing with standard English letters). 

So yeah, overall it’s a pretty neat and efficient solution!

### Conclusion

And there you have it, folks. I just walked you through my thought process and solution for LeetCode problem 383. If you’re diving into the world of algorithms and data structures, it’s super important to keep practicing, and I'm here to document my grind.

Feel free to hit me up with your own solutions or questions in the comments. Let’s keep this programming journey rolling!

### References

- [LeetCode Problem 383](https://leetcode.com/problems/ransom-note/)
