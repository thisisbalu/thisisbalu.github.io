---
title: Organizing your application into rule projects – IBM ODM
author: Bala Subramanyam Lanka
layout: post
date: 2016-05-26T01:48:58+00:00
description: By organizing your rule application as modular rule projects, you can improve the performance of Rule Designer for large rule applications, and facilitate the assignment of permissions in Decision Center
categories:
  - ODM
tags:
  - rule-projects
---
By organizing your rule application as modular rule projects, you can improve the performance of Rule Designer for large rule applications, and facilitate the assignment of permissions in Decision Center

## Organizing business rules into rule projects

In Rule Designer, many operations are carried out at the rule project level, such as build, queries, refactoring, and ruleset extraction. Other operations, such as Content Assist and debugging, require browsing through all the rule project items. If you have a large number of business rules in your rule project, these operations become slower. The following diagram shows one rule project with two sets of business rules, Set A, and Set B.<figure id="attachment_1410" aria-describedby="caption-attachment-1410" style="width: 167px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/rule-projects.png" class="img-fluid rounded z-depth-1" zoomable=false %}

To avoid having to manage a large number of rule artifacts in your projects, you can try to break down your application into several rule projects. These rule projects must then reference each other. The following diagram demonstrates this modular organization. Here, you work with the Set A business rule artifacts separately from the Set B business rule artifacts as they are in separate rule projects.<figure id="attachment_1411" aria-describedby="caption-attachment-1411" style="width: 391px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/breaking-down-rule-project.png" class="img-fluid rounded z-depth-1" zoomable=false %}

## Organizing rule projects based on Decision Center permissions

In the Decision Center console, you can define permissions at the rule project level while defining permissions at the rule package level requires you to specify the permissions programmatically. Therefore, if you organize your rule projects according to how you plan to define permissions, you do not need to define these permissions programmatically.

By default, in Decision Center, queries, branches, and extractors only cover the current project. However, you can modify this behavior in the Decision Center console to include referenced rule projects. Deployment baselines include all referenced projects that are necessary for deployment.

## Organizing the BOM into rule projects

If a set of rules uses only a part of the business object model, you can consider isolating this set of rules and the part of the business object model into a separate rule project. Then, when you work with the rules, you have visibility only on the required BOM classes.

You can also split a large BOM entry into several smaller ones for more flexibility, as illustrated in the following figure.<figure id="attachment_1413" aria-describedby="caption-attachment-1413" style="width: 576px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/breaking-down-bom-entries.png" class="img-fluid rounded z-depth-1" zoomable=false %}

When you work with a very large business object model, the completion menus in the Intellirule and Guided editors can become quite large. The size can both be usability and a performance issue. To reduce the number of completion entries, and to make them more relevant to your rules, use categories. Categories are a good way to organize your vocabulary into subsets.<figure id="attachment_1414" aria-describedby="caption-attachment-1414" style="width: 457px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/diamond-shaped-organization.png" class="img-fluid rounded z-depth-1" zoomable=false %}

If you decide to use a diamond-shaped organization, as illustrated in the figure above, with a rule project that defines a ruleflow and references child rule projects, which share a single rule project for the BOM, make sure you define ruleset parameters in the rule project that contains the BOM. Be aware that if you define the same ruleset parameters in the child rule projects, these parameters appear as duplicates in the parent project.

Happy learning! Happy Exploring!!

&nbsp;

_**Sources**:_

  * _[https://www.ibm.com/support/knowledgecenter/SSQP76\_8.5.1/com.ibm.odm.dserver.rules.designer.dev/developing\_topics/tpc\_rulep\_org\_into\_ruleproj.html][5]_

 [1]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/rule-projects.png
 [2]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/breaking-down-rule-project.png
 [3]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/breaking-down-bom-entries.png
 [4]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/diamond-shaped-organization.png
 [5]: https://www.ibm.com/support/knowledgecenter/SSQP76_8.5.1/com.ibm.odm.dserver.rules.designer.dev/developing_topics/tpc_rulep_org_into_ruleproj.html