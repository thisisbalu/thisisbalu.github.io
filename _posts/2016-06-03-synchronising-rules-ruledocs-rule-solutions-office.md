---
title: Synchronizing Rules and RuleDocs – Rule Solutions for Office, ODM
author: Bala Subramanyam Lanka
layout: post
date: 2016-06-02T20:25:15+00:00
categories:
  - IBM
  - ODM
tags:
  - ruledocs
toc:
  sidebar: right
description: RuleDocs are Microsoft Office documents that contain your rules, decision tables, and ruleflows. Rules and ruleflows are stored in Word documents, while decision tables are stored as spreadsheets in Excel.
---

## Introduction

RuleDocs are Microsoft Office documents that contain your rules, decision tables, and ruleflows. Rules and ruleflows are
stored in Word documents, while decision tables are stored as spreadsheets in Excel. We use t to edit and manage rules
offline. You can also use them to present the rules together with documentation and supporting information, including
the original policy or requirement.

{% include figure.html path="assets/img/blog/rules-ruledocs-rule-solutions-office-ibm-odm.jpg" class="img-fluid rounded
z-depth-1" zoomable=false %}

You can store your RuleDocs at a location that is accessible to multiple users. Other users can then open RuleDocs for
editing without accessing the <span class="keyword">Decision Center</span> console.

> To use these docs to edit your rules, you must set file associations for <span class="ph filepath">.docx</span>
> and <span class="ph filepath">.xlsx</span> to Microsoft Office Word and Excel, not just with the Microsoft Word and
> Excel viewers.

## Decision Center - Publish and Update

When you work with these Docs in this way, you publish and update them from <span class="keyword">Decision Center</span>
to make sure that the rules in <span class="keyword">Decision Center</span> and those in your Docs remain synchronized.

1. **Publish**: To send the rules from Decision Center to RuleDocs on a file system.
2. **Update**: To save any changes made to your RuleDocs back to Decision Center

When we download Rule Solutions for office, we will be able to see menu added to the Microsoft Word and Microsoft Excel.
Rules menu will be added for Word and Decision Table Menu will be added to the Excel. Note that these menus can be seen
only when the rules were published to the
RuleDocs.<figure id="attachment_1424" aria-describedby="caption-attachment-1424" style="width: 840px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/rule-solutions-for-office-1024x294.png" class="img-fluid rounded z-depth-1"
zoomable=false %}

<p class="shortdesc">
  <a href="http://www.balasubramanyamlanka.com/rule-solutions-office-installation-odm/"><span class="keyword">Rule Solutions for Office</span></a> supports different versions of Office. <span class="keyword">Rule Solutions for Office</span> works with Versions 2007 and 2010 of Microsoft Excel and Word. When you install <span class="keyword">Rule Solutions for Office</span>, you extend Excel and Word with add-ins that provide rule viewing, editing and management features for the RuleDocs.
</p>

## Publish rules to Ruledocs:

### Step 1

Open Decision Center, Select your project. In this case project, name is MyFirstProject_rules
{% include figure.html path="assets/img/blog/Decision-Center-1024x621.png" class="img-fluid rounded z-depth-1"
zoomable=false %}

### Step 2

