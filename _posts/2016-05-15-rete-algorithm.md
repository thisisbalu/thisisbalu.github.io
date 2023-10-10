---
title: Rete Algorithm
author: Bala Subramanyam Lanka
layout: post
date: 2016-05-15T17:16:47+00:00
categories:
  - Algorithms
tags:
  - Rete Algorithm
toc:
  sidebar: right
description: Rete Algorithm is an efficient pattern matching algorithm that compares a large collection of patterns to a large collection of objects. It was invented by Charles L. Forgy and documented in his Ph.D. thesis in 1978-79 at Carnegie-Mellon University.
---
Rete Algorithm is an efficient pattern matching algorithm that compares a large collection of patterns to a large collection of objects. It was invented by Charles L. Forgy and documented in his Ph.D. thesis in 1978-79 at Carnegie-Mellon University. 

There are lot many meanings for the word &#8220;RETE&#8221;. Some tell that it is a latin word which means net, comb. Others say that it is an Italian word which means fishing net. But Charles always felt that rete is more like a living substance. So, he told that rete means the anatomical network of blood vessels and nerve fibres. He also clarifies how to spell it. It should be spelt as &#8220;Ree-tee Algorithm&#8221;.

In this post, I would like to write the theory part of rete algorithm. I wanted to discuss the importance of rete algorithm, what are the components of the algorithm, how it works, how working memory elements are created and used in the algorithm etc.,

## Importance of RETE Algorithm

This algorithm is the heart of the Rule Engines from past ten years. Every Business Rule Mangement System that is available on the market uses the enhanced form of rete. Rete algorithm can be implemented by anyone since it is free. So vendors in the market tweak the Rete and create the enhanced form of the Rete Algorithms. For example &#8211; Drools uses RETEOO, IBM ODM uses Rete Plus, etc.,

The Rete Match Algorithm is a method for comparing a set of patterns to a set of objects in order to determine all the possible matches.

> The Rete algorithm is widely used to implement matching functionality within pattern-matching engines that exploit a match-resolve-act cycle to support <span style="text-decoration: underline;"><strong>forward chaining</strong></span> and <span style="text-decoration: underline;"><strong>inferencing</strong></span>.

The algorithm is efficient even when it processes large sets of patterns and objects because it does not iterate over the sets. In this algorithm, the patterns are compiled into a program to perform the match process. The program does not have to iterate over the patterns because it contains a tree-structured sorting network or index for the patterns. It does not have to iterate over the data because it maintains state information: the program computes the matches and partial matches for each object when it enters the data memory, and it stores the information as long as the object remains in the memory.

## Major Characteristics of Rete Algorithm

  * It reduces or eliminates certain types of redundancy through the use of node sharing.
  * It stores partial matches when performing joins between different fact types. This, in turn, allows production systems to avoid complete re-evaluation of all facts each time changes are made to the production system&#8217;s working memory. Instead, the production system needs only to evaluate the changes (deltas) to working memory.
  * It allows for efficient removal of memory elements when facts are retracted from working memory.
  * It provides a means for many-many matching, an important feature when many or all possible solutions in a search network must be found.

## How does Rete Algorithm work?

There are three main components of the Rete Algorithm. They are Alpha Network, Beta Network and Agenda.

> The Rete algorithm is designed to sacrifice memory for increased speed. It uses more memory for the loading the objects into the Working Memory.

Speaking non-technically, rete algorithm is responsible for matching data tuples (&#8220;facts&#8221;) against productions (&#8220;rules&#8221;) in a pattern-matching production system (it may be a rule engine). Now let us see how it works.<figure id="attachment_1332" aria-describedby="caption-attachment-1332" style="width: 840px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/rete-algorithm-1024x706.png" class="img-fluid rounded z-depth-1" zoomable=false %}

Rete is a directed acyclic graph that represents higher-level rule sets. They are generally represented at run-time using a network of in-memory objects.

First, facts are &#8220;asserted&#8221; to working memory, then engine creates _working memory elements_ (WMEs) for each fact. Each WME enters the Rete network at a single root node. The root node passes each WME on to its child nodes, and each WME may then be propagated through the network, possibly being stored in intermediate memories, until it arrives at a terminal node.

### Alpha Network

It starts with constructing the rete network. The left side of the node graph forms a discrimination network responsible for selecting individual WMEs based on simple conditional tests which match WME attributes against constant values.

Within the discrimination network, each branch of alpha nodes (also called 1-input nodes) terminates at a memory, called an _alpha memory_. These memories store collections of WMEs that match each condition in each node in a given node branch. WMEs that fail to match at least one condition in a branch are not materialised within the corresponding alpha memory. Alpha node branches may fork in order to minimise condition redundancy.

### Beta Network

The right side of the graph chiefly performs joins between different WMEs. It is optional and is only included if required. It consists of 2-input nodes where each node has a left and a right input. Each beta node sends its output to a _beta memory_.

Beta nodes process tokens. A token is a unit of storage within a memory and also a unit of exchange between memories and nodes. In many implementations, tokens are introduced within alpha memories where they are used to hold single WMEs. These tokens are then passed to the beta network.

Each beta node performs its work and, as a result, it may create new tokens to hold a list of WMEs representing a partial match. These extended tokens are then stored in beta memories and passed to subsequent beta nodes. In this case, the beta nodes typically pass lists of WMEs through the beta network by copying existing WME lists from each received token into new tokens and then adding a further WMEs to the lists as a result of performing a join or some other action. The new tokens are then stored in the output memory.

WME lists that reach the end of a branch of beta nodes represent a complete match for a single production and are passed to terminal nodes. Each terminal node represents a single production, and each WME list that arrives at a terminal node represents a complete set of matching WMEs for the conditions in that production. For each WME list it receives, a production node will &#8220;activate&#8221; a new production instance on the &#8220;agenda&#8221;.

### Agenda

Agendas are typically implemented as prioritised queues. During any one match-resolve-act cycle, the engine will find all possible matches for the facts currently asserted to working memory. Once all the current matches have been found, and corresponding production instances have been activated on the agenda, the engine determines an order in which the production instances may be &#8220;fired&#8221;.

Each time any single production instance performs one or more such changes, the engine immediately enters a new match-resolve-act cycle. This includes &#8220;updates&#8221; to WMEs currently in the working memory. Updates are represented by retracting and then re-asserting the WME. The engine undertakes matching of the changed data which, in turn, may result in changes to the list of production instances on the agenda. Hence, after the actions for any one specific production instance have been executed, previously activated instances may have been de-activated and removed from the agenda, and new instances may have been activated.

This post is for the brief understanding of Rete Algorithm. Please consider reading the base paper of this algorithm and videos for the exact core understanding. Happy Learning! Happy Exploring!!

&nbsp;

<span style="text-decoration: underline;"><strong><em>Sources:</em></strong></span>

  * _<http://www.csl.sri.com/users/mwfong/Technical/RETE%20Match%20Algorithm%20-%20Forgy%20OCR.pdf>_
  * _<https://www.youtube.com/watch?v=CmxHPJTAF3I>_
  * _<https://docs.jboss.org/drools/release/5.2.0.Final/drools-expert-docs/html/ch03.html>_
  * [_https://techondec.wordpress.com/_]
