---
layout: post
title: Dynamic account field
tags:
  - MSDyn365FO
  - Tricks and cheats
categories:
  - Microsoft Dynamics 365 for Finance and Operations
---

Adding a Dynamic account field to data table and entity

---

Imagine a table with two fields:

| Account type | Account |
|--------------|---------|
|     Vend     |  1001   |
|     Ledger   | 1.0.2.1 |
|     ...      |    ...  |

The first field indicates the kind of account that goes into the second one. Which means that the second one is a *dynamic account* field.

To achieve this behavior in a table it's necessary to create these fields according to the following:
1. The first field (Account type) needs to extend the data type **LedgerJournalACType**;
2. The second field (Account) needs to extend the data type **DimensionDynamicAccount**;

If you want to save data into the this table you can do it like this:
```
LedgerJournalACType     accountType   = LedgerJournalACType::Vend;
DimensionDynamicAccount account       = LedgerDynamicAccountHelper::getDynamicAccountFromAccountNumber('1001', accountType);
```

If you want to use this approach in a form grid control, you can take this path:
1. Add a *segmented entry* field in the grid;
2. Set the table as *data source*;
3. Set the field **Account** as the *reference field*;
  - 3.1 Here is the tricky part, as the field **Account** extends the EDT **DimensionDynamicAccount** it's possible to set a *controller class*;
4. Set the class **DimensionDynamicAccountController** as the *controller class*;
5. Set the field **Account type** as the *account type field*;
  - 5.1 Which now is enabled to selection;

If you want to apply this same behavior to a data entity, follow these steps:
1. Add a data source to the table's *data sources* inside the data entity;
  - 1.1 Set the data source *table* to **DimensionCombinationEntity**;
  - 1.2 Add the field **DisplayValue** of the data source **DimensionCombinationEntity** to data entity's field list;
2. Add the field **Account** to the data entity's field list, if is not already there;
  - 2.1 Set the *dimension legal entity context field* to **DataAreaId**, so the system knows to which company it needs to look at;
  - 2.2 Set the *dynamic dimension enumeration field* to **AccountType**;

Enjoy it!
  
