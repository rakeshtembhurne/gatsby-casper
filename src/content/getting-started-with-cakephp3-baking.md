---
title: Getting Started with CakePHP 3 Baking
image: img/Screen-Shot-2017-02-05-at-11.29.09-AM-1.png
author: Rakesh Tembhurne
slug: getting-started-with-cakephp3-baking
date: 2017-02-05T06:32:50.000Z
date_updated: 2017-02-05T06:32:50.000Z
tags:
    - CakePHP
    - Web Applications
draft: false
---

CakePHP is one of the popular PHP frameworks known for Rapid application building. After using CakePHP 1 and 2 for years, I have been using CakePHP 3 for a while. 

With this tutorial, I am trying to demonstrate how easy it is to get started with CakePHP.

#### Goals of These Experiments

1. Understand CakePHP Model Associations
- Create a CakePHP 3 app using CakePHP bake utility.

First thing to do is to get local setup running. You can follow [CakePHP 3 installation instructions](http://book.cakephp.org/3.0/en/installation.html) given at CakePHP documentation site.

This is how it will appear when it is installed and running on your localhost.

![CakePHP after installation screen](/content/images/2017/02/Screen-Shot-2017-02-05-at-11.29.09-AM.png)

Great! Now this is the time to bake the cake.

### Tuition Management System

Let’s start with baking a simple Tuition Management System for coaching classes. First of all, let’s decide goals of our app.

#### Requirements

1. There should be a provision to add new students, have basic information for now.
- The Coaching class have multiple batches.
- There will be multiple teachers.
- There will be multiple subjects to be taught.
- Students will belong to one standard only.
- Students can join multiple batches.
- Each batch will have specific teacher to teach,  and will be of specific subject of specific standard.

At beginning it may sound confusing to you. For this reason, we will categorise them into Models and decide their associations.

Deciding associations is a crucial part. CakePHP builds a lot of complicated things for you without even touching the code. For this CakePHP requires your associations decided, hence the database structure should be made based on associations.

**hasOne** association can be observed where one model has exactly one other model. For example, if we decide to have just login details in *User* model and all other personal details in *Profile* model, each user will have exactly one Profile. In this case the association would be: *User hasOne Profile*. 

Whenever an association is observed, there should be some reverse associations. In above example it would be *Profile **belongsTo** User*.

**hasMany** association is observed when there are more entries of other model for a particular model. For example, for a *Standard* there will be multiple students learning. Hence the association, **Standard hasMany Student**.

In similar fashion to hasOne, hasMany will have reverse association belongsTo. So *Student belongsTo Standard*.

Next important association is HABTM which is the short form of Has And Belongs To Many. For example a student can go to multiple batches (morning, evening) and A batch can have many students. So in both direction, the associations are *Batch HABTM Student* and *Student HABTM Batch*.

#### Models

- Student
- Standards
- Batches
- Subjects
- Teachers

#### Associations

Student belongsTo Standard  
Student HABTM Batch

Standard hasMany Student  
Standard hasMany Batch  
Standard hasMany Subject

Batch HABTM Student  
Batch belongsTo Subject  
Batch belongsTo Standard  
Batch belongsTo Teacher

Subject belongsTo Standard  
Subject belongsTo Batch

Teacher hasMany Batch

#### SQL for CakePHP app

Now based on above associations, we will need to create database. First of all there are few important fields you *should* consider creating.

- `id` is a unique numeric id, will be auto increment. There can be other types of ids, but they are out of scope of this tutorial.
- `created` and `modified` are two DATETIME fields which CakePHP uses to store created and modified date-times. 
- `some_model_id` type of fields are required to show we have associations defined. These fields indicates belongsTo association.

I strongly suggest you to read [CakePHP Conventions](https://book.cakephp.org/3.0/en/intro/conventions.html) to know more.

```
CREATE TABLE students ( 
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    name VARCHAR(120) NOT NULL, 
    standard_id INT UNSIGNED NOT NULL, 
    created DATETIME DEFAULT NULL, 
    modified DATETIME DEFAULT NULL 
); 

CREATE TABLE standards ( 
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(120) NOT NULL, 
    created DATETIME DEFAULT NULL, 
    modified DATETIME DEFAULT NULL 
); 

CREATE TABLE batches ( 
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(120) NOT NULL, 
    subject_id INT UNSIGNED NOT NULL, 
    standard_id INT UNSIGNED NOT NULL, 
    teacher_id INT UNSIGNED NOT NULL, 
    created DATETIME DEFAULT NULL, 
    modified DATETIME DEFAULT NULL 
); 

CREATE TABLE subjects ( 
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(120) NOT NULL, 
    standard_id INT UNSIGNED NOT NULL, 
    created DATETIME DEFAULT NULL, 
    modified DATETIME DEFAULT NULL 
); 

CREATE TABLE teachers ( 
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(120) NOT NULL, 
    created DATETIME DEFAULT NULL, 
    modified DATETIME DEFAULT NULL 
); 

CREATE TABLE batches_students ( 
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY, 
    standard_id INT UNSIGNED NOT NULL, 
    batch_id INT UNSIGNED NOT NULL, 
    created DATETIME DEFAULT NULL, 
    modified DATETIME DEFAULT NULL 
);
```

#### Bake Command
```
bin/cake bake all batches 

bin/cake bake all standards 

bin/cake bake all students 

bin/cake bake all subjects 

bin/cake bake all teachers
```

After baking, you can now explore you app [http://localhost:8765/teachers](http://localhost:8765/teachers). That's it for now. We will explore more things in upcoming CakePHP articles.
