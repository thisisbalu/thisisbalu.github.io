---
title: RetePlus Algorithm with Example – IBM ODM
author: Bala Subramanyam Lanka
layout: post
date: 2016-06-04T20:00:23+00:00
categories:
  - Algorithms
  - ODM
tags:
  - reteplus-algorithm
toc:
  sidebar: right
description: RetePlus algorithm is one of the execution modes in IBM ODM which is based on Rete algorithm. It works based on working memory, agenda creation, supports negative patterns, object notification, and Logical Objects. 
---

RetePlus algorithm is one of the [execution modes][1] in IBM ODM which is based on [Rete algorithm][2]. It works based
on working memory, agenda creation, supports negative patterns, object notification, and Logical Objects. Use RetePlus
optimization techniques to improve performance through reduction of the number of rules and conditions, computation of
the rules to run, and prioritization of the rule order.

## Working of RetePlus Algorithm

{% include figure.html path="assets/img/blog/Working-of-RetePlus-Algorithm.jpg" class="img-fluid rounded z-depth-1" zoomable=false %}

### Step 1

First, all the objects are loaded into the working memory. We call these objects as working memory objects.

### Step 2

Rule Engine matches the rules with working memory objects.

### Step 3

During this Pattern matching process, RetePlus algorithm creates a network based on semantic relationships between
rule condition tests.

### Step 4

If a rule got matched with the working memory objects, then the rule instance is created and added to the Agenda.

##### 1. Then based on the Ordering properties, agenda selects the rule instance to trigger.

##### 2. The rule action of the rule gets triggered.

##### 3. When the rules are firing, sometimes there comes a situation where the working memory objects get updated. The rule action can modify the working memory objects in the following way:

* By adding an object to the working memory
* By removing an object from the working memory
* By modifying the attributes of an existing object.

##### 4. Whenever the working memory objects get updated, then rule engine repeats the pattern matching process.

##### 5. It reassesses matches after each rule instance is run and modifies the data. As a possible consequence, the list of rule instances in the agenda can change.

##### 6. Thus, this algorithm is incremental and data-driven.

##### 7. This algorithm is based on an inference process that the sequential and FastPath algorithms do not support in IBM ODM.

##### 8. This algorithm had five main sections. They are:

* Working Memory
* Agenda
* Negative Patterns
* Object Notifications
* Network Operation

## Working Memory

Each Rule engine in the Decision server is paired with a working memory. The working memory contains all the objects contained in the associated IlrContext object (base class of all the execution contexts. Rules can be executed only within an execution context.). You can modify the working memory by adding a statement in the <em class="ph i">action part of a rule</em> or by using the Application Programming Interface (API).

Thus, the rule engine is aware of the objects that are in the working memory and any objects that are linked to them. The rule engine can use only objects that are accessible from the working memory. Use the following methods to manage the working memory:

  1. insert
  2. retract
  3. update
  4. updateContext
  5. enumerateObjects
  6. getObjects

Check [here][4] for better understanding of the methods given above.

### Agenda

The agenda is where <span class="keyword">Decision Server</span> stores the rules whose patterns are all matched. Any rule that enters the agenda is said to be instantiated, it becomes a rule instance<em class="ph i">. </em>

<p class="p">
  The agenda stores rule instances that are eligible to be executed. If the agenda is empty, the execution has no effect. Rule instances placed in the agenda are said to be eligible. Often, in the agenda, several rules are eligible. Consequently, the rule engine has to have some way of deciding which particular rule in the agenda should be executed.
</p>

### Negative Patterns

Negative Patterns are used for expressing the non-existence of a particular type of objects in the working memory. Generally, positive patterns are checked with the objects present in the working memory, By using these negative patterns in this algorithm we can reduce checking for all the patterns with the objects available.

For specifying the negative patterns in the working memory, we should use **_&#8220;not&#8221;_** keyword prior to the condition of the objects.

### Object Notifications

We have four statements to control the individual operations of the objects in the working memory. Operations include &#8211; Object insertion, Object removal, Object Update and Attribute modification.

### RetePlus network operation

<p class="p">
  The RetePlus network indexes rules so as to minimize the number of rules and conditions that need to be evaluated whenever the working memory is changed. The network minimizes the number of evaluations by sharing tests between rules and propagating changes incrementally. When all the tests have been completed, the network designates a rule.
