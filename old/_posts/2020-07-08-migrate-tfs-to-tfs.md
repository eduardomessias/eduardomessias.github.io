---
layout: post
title: Migrate TFS to TFS
tags:
  - Trobleshoot
  - Version control  
categories:
  - TFS 
  - Programming
---

How to migrate from one TFS server to another using GIT as a bridge

---

In order to migrate the source code, persisting the change set history, it's possible to use a git repository as a bridge. There was once a Microsoft tool to do so. It's deprecated now but still do the job. Anyway...

1. Clone the original TFVC repository into a local GIT repo.
```
git-tf clone <TFVC URL> <Project/Branch> --deep
```
*Use the parameter --deep to persist the changeset.*

2. Create a new folder and start the command prompt pointing to that path.
3. Clone the local GIT repo (generated in the previous step) into a new local GIT repo.
```
git clone <GIT repo path>
```
*This step will clean up the GIT repo, disregarding the server configured previously.*

4. Change the directory in the command prompt to the new clean local GIT repo cloned in the previous step.
5. Configure the new TFS server
```
git-tf configure <Destine TFS URL> <$/Project/Branch> --deep
```

6. Push it to the new TFS server
```
git-tf checkin
```
