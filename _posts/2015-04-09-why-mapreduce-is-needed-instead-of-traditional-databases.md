---
title: Why MapReduce is needed instead of traditional Databases?
author: Bala Subramanyam Lanka
layout: post
date: 2015-04-09T15:55:28+00:00
categories:
  - Hadoop
  - MapReduce
tags:
  - databases
description: Why can't we use databases with lots of disks to do large-scale batch analysis? Why MapReduce is needed? MapReduce has its own advantages over traditional databases(especially our relational databases).
---
Why can't we use databases with lots of disks to do large-scale batch analysis? Why MapReduce is needed? MapReduce has its own advantages over traditional databases(especially our relational databases). Both the traditional databases and MapReduce have their own perspectives. It depends on we are going to expose it. Lets discuss some of the points.

{% include figure.html path="assets/img/blog/why-mapreduce.png" class="img-fluid rounded z-depth-1" zoomable=false %}

## Seek Time

One of the important factor to analyse the BigData is the transfer rate of the data. If we are using the databases, the transfer rate is slower because of the seek time in the disks. Seek Time is the time took by the disk&#8217;s head to move to a particular place on disk to read and write the data. If the data access pattern is dominated by seek time, it will take longer time to read or write large portions of the dataset than streaming through it, which operates at the transfer rate.

## Lesser Efficiency for large portions of data

Updating a small portions of data or records into database, B-Tree (a data structure used in the relational databases) works well. But for updating the larger portions the data or records of the database, a B-Tree is lesser efficient than MapReduce.

## Unfit for UnStructured data

Traditional type of databases are very good at retrieving or updating the data for the Structured data such as XML documents, database tables that conform to the particular predefined schema. on the other hand there is un-structured data, where databases are losers. MapReduce works well on un-structured data such as plain text data, image data, log files etc.,.

Happy Learning! Happy Exploring!
