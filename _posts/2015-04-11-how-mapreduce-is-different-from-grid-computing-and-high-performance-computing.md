---
title: How MapReduce is different from Grid Computing and High Performance Computing?
author: Bala Subramanyam Lanka
layout: post
date: 2015-04-11T15:49:08+00:00
categories:
  - Hadoop
  - MapReduce
tags:
  - grid-computing
  - high-performance-computing
  - hpc
description: Grid computing and High Performance Computing have been doing large scale batch processing from years, using such Application Program Interfaces (API) and as Message Passing Interface (MPS).
---
Grid computing and High Performance Computing have been doing large scale batch processing from years, using such Application Program Interfaces (API) and as Message Passing Interface (MPS). Yes they are a sort of Distributive computing.

## Grid Computing

Grid is the collection of computer resources from multiple locations to reach a common goal. To be simple Grid Computing combines computers from multiple administrative domains to complete or solve a single task.

{% include figure.html path="assets/img/blog/grid-computing-high-performance-computing-2.jpg" class="img-fluid rounded z-depth-1" zoomable=false %}

## High Performance Computing (HPC)

The approach followed by HPC is to distribute the work across a cluster of machines, which access the shared file system, hosted by the a Storage Are Network (SAN). They were also called as the Super Computers. Supercomputers and computer clusters are used to solve advanced computation problems. Major applications include Data storage and analysis.

{% include figure.html path="assets/img/blog/grid-computing-high-performance-computing-1.jpg" class="img-fluid rounded z-depth-1" zoomable=false %}


## How MapReduce is different from Grid Computing and High Performance Computing (HPC)

They both are efficient and works well with the predominant computer intensive, but it comes a problem when nodes need to access large data volumes (hundreds of gigabytes), since network bandwidth is the bottleneck problem and compute becomes idle. When comes to the MapReduce it works very well even there is a need of accessing large data volumes even in hundreds of gigabytes.

> MapReduce tries to collocate the data with the computer node, so data access is fast because it is local. This feature is known as the _Data Locality_ which is the heart of the MapReduce  and it is the reason  for the Good Performance.

Recognising the network bandwidth is the most precious resource in a data center environment, MapReduce implementations go to great length to conserve it explicitly modelling network topology. Thats the brief story of MapReduce, Grid Computing and High Performance Computing. Happy Learning! Happy Exploring!