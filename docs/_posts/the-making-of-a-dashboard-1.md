---
tags:
- visualization
- d3.js
- design pattern
- animation
- transition
- map
title: The Making of a Dashboard
date: 2020-07-10
author: Paul Xu
featuredimg: "/datascience-blog/assets/img/stackedbar1.png"
summary: Part 3. Render the visualizations with d3.js

---
In this post, we will cover the details in creating the data visualizations used in [the United Way Rhode Island 211 Dashboard](https://thepolicylab.github.io/UW-211) to reveal patterns in 211 calls. [The previous post](https://digicosmos86.github.io/datascience-blog/2020/07/10/the-making-of-a-dashboard/) described in detail the overall architecture of the app and how data is persisted as state in the Vue app. This post focuses more on the gotchas using d3.js to create interactive data visualizations.

Links to other posts in the series:

* [Part 1. Background and Decisions on Tech Stack](/datascience-blog/2020/07/09/making-of-a-dashboard-part1/)
* [Part 2. Building the Skeleton of the App with Vue.js](/datascience-blog/2020/07/10/the-making-of-a-dashboard/)
* [Part 4. UI/UX Improvements from User Feedback](#)
* [Part 5. Wrangling Data for the App](#)

## General Design Patterns

Each of the visualizations lives within a Vue component. The overall structure of the component looks like this:

``` javascript
export default {
  data() {
    return {
      filteredData: null, // stores the result of the filterData method
      
      // persist a chart object with an updateChart method that can be called
      // when the filter is updated.
      chart: null
    };
  },
  props: {
    rawData: Object,
    filter: Object
  },
  methods: {
    // inititalizes the chart and returns a chart object with an updateChart method
    initChart(filter) {},
    // filters rawData and returns filteredData in the components state
    filterData(filteredData, filter) {},
  },
  created() {
    // filters the data and creates the chart when the component is being created
    this.filteredData = this.filterData(filter);
    this.chart = this.initChart(this.filteredData, this.filter);
  },
  watch: {
    filter: {
      deep: true, // create a "deep watcher" that monitors each element of the object
      handler(newFilter) {
        this.filteredData = this.filterData(newFilter);
        this.chart.updateChart(this.filteredData, newFilter);
      },
    },
  },
};

```

The above code snippet shows that the component receives as props the 211 data loaded from a `.csv` file and a filter objects that contains all of the parameters of the filter. Whenever the component is created (i.e. when the `created()` lifecycle method is called), the `filterData` method is called and the result is stored in the component's state. Then the `initChart()` method is called, returning in a chart object, which is also saved to the component's state. This chart objects itself has an `updateChart` method, which can be used to update the chart. This follows the d3.js design pattern described [in this article](https://medium.com/d3js-tutorials/a-d3-js-design-pattern-16a6503dc86f) to keep d3 code centralized in the Vue component.

Each component also has a deep `watcher` that watches the filter props. Whenever the filter changes, its handler will call the `filterData` method again, and then call the `updateChart` method of the `chart` object persisted in the state to update the chart.

## Let's Make the Map!

Making a map (choropleth) with d3.js is a widely covered subject. There are many tutorials avaiable that walks you through how to create a map using `geojson`/`topojson` in d3. For example, this [Observable notebook](https://observablehq.com/@d3/choropleth) by d3's creator Mike Bostock contains code for creating choropleths in d3 v5. [This article](https://datawanderings.com/2018/10/28/making-a-map-in-d3-js-v-5/) is also a great tutorial for creating such maps. What I want to cover in this section is a few things that got me stuck for hours.

### 1. Find the correct `geojson/topojson` for the base map

Typically you should have no difficulties finding a `geojson`/`topojson` file that contains the correct border outlines for the geographical information that you want to plot. However, these files are made to be very precise and tend to be too big for a project like this. The `geojson` file that I got at first from the [RI GIS website](http://www.rigis.org/datasets/municipalities-1997) was over 6MB. I tried to use [MapShaper](https://mapshaper.org/) to reduce the file size but d3 had problems reading the files it produced. I eventually found a `topojson` file that was small enough. So, you might need to spend some time finding the right files for the base map, especailly if you are focusing on a state or a smaller region.

### 2. Using the correct projection

We will need a projection function that projects geographic coordinates to planar coordinates that can be used to draw SVG paths with d3.js. If we were creating a map of the United States, then the `AlbersUSA` projection comes in quite handy. In this project, I used the `mercator` projection, which had to be scaled over 30,000 times with numerous trials and errors to make the map look the way it is. I welcome any comment/feedback on other ways to project the map of states that does not require as much correction.

### 3. The infamous MAUP problem

Another problem that I encontered when mapping the 211 call data is this so-called Modifiable area unit problem (MAUP), which, in this context, means that the number of calls plotted on a map is a reflection of that area's population density. In this case, since Providence is RI's only population center, naturally many more 211 calls would originate from Providence, which results in a map with only Providence highlighted. I modified the color scale to reflect the number of calls per 1000 capita to preserve some interpretability. I also welcome any suggestions/comments on other ways to produce maps that are less biased by population density.

## Stacked Bar Chart with Smooth Transitions