Go to the project tab in decision center and select Publish Rules to RuleDocs in Rule Solutions for Office Section.
{% include figure.html path="assets/img/blog/Decision-Center-Project-Tab-1024x628.png" class="img-fluid rounded
z-depth-1" zoomable=false %}

### Step 3

Three sub steps here

#### Step 1/3

Specify the local destination folder in Publish rules to RuleDocs (1/3) and click on next. Here we specify where we want
to publish the RuleDoc and then edit the RuleDocs. In the **<span class="ph uicontrol">Publication location</span>**
field, select a location from the drop-down list. The Configuration Manager must have created the location beforehand.
In the **<span class="ph uicontrol">Additional path</span>** field, add any required subfolders to this location.
{% include figure.html path="assets/img/blog/Publishing-rules-to-RuleDocs-1-1024x628.png" class="img-fluid rounded
z-depth-1" zoomable=false %}

#### Step 2/3

Select the options for the RuleDocs in Publish rules to RuleDocs (2/3) and then click on next. Here, we specify which
rules to include, how your RuleDoc is to be organized, and the locale. By default, all action rules, decision tables,
and ruleflows of the current project are published to these Docs. However, you can select a subset based on an existing
query. If you select a query when republishing to the same location, only rules selected by the query are published.
This means that changes to rules in either <span class="keyword">Decision Center</span> or in the RuleDocs are taken
into account if the query does not select those rules.
{% include figure.html path="assets/img/blog/Publishing-rules-to-RuleDocs-2-1024x629.png" class="img-fluid rounded
z-depth-1" zoomable=false %}

#### Step 3/3

Specify the actions to take for each rule in Publish rules to RuleDocs (3/3) and then click next. At the start of this
step, <span class="keyword">Decision Center</span> displays a table comparing the synchronization state between the
rules in <span class="keyword">Decision Center</span> and the folder location to which you are publishing and proposes
an action to take for each rule. For example, during an initial publish, no RuleDocs exist at the publication location,
so all actions are <span class="ph uicontrol">Add rule in <span class="keyword">Rule Solutions for Office.</span></span>
{% include figure.html path="assets/img/blog/Publishing-rules-to-RuleDocs-3-1024x630.png" class="img-fluid rounded
z-depth-1" zoomable=false %}

### Step 4

Publishing status
{% include figure.html path="assets/img/blog/Publishing-Status-1024x625.png" class="img-fluid rounded z-depth-1"
zoomable=false %}
Now all the rules from the project will be converted into the RuleDocs and saved to the local computer destination
provided while publishing.
{% include figure.html path="assets/img/blog/RuleDocs-saved-to-specified-local-destination-1024x681.png" class="
img-fluid rounded z-depth-1" zoomable=false %}
Now all the rules from the decision center are converted into the Rule Docs and saved into our local system folder. We
can now start working offline with the rules. We can Update them, add new entries in decision tables, delete some of the
rules, modify the rule
flow.<figure id="attachment_1452" aria-describedby="caption-attachment-1452" style="width: 840px" class="wp-caption aligncenter">
{% include figure.html path="assets/img/blog/Decision-Table-in-Microsoft-Excel-xslx-1024x593.png" class="img-fluid
rounded z-depth-1" zoomable=false %}
All the changes that are done to these docs are saved locally in the specified location. Once we complete all our
changes we can again update the decision center with all these changes. Let&#8217;s see how to Update the rules from the
RuleDocs.

## Update rules from RuleDocs

Let's assume that we have added some entries to the decision table of the project. For updating the rules with changes
of RuleDocs in local:

### Step 1

Open the Decision center, select our project on the home page then select project tab. Now select Update rules from
RuleDocs in the Rule Solutions for Office section.
{% include figure.html path="assets/img/blog/Decision-Center-Project-Tab-1024x628.png" class="img-fluid rounded
z-depth-1" zoomable=false %}

### Step 2

In the next page specify the local docs path for updating the rules in Update rules from RuleDocs (1/2) section and then
click next.
{% include figure.html path="assets/img/blog/Update-rules-from-RuleDocs-12-1024x624.png" class="img-fluid rounded
z-depth-1" zoomable=false %}

### Step 3

Select the rules that should be updated into the rules from Update rules from RuleDocs (2/2) section and then click
finish.
{% include figure.html path="assets/img/blog/Update-rules-from-RuleDocs-22-1024x626.png" class="img-fluid rounded
z-depth-1" zoomable=false %}

### Step 4

Updating progress.
{% include figure.html path="assets/img/blog/Updating-Progress-1024x635.png" class="img-fluid rounded z-depth-1"
zoomable=false %}

### Step 5

Check your rule in explore tab in the decision center, Vola! It gets updated with the RuleDocs from the local.
{% include figure.html path="assets/img/blog/Decision-Table-gets-updated-in-the-Rules-1024x627.png" class="img-fluid
rounded z-depth-1" zoomable=false %}

## Edit Rules, Decision tables, and Ruleflows

Edit Rules, Decision tables, and Ruleflows without publishing and updating rules and docs. We can also
use <span class="keyword">Rule Solutions for Office</span> for editing if you want to edit an element without publishing
and updating. You can edit action rules, decision tables, and ruleflows.

> The Configuration Manager must activate the feature for the icons to appear in the rule tables

### Step 1

On the Explore tab, click Edit this element in Rule Solutions for Office next to the name of the project element in the
table (<img class="image" src="https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.7.1/com.ibm.odm.dcenter.bu.econsole/images/icon_edit_word.jpg" alt="Edit in Word" />
for action rules and ruleflows,
or <img class="image" src="https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.7.1/com.ibm.odm.dcenter.bu.econsole/images/icon_edit_excel.jpg" alt="Edit in Excel" />
for decision tables).
{% include figure.html path="assets/img/blog/Edit-in-Rule-Solutions-for-Office.png" class="img-fluid rounded z-depth-1"
zoomable=false %}

### Step 2

In the File Download window, click <span class="ph uicontrol">Open</span>
{% include figure.html path="assets/img/blog/Download.png" class="img-fluid rounded z-depth-1" zoomable=false %}

### Step 3

In the Rule Solutions for Office window, click OK. A RuleDoc containing the contents of the project element opens
{% include figure.html path="assets/img/blog/RuleDoc-opens-with-decisiontable.png" class="img-fluid rounded z-depth-1"
zoomable=false %}

### Step 4

Edit the project element in the RuleDoc. Click check in to commit your changes.
{% include figure.html path="assets/img/blog/Update-changes-and-click-check-into-commit-changes.png" class="img-fluid
rounded z-depth-1" zoomable=false %}

### Step 5

Decision Center Authentication for committing the changes.
{% include figure.html path="assets/img/blog/Decision-Center-Authentication.png" class="img-fluid rounded z-depth-1"
zoomable=false %}

### Step 6

Enter the Commit Documentation before checking in the code into the repository. <p>
{% include figure.html path="assets/img/blog/Commit-Documentaion-for-rule.png" class="img-fluid rounded z-depth-1"
zoomable=false %}

### Step 7

Open the Explore tab in the decision center to check the rule! Yes, the rule gets updated immediately after the commit
from Rule Solutions for Office.
{% include figure.html path="assets/img/blog/Rule-gets-updated.png" class="img-fluid rounded z-depth-1"
zoomable=false %}

## Wrapping Up

Well! I guess that is a very big post about the Rule Solutions for Office and the Docs. I had to make sure that all the
information posted here is simple and easily understandable. Feel free to express your ideas or new points in the
comments section below. Happy Learning! Happy Exploring!!</li> </ol>

## References
1. <a href="https://www.ibm.com/support/knowledgecenter">https://www.ibm.com/support/knowledgecenter</a>
2. <a href="https://blogs.perficient.com">https://blogs.perficient.com</a>

[1]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/rules-ruledocs-rule-solutions-office-ibm-odm.jpg

[2]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/rule-solutions-for-office.png

[3]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Decision-Center.png

[4]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Decision-Center-Project-Tab.png

[5]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Publishing-rules-to-RuleDocs-1.png

[6]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Publishing-rules-to-RuleDocs-2.png

[7]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Publishing-rules-to-RuleDocs-3.png

[8]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Publishing-Status.png

[9]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/RuleDocs-saved-to-specified-local-destination.png

[10]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Decision-Table-in-Microsoft-Excel-xslx.png

[11]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Update-rules-from-RuleDocs-12.png

[12]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Update-rules-from-RuleDocs-22.png

[13]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Updating-Progress.png

[14]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/06/Decision-Table-gets-updated-in-the-Rules.png

[15]: https://www.ibm.com/support/knowledgecenter/en/SSQP76_8.7.1/com.ibm.odm.dcenter.bu.econsole/topics/con_config_install_param.html "Many tasks that are related to customizing Decision Center require that you set configuration parameters."