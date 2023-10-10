---
title: Categorising a website in Websense / Forcepoint
author: Bala Subramanyam Lanka
layout: post
date: 2016-05-11T17:56:15+00:00
url: /categorising-website-websense-forcepoint/
featured_image: /wp-content/uploads/2016/05/Forcepoint.jpg
wpb_post_views_count:
  - "3640"
categories:
  - Forcepoint
tags:
  - websense
description: When we own a website, we have to make sure that our website is accessible from all the systems without any sort of proxy blocking. I work in a software organization, which uses Websense/Forcepoint, a security solution for the organization&'s network.
---
When we own a website, we have to make sure that our website is accessible from all the systems without any sort of proxy blocking. I work in a software organization, which uses Websense/Forcepoint, a security solution for the organization&#8217;s network.

Websense/Forcepoint is used by government or business organizations to protect their networks from cybercrime, malware, and data theft, as well as prevent users from viewing sexual or other inappropriate content and discourage employees from browsing non-business-related websites. Forcepoint uses a combination of classification engines, filtering categories, data fingerprints, and word filters designated by the individual customer&#8217;s network policy.

Recently, when I tried to open my website in my company&#8217;s system, I found that my website is been blocked stating &#8211;  _&#8220;www.balasubramanyamlanka.com is categorised under Websites Uncategorised. Access Denied.&#8221; _For many days, I didn&#8217;t understand the process. Then I have started digging about the Websense and then understood how websites are categorised by Websense/Forcepoint.

Usually, when a website is newly launched into the internet, Websense  tries to categorise and save into its database. If it is not able to categorise, It will save as Uncategorized into the database. Whoever is using the Websense security solutions, they can write their own filtration rules/conditions for accessing the websites. Usually, Organizations won&#8217;t allow users to access the uncategorized websites

Whoever is using the Websense security solutions, they can write their own filtration rules/conditions for accessing the websites. Usually, Organizations won&#8217;t allow users to access the uncategorized websites. If we find that our website is not categorised properly, we can raise a request through their website and categorise our website properly.

### Steps to categorise a website in Websense / Forcepoint

  1. Register [https://www.websense.com/content/Registration.aspx] by using your website&#8217;s domain email (if your website is www.balasubramanyamlanka.com then your email would be like abc@balasubramanyamlanka.com)
  2. A verification link and the security code will be sent to your registered email. Open the verification link sent and enter the security code. This will be followed setting up the password.
  3. After the verification process, you will be asked to log in again.
  4. After logging in, go 
     {% include figure.html path="assets/img/blog/Screen-Shot-2016-05-11-at-11.00.23-PM-1024x417.png" class="img-fluid rounded z-depth-1" zoomable=false %}

  5. Enter you website address and click on analyse button. After the analysis  you will find the analysis as follows.
     {% include figure.html path="assets/img/blog/Screen-Shot-2016-05-11-at-11.01.18-PM-1024x649.png" class="img-fluid rounded z-depth-1" zoomable=false %}

  6. Click on Suggest a different classification to submit the new category for your website.
     {% include figure.html path="assets/img/blog/Screen-Shot-2016-05-11-at-11.02.10-PM-1024x640.png" class="img-fluid rounded z-depth-1" zoomable=false %}

  7. You will get an email as registering your category. After the next database update of Websense, Your website category in the Websense will be changed. It took 24 hours for me for the database update.

Happy Learning! Happy Exploring!!

&nbsp;

_<span style="text-decoration: underline;">Sources:</span>_

  * _https://en.wikipedia.org_
  * _https://www.forcepoint.com_

 [1]: https://www.websense.com/content/Registration.aspx
 [2]: http://csi.websense.com/
 [3]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/Screen-Shot-2016-05-11-at-11.00.23-PM.png
 [4]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/Screen-Shot-2016-05-11-at-11.01.18-PM.png
 [5]: http://www.balasubramanyamlanka.com/wp-content/uploads/2016/05/Screen-Shot-2016-05-11-at-11.02.10-PM.png