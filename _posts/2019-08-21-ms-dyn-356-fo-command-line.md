---
layout: post
title: Build model trhough command line
tags:
  - MSDyn365FO
  - Tricks and cheats
categories:
  - Microsoft Dynamics 365 for Finance and Operations
---

Useful commands to compile the model, best practices, labels and reports.

---

The below commands can be quite useful sometimes due to their performance be better when running them directly in the command prompt.

### compile model
```
C:\AosService\PackagesLocalDirectory\Bin\Xppc.exe -verbose -apixref -metadata=C:\AosService\PackagesLocalDirectory -modelmodule=<model_name> -referenceFolder=C:\AosService\PackagesLocalDirectory -xreffilename="C:\AosService\PackagesLocalDirectory\<model_name>\<model_name>.xref" -refPath=C:\AosService\PackagesLocalDirectory\<model_name>\bin -output=C:\AosService\PackagesLocalDirectory\<model_name>\bin -log=C:\<log_path>\Dynamics.AX.<model_name>.xppc.log -xmllog=C:\<log_path>\Dynamics.AX.<model_name>.xppc.xml
```

### compile model best practices
```
C:\AosService\PackagesLocalDirectory\Bin\xppbp.exe -metadata=C:\AosService\PackagesLocalDirectory -packagesRoot=C:\AosService\PackagesLocalDirectory -module=<model_name> -model=<model_name> -all -log=C:\<log_path>\Dynamics.AX.<model_name>.xppbp.log -xmllog=C:\<log_path>\Dynamics.AX.<model_name>.xppbp.xml
```

### compile labels
```
C:\AosService\PackagesLocalDirectory\Bin\LabelC.exe -metadata=C:\AosService\PackagesLocalDirectory -modelmodule=<model_name> -output=C:\AosService\PackagesLocalDirectory\<model_name>\Resources\ -outlog=C:\<log_path>\Dynamics.AX.<model_name>.labelc.log -errlog=C:\<log_path>\Dynamics.AX.<model_name>.labelc.err
```

### compile reports
```
C:\AosService\PackagesLocalDirectory\Bin\ReportsC.exe -metadata=C:\AosService\PackagesLocalDirectory -modelmodule=<model_name> -LabelsPath=C:\AosService\PackagesLocalDirectory -output=C:\AosService\PackagesLocalDirectory\<model_name>\Reports\ -log=C:\<log_path>\Dynamics.AX.<model_name>.reportsc.log -xmllog=C:\<log_path>\Dynamics.AX.<model_name>.reportsc.xml
```

### sync db
```
C:\AosService\PackagesLocalDirectory\Bin\SyncEngine.exe -syncmode=fullall -metadatabinaries=C:\AosService\PackagesLocalDirectory -connect="Data Source=ERP-BL-D-APP-1;Initial Catalog=AxDB;Integrated Security=True;Enlist=True;Application Name=SyncEngine" -fallbacktonative=False -raiseDataEntityViewSyncNotification
```
