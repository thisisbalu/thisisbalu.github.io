---
title: Rule Engine Execution Modes
author: Bala Subramanyam Lanka
layout: post
date: 2015-10-15T19:48:10+00:00
categories:
  - ODM
  - BRMS
tags:
  - brms
toc:
     sidebar: right
description: The execution of the rules inside the rule engine of IBM Operational Decision Management follows three rule engine execution modes &#8211; RetePlus, sequential, and Fastpath execution modes.
---
The execution of the rules inside the rule engine of IBM Operational Decision Management follows three rule engine execution modes &#8211; RetePlus, sequential, and Fastpath execution modes. Execution mode affects which rules are executed and in which order. Execution mode specifies the algorithm used by the rule engine inside Decision Server.

## Rete Plus Rule Engine Execution Mode

Use RetePlus optimization techniques to improve performance through reduction of the number of rules and conditions, computation of the rules to run, and prioritization of the rule order.

<p class="p">
  In RetePlus mode, the rule engine execution minimizes the number of rules and conditions to be evaluated, computes which rules must be run, and identifies in which order these rules must be run. In RetePlus, the rule engine uses a <dfn class="term">working memory</dfn> and an <dfn class="term">agenda</dfn> for storing and manipulating application objects. The working memory contains references to the application objects. The agenda lists and orders the rule instances that are eligible to be run.
</p>

> <p class="p">
>   RetePlus, an extension based on the <a href="http://www.balasubramanyamlanka.com/rete-algorithm/">Rete algorithm</a>, was the default execution mode for rule flow tasks in Operational Decision Manager V8.5.1 and earlier. Note that the execution mode is always RetePlus if there is no rule flow.
> </p><figure id="attachment_1339" aria-describedby="caption-attachment-1339" style="width: 448px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/rete-plus-mode-execution.jpg" class="img-fluid rounded z-depth-1" zoomable=false %}

### The RetePlus algorithm operates as follows:

  1. The rule engine matches the conditions of the rules in the ruleset against the objects in working memory. During the pattern matching process, RetePlus creates a network based on semantic relationships between rule condition tests.
  2. For each match, a rule instance is created and put on the agenda. Then, based on some ordering principles, the agenda selects the rule instance to be run.
  3. When the rule instance is executed, the rule action is executed. This action modifies the working memory in the following way 
      * By adding an object to the working memory.
      * By removing an object from the working memory.
      * By modifying the attributes of an existing object.
  4. The process carries on cyclically until no more rule instances are left on the agenda.

> whenever the working memory is modified, the rule engine repeats the pattern matching process. It reassesses matches after each rule instance is executed and modifies the data. As a possible consequence, the list of rule instances in the agenda can change. Thus, RetePlus is incremental and data-driven.

### Conclusion:

  1. Default mode that executes in most of the cases.
  2. Characteristics 
      * Rule Chaining
      * Agenda
      * Input : Objects in the working memory or ruleset.
  3. Excels in incremental, data-driven execution(execution which reacts to the changes of data)
  4. Best performance for applications that performs computation or correlation between objects.
  5. Recommended for 
      * Rules with dynamic priorities
      * Rule chaining : execution of a rule may cause other rules to fire
      * Rule actions that manipulate working memory objects(update, retract and insert)
      * Event management.

## Sequential Rule Engine Execution Mode

The sequential mode executes all the eligible rules for a given rule task in sequence, which provides specific performance advantages.<figure id="attachment_1340" aria-describedby="caption-attachment-1340" style="width: 476px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/sequential-rule-execution-mode.jpg" class="img-fluid rounded z-depth-1" zoomable=false %}

### The sequential algorithm operates as follows:

  1. The rule engine performs pattern matching on input ruleset parameters and on the conditions defined on the collections of objects in working memory.
  2. For each match, a rule instance is created and immediately executed. When a rule instance is executed, it sets the value of an attribute or an output ruleset parameter.

### Conclusion:

  1. A mode for sequential exection.
  2. Characteristics: 
      * No rule chaining
      * No agenda
      * Input : Ruleset parameters recommended.
  3. For applications, that perform validation and compliance.
  4. Recommended for 
      * Numerous rules with randomly ordered tests
      * Rules that use ruleset parameters.
      * Rules that use same class in their conditions, but perform different tests on this class.

## Fastpath Rule Engine Execution Mode

Fastpath is a sequential execution mode that also detects semantic relations between rule tests in the same way as RetePlus. However, unlike RetePlus, the Fastpath mode does not support the inference.<figure id="attachment_1341" aria-describedby="caption-attachment-1341" style="width: 505px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/fastpath-rule-engine-execution-mode.jpg" class="img-fluid rounded z-depth-1" zoomable=false %}

### The Fastpath algorithm operates as follows:

  1. The rule engine uses a working memory that references application objects or ruleset parameters. Fastpath performs the pattern matching process, as in RetePlus, by creating a tree based on semantic relations between rule condition tests.
  2. For each match, a rule instance is created and inserted in the agenda.
  3. After the pattern matching process, the rule instances in the agenda are executed.
  4. The rule engine stops after the rule instances have been executed. This behavior also depends on the exit criteria of the rule task. The pattern matching process is not repeated.

### Conclusion:

  1. A mode for sequential execution, with detection of semantic relation between rule tests.
  2. Characteristics: 
      * No rule chaining
      * No agenda
      * Input : Objects in the working memory or ruleset.
  3. For applications that perform validation and compliance, or stateless correlation objects.
  4. Recommended for 
      * Rules with shared test patterns
      * Rules with heterogeneous bindings
      * Rules that use ruleset parameters or working memory objects.

Happy Learning! Happy Exploring!!