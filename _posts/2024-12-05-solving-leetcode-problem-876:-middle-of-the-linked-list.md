---
title: "Solving LeetCode Problem 876: Middle of the Linked List"
date: 2024-12-05T00:42:06+00:00
layout: post
categories:
  - LeetCode
  - Algorithms
tags:
  - Linked List
  - Coding Problems
toc:
  sidebar: right
description: "In this article, I'm diving into LeetCode Problem 876, where I'll walk you through my solution to finding the middle of a linked list. Strap in for some laid-back coding insights!"
---

### The Question

The problem states: 

> Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.

So, if you have a linked list like this:  
1 -> 2 -> 3 -> 4 -> 5  
Your answer should be the node with value 3 since it’s the middle. But if you had 1 -> 2 -> 3 -> 4 -> 5 -> 6, you should return the node with value 4 because there’s a tie!

### My Solution

Alright, let’s get to the juicy part—here’s how I solved this problem. The classic approach here uses a two-pointer technique: a slow pointer and a fast pointer. The fast pointer moves twice as fast as the slow one. When the fast pointer reaches the end of the list, the slow pointer will be at the middle. Here’s the code:

```java
/** 
 * Definition for singly-linked list. 
 */
public class ListNode {
    int val;
    ListNode next;
    ListNode() {}
    ListNode(int val) {
        this.val = val;
    }
    ListNode(int val, ListNode next) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    public ListNode middleNode(ListNode head) {
        ListNode slowPointer = head;
        ListNode fastPointer = head;
        
        // Move fast pointer 2 nodes and slow pointer 1 node at a time
        while (fastPointer != null && fastPointer.next != null) {
            fastPointer = fastPointer.next.next;
            slowPointer = slowPointer.next;
        }
        return slowPointer; // When fastPointer reaches the end, slowPointer is at the middle
    }
}
```

### Complexity Analysis

Now, let's break down the complexities, shall we?

- **Time Complexity**: O(n) – We need to traverse the list just once to find the middle node. Simple enough, right?
- **Space Complexity**: O(1) – We’re not using any extra space here apart from a couple of pointers, which is pretty damn efficient.

References:  
- [LeetCode Problem 876](https://leetcode.com/problems/middle-of-the-linked-list/)  
- [Two-pointer Technique Overview](https://www.geeksforgeeks.org/two-pointer-technique/)  

Catch you later! Happy coding!
