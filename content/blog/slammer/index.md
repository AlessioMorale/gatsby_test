---
id: 905
description: Slammer, a rover robot project created as a learning platform for mobile robots
title: Slammer
date: 2021-06-17T01:02:29+02:00
author: [AlessioMorale]
layout: post
guid: https://alessiomorale.com/wordpress/?page_id=905
thumbnail: IMG_20210114_224713-1.jpg
image: IMG_20210114_224713.jpg
important: true
tags:
  - ROBOT
  - ROS
  - slammer
  - uNav
  - uNav2
  - RTabMap
---

This project started a few years ago as my learning platform for robotic in general and ROS.

At that time i was working mostly with drones, but I realised that testing things like mapping and navigation would have been much more harder and almost impossible indoor. For this reason, I started learning the basics of rovers and mobile robotics. Thus Slammer was born.

- [Slammer](#slammer)
- [Software](#software)
- [Teleop](#teleop)
- [Video](#video)

## Slammer

![Slammer](IMG_20210114_224713.jpg)

In its current configuration it uses four gearmotors for its locomotion using the [uNav2 prototype](https://alessiomorale.com/wordpress/2020/02/03/unav2-integrated-board-prototype). Currently it handles feedback (encoders) on two motors only, the other two (identical) motors are simply wired in parallel. Not exactly optimal, this will be handled in future with an additional board, as soon as firmware and hardware are in a more reliable status than MVP.</s>

Recently I update the mechanical part using two planetary gear motors and a system of pulley and belts to link front and rear wheels on each side.

The control board is still my trusted [UNAV2 prototype](/2020/02/03/unav2-integrated-board-prototype/) (links to the [hardware](https://github.com/AlessioMorale/unav2_hardware/tree/master/integrated_board), [firmware](https://github.com/AlessioMorale/unav2_stm32) and [ROS drivers](https://github.com/AlessioMorale/unav2_ros)).

![uNav2](DSC8028.jpg)

On the sensor side it uses :

- RP Lidar A1M8
- ~~an old RealSense R200a~~ Realsense D435
- imu BNO055

At the heart of Slammer there's a Jetson Nano running from an external USB3 SSD.

![Jetson Nano](IMG_20210321_235444.jpg)

## Software

The system is currently based on ROS Melodic.

One of my requisites is to be able to use as much as possible the available GPU to free the CPU for tasks that cannot take advantage of it. For this reason I recompiled from sources both the Realsense drivers, OpenCV and part of RTABMap prerequisites (currently I'm experimenting with PCL).

As rebuilding the software onboard is a very slow process I managed to set up a series of Docker containers and their related CI process so that they are automatically built using Github actions (for example [ROS + RTABMap](https://github.com/AlessioMorale/jetson-ros-rtabmap) repository).

The ROS workspace used to run Slammer is available in my Github, [here](https://github.com/AlessioMorale/rover_launch_files). The docker folder contains several docker compose files used to start the various software components one by one, everything completely dockerised.

## Teleop

Teleop is handled using a bluetooth PS4 joypad as input device using [DS4DRV](https://pypi.org/project/ds4drv/)

![PS4 Joypad](img_20190916_2207583040884031757302502.jpg)

## Video

Below a simple test after installing the four new motors and the unav2 prototype.

`youtube: https://www.youtube.com/watch?v=1pnrorfGNso`

Find additional Slammer related blog entries [here](/tags/slammer)
