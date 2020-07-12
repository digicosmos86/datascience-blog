(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{402:function(e,t,a){"use strict";a.r(t);var r=a(9),o=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h2",{attrs:{id:"hello"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#hello"}},[e._v("#")]),e._v(" Hello!")]),e._v(" "),a("p",[e._v("This is the first of a series of technical blog posts that document how "),a("a",{attrs:{href:"https://thepolicylab.brown.edu",target:"_blank",rel:"noopener noreferrer"}},[e._v("The Policy Lab at Brown University"),a("OutboundLink")],1),e._v(" built "),a("a",{attrs:{href:"https://thepolicylab.github.io/UW-211",target:"_blank",rel:"noopener noreferrer"}},[e._v("an interactive data dashboard"),a("OutboundLink")],1),e._v(" for "),a("a",{attrs:{href:"https://www.uwri.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("United Way of Rhode Island"),a("OutboundLink")],1),e._v(" to support analytics and decision-making with 211 calls data. This post will cover the background of this project and the decisions The Policy Lab team made on the tech stacks used for this project. Please use the following link to jump to the rest of the story.")]),e._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[e._v("Part 2. Building the Skeleton of the App with Vue.js")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#"}},[e._v("Part 3. Making the Visualizations with d3.js")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#"}},[e._v("Part 4. UI/UX Improvements from User Feedback")])]),e._v(" "),a("li",[a("a",{attrs:{href:"#"}},[e._v("Part 5. Wrangling Data for the App")])])]),e._v(" "),a("h2",{attrs:{id:"background-of-the-project"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#background-of-the-project"}},[e._v("#")]),e._v(" Background of the project")]),e._v(" "),a("p",[e._v("This project is a first step in the collaboration between The Policy Lab and United Way of Rhode Island to build a better data system that supports better collection, analysis, and reporting of 211 call data. Supported by United Way, 211 is a free and confidential service that helps people across North America find the local resources they need 24 hours a day, 7 days a week. Better understanding 211 data can help United Way and government agencies allocate and dispatch limited resources to those who need them the most, especially in the wake of COVID-19. Building an interactive dashboard caters to the one most pressing needs in analytics and provides the easiest and quickest way to reveal trends and patterns in the 211 data.")]),e._v(" "),a("h2",{attrs:{id:"first-draft-of-the-design"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#first-draft-of-the-design"}},[e._v("#")]),e._v(" First draft of the design")]),e._v(" "),a("p",[e._v("After communicating with the team at United Way of Rhode Island, "),a("a",{attrs:{href:"https://thepolicylab.brown.edu/team/ben-guhin-delphine/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Ben Guhin Delphine"),a("OutboundLink")],1),e._v(",\nHead of Design at The Policy Lab, created the first sketch of the design (see below). This first draft includes a stacked area chart, a choropheth map, and a few dropdowns that allow the users to filter the data. The stacked area chart, compared with line charts, helps users to see trends in call volumes not only across categories but also in total. Mapping calls to the geographical regions where they originate also reveals needs for resources in across areas.")]),e._v(" "),a("h2",{attrs:{id:"decisions-on-tech-stack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#decisions-on-tech-stack"}},[e._v("#")]),e._v(" Decisions on tech stack")]),e._v(" "),a("p",[e._v("For such a project, real-time delivery of analytics is key. Therefore, we decided to make this dashboard light-weight and customizable and maximize interactivity. Therefore, we intially decided to forgo a backend and use d3.js only. However, although d3 provides its own way to manipulate the DOM and handling event, it does not provide a good way to manage states given filters that we are applying five filters to the data. That's why we added Vue.js for state management and for reactively updating the visualizations created by d3. In retrospect, Vuex would have been a great addition to provide even better state management, but a simple SPA like this, it's a better idea to focus on the visualizations rather than state management. Below is all of the libraries we used to create this dashboard:")]),e._v(" "),a("ul",[a("li",[e._v("Vue.js")]),e._v(" "),a("li",[e._v("d3.js")]),e._v(" "),a("li",[e._v("Vue-Formulate (light weight form library to create the filter dropdowns on-the-fly)")]),e._v(" "),a("li",[e._v("moment.js (to handle "),a("code",[e._v("datetime")]),e._v(" operations, which can be a pain in JavaScript)")])]),e._v(" "),a("p",[e._v("In addition, we used Python for data preparation. Please see "),a("a",{attrs:{href:"#"}},[e._v("Part 5. Wrangling Data for the App")]),e._v(" for more details")]),e._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[e._v("#")]),e._v(" Next up")]),e._v(" "),a("p",[a("a",{attrs:{href:"#"}},[e._v("Part 2. Building the Skeleton of the App with Vue.js")])])])}),[],!1,null,null,null);t.default=o.exports}}]);