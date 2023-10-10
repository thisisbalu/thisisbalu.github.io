---
title: Data Storage and Analysis Problems Faced in Digital Universe
author: Bala Subramanyam Lanka
layout: post
date: 2015-04-08T17:17:32+00:00
categories:
  - Big Data
tags:
  - big-data
description: Data Storage and Analysis of the stored data is currently the problem in the Digital Universe. When I am studying 7th standard, that is in 2003 there used to be Floppy Disks in use!
---
Data Storage and Analysis of the stored data is currently the problem in the [Digital Universe][1]. When I am studying 7th standard, that is in 2003 there used to be Floppy Disks in use! Yes those disks have storage capacity of 1.44 MB and with access speed of 60kbps. Now a days we have flash storage upto 128 GB with access speed of 60mbps to 120 mbps. We can just imagine how fast the storage capabilities and access speeds have been increased.

In the same way lets compare the typical hard drives. One typical drive 1990 can store 1370 MB of data and had a transfer speed of 4.4mbps, so we can read all the data of the drive in five minutes. Over 20 years later, one terabyte drives are at norm, but the transfer speed is around 100mbps, so this takes more than two and half hours to read all the data off the disk.

## Data Storage and Analysis Problems

After the comparison of the data storage and the access speeds of them , one point is clear reading all the data off the storage take really a long time and writing speeds of them is even slower. Imagine we should hold 1 Tb of data and imagine if we had stored that data in 100 drives, each holding one hundredth of data. we can read whole data in under two minutes.

  1. The first problem to solve is hardware problem of data storage and access speeds of data storage in this Digital Universe. Avoiding the data loss is also an another challenge we are facing. A common way of avoiding data loss is through Replication. This is how RAID works. These are the main two challenges data of the digital universe is facing.
  2. The second problem is that most analysis tasks need to be able to combine the data in some way, and data read from one disk may need to combine the data from any of other 99 disks.

## Alternatives for these Problems

Problems of the data storage and analysis are solved by introducing the new system of analysis and the new file systems.

  1. First problem of hardware is solved by introducing the Hadoop&#8217;s file system. The Hadoop Distributed File System (HDFS) makes the redundant data which replicates to avoid loss of data.
  2. Second problem of analysis is solved by new Algorithms. Although there are certain distributed systems hat allow data to combine from the multiple sources, but doing this correctly is notoriously challenging. An new algorithm called Map Reduce provides a programming model that abstracts the problem from reads and writes, transforming it into a computation over sets of keys and values.

Hadoop Distributed File System (HDFS) and Map Reduce has built in reliability! In crisp Hadoop provides a reliable shared storage and analysis system. The storage is provided by HDFS and analysis by MapReduce. Happy Learning! Happy Exploring!