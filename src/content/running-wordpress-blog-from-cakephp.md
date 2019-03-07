---
title: Running WordPress Blog From CakePHP
image: img/cakephp-wordpress_mv5d3b.png
author: Rakesh Tembhurne
slug: running-wordpress-blog-from-cakephp
date: 2013-03-31T14:35:13.000Z
date_updated: 2017-01-13T06:19:03.000Z
tags:
    - .htaccess
    - CakePHP
    - WordPress
draft: false
---

If you are CakePHP developer, you probably know that files and folders located at `app/webroot` directory, are visible from urls directly. For example, if you keep example.pdf file in your webroot directory, you can access it from http://yoursite.com/example.pdf.

This logic was earlier used to add wordpress blog to CakePHP. All you had to do is, copy your wordpress folder (renamed to ‘blog’, most of the time) in your webroot directory, so that blog can run from `http://yoursite.com/blog`. You might need edit `.htaccess` files to suit your server settings.

I tried above method, and tried various .htaccess settings, but nothing worked with server settings that I use. The issue that I remember where I stopped was that I had to make sure that there’s always a forward slash after word blog. So `/blog` wasn’t working as expected.

Finally the solution that worked for me is to not keep the blog directory in webroot folder. Instead, I moved it to the same folder where my ‘app’ folder stayed. Additionally I had to write two lines to tell CakePHP that not to consider blog/ at all.

<script src=\"https://gist.github.com/3832745.js\"></script><noscript>```
<code class=\"language-apacheconf apacheconf\"><IfModule mod_rewrite.c>
    RewriteEngine on

    RewriteCond %{REQUEST_URI} !^/blog.*
        RewriteCond %{REQUEST_URI} !-f
        RewriteRule ^$ app/webroot/ [L]

    RewriteCond %{REQUEST_URI} !^/blog.*
        RewriteCond %{REQUEST_URI} !-d
        RewriteRule (.*) app/webroot/$1 [L]
    </IfModule>```

</noscript>
