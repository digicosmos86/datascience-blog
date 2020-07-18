(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{403:function(t,e,a){"use strict";a.r(e);var n=a(8),s=Object(n.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("p",[t._v("In the previous "),a("a",{attrs:{href:"https://digicosmos86.github.io/datascience-blog/2020/07/09/making-of-a-dashboard-part1/",target:"_blank",rel:"noopener noreferrer"}},[t._v("post"),a("OutboundLink")],1),t._v(" post we covered the background and the decisions on what tech stacks we are using for the "),a("a",{attrs:{href:"https://thepolicylab.github.io/UW-211",target:"_blank",rel:"noopener noreferrer"}},[t._v("United Way Rhode Island 211 dashboard"),a("OutboundLink")],1),t._v(". This post will describe how we used "),a("code",[t._v("Vue.js")]),t._v(" to build the architecture based on the awesome sketch of "),a("a",{attrs:{href:"https://thepolicylab.brown.edu/team/ben-guhin-delphine/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ben Guhin Delphine"),a("OutboundLink")],1),t._v(" in the featured image above.")]),t._v(" "),a("p",[t._v("Links to other posts in this series:")]),t._v(" "),a("ul",[a("li",[a("RouterLink",{attrs:{to:"/_posts/the-making-of-a-dashboard-part1.html"}},[t._v("Part 1. Decisions on Tech Stack")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/_posts/the-making-of-a-dashboard-part3.html"}},[t._v("Part 3. Rendering the Visualizations with d3.js")])],1),t._v(" "),a("li",[a("RouterLink",{attrs:{to:"/_posts/the-making-of-a-dashboard-part4.html"}},[t._v("Part 4. UI/UX Refinements from Stakeholder Feedback")])],1)]),t._v(" "),a("h2",{attrs:{id:"the-overall-architecture-of-the-dashboard-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#the-overall-architecture-of-the-dashboard-app"}},[t._v("#")]),t._v(" The Overall Architecture of the Dashboard App")]),t._v(" "),a("p",[t._v('We chose not to use any backend for this dashboard because neither the volume or the complexity of the data justifies the additional cost of a backend. Another advantage is that the app is essentially "static" with all operations done in the browser, which means a wide range of hosting options to deploy the app, which facilitates the sharing and the deployment of the app.')]),t._v(" "),a("h3",{attrs:{id:"centralized-state-management-in-the-root-component"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#centralized-state-management-in-the-root-component"}},[t._v("#")]),t._v(" Centralized state management in the root component")]),t._v(" "),a("p",[t._v("With Ben's design, it is easy to see that there are two types of the components in this app: the drop-downs on the top left that serve as filters for the 211 call data and the two charts that visualizes the data which change with the filter values. Therefore, in the Vue app, there are two types of states that need to be persisted: the 211 data itself and the filter data. We will load the 211 call data when the app is being initialized. We will also use an object to store the state of the filters, which can be bound to the values of each of the drop-downs. Notably, we can also propagate the options of the drop-downs with the values in the data.")]),t._v(" "),a("h3",{attrs:{id:"propagating-down-the-data-through-props"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#propagating-down-the-data-through-props"}},[t._v("#")]),t._v(" Propagating down the data through props")]),t._v(" "),a("p",[t._v("Once the 211 data is loaded, it can be passed to the two chart components as props together with the filters. Within each chart component, we can then apply the filters to the 211 data and update the charts. In other words, each component will also maintain a state of its own filtered version of the 211 data. d3.js is well equipped for both the heavy-lifting in processing the data and the rendering of the data visualizations.")]),t._v(" "),a("h3",{attrs:{id:"propagating-back-data-through-events"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#propagating-back-data-through-events"}},[t._v("#")]),t._v(" Propagating back data through events")]),t._v(" "),a("p",[t._v("To make the dashboard more interactive, we also need to enable interactions between the two chart components. For example when the users click on one region in the map on the chart, the stacked area chart will also update to focus on the 211 calls in that geographic region. This type of cross-filtering can be done through event propagation: during the rendering of the map, we can use d3 to listen to the click event on each SVG path of the map. Once a click happens, an event can be emitted, which can then be handled by the event handler in the root component of the Vue app. The handler then updates the filter persisted in its state and propagate it to the stack bar chart component, which will reactively update the stacked bar chart. This way, we can combine the powerful event handling in both Vue and d3 to make the two visualizations to talk to each other through centralized state management.")]),t._v(" "),a("h2",{attrs:{id:"building-the-skeleton-of-the-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#building-the-skeleton-of-the-app"}},[t._v("#")]),t._v(" Building the Skeleton of the App")]),t._v(" "),a("p",[t._v("We began the dashboard app with a project initialized by "),a("code",[t._v("vue-cli")]),t._v(", which comes with a wide range of options in creating a standard Vue app and the type of features (e.g. "),a("code",[t._v("Vue-Router")]),t._v(", "),a("code",[t._v("Vuex")]),t._v(") it will include. It also has a GUI for the same purpose. The "),a("a",{attrs:{href:"https://cli.vuejs.org/guide/creating-a-project.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Cli website"),a("OutboundLink")],1),t._v(" has detailed instructions on how to create a Vue project.")]),t._v(" "),a("h3",{attrs:{id:"loading-data-files-with-concurrency"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loading-data-files-with-concurrency"}},[t._v("#")]),t._v(" Loading data files with concurrency")]),t._v(" "),a("p",[t._v("Most of the components in this dashboard app depends on the 211 data: the filter controls need to display all the regions and call categories that exist in the data, not to mention the charts. Therefore, we first need to load the 211 data into the app. This is a fairly large "),a("code",[t._v(".csv")]),t._v(" file (approx. 2.5MB) saved in a  "),a("a",{attrs:{href:"https://cran.r-project.org/web/packages/tidyr/vignettes/tidy-data.html",target:"_blank",rel:"noopener noreferrer"}},[t._v('"tidy(long)" format'),a("OutboundLink")],1),t._v(", which takes some time to load. The file looks like the following, with each line showing a city in Rhode Island, and the number of calls in a specific category on a given date.")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",[a("code",[t._v("city,type,date,count\nBarrington,All Categories,2020-03-01,0\nBarrington,COVID-19 Control,2020-03-01,0\nBarrington,Disaster Services,2020-03-01,0\nBarrington,Food/Meals,2020-03-01,0\nBarrington,Health Care,2020-03-01,0\n")])])]),a("p",[t._v("There are also a couple of other data files that needs to be loaded: a "),a("code",[t._v("geojson")]),t._v(" file that provides the city outlines which the map is based on, and a "),a("code",[t._v("json")]),t._v("file that shows the population of each Rhode Island city, which will be used to calculate per 1000 capita number of calls. We can use JavaScript "),a("code",[t._v("Promises")]),t._v(" to concurrently load these files to reduce the time of rendering block. The code looks like this:")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// We have to make the created() lifecycle method async since we ")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// are using await ES6 syntax in the body.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("async")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("created")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" topo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pops"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("await")]),t._v(" Promise"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("all")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    d3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("csv")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/dashboard_data.csv")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("row")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loads the 211 call data")]),t._v("\n      row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("date"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// convert date column to Date")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" row"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    d3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/ri.topo.json")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loads the topojson for the map")]),t._v("\n    d3"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("json")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("/ri_pops.json")]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// loads the RI city population file")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// More operations based on the data from here ...")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("A few observations on the above code:")]),t._v(" "),a("ol",[a("li",[t._v("Data loading happens in the "),a("code",[t._v("created()")]),t._v(" "),a("a",{attrs:{href:"https://www.digitalocean.com/community/tutorials/vuejs-component-lifecycle",target:"_blank",rel:"noopener noreferrer"}},[t._v("lifecycle method"),a("OutboundLink")],1),t._v(" of the root component, which means the data will be loaded when the root component is being created. We can make this method "),a("code",[t._v("async")]),t._v(" because we are using "),a("code",[t._v("await")]),t._v(" in the function body with the ES8 "),a("code",[t._v("async/await")]),t._v(" syntax.")]),t._v(" "),a("li",[t._v("In d3 v5, data loading methods such as "),a("code",[t._v("d3.csv")]),t._v(" and "),a("code",[t._v("d3.json")]),t._v(" return "),a("code",[t._v("Promise")]),t._v("s.  "),a("code",[t._v("Promise.all()")]),t._v(" takes an array of "),a("code",[t._v("Promise")]),t._v("s and returns a "),a("code",[t._v("Promise")]),t._v(" that resolves when all of the promises in the array are resolved. This ensures that each of the function calls in the array is executed concurrently.")]),t._v(" "),a("li",[t._v("We can "),a("code",[t._v("await")]),t._v(" on  any function that returns a "),a("code",[t._v("Promise")]),t._v(", because "),a("code",[t._v("async/await")]),t._v(" is basically syntactic sugar that makes it easier to work with functions that return "),a("code",[t._v("Promise")]),t._v("s.")]),t._v(" "),a("li",[t._v("We also used the array deconstruction syntax to assign the result of "),a("code",[t._v("Promise.all()")]),t._v(" function to individual variable to be referred to later.")])]),t._v(" "),a("h3",{attrs:{id:"filter-controls-with-vue-formulate"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#filter-controls-with-vue-formulate"}},[t._v("#")]),t._v(" Filter controls with "),a("code",[t._v("Vue-Formulate")])]),t._v(" "),a("p",[a("code",[t._v("Vue-Formulate")]),t._v(" is a light-weight library for creating forms in Vue apps. It essentially provides a Vue component wrapper for every HTML form element and provides data binding and easy form validation. We used a "),a("code",[t._v("<Vue-Formulate>")]),t._v(" component for each of the drop-downs.  For example, for the first drop-down:")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("FormulateInput")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("select"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("label")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("Calls to 211 Over the Past"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("v-model")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("options.range"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v(":options")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("{Week: 'Week', Month: 'Month', 'Select Dates': 'Select Dates'}"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@input")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("handleRangeChange"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("Note that we wrote an event handler for when the value changes in the drop-down. With vanilla html "),a("code",[t._v("select")]),t._v(" element, this event is "),a("code",[t._v("v-on:change")]),t._v(", but for "),a("code",[t._v("Vue-Formulate")]),t._v(", this event is "),a("code",[t._v("v-on:input")]),t._v(". The use of "),a("code",[t._v("@")]),t._v(" is simply a shorthand to replace "),a("code",[t._v("v-")]),t._v(" prefix in Vue.")]),t._v(" "),a("h2",{attrs:{id:"next-up"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#next-up"}},[t._v("#")]),t._v(" Next up:")]),t._v(" "),a("p",[t._v("In this post we covered the overall architecture of the dashboard app and a few details in creating an outline of the app. In the next post, we will describe how we made the data visualizations.")]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/_posts/the-making-of-a-dashboard-part3.html"}},[t._v("Part 3. Making the Visualizations with d3.js")])],1)])}),[],!1,null,null,null);e.default=s.exports}}]);