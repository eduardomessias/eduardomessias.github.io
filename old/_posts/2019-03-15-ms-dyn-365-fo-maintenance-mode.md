---
layout: post
title: Turn on/off maintenance mode
tags:
  - MSDyn365FO
  - Tricks and cheats
categories:
  - Microsoft Dynamics 365 for Finance and Operations
---

Turn on/off the maintenance mode in order to complete specific tasks in Dynamics 365 for Finance and Operations

---

In order to turn on the maintenance mode in Dynamics 365 for Finance and Operations, use the following command line: 

`J:\AosService\PackagesLocalDirectory\Bin\Microsoft.Dynamics.AX.Deployment.Setup.exe --metadatadir J:\AosService\PackagesLocalDirectory --bindir J:\AosService\PackagesLocalDirectory\Bin --sqlserver . --sqldatabase axdb --sqluser axdbadmin --sqlpwd ********* --setupmode maintenancemode --isinmaintenancemode true`

To do the opposite, just change the last parameter **isinmaintenancemode** to **false**. In this case the command will be like this:

`J:\AosService\PackagesLocalDirectory\Bin\Microsoft.Dynamics.AX.Deployment.Setup.exe --metadatadir J:\AosService\PackagesLocalDirectory --bindir J:\AosService\PackagesLocalDirectory\Bin --sqlserver . --sqldatabase axdb --sqluser axdbadmin --sqlpwd ********* --setupmode maintenancemode --isinmaintenancemode true`

*Take note: The default password for axdbadmin (in development environment [a.k.a sandbox]) is AOSWebSite@123*

Source: https://docs.microsoft.com/en-us/dynamics365/unified-operations/dev-itpro/sysadmin/maintenance-mode
