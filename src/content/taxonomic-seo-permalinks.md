---
title: Taxonomic SEO Permalinks
image: img/imageedit_1_2716264277.jpg
author: Rakesh Tembhurne
slug: taxonomic-seo-permalinks
date: 2011-05-23T12:25:47.000Z
date_updated: 2012-02-25T13:32:30.000Z
tags:
    - SEO
    - WordPress
    - WordPress Plugin
draft: false
---

Custom WordPress Taxonomy feature was introduced hoping that it will help users create some kind of groups just like regular WordPress *category* or *tags*. Custom taxonomies gives control over personalizing the blog to great extend. Now users can create meaningful taxonomies that suits the subject.

When I tried to create projects by using the taxonomies, I just had a problem, and that was with using taxonomies in URLs. I found that WordPress does support the feature that helps in custom taxonomies in queries, but as I tried and tested, I couldn’t use them in Permalink settings just like we use `/%category%/%postname%/`. So I created this plugin.

You can download [Taxonomic SEO Permalinks ](http://wordpress.org/extend/plugins/taxonomic-seo-permalinks/ \"Download Taxonomic SEO Permalink plugin\")plugin from WordPress.org website.

### TSP Version 0.3.1

Now supports sub-taxonomy in URLs. People requested me to support sub-taxonomy just like WordPress supports sub-category in URLs. For example if you use `%category%` in permalink structure and a post has sub-category, `%category%` will be replaced with ‘parent-category-slug/child-category-slug’.

In order to do similar things with custom taxonomies I tried many things but the solutions was getting complicated just because of forward slash (/) character as separator. So in order to keep things as simple as possible I used plus (+) character to separate child and parent custom taxonomies. I know this is not what most of us want but still it solves sub-taxonomy problem. I will fix this as soon as possible.

Also I used a limit of three parts per replacement. So a custom taxonomy structure tag can be replaced with ‘grandparent-slug+parent-slug+child-slug’ at the max and won’t show ‘great-grandparent-slug’ even if present.

### TSP Version 0.2.0

Few major changes done on programming side. The plugin is made more general and should be working without any manual changes. No need to edit plugin file, almost everything is done automatically.

### TSP Version 0.1.3 and Earlier

This version was written to work on both standalone blog as well as network blog. Also taxonomies needed to be edited manually inside plugin.
