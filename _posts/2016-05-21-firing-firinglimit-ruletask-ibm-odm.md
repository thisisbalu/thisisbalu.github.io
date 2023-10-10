---
title: firing and firinglimit in Rule task – IBM ODM
author: Bala Subramanyam Lanka
layout: post
date: 2016-05-20T20:08:14+00:00
categories:
  - ODM
tags:
  - firing
  - firing-limit
description: Configuring the Rule task execution plays the key role in executing the rules in a rule flow. firing and firinglimit are the two rule task properties that help rule execution in a rule flow.
---
Configuring the Rule task execution plays the key role in executing the rules in a rule flow. firing and firinglimit are the two rule task properties that help rule execution in a rule flow.

## firing keyword

<p class="shortdesc">
  The firing keyword determines whether all the rules are executed. This keyword is used to determine whether all the rules of a rule task are executed or only one of them.
</p>

### Syntax

<pre class="toolbar:0 lang:default decode:true">
ruletask ruleTaskName 
{
   [firing = allrules|rule;] 
};
</pre>

> <div class="section">
>   All instances of one rule are executed. If only one rule is executed, use the keyword firinglimit.
> </div>

## firinglimit

<p class="shortdesc">
  The firinglimit keyword specifies the number of rules to be executed. The purpose of a rule task is to execute rules. You can modify the execution order and the number of rules that are executed. The keyword firinglimit specifies how many rules are executed.
</p>

### Syntax

<pre class="toolbar:0 lang:default decode:true ">ruletask ruleTaskName 
{
   [firinglimit = integer value;] 
};</pre>

It is good to have knowledge about these two properties to orchestrate the rules properly in the Operation Decision Management. It all depends on the orchestrator who designs the ruleflow. Happy Learning! Happy Exploring!!