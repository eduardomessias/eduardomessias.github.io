---
layout: post
title: Table browser (search engine)
tags:
  - MSDyn365FO
  - Tricks and cheats
categories:
  - Microsoft Dynamics 365 for Finance and Operations
---

A Google chrome's shortcut to access table browser in Dynamics 365 for Finance and Operations

![Table browser search engine for Google Chrome]({% site.img-source %}MSDyn365FO/table-browser-search-engine.png)

---

In order to add a search engine in Google Chrome for D365FO table browser, you should do the following: 
- 1 In Google Chrome, click Customize and control Google Chrome > Settings > Search engine > Manage search engines > Other search engines > Add. 
- 2 Fill the following fields accordingly: 
  - 2.1 Search engine 
    - 2.1.1 Inform the name of your new search engine (e.g.: MSDyn365FO Table browser). 
  - 2.2 Keyword 
    - 2.2.1 Inform the keyword you'll need to type in order to access the table browser directly from the address bar (e.g.: D365FO). 
  - 2.3 URL with %s in place of query 
    - 2.3.1 Inform the following URL: 
      - 2.3.1.1 https://usnconeboxax1aos.cloud.onebox.dynamics.com/?cmp=usmf&mi=SysTableBrowser&TableName=%S 
        - 2.3.1.1.1 The URL above stands for the development environment of the version 8.1 using Contoso data. 
- 3 To test your search engine, open a new tab on Google Chrome 
  - 3.1 Type the keyword you informed in the step 2.b.i (e.g.: D365FO) and then type TAB. 
    - 3.1.1 Type the name of the table you want to browse.
    
---

Originally posted on [this link](https://stoneridgesoftware.com/the-easiest-way-to-use-table-browser-delete-or-add-table-data-in-dynamics-365-for-finance-and-operations/).
