---
title: Make that madarfakar titled
description: Describe the post
date: <% tp.date.now("YYYY-MM-DD", 1) %>
tags:
  - "#silly"
---
Content goes here
 `<% tp.file.move("/posts/" + tp.file.title) %>`