---
search: true
categories: 
  - Story
layout: single
title: "Python Environments"
description: "Python Environments"
modified: 2022-05-16
tags: [Blog, Open-source, Notes, English, Python, Software]
comments: true
share: true
---
(*Eng*) Python Environments

Normally when we call a function from command prompt the OS will search all folders in the PATH by starting from first folder in PATH variable. For our python projects when we call python it will be the python we installed and added to PATH. If we have different pythons in the PATH first one will be called.

The virtual environments creates copy of picked pyhton exe in another folder. When we activate them, their python.exe path will be added to first line of PATH. So, after activation of environment when we call python OS will run the our related python.exe.

When we install packages to our enrironment they will be placed in Lib folder of environment and will be imported from there.

As a result, we create python environments for all different project. Every project should have it's own environment. Because dependecies are usually different so they need to have different environments to work clean and independent.
