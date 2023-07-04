---
layout: post
title: Task recorder for creating documents
tags:
  - MSDyn365FO
  - Tips and tricks
categories:
  - Microsoft Dynamics 365 for Finance and Operations
---

How to use the task recorder in Dynamics 365 for Finance and Operations

---

In order to create documents using Task recorder, with automatically taken screenshots, we need to add a Google Chrome extension recommended by MS which we can find in the Github repo [FMLab](https://github.com/Microsoft/FMLab).

- 1 Download or clone the repo for your environment.
- 2 In Google Chrome, click **Customize and control Google Chrome > More tools > Extensions > Load unpacked**.
- 3 Locate and select the folder **TaskRecorderScreenshots**, inside the repository that you just downloaded / cloned.
- 4 Restart Google Chrome
  - 4.1 Cancel or close the alert related to *Developer mode* that you'll probably receive. **Don't disable developer mode**.
- 5 From now on, when you create a new recording, in Task recorder using Google Chrome, you should see a new control in the form.
  - 5.1 Click **Create recording**
    - 5.1.1 Inform the **Recording name**
    - 5.1.2 Inform the **Recording description**
    - 5.1.3 *Change the **Capture screenshots** toggle position to Yes if you want to take screenshots while you record the process*
