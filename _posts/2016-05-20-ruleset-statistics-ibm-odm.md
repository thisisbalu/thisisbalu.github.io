---
title: Optimizing Ruleset Performance in IBM ODM
author: Bala Subramanyam Lanka
layout: post
date: 2016-05-19T18:40:25+00:00
categories:
  - ODM
tags:
  - ruleset-statistics
description: A ruleset is a collection of rules and is the smallest executable unit in IBM ODM. Before it runs, a ruleset is parsed to convert rules into a format that can be executed in memory.
---

In IBM Operational Decision Manager (ODM), a ruleset serves as the fundamental unit of execution. Before execution, a ruleset undergoes parsing to convert rules into a format that can be executed in memory. The initial run-time of a ruleset is a combination of parsing time and actual execution time.

> Ruleset Execution time = Ruleset Parsing time + Actual Ruleset Execution time

When a ruleset exhibits extended execution time, it's crucial to focus on minimizing both parsing time and actual execution time. A significant sign to prioritize reducing parsing time is a prolonged response to the **first** ruleset request. Additionally, if rule execution experiences intermittent slowdowns or if server startup is sluggish, it's an indication that parsing time may be a bottleneck. If timeout errors occur during rule execution, efforts should be made to trim both parsing and execution times.

## Analyzing Ruleset Performance with Statistics

To gain insights into the performance of a ruleset within an IBM ODM environment, you can utilize the **Ruleset Statistics**. This feature allows you to view detailed statistics about the execution of rulesets within a Rule Execution Server or Decision Server.

### Steps to Access Ruleset Statistics

1. In Rule Execution Server, navigate to the **Explorer** tab.
2. Under **Navigator**, expand **RuleApps** and select the specific ruleset within your rule app (e.g., `/yourruleapp/1.0/yourruleproject/1.0`).
3. Click on **View Statistics** in the Ruleset View toolbar. This will display execution statistics including the number of times the ruleset has been executed, and runtime statistics like **Average Time** and **Maximum Time**.

{% include figure.html path="assets/img/blog/ruleset-statistics.png" class="img-fluid rounded z-depth-1" zoomable=false %}

The Ruleset Statistics provide insights for each execution unit (XU) across the entire cluster. It offers details about the execution of rulesets, both on a per-execution unit basis and for the cluster as a whole.

Here's a breakdown of the information provided in the statistics table:

| Metric          | Description                                      |
|-----------------|--------------------------------------------------|
| Count           | The number of times the ruleset was executed.    |
| Total time (ms) | The total time taken to execute the ruleset.     |
| Average time (ms)| The average time for ruleset execution.          |
| Max / Min time (ms)| The longest and shortest execution times.      |
| First / Last Execution Date | Timestamps of the first and last executions. |
| Last Execution Time (ms)   | The time of the last ruleset execution.     |

By utilizing these statistics, you can gain valuable insights into the performance of your rulesets and identify areas for optimization.

## Conclusion

Optimizing ruleset performance is crucial for ensuring efficient rule execution in IBM ODM. By focusing on reducing both parsing time and actual execution time, you can enhance the responsiveness of your decision-making processes. Additionally, leveraging Ruleset Statistics provides valuable data to monitor and fine-tune the performance of your rulesets.

For further in-depth information on Ruleset Statistics and performance optimization in IBM ODM, refer to the [official IBM documentation](https://www.ibm.com/support/knowledgecenter/SSQP76_8.6.0/com.ibm.odm.dserver.rules.tutorials/tut_gs_topics/tut_dserver_gs_monitor_lsn.html).

Happy Exploring! Happy Learning!!

## References

1. [IBM Knowledge Center - Ruleset Execution Statistics](https://www.ibm.com/support/knowledgecenter/SSQP76_8.6.0/com.ibm.odm.dserver.rules.tutorials/tut_gs_topics/tut_dserver_gs_monitor_lsn.html)
2. [IBM Knowledge Center - Ruleset Execution Statistics Views](http://www.ibm.com/support/knowledgecenter/SSQP76_8.7.0/com.ibm.odm.dserver.rules.res.console/topics/tpc_rescons_rulst_exec_statviews.html)
3. [IBM DeveloperWorks](http://www.ibm.com/developerworks)
