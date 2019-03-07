---
title: Notes on AngularJS
image: img/notes_on_angularjs_tuhbnl.png
author: Rakesh Tembhurne
slug: notes-on-angularjs
date: 2014-02-06T11:51:10.000Z
date_updated: 2017-01-13T06:16:21.000Z
tags:
    - AngularJS
draft: false
---

### CakePHP Date-time to AngularJS date time

CakePHP created and modified dates are in format “Y-m-d H:i:s” where AngularJS expects date to be in unix format to be able to format.  

<script src=\"https://gist.github.com/rakeshtembhurne/df905add9fd184d477a7.js\"></script>

### Using UnderscoreJS with AngularJS

I have used underscoreJS earlier and I must say that it is an awesome plugin that I mostly use wherever I need to deal with lot of JavaScript. This [question on Stack Overflow](http://stackoverflow.com/a/14968873/904057 \"Stackoverflow question on how to use underscoreJS with AngularJS\") shows you how you can install it with your AngularJS project.

### Sharing code between controllers

Initially, I struggled finding what could be a proper way to share common functionality in AngularJS. For example, I was using multiple controllers in my app and I wanted a common place to show error, success, info messages at one place.

This could be achieved in AngularJS by sharing a service.

<script async src=\"//jsfiddle.net/uberspeck/j46Yh/embed/js/\"></script>

### Loading Bar

I wanted to use a loading progress bar, something similar used on YouTube. Finally I found a plugin, [Angular Loading Bar](https://github.com/chieffancypants/angular-loading-bar \"AngularJS Loading Bar\"), that calculates correct progress time based on simultaneous HTTP requests and works fine with AngularJS project.
