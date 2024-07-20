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

-   [https://youtu.be/sL-apm0dCSs?si=t1kUFsGStoIxYhGZ](https://youtu.be/sL-apm0dCSs?si=t1kUFsGStoIxYhGZ)
-   [https://youtu.be/pCxvyIx922A?si=iQhWFN8L8xAqTww0](https://youtu.be/pCxvyIx922A?si=iQhWFN8L8xAqTww0)
-   [https://youtu.be/4yDm6xNeYas?si=VT6fJKcM0MKsf38S](https://youtu.be/4yDm6xNeYas?si=VT6fJKcM0MKsf38S)
-   [https://youtu.be/yyC0Y70RGhU?si=xsMcYaFNB5whyJRO](https://youtu.be/yyC0Y70RGhU?si=xsMcYaFNB5whyJRO)
-   [https://youtu.be/yVXsc2tmJNk?si=18puTKnRmnMgDyaU](https://youtu.be/yVXsc2tmJNk?si=18puTKnRmnMgDyaU)
-   [https://youtu.be/3N4m5k9GAW0?si=agjrBk7144XpveOi](https://youtu.be/3N4m5k9GAW0?si=agjrBk7144XpveOi)
-   [https://youtu.be/deJuXfwS7Bo?si=oCKbbYpVs5fAZo2T](https://youtu.be/deJuXfwS7Bo?si=oCKbbYpVs5fAZo2T) 

## Sources
-   [https://alaskapublic.org/2024/07/19/widespread-technology-outage-disrupts-alaska-911-service-global-flights-and-banking/](https://alaskapublic.org/2024/07/19/widespread-technology-outage-disrupts-alaska-911-service-global-flights-and-banking/)
-   [https://www.abc.net.au/news/2024-07-19/global-it-outage-crowdstrike-microsoft-banks-airlines-australia/104119960](https://www.abc.net.au/news/2024-07-19/global-it-outage-crowdstrike-microsoft-banks-airlines-australia/104119960)