</p>

<p class="p">
  A RetePlus network can be represented as a graph composed of three zones:
</p>

<p class="p">
  <span style="text-decoration: underline;"><strong>Discrimination tree</strong></span>
</p>

<p class="p">
  A discrimination tree is a pattern-matching process that performs tests. These tests are represented by diamond shapes at the top of the network. The tests concern the classes of objects and the values of their attributes. Input to this tree consists of tokens representing each of the current objects in the working memory. When the pattern deals with only one object and its attributes, it is said to be a discrimination test. When it is a combination, it is called a join; these appear in the lower part of the graph.
</p>

<p class="p">
  <span style="text-decoration: underline;"><strong>Alpha nodes</strong></span>
</p>

<p class="p">
  An alpha node is formed at the next level of the network, for each token that passes the tests of the discrimination tree. Each node is composed of one or several tokens, represented by round-cornered rectangles (there are three alpha nodes in the figure). One alpha node contains two B-class tokens. The other two nodes contain only one class token each—A-class and C-class tokens, respectively.
</p>

<p class="p">
  <span style="text-decoration: underline;"><strong>Tests and tuples</strong></span>
</p>

<p class="p">
  The third zone of the network matches tokens of several classes of objects. The resulting nodes are known as tuples, which will be made up of several tokens. The equality test between attributes a2 and b3 gives rise to a node composed of two pairs of tokens, and the test between attributes b2 and c1 then filters out a triplet of tokens. In a RetePlus network, we often refer to tuples of this kind as join nodes.
</p>
    
## RetePlus Execution Example 

###### Let's imagine that there are two rules as shown below. 
{% include figure.html path="assets/img/blog/RetePlus-Example.png" class="img-fluid rounded z-depth-1" zoomable=false %}
      
###### Now objects are loaded into the Working Memory. 
{% include figure.html path="assets/img/blog/Objects-are-loaded-into-Working-memory.png" class="img-fluid rounded z-depth-1" zoomable=false %}

###### Now pattern matching happens and if rules get matched with the objects, rule instances are created and added to the agenda. 
{% include figure.html path="assets/img/blog/Agenda-gets-created.png" class="img-fluid rounded z-depth-1" zoomable=false %}

###### Working memory objects get updated with new values that got fired from the agenda. 
{% include figure.html path="assets/img/blog/Working-Memory-objects-get-updated.png" class="img-fluid rounded z-depth-1" zoomable=false %}

###### Rule firing continues. 
{% include figure.html path="assets/img/blog/Other-rules-in-agenda-continues-to-fire.png" class="img-fluid rounded z-depth-1" zoomable=false %}

###### In the end, when no rules get matched with the Working memory objects, rule firing stops. 
{% include figure.html path="assets/img/blog/Agenda-and-Working-memory-in-the-end.png" class="img-fluid rounded z-depth-1" zoomable=false %}


## Wrapping Up
Well, thats all about the RetePlus Algorithm! Feel free to comment your thoughts in the comments section below. Happy learning! Happy Exploring!!</li> </ol> 
                            
## References
_[https://www.ibm.com/support/knowledgecenter/SSQP76\_8.5.1/com.ibm.odm.dserver.rules.designer.debug/optimizing\_topics/tpc\_opt\_reteplusalgo.html][11]_

[1]: http://www.balasubramanyamlanka.com/rule-engine-execution-modes/

[2]: http://www.balasubramanyamlanka.com/rete-algorithm/

[3]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Working-of-RetePlus-Algorithm.jpg

[4]: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.5.1/com.ibm.odm.dserver.rules.ref.res/html/api/html/ilog/rules/engine/IlrContext.html?view=embed#insert(java.lang.Object)

[5]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/RetePlus-Example.png

[6]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Objects-are-loaded-into-Working-memory.png

[7]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Agenda-gets-created.png

[8]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Working-Memory-objects-get-updated.png

[9]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Other-rules-in-agenda-continues-to-fire.png

[10]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Agenda-and-Working-memory-in-the-end.png

[11]: https://www.ibm.com/support/knowledgecenter/SSQP76_8.5.1/com.ibm.odm.dserver.rules.designer.debug/optimizing_topics/tpc_opt_reteplusalgo.html