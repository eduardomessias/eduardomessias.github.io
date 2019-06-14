---
layout: post
title: Knowledge base
tags:
  - MSDyn365FO
  - Knowledge base
categories:
  - Microsoft Dynamics 365 for Finance and Operations
---

Basic knowledge base index for development on AX

---

Find the employee type 
```
hcmWorker.workerRelationType();
```

Automatically associate a worker to a vendor 
```
TrvPartyEmployeeRelationship::findOrCreatePartyEmployeeRelationShip(TrvPartyEmployeeRelationship.AccountType, workerRecId, vendorDimension);
```
