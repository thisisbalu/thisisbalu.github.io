---
title: What is an Expert System?
author: Bala Subramanyam Lanka
layout: post
date: 2016-05-22T19:39:56+00:00
categories:
  - Expert System
tags:
  - ai
toc:
 sidebar: right
description: An Expert system is a computer system that uses artificial intelligence methods to solve problems within a specialized domain that ordinarily requires human expertise.
---
An Expert system is a computer system that uses artificial intelligence methods to solve problems within a specialized domain that ordinarily requires human expertise. They are designed to solve complex problems by reasoning about knowledge, represented primarily as if–then rules rather than through conventional procedural code.

## How Expert System got started?

The first system was developed in 1965 by Edward Feigenbaum and Joshua Lederberg of Stanford University in California, U.S. Dendral(an influential pioneer project in artificial intelligence of the 1960s. Its primary aim was to study hypothesis formation and discovery in science.), as their expert system was later known, was designed to analyze chemical compounds.<figure id="attachment_1391" aria-describedby="caption-attachment-1391" style="width: 308px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/list-expert-system.jpg" class="img-fluid rounded z-depth-1" zoomable=false %}

## How Do Expert Systems Work?

An expert system has three main components.<figure id="attachment_1386" aria-describedby="caption-attachment-1386" style="width: 635px" class="wp-caption aligncenter">

{% include figure.html path="assets/img/blog/expert-system.png" class="img-fluid rounded z-depth-1" zoomable=false %}

### Knowledge Base

This is a **collection of facts and rules**. The knowledge base is created from **information** provided by **human experts. **It stores complex structured and unstructured information used by a computer system.

### Inference Engine

An inference engine interprets and evaluates the facts in the knowledge base in order to provide an answer. The inference engine applies logical rules to the knowledge base and deducts new knowledge. This process would iterate as each new fact in the knowledge base could trigger additional rules in the inference engine.

Inference engines work primarily in one of two modes called as forward chaining and backward chaining.

  * **Forward chaining** starts with the known facts and asserts new facts.
  * **Backward chaining** starts with goals and works backward to determine what facts must be asserted so that the goals can be achieved.

## User Interface

UI is the system that allows a **non-expert user** to **query** (question) the expert system, and to **receive advice**. The user-interface is designed to be a **simple** to use as possible.

> Inshort, the non-expert user queries the expert system by asking a question, or by answering questions asked by the expert system in <span style="text-decoration: underline;"><strong>user interface</strong></span>. The <span style="text-decoration: underline;"><strong>inference engine</strong></span> uses the query to search the <span style="text-decoration: underline;"><strong>knowledge base</strong></span> and then provides an answer or some advice to the user.

## Applications of Expert System

According  to the book _**Building expert systems**_ written by _**‎Hayes-Roth,  **_Expert Systems are divided into ten categories as follows.

  1. **Interpretation** : Inferring situation descriptions from sensor data like speech detection.
  2. **Prediction** : Inferring likely consequences of given situations like Preterm Birth Risk Assessment.
  3. **Diagnosis** : Inferring system malfunctions from observables like CADUCEUS, MYCIN, PUFF, Mistral etc.,
  4. **Design** : Configuring objects under constraints like Dendral, Mortgage Loan Advisor, R1 etc.,
  5. **Planning** : Designing actions like Mission Planning for Autonomous Underwater Vehicle.
  6. **Monitoring** : Comparing observations to plan vulnerabilities like REACTOR.
  7. **Debugging** : Providing incremental solutions for complex problems like SAINT, MATHLAB, MACSYMA.
  8. **Repair** : Executing a plan to administer a prescribed remedy like Toxic Spill Crisis Management.
  9. **Instruction** : Diagnosing, assessing, and repairing student behavior like SMH.PAL, Intelligent Clinical Training, STEAMER.
 10. **Control** : Interpreting, predicting, repairing, and monitoring system behaviors like Real Time Process Control, Space Shuttle Mission Control etc.,

## Want to try Expert System by yourself?

If you want to experience expert system yourself, you can try them some of the Health care expert systems out there in the internet.

  1. [NHS24][3], Scotland&#8217;s Health Expert system
  2. [QuestionMyHealth][4], is a nutrition expert system.
  3. [EasyDiagnosis][5], is also a Health Expert System. I guess this one is a paid service.

All the information I have posted here is collected from the different websites and encyclopedias. Please find all the references in the sources section which will be listed below. Happy Learning! Happy Exploring!!

&nbsp;

_**Sources**:_

  * _<http://www.igcseict.info/theory/7_2/expert/>_
  * _<http://www.britannica.com/technology/expert-system>_
  * _<https://en.wikipedia.org/>_

 [1]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/list-expert-system.jpg
 [2]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/expert-system.png
 [3]: http://www.nhs24.com/selfhelpguide/bodymap/
 [4]: http://www.questionmyhealth.com/
 [5]: http://www.easydiagnosis.com/