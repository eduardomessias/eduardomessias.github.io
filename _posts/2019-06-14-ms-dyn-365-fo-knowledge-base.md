---
layout: post
title: Knowledge base
tags:
  - MSDyn365FO
  - Knowledge base
categories:
  - Microsoft Dynamics 365 for Finance and Operations
  - Knowledge base
---

Basic knowledge base index for development on AX

---

**Find the employee type**
```
hcmWorker.workerRelationType();
```

**Automatically associate a worker to a vendor**
```
TrvPartyEmployeeRelationship::findOrCreatePartyEmployeeRelationShip(TrvPartyEmployeeRelationship.AccountType, workerRecId, vendorDimension);
```

**Get dynamic account from account number**
```
LedgerDimensionAccount ledgerDimensionAccount = LedgerDynamicAccountHelper::getDynamicAccountFromAccountNumber(accountNum, LedgerAccountACType::Vend);
```

**Get ledger dimension account from display value**
```
LedgerAccountDimensionResolver::newResolver(displayValue).resolve();
```

**Compile model**
```
C:\AosService\PackagesLocalDirectory\Bin\Xppc.exe -verbose -apixref -metadata=C:\AosService\PackagesLocalDirectory -modelmodule=<model_name> -referenceFolder=C:\AosService\PackagesLocalDirectory -xreffilename="C:\AosService\PackagesLocalDirectory\<model_name>\<model_name>.xref" -refPath=C:\AosService\PackagesLocalDirectory\<model_name>\bin -output=C:\AosService\PackagesLocalDirectory\<model_name>\bin -log=C:\<log_path>\Dynamics.AX.<model_name>.xppc.log -xmllog=C:\<log_path>\Dynamics.AX.<model_name>.xppc.xml
```

**Compile model best practices**
```
C:\AosService\PackagesLocalDirectory\Bin\xppbp.exe -metadata=C:\AosService\PackagesLocalDirectory -packagesRoot=C:\AosService\PackagesLocalDirectory -module=<model_name> -model=<model_name> -all -log=C:\<log_path>\Dynamics.AX.<model_name>.xppbp.log -xmllog=C:\<log_path>\Dynamics.AX.<model_name>.xppbp.xml
```

**Compile labels**
```
C:\AosService\PackagesLocalDirectory\Bin\LabelC.exe -metadata=C:\AosService\PackagesLocalDirectory -modelmodule=<model_name> -output=C:\AosService\PackagesLocalDirectory\<model_name>\Resources\ -outlog=C:\<log_path>\Dynamics.AX.<model_name>.labelc.log -errlog=C:\<log_path>\Dynamics.AX.<model_name>.labelc.err
```

**Compile reports**
```
C:\AosService\PackagesLocalDirectory\Bin\ReportsC.exe -metadata=C:\AosService\PackagesLocalDirectory -modelmodule=<model_name> -LabelsPath=C:\AosService\PackagesLocalDirectory -output=C:\AosService\PackagesLocalDirectory\<model_name>\Reports\ -log=C:\<log_path>\Dynamics.AX.<model_name>.reportsc.log -xmllog=C:\<log_path>\Dynamics.AX.<model_name>.reportsc.xml
```

**Sync db**
```
C:\AosService\PackagesLocalDirectory\Bin\SyncEngine.exe -syncmode=fullall -metadatabinaries=C:\AosService\PackagesLocalDirectory -connect="Data Source=ERP-BL-D-APP-1;Initial Catalog=AxDB;Integrated Security=True;Enlist=True;Application Name=SyncEngine" -fallbacktonative=False -raiseDataEntityViewSyncNotification
```

**Get the item description in the current language**
```
EcorResProductTranslation::getNameOrDefaultName(InventTable::find(_custInvoiceTrans.ItemId).Product;
```
