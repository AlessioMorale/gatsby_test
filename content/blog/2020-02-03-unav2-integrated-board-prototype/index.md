---
id: 753
title: uNav2 Integrated Board prototype
date: 2020-02-03T02:15:54+02:00
author: [AlessioMorale]
draft: false
layout: post
guid: https://alessiomorale.com/wordpress/?p=753
permalink: /2020/02/03/unav2-integrated-board-prototype/
categories:
  - Uncategorized
tags:
  - controller
  - motor
  - ROS
  - rover
  - uNav
  - uNav2
thumbnail: DSC8028.jpg
important: true
---

During the last few weeks I wanted to take a break from coding and I moved to the "drawing board" (KiCad 🙂 ) to design a prototype board for the STM32 based uNav board. [uNav](https://github.com/officinerobotiche/unavPCB) is a motor controller board that integrates with ROS and was was initially based on PIC32. Some time ago I started to rewrite an STM32 version of it, using some generic dev board and it is currently "moving" my rover [Slammer](https://alessiomorale.com/wordpress/tag/slammer/).

This is the first iteration of test hardware for uNav2.  
The board includes a STM32F405 and two DRV8871 drivers. It supports motor current feedback using two INA186 and global battery current/voltage monitor using an INA219. Additionally there is an LM75 temperature monitor ic, a fan output and switching supply for 5V to power the board and the motor encoders.

![](DSC8028.jpg)

This is the link to the [repository](https://github.com/AlessioMorale/unav2_hardware/tree/master/integrated_board), there are a few issues (i'm adding them to the GitHub project to keep track of all changes needed)

And here is the link to [Interactive BOM](https://htmlpreview.github.io/?https://raw.githubusercontent.com/AlessioMorale/unav2_hardware/master/integrated_board/bom/ibom.html) (built with the awesome [InteractiveHtmlBom plugin](https://github.com/openscopeproject/InteractiveHtmlBom))

The initial tests are ok so far. Hopefully i can post some further update very soon.
