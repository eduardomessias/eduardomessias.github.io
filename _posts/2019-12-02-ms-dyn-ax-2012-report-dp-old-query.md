---
layout: post
title: Report data provider running old version of the AOT query
tags:
  - MSDynAX2012  
categories:
  - Microsoft Dynamics AX 2012 R3  
  - Troubleshoot
---

Troubleshoot for when data provider class is working with an old version of an AOT query

---

The class declaration of the data provider class in AX usually contains one custom attribute like this:

.. SRSQueryAttribute(queryStr(<aot_query>))

Sometimes when this query is modified or even exchanged for another, the data provider class keep reading the old version of the modified query or even the old query itself, istead of the new one.

This can be fixed using the following troubleshoot:
- 1 Insert a breakpoint into the method *find* of the table *SRSReportQuery* and run the report;
- 2 Copy the value of the variable *_recId* in this method and stop the execution;
- 3 Open the table *SRSReportQuery* and delete the record corresponding to the copied *RecId*;

The next time the report is ran AX will recriate the record using the new version of the query.


