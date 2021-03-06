---
layout: post
title: Home resources planning [2/2]
tags:
  - HRP
  - Development logbook
categories:
  - Home resources planning
  - Portfolio
---

Development environment

---

**[THERE SHOULD BE A VIDEO IN HERE]**

In order to start the development of any kind of software, it's important to set up your dev environment. And that's what i've done here. I started a trully hard job that is to study not only the best tools the market has to offer, but also in which of them my idea suits better. And the idea is not yet so clear, as you could've seen in my first video. It will be an HRP. Ok. Open-source. Ok. Other than that? I don't know.

So, firstly, i've done some research and realized that there's just a few easy-to-get sites in the internet where people are saying something about this kind of software. In fact, there is only one place where i found some material that shares the same concept that i'm talking about. It's quite old, but the idea is there. [Have a look if you want](https://www.infosysblogs.com/sap/2010/03/hrp_home_resource_planning_an.html). From this article, i could draw some of the basic functionalities that the HRP will have, and from that, i could start imagine its user interface, as a web platform and modular mobile apps.

But then, i changed my mind to a component-based web app. Which is modern and in the future will help the technology to continue to grow up. One framework immediately came to me, and i believe for you too, **NodeJs**, off course. So, i started to look for some robust web app engine to sustain such kind of application. **ExpressJs** was the chosen one. For the database, **MongoDb**, and for its engine, **Mongoose**. Regarding the user interface experience, i decided not to go rocket science, but something more consolidated as well. I'll be using the HTML5 template [**Architecture**](https://dashboardpack.com/theme-details/architectui-html-dashboard-free/) (the free version of it) or [**Tabler**](https://tabler.io/), [**Bootstrap**](https://getbootstrap.com/), untill we have expertise to implement our own interface framework. The interface engine will be [**pug (or jade - old name of it)**](https://pugjs.org/api/getting-started.html).

The thing is: What I really wanna talk about here is [**Glitch**](https://glitch.com). It is amazing! And that's the environment that I decided to go for this project. So let me introduce you to it, if you still doesn't know, of course. **Glitch** is a website that is also the **IDE** and also the *DevOps* framework, where it's possible to deploy and maintain the app alive and kicking, while the decisions are being taken. It's also possible to share the project for other developers contribute online, live, as well. It's possible to *Remix* the project and then everything will be open so the others can change and make whatever they want, to be honest, which can be quite exciting, if you keep an open mind about it. It's connected to github, so don't worry, everything can be save and safe in some repository. It's perfect for me. Since I started searching for this kind of environment I've been also testing all of them, this goes for one year now, and - honestly - they are the best. No commercial, no money envolved, it's just important for me to share.

But before we get there, let's prepare the development environment. I'm using a fresh installation of Fedora 32 here. I created a virtual machine to work on this project because I decided that this is the fair starting point, and from here on out let's try to implement all this!
