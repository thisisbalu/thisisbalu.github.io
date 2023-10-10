---
title: How MapReduce is different from Volunteer Computing (SETI@home, Folding@home, GIMPS)?
author: Bala Subramanyam Lanka
layout: post
date: 2015-04-10T17:48:19+00:00
categories:
  - Hadoop
  - MapReduce
tags:
  - folding
  - seti
toc:
 sidebar: right
description: Volunteer Computing can be also termed as Distributive Computing. There are some of the volunteer computing projects such as SETI@home, Folding@home etc, GIMPS., in the world.
---
Volunteer Computing can be also termed as Distributive Computing. There are some of the volunteer computing projects such as SETI@home, Folding@home etc, GIMPS., in the world. Volunteer Computing is nothing but the owners of the computers donate their computing resources such as processing power and storage to some of the projects like SETI@home or Folding@home or GIMPS.

{% include figure.html path="assets/img/blog/volunteer-computing-mapreduce-2.jpg" class="img-fluid rounded z-depth-1" zoomable=false %}

## About SETI@home

SETI, the Search for Extra-Terrestrial Intelligence, runs a project called SETI@home in which volunteers donate their CPU time and storage to analyse radio telescope data for signs of intelligent life outside earth. You can also be a volunteer for this [project][3].

## About Folding@home

Folding@Home sometimes termed as FAH or F@h is also a Volunteer Computing project for disease research that simulates protein folding, computational drug design and other types of molecule dynamics. This project also uses the computer owners idle CPU resources. To be a volunteer of FAH [check here.][5]

## About Great Internet Mersenne Prime Search (GIMPS)

GIMPS is Volunteer computing project which uses the volunteered owners computing resources and storage to search for Mersenne Prime Search. To become a volunteer [check here][7]

## How MapReduce is different from Volunteer Computing

Volunteer Computing projects work by breaking the problem they are trying to solve into small chunks called work units, which are sent to computers around the world to analyse. Let us take an example of how SETI@home works. It sends a work unit of 0.35 MB of radio telescope data and takes hours or days to analyse on a typical home computer. When the analysis is completed, results are sent back to the server.

Now the question is how MapReduce is different from Volunteer Computing. MapReduce also works in the similar way of breaking a problem into independent pieces that work in parallel. Volunteer computing problem is very CPU intensive,which makes it suitable for running on hundreds of thousands of computers across the world because the time to transfer the work unit is dwarfed by time to run the computation time.  Volunteers are donating CPU cycle not the bandwidth.

> _MapReduce is designed to run jobs that last minutes or hours on trusted, dedicated hardware running in a single data center with very high aggregate bandwidth interconnects. It is clear that volunteer computing runs a perpetual computation on untrusted machines on the Internet with highly variable connection speeds and no data locality._

Thats the crisp story of Volunteer Computing vs MapReduce. Happy Learning! Happy Exploring!