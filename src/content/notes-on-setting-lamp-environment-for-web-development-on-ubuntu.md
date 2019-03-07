---
title: Notes On Setting LAMP Environment For Web Development On Ubuntu
image: img/imageedit_1_2716264277.jpg
author: Rakesh Tembhurne
slug: notes-on-setting-lamp-environment-for-web-development-on-ubuntu
date: 2013-10-26T16:05:53.000Z
date_updated: 2016-05-24T06:14:29.000Z
draft: false
tags:
    - LAMP
    - Web Development
---

Most of the time I come across situations where I need to install or configure LAMP environment for web application development. I have done this many time but there are always some things that I need to struggle with.

There are plenty tutorials and articles already written on these, but I needed some kind of notes that will suite my development style, and that **I can update as I learn new things**. So here I am documenting common things related to web application development environment setup. *Expect them to be updated over time.*****

<span style=\"font-size: 24px; font-weight: bold; line-height: 1.62em;\">Installing Ubuntu OS</span>

Ubuntu is my favorite operating system and it does my all jobs. Long ago I had written an article on [Why should you use Ubuntu](http://rakesh.tembhurne.com/why-must-you-learn-and-use-ubuntu-linux/ \"Article that explains why should you prefer Ubuntu Operating System\"). I would like to share some of things that I learnt over time.

### Size of Your Swap Partition

While installing Ubuntu, keep a simple thumb rule for swap partition size. Ubuntu community documentations suggests that [size of swap partition should be of same size as your RAM](https://help.ubuntu.com/community/DiskSpace \"Ubuntu community's documents on Hard drive's space management for Ubuntu installations\").

### Create /home directory in separate partition

When installing Ubuntu, create a separate large partition as your /home directory. This partition will contain home folders of all users. The benefit of creating separate partition for /home directory is that you data will be separate from your Ubuntu installation.

For unfortunate reasons, if your Operating System gets corrupt, your data and settings will still be available to you even after formatting and installing your OS partition. Only remember to select the same partition as your /home when re-installing Ubuntu.

### Size of OS installation partition

There is no fixed rule and requirements, but I found that 20 GB is good enough and my preferred size is 30 GB. I have never run out of space with this.

## Installing LAMP

### Quickest way to install LAMP on Ubuntu

Over last few years, I have tried different ways for installing LAMP applications. Many times, I had installed each application separately. During my trial and error learning period, I had to struggle doing many configurations and settings. But I can now set up my environment in very less time.

#### Essential Software

sudo apt-get install tasksel sudo tasksel install lamp-server sudo apt-get install phpmyadmin

If you want to install them manually one by one, you can follow instructions on Ubuntu community [documentation for Installing Apache, MySQL, PHP](https://help.ubuntu.com/community/ApacheMySQLPHP \"Documentation on installing Apache, MySQL, PHP separately on Ubuntu\").

#### Optional Software

Sublime text is my favorite text editor. Ubuntu comes with Firefox pre-installed as default browser. However I prefer Google Chrome. Also when you are working in team, we need to access each other’s machines. SSH is the simplest way we can access other machines and OpenSSH is a application you will need.

##### Sublime Text 3 
[http://www.webupd8.org/2013/07/sublime-text-3-ubuntu-ppa-now-available.html]
(http://www.webupd8.org/2013/07/sublime-text-3-ubuntu-ppa-now-available.html) 

<pre>sudo add-apt-repository ppa:webupd8team/sublime-text-3 
sudo apt-get update sudo apt-get install sublime-text-installer </pre>

##### Google Chrome
[http://www.ubuntuupdates.org/ppa/google_chrome](http://www.ubuntuupdates.org/ppa/google_chrome) <pre>wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo apt-key add - sudo sh -c 'echo \"deb http://dl.google.com/linux/chrome/deb/ stable main\" >> /etc/apt/sources.list.d/google.list'

sudo apt-get update 

sudo apt-get install google-chrome-stable </pre>

##### Open SSH 
[https://help.ubuntu.com/13.04/serverguide/openssh-server.html](https://help.ubuntu.com/13.04/serverguide/openssh-server.html) 

<pre>sudo apt-get install openssh-server</pre>

### Create Separate Development Environment for each user

As time goes on, number of projects increases in public_html folder. Also there might be multiple users using the same machine for development. It’s good idea to keep things separate.

<pre>
# Create public_html folder in your home directory
cd mkdir public_html 

# Create symlink in /var/www folder 
cd /var/www 
sudo ln -s /home/rakesh/public_html rakesh</pre>

Now each project folder (project-folder) kept in public_html folder will be available on server as `http://localhost/rakesh/project-folder`

### Quick Notes on User Groups and Permissions

In my opinion this section deserves some attention. Most of the live servers where actual projects are uploaded have Apache server installed. Apache server have it’s own user, ‘www-data’ executing all PHP scripts. It is assumed that ‘www-data’ user owns your PHP files or have permissions to execute, read or write.

On live server, you may not need to do any changes. At the most changing ownership of project folder to ‘www-data’ would be sufficient. But if you are experiencing problems for only some part of your application, such as uploading files, you will need to check permissions correctly.

On our local server, we need to take care that permissions are right. Solution is very simple. First you need to add yourself to group ‘www-data’ and then change permission of your public_html or project folder.

<pre># Add your self to group 
www-data sudo adduser your-username www-data 

# Change permission of your project folder or all projects 
sudo chown -R your-username:www-data /path/to/project/folder
</pre>

Above solution was partially inspired from [this discussion on Ask Ubuntu site](http://askubuntu.com/a/30635 \"Discussion about folder permission for web development on Ubuntu\") to suit above development environment. Here the main difference is we are giving ownership to ‘your-username’ instead of user ‘www-data’. It allows you to create new files without any restrictions and group ‘www-data’ allows you to use those files for other server tasks.

### Configuring Apache

#### Enable Rewrite Module

Almost all PHP applications I have used, requires Rewrite module to be enabled. This is just a one command task.

# Enable Apache Rewrite Module sudo a2enmod rewrite

You can remember above syntax like “<big>A</big>pache version <big>2</big>, please <big>EN</big>able <big>MOD</big>ule named <big>REWRITE</big>“.

#### Allow .htaccess files to override settings

Most of the project uses .htaccess files to override default server settings. By default .htaccess files cannot override default apache server settings. To allow override, we need to edit default configuration file.

\\# Go to Apache's sites-available folder cd /etc/apache2/sites-available/ # Create a backup of original configuration file, will create default.backup file sudo cp default{,.backup} # Edit default file and replace all `AllowOverride None` with `AllowOverride All` # your-editor-name (subl|vi|gedit) sudo your-editor-name default # Restart apache sudo service apache2 restart

### Conclusion

If you like it, please bookmark and share. If you think I should add something to above post, please changes in comments.
