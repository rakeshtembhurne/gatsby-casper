---
title: Creating Plugins for Croogo
image: img/croogo_plugin_tutorial_wdzmy0.png
author: Rakesh Tembhurne
slug: creating-plugins-for-croogo
date: 2014-05-22T20:50:53.000Z
date_updated: 2017-01-13T06:12:11.000Z
tags:
    - CakePHP
    - Croogo
    - Plugin
draft: false
---

To bake a plugin for Croogo, go to Croogo’s app folder in terminal and type following command. Let’s create a plugin named Library.

<pre>$ cd ~/public_html/croogo
$ Console/cake bake plugin Library
</pre>

You will be asked to choose a location of the plugin. Select outermost `Plugin/` folder. Above command does following things:

1. Creates proper directory structure for new plugin
2. Creates plugin’s AppController.php file (`LibraryAppController.php`)
3. Creates plugin’s AppModel.php file (`LibraryAppModel.php`)
4. Adds entry in `Config/bootstrap.php` file to load newly created plugin

It is recommended that you delete entry of newly baked plugin from `Config/bootstrap.php` file as you will be able to enable-disable plugin from UI. The line will look something like:

<pre>CakePlugin::load('Library', array('bootstrap' => false, 'routes' => false));
</pre>

## Configure Plugin to enable – disable

To make plugin available to be enabled – disabled from admin user interface, you will need to edit plugin.json file. This file will not be present in newly created plugin so you can copy this file from Example plugin already present in Croogo.

<pre>
$ cd ~/public_html/croogo
$ cp Vendor/croogo/croogo/Example/Config/plugin.json Plugin/Library/Config/
</pre>

And edit this config file with information of your plugin. After creating this file, you should be able to enable-disable plugin.  
<script src="https://gist.github.com/rakeshtembhurne/8b7fd73be2224b01357f.js\"></script>

## Add Menu for Your Plugin

Croogo has a `CroogoNav()` class which is used to add and display menus. It has static functions `CroogoNav::add()` and `CroogoNav::items()` that you can call from anywhere in the app. For our plugin, we will add entries for new menu in plugin’s bootstrap.php file. If this file is not present in your Plugin’s Config folder, you can create a new `Plugin/Library/Config/bootstrap.php` file and write entries for menu there.<script src="https://gist.github.com/rakeshtembhurne/2d345e4df64094622b4e.js\"></script>

## Bake Controllers, Models and Views

Before we begin to bake controller, model and view for our plugin, let’s first understand the structure of our plugin. We are trying to create a simple plugin where we should be able to record entries of Books and their Authors.

We will create two tables, one for each Books and Authors and then will create their controllers, models and views. If you understand CakePHP associations – Book belongsTo Author and Author hasMany Books.

<pre>CREATE TABLE IF NOT EXISTS `books` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `title` varchar(100) NOT NULL,
    `description` TEXT DEFAULT NULL
    `author_id` int(11) NOT NULL,
    `created` datetime DEFAULT NULL,
    `created_by` int(20) DEFAULT NULL,
    `updated` datetime DEFAULT NULL,
    `updated_by` int(20) DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8;

CREATE TABLE IF NOT EXISTS `authors` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `name` varchar(100) NOT NULL,
    `created` datetime DEFAULT NULL,
    `created_by` int(20) DEFAULT NULL,
    `updated` datetime DEFAULT NULL,
    `updated_by` int(20) DEFAULT NULL,
    PRIMARY KEY (`id`)
    ) ENGINE=InnoDB  DEFAULT CHARSET=utf8;</pre>

Okay, let’s start baking them by using CakePHP bake utility.

<pre>
$ Console/cake bake model -p Library Author 

$ Console/cake bake controller -p Library Authors --admin --public 

$ Console/cake bake view -p Library Authors 

$ Console/cake bake model -p Library Book 

$ Console/cake bake controller -p Library Books --admin --public 

$ Console/cake bake view -p Library Books</pre>

## Testing, testing

Congrats, you have now created your Croogo plugin. You can check the plugin from by logging in to admin. You can start further changes by directly editing files in your Croogo Plugin.

## References

Much of the part is taken from the following video created by [Rachman Chavik](http://chavik.com/ \"Rachman Chavik \").

<iframe allowfullscreen="allowfullscreen\" frameborder="0" height="315" src="//www.youtube.com/embed/gkpzKIuDuCM?rel=0\" width="560"></iframe>

If you find this useful, please share. If you have any suggestions, questions please leave a comment.
