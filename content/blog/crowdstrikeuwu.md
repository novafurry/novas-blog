---
title: The CrowdStrike Bootloop Incident
description: I cover the CrowdStrike Incident
published: 2024-07-20
tags: [cybersec,crowdstrike,windows,bug,fail]
---
## Will this affect me?
Most people won't be affected by this on personal machines, however your work windows machines maybe.
It won't affect people using Mac or Linux.
## What caused this?
Not much has come to light so far but it seems a bad update to CrowdStrike's Kernel Level Driver (referred to KLD from here out) had a broken update published where the every byte of the driver's `.sys` file was replaced with the hex number` 00`.
### ***Most importantly this was not Microsoft's fault and was not a part of a windows update.***

CrowdStrike's KLD “Falkon” protects:  
>- 298 fortune 500 companies
>- 538 fortune 1000 companies
>- 43 US States
>
>Source: [https://www.crowdstrike.com/platform/](https://www.crowdstrike.com/platform/)

Matter of fact, people in the US state of Alaska, Ohio and others were unable to call 911 as their systems ran Windows, and had CrowdStrike's KLD “Falkon” installed.
## What else was affected:
-   Windows 365 Cloud PCs, apps and services
-   Delta Airlines, United Airlines and American Airline
-   German hospitals   
-   Live tv broadcasts in the UK, Australia and other countries were affected
-   ABC Radio being unable to play music
-   Airport check-in systems
-   Banks and payment systems
-   Supermarkets, petrol stations, etc
-   Government departments
-   Universities
-   Law firms
-   Mines
-   And many more companies

ABC Australia continued to broadcast, however without teleprompters or on-screen graphics.

## YouTube coverage from reputable content creators:


<div style='max-width: 200px;display:inline-block;text-align:center;'>
<a href='https://youtu.be/sL-apm0dCSs'>
<img width='200' src='http://i.ytimg.com/vi/sL-apm0dCSs/maxresdefault.jpg'/>
<br><b>The CrowdStrike Problem Isn’t A Simple Fix…</b><br>
<i>
Theo - t3․gg
</i>
</a>
</div>

<div style='max-width: 200px;display:inline-block;text-align:center;'>
<a href='https://youtu.be/pCxvyIx922A'>
<img width='200' src='http://i.ytimg.com/vi/pCxvyIx922A/maxresdefault.jpg'/>
<br><b>lol crowdstrike just destroyed the internet</b><br>
<i>
Low Level Learning
</i>
</a>
</div>

<div style='max-width: 200px;display:inline-block;text-align:center;'>
<a href='https://youtu.be/4yDm6xNeYas'>
<img width='200' src='http://i.ytimg.com/vi/4yDm6xNeYas/maxresdefault.jpg'/>
<br><b>Some bad code just broke a billion Windows machines</b><br>
<i>
Fireship
</i>
</a>
</div>

<div style='max-width: 200px;display:inline-block;text-align:center;'>
<a href='https://youtu.be/yyC0Y70RGhU'>
<img width='200' src='http://i.ytimg.com/vi/yyC0Y70RGhU/maxresdefault.jpg'/>
<br><b>The World's Largest Computer Crash Just Happened...</b><br>
<i>
SomeOrdinaryGamers
</i>
</a>
</div>

<div style='max-width: 200px;display:inline-block;text-align:center;'>
<a href='https://youtu.be/yVXsc2tmJNk'>
<img width='200' src='http://i.ytimg.com/vi/yVXsc2tmJNk/maxresdefault.jpg'/>
<br><b>The day Windows actually died…</b><br>
<i>
Enderman
</i>
</a>
</div>

<div style='max-width: 200px;display:inline-block;text-align:center;'>
<a href='https://youtu.be/3N4m5k9GAW0'>
<img width='200' src='http://i.ytimg.com/vi/3N4m5k9GAW0/maxresdefault.jpg'/>
<br><b>CrowdStrike Destroyed The Internet</b><br>
<i>
ThePrimeagen
</i>
</a>
</div>

<div style='max-width: 200px;display:inline-block;text-align:center;'>
<a href='https://youtu.be/deJuXfwS7Bo'>
<img width='200' src='http://i.ytimg.com/vi/deJuXfwS7Bo/maxresdefault.jpg'/>
<br><b>The Internet Broke Today: Explained!</b><br>
<i>
Seytonic
</i>
</a>
</div>

## Sources
-   [https://alaskapublic.org/2024/07/19/widespread-technology-outage-disrupts-alaska-911-service-global-flights-and-banking/](https://alaskapublic.org/2024/07/19/widespread-technology-outage-disrupts-alaska-911-service-global-flights-and-banking/)
-   [https://www.abc.net.au/news/2024-07-19/global-it-outage-crowdstrike-microsoft-banks-airlines-australia/104119960](https://www.abc.net.au/news/2024-07-19/global-it-outage-crowdstrike-microsoft-banks-airlines-australia/104119960)