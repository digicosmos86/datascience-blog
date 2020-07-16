(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{398:function(t,e,a){"use strict";a.r(e);var s=a(9),o=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("In "),a("a",{attrs:{href:"https://digicosmos86.github.io/datascience-blog/2020/07/10/the-making-of-a-dashboard-1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("the previous post"),a("OutboundLink")],1),t._v(" we discussed general design patterns that put Vue and d3 together. This post will focus on how we improved the UI/UX design of the first prototype (shown above) according to the feedback from the UWRI team and the rest of The Policy Lab team.  We will also discuss the improvements that made the site faster and more responsive.")]),t._v(" "),a("p",[t._v("Links to other posts in the series:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/_posts/the-making-of-a-dashboard-part1.html"}},[t._v("Part 1. Background and Decisions on Tech Stack")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/_posts/the-making-of-a-dashboard-part2.html"}},[t._v("Part 2. Building the Skeleton of the App with Vue.js")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/_posts/the-making-of-a-dashboard-part3.html"}},[t._v("Part 3. Rendering the Visualizations with d3.js")])],1)]),t._v(" "),a("h2",{attrs:{id:"feedback-from-the-client"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#feedback-from-the-client"}},[t._v("#")]),t._v(" Feedback from the client")]),t._v(" "),a("p",[t._v("We showed the first prototype to the UWRI team and also internally to the rest of The Policy Lab team.  The feedback that we received on it was:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("The layout:")]),t._v(" The vertical positioning of the elements makes it difficult for users to have both the map and the stacked area chart in their browser at the same time, especially on lower-resolution 16:9 screens such as those of the MacBook Air (the dashboard was designed on an 2k screen for which the height of the page was not much of a problem). Some of the spaces on the screen was not very well utilized.")]),t._v(" "),a("li",[a("strong",[t._v("Need for more context:")]),t._v(" Although the filters do communicate what information the dashboard is showing, it is still a good idea to unequivocally show the readers what they are looking at, and what they can do with the visualizations. That means that each chart will still need to have titles and additional explanatory texts showing the current states of the charts.")]),t._v(" "),a("li",[a("strong",[t._v("Missing information:")]),t._v(" Although the dashboard does a good job of showing the geographic locations of the origins of the calls and the trends in call volumes over time, it lacks high-level aggregated information such as total numbers of calls that can be really helpful.")]),t._v(" "),a("li",[a("strong",[t._v("Readability issues:")]),t._v(" The use of colors for categories are indistinguishable from each other, especially since they are recycled because there are so many categories. Also, only the top 8 categories are shown but the users cannot know from the context. The text for the legend of the map and for the axis labels for the stacked area chart are too small.")])]),t._v(" "),a("h2",{attrs:{id:"the-revamped-dashboard"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-revamped-dashboard"}},[t._v("#")]),t._v(" The Revamped Dashboard")]),t._v(" "),a("p",[t._v("Out goes prototype v0.01, in comes Prototype v0.1 (music...)")]),t._v(" "),a("p",[a("img",{attrs:{src:"/datascience-blog/assets/img/dashboard-annotated.png",alt:"dashboard screenshot with annotations"}})]),t._v(" "),a("p",[t._v("The above image shows the improvements that we made to the very first prototype of the dashboard after receiving stakeholder feedback. Some of the major ones are:")]),t._v(" "),a("ol",[a("li",[a("strong",[t._v("Layout:")]),t._v(" We switched to displaying the two charts horizontally to make better use of the space on the page. That way the interactions between the visualizations are more visible. This design is also optimized for 16:9 screen ratios that most laptops use.")]),t._v(" "),a("li",[a("strong",[t._v("More context:")]),t._v(" The addition of chart titles, subtitles, explanatory texts, and notes give the users more context of what they are looking at, and the range of data that are being visualized. A bit redundancy here improves readability and clarity.")]),t._v(" "),a("li",[a("strong",[t._v("High-level information:")]),t._v(" The new table on top of the map gives users an overview from 10,000-feet simple statistics such as total numbers of calls.")]),t._v(" "),a("li",[a("strong",[t._v("Readability improvements:")]),t._v(" The minor categories that are not visualized in the stacked area chart by default are now hidden. The users now have the choice to unhide these categories if they so wish to. Texts how have consistent font sizes to increase readability. Category colors are now adjusted to be more distinguishable.")]),t._v(" "),a("li",[a("strong",[t._v("Navigational aids:")]),t._v(" Two buttons were added to the visualizations to allow users to go back to the initial states of the visualizations so they do not have to use the drop-down filters for the same purpose.")])]),t._v(" "),a("h2",{attrs:{id:"other-under-the-hood-improvements"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#other-under-the-hood-improvements"}},[t._v("#")]),t._v(" Other Under-the-hood Improvements")]),t._v(" "),a("h3",{attrs:{id:"speed-improvement"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#speed-improvement"}},[t._v("#")]),t._v(" Speed improvement")]),t._v(" "),a("p",[t._v("One thing that significantly impact user experience with a Web app is the performance. Unfortunately, because the dashboard app has to load the 211 call data file before it every component starts to render, there can be 0.5- to 2-second delay before the charts start to show up, a noticeable lag which can significantly affect user experience. Are there ways to reduce this lag?")]),t._v(" "),a("p",[t._v('Yes! The "tidy/long" data format is the culprit here. The long format, although often preferred in analytics with Python or R, it is more preferable to use the wide format in this context. There are a few reasons for this:')]),t._v(" "),a("ol",[a("li",[t._v("It is easier to operate in rows in JavaScript, as opposed to "),a("code",[t._v("DataFrames")]),t._v(" in Python or "),a("code",[t._v("data.frame")]),t._v(" in R, which are optimized for column-based operations. By default, d3 reads rows of a "),a("code",[t._v("csv")]),t._v(" as elements of an array. Therefore, it is much easier to operate within each element of the array with functions such as "),a("code",[t._v("map")]),t._v(" or "),a("code",[t._v("filter")]),t._v(".")]),t._v(" "),a("li",[t._v("The data file for the wide format is smaller. The long format introduces redundancy in the data where category names can be repeated. That usually is not a problem in Python or R, since they have mechanisms to represent categorical variables, but in a Web app, bloated data files affects speed.")]),t._v(" "),a("li",[t._v("Wide format handles missing data better. JavaScript (d3) does not handle missing data well. Consequently, missing data still need to be present in long format data files rows with zero values, which further increases file size.")])]),t._v(" "),a("p",[t._v("After we switched to the wide format, the size of the data file was reduced from 2,518KB to a mere 131KB. We did have to rewrite some code in the "),a("code",[t._v("filterData")]),t._v(" functions for the component for each chart, but that also became easier. No longer did we need to use "),a("code",[t._v("d3.nest()")]),t._v(" function to produce aggregates for the stacked area chart. We did need to reshape the wide format into a list of objects that can be used with "),a("code",[t._v("d3.stack()")]),t._v(" to produce the data for the stacked area chart, but that can be created on-the-fly with the following two lines:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data format before:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//     type: "COVID-19 Control",')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//     city: "Providence",')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     values: [2, 5, 4. 7, 8 ...] //number of calls on each day from 2020-03-01")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   },")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   {")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//     ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   }")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ]")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Create an array of empty objects, whose length is the number of days present in data")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" nestedData "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" rawData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("map")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// fill each empty object in the array with type: number of calls pairs")]),t._v("\nrawData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("row")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("values"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("d"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" i")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" nestedData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" d\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// data format after:")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// [")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//   { "COVID-19 Control": 2, "Food/Meals": 10, ...}, ')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('//   { "COVID-19 Control": 3, "Food/Meals": 5, ...},')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//   ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ]")]),t._v("\n")])])]),a("p",[t._v("With these changes, the dashboards now loads instantly and is more snappy than ever, due to the reduced load in reading and restructuring the data.")]),t._v(" "),a("h3",{attrs:{id:"responsive-design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#responsive-design"}},[t._v("#")]),t._v(" Responsive design")]),t._v(" "),a("p",[t._v("From Day 1, we wanted the dashboard to be responsive. While it is easy to make the dashboard layout to be responsive, it is not easy to make the visualizations responsive. We used two techniques to make the charts responsive:")]),t._v(" "),a("ol",[a("li",[t._v("For the map, we simply added a "),a("code",[t._v("viewBox")]),t._v(" attribute to the map's root "),a("code",[t._v("SVG")]),t._v(" element. Then the size of the charts will be adjusted. "),a("a",{attrs:{href:"https://medium.com/@louisemoxy/a-simple-way-to-make-d3-js-charts-svgs-responsive-7afb04bc2e4b",target:"_blank",rel:"noopener noreferrer"}},[t._v("This blog"),a("OutboundLink")],1),t._v(" provides an excellent explanation on how the "),a("code",[t._v("viewBox")]),t._v(" attribute works.")]),t._v(" "),a("li",[t._v("For the stacked area charts, we added an "),a("code",[t._v("eventListener")]),t._v(" to the "),a("code",[t._v("window")]),t._v(" object, so that whenever the size of the wrapper changes, the chart will re-render itself. This is done through vanilla JavaScript:")])]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("addEventListener")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"resize"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("chart"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("updateChart")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("layoutData"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("options"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"wrapping-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wrapping-up"}},[t._v("#")]),t._v(" Wrapping up:")]),t._v(" "),a("p",[t._v("This wraps the process in which we designed and built the "),a("a",{attrs:{href:"https://thepolicylab.github.io/UW-211",target:"_blank",rel:"noopener noreferrer"}},[t._v("211 Dashboard"),a("OutboundLink")],1),t._v(" for United Way of Rhode Island. We hope you enjoyed reading about this process! If you have any comments/suggestions, please feel free to discuss with us in the discussion board!")])])}),[],!1,null,null,null);e.default=o.exports}}]);