---
layout: post
title: Record creation pipeline
tags:
  - MSDyn365FO
  - Tricks and cheats
categories:
  - Microsoft Dynamics 365 for Finance and Operations
---

The event method execution sequence when a record is created in the system

---

A user enters a new record by using a grid control on a form. They begin by pressing the shortcut keys CTRL+N. This creates a new, empty line in the grid and gives focus to the new line. The following list shows the sequence of event method executions that occurs when the user continues with the steps needed to create a record in the database.

  - 1 **leaveRecord** on the data source.
  The user enters data into the first empty cell, and then presses TAB.
  - 2 **validateField** on the table.
  - 3 **modifiedField** on the table.
  The user now enters data into the second empty cell. They click a grid line that is already populated to take focus from the new line.
  - 4 **validateField** on the table.
  - 5 **modifiedField** on the table.
  - 6 **validateWrite** on the table.
  - 7 **insert** on the table.
  - 8 **aosValidateInsert** on the table.
  - 9 **leaveRecord** on the data source.
  - 10 **leave** on the data source.
  - 11 **leaveRecord** on the data source.

*[Copied from the Microsoft Dynamics AX 2012 documentation](https://docs.microsoft.com/en-us/dynamicsax-2012/developer/event-method-sequences-when-a-record-is-created)*
