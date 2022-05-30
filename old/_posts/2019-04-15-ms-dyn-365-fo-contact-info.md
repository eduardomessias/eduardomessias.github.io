---
layout: post
title: Creating contact info
tags:
  - MSDyn365FO
  - Tutorial
categories:
  - Microsoft Dynamics 365 for Finance and Operations
---

How to create a contact info through code in Dynamics 365 for Finance and Operations

---

``` js
/// <summary>
///     Create or update the contact info into the right logistics table.
/// </summary>
/// <param name = "_common">Any table buffer extending dir party table</param>
/// <param name = "_locationName">Location name is an alias for the contact info</param>
/// <param name = "_locator">The contact info itself (i.e.: abc@123.com)</param>
/// <param name = "_type">The type of the contact info</param>
/// <param name = "_isPrimary">Indicates if this is the primary contact info for this customer</param>
public static void createOrUpdateDirPartyContactInfo(Common _common, 
                                                     Description _locationName, 
                                                     LogisticsElectronicAddressLocator _locator,
                                                     LogisticsElectronicAddressMethodType _type, 
                                                     LogisticsIsPrimary _isPrimary)
{
    DirPartyContactInfoView dirPartyContactInfo;
    DirParty dirParty = DirParty::constructFromCommon(_common);

    dirPartyContactInfo.LocationName    = _locationName;
    dirPartyContactInfo.Locator         = _locator;
    dirPartyContactInfo.Type            = _type;
    dirPartyContactInfo.IsPrimary       = _isPrimary;
    
    // Roles container represents the purpose of this contact info
    container roles = [LogisticsLocationRole::findByType(LogisticsLocationRoleType::Business).RecId,
         LogisticsLocationRole::findByType(LogisticsLocationRoleType::Delivery).RecId];

    dirParty.createOrUpdateContactInfo(dirPartyContactInfo, roles);

    // You can also set roles for this contact info later using this peace of code
    //container roles = [LogisticsLocationRole::findByType(LogisticsLocationRoleType::Business).RecId,
    //     LogisticsLocationRole::findByType(LogisticsLocationRoleType::Delivery).RecId];

    //LogisticsElectronicAddressRole::createLocationRoles(dirPartyContactInfo.getElectronicAddress().RecId, roles, false);

    return dirPartyContactInfo;
}
```
