---
tags:
- UI
- UX
- JavaScript
- visualization
- dashboard
- Vue
- d3
title: The Making of a Dashboard
date: 2020-07-13
author: Paul Xu
featuredimg: "/datascience-blog/assets/img/first-prototype.png"
summary: 'Part 4. UI/UX refinement from user feedback '

---
In [the previous post](https://digicosmos86.github.io/datascience-blog/2020/07/10/the-making-of-a-dashboard-1/) we discussed general design patterns that put Vue and d3 together. This post will focus on how we improved the UI/UX design of the first prototype (shown above) according to the feedback from the UWRI team and the rest of The Policy Lab team.  We will also discuss the improvements that made the site faster and more responsive.

Links to other posts in the series:

* [Part 1. Background and Decisions on Tech Stack](/datascience-blog/2020/07/09/making-of-a-dashboard-part1/)
* [Part 2. Building the Skeleton of the App with Vue.js](/datascience-blog/2020/07/10/the-making-of-a-dashboard/)
* [Part 3. Rendering the Visualizations with d3.js](/datascience-blog/2020/07/10/the-making-of-a-dashboard-1/)
* [Part 5. Wrangling Data for the App](#)

## Feedback from the client

We showed the first prototype to the UWRI team and also internally to the rest of The Policy Lab team.  The feedback that we received on it was:

1. **The layout:** The vertical positioning of the elements makes it difficult for users to have both the map and the stacked area chart in their browser at the same time, especially on lower-resolution 16:9 screens such as those of the MacBook Air (the dashboard was designed on an 2k screen for which the height of the page was not much of a problem). Some of the spaces on the screen was not very well utilized.
2. **Need for more context:** Although the filters do communicate what information the dashboard is showing, it is still a good idea to unequivocally show the readers what they are looking at, and what they can do with the visualizations. That means that each chart will still need to have titles and additional explanatory texts showing the current states of the charts.
3. **Missing information:** Although the dashboard does a good job of showing the geographic locations of the origins of the calls and the trends in call volumes over time, it lacks high-level aggregated information such as total numbers of calls that can be really helpful.
4. **Readability issues:** The use of colors for categories are indistinguishable from each other, especially since they are recycled because there are so many categories. Also, only the top 8 categories are shown but the users cannot know from the context. The text for the legend of the map and for the axis labels for the stacked area chart are too small.

## The Revamped Dashboard

Out goes prototype v0.01, in comes Prototype v0.1 (music...)