(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{402:function(t,a,e){"use strict";e.r(a);var o=e(8),s=Object(o.a)({},(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("p",[t._v("This post is inspired by "),e("a",{attrs:{href:"https://medium.com/swlh/forget-matplotlib-you-should-be-using-plotly-ada76b650ff4",target:"_blank",rel:"noopener noreferrer"}},[t._v("this awesome post"),e("OutboundLink")],1),t._v(" by "),e("a",{attrs:{href:"https://medium.com/@8F3E",target:"_blank",rel:"noopener noreferrer"}},[t._v("8F3E"),e("OutboundLink")],1),t._v(" on Medium making the case for "),e("code",[t._v("plotly")]),t._v(", a wonderful Web-first cross-language data visualization platform that currently has APIs in JavaScript, Python, R, and Julia. I will be making a case for "),e("code",[t._v("altair")]),t._v(", a relatively new data visualization package that provides "),e("code",[t._v("vega")]),t._v(" and "),e("code",[t._v("vega-lite")]),t._v(" bindings for Python. "),e("code",[t._v("vega")]),t._v(" and "),e("code",[t._v("vega-lite")]),t._v(" are a grammar of visualization:")]),t._v(" "),e("blockquote",[e("p",[t._v("a declarative language for creating, saving, and sharing interactive visualization designs")])]),t._v(" "),e("p",[t._v("Similar to "),e("code",[t._v("plotly")]),t._v(", "),e("code",[t._v("vega")]),t._v(" and "),e("code",[t._v("vega-lite")]),t._v(" also use d3 to bind data to DOM elements and create data visualizations. However, unlike d3, which is meant to be a low-level library, "),e("code",[t._v("vega")]),t._v(" and "),e("code",[t._v("vega-lite")]),t._v(" provides more structured ways to create common types of visualizations. "),e("code",[t._v("vega-lite")]),t._v(" strips some of the complexity away from "),e("code",[t._v("vega")]),t._v(" at the cost of some customizability. It is capable of more easily creating most of the visualizations that can be created by "),e("code",[t._v("vega")]),t._v(". Altair provides a Python API that easily turns data stored in "),e("code",[t._v("pandas")]),t._v(" "),e("code",[t._v("DataFrames")]),t._v(" into data visualizations.")]),t._v(" "),e("p",[t._v("On the surface, both "),e("code",[t._v("plotly")]),t._v(" and "),e("code",[t._v("altair")]),t._v(" are very similar. Indeed, as Web-first data visualization libraries, they offer quite similar functionalities. In practice, however, I find myself gravitate towards "),e("code",[t._v("altair")]),t._v(" more often for a few reasons. The rest of this post will focus on these reasons. However, this is not a post to bash "),e("code",[t._v("plotly")]),t._v(". In fact, I will continue to use both libraries extensively in my work. In this post, I will provide")]),t._v(" "),e("h2",{attrs:{id:"_1-the-grammar-of-data-visualization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-the-grammar-of-data-visualization"}},[t._v("#")]),t._v(' 1. The "Grammar" of Data Visualization')]),t._v(" "),e("p",[t._v('If you are like me who came from R to Python for data science work, you will know the "holy grail" of data visualization libraries: '),e("code",[t._v("ggplot2")]),t._v(' by Hadley Wickham. I grew really comfortable with "encode" variables to '),e("code",[t._v("aesthetics")]),t._v(" and then adding different layers of "),e("code",[t._v("geoms")]),t._v(' to the chart. This "grammar" of data visualization is what I really missed when working in Python. '),e("code",[t._v("matplotlib")]),t._v(" was not designed with this in mind and the different APIs it exposes can be confusing to someone who switched from the other paradigm. "),e("code",[t._v("seaborn")]),t._v(" and the "),e("code",[t._v("pandas")]),t._v(" bindings to some extent introduced some of these ideas, but the APIs are not as structured as that of "),e("code",[t._v("ggplot2")]),t._v(". "),e("code",[t._v("plotly")]),t._v(" also has "),e("code",[t._v("plotly.express")]),t._v(" that aims to behave more like "),e("code",[t._v("seaborn")]),t._v(" that makes common statistical plots on-the-fly, but none of these libraries has a consistently structured API as that of "),e("code",[t._v("ggplot2")]),t._v(".")]),t._v(" "),e("p",[t._v("With "),e("code",[t._v("altair")]),t._v(", on the other hand, I feel right at home, if not more. Compared with the "),e("code",[t._v("ggplot2")]),t._v(" API, the "),e("code",[t._v("altair")]),t._v(" API benefits from Python's syntax and is arguably more readable than "),e("code",[t._v("ggplot2")]),t._v(" syntax:")]),t._v(" "),e("div",{staticClass:"language-python extra-class"},[e("pre",{pre:!0,attrs:{class:"language-python"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" altair "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("as")]),t._v(" alt\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" vega_datasets "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" data\n\ncars "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" data"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cars"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url\n\nalt"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Chart"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cars"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("mark_point"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("encode"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Miles_per_Gallon:Q'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Horsepower:Q'")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    color"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Origin:N'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:"/datascience-blog/assets/img/visualization-3.png",alt:""}})]),t._v(" "),e("p",[t._v("This code is very expresive. You tell altair that you need to use the "),e("code",[t._v("point")]),t._v(" as marks, You want to map (encode) "),e("code",[t._v("Miles_per_Gallon")]),t._v(" as the X-axis value, "),e("code",[t._v("Horsepower")]),t._v(" as Y-axis value, and "),e("code",[t._v("Origin")]),t._v(" as the colors of the marks. Note that the "),e("code",[t._v(":Q")]),t._v(", "),e("code",[t._v(":N")]),t._v(" are "),e("code",[t._v("altair")]),t._v(" shorthands for "),e("code",[t._v("quantitative")]),t._v(" and "),e("code",[t._v("nominal/categorical")]),t._v(" data types. Very clear and concise.")]),t._v(" "),e("p",[t._v("With "),e("code",[t._v("ggplot2")]),t._v(", the code that produces the same chart is:")]),t._v(" "),e("div",{staticClass:"language-r extra-class"},[e("pre",{pre:!0,attrs:{class:"language-r"}},[e("code",[t._v("library"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ggplot2"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\ncars "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<-")]),t._v(" read.csv"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cars.csv"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# I had to get the same dataset into R")]),t._v("\n\nggplot"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("cars"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" aes"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("x "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" Miles_per_Gallon"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" y"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Horsepower"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" colour"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Origin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" geom_point"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[e("img",{attrs:{src:"/datascience-blog/assets/img/ggplot.png",alt:""}})]),t._v(" "),e("p",[t._v('Almost the same ideas! I would say the Python code is slightly more readable, but the point is that the familiar "grammar" in '),e("code",[t._v("ggplot2")]),t._v(" is now in Python!")]),t._v(" "),e("h2",{attrs:{id:"aesthetics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#aesthetics"}},[t._v("#")]),t._v(" Aesthetics")]),t._v(" "),e("h3",{attrs:{id:"_1-default-aesthetics"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-default-aesthetics"}},[t._v("#")]),t._v(" 1. Default aesthetics")]),t._v(" "),e("p",[t._v("Since the looks of visualizations can be customized and themed (I will look into that aspect in the next section), I am only comparing default aethetics here. I have long disliked the "),e("code",[t._v("ggplot2")]),t._v("'s default color palette. "),e("code",[t._v("Plotly")]),t._v(" (below) has a similar default look. Both have colored backgrounds for the chart region that reduces the contrast of the chart elements and arguably make the chart slightly more difficult to read. "),e("code",[t._v("altair")]),t._v("'s default look, on the other hand, look very clean. Default color stand out against the white background. The only thing that I don't like is the grid which can make the chart look busy, but that can be easily adjusted with configuration, which segues to the next section of customizability.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/datascience-blog/assets/img/newplot-1.png",alt:""}})]),t._v(" "),e("h3",{attrs:{id:"_2-theming-and-customization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-theming-and-customization"}},[t._v("#")]),t._v(" 2. Theming and customization")]),t._v(" "),e("p",[t._v("Almost all of the libraries mentioned in this post support theming and extensive customizations that change the default looks of the charts. "),e("code",[t._v("seaborn")]),t._v(" provides different "),e("code",[t._v("contexts")]),t._v(" and "),e("code",[t._v("styles")]),t._v(" that controls the default looks of charts. "),e("code",[t._v("ggplot2")]),t._v(" has the "),e("code",[t._v("ggthemes")]),t._v(" package that allows theming, and "),e("code",[t._v("plotly")]),t._v(" also supports "),e("a",{attrs:{href:"https://plotly.com/python/templates/",target:"_blank",rel:"noopener noreferrer"}},[t._v("themes"),e("OutboundLink")],1),t._v(" (I really like the 'simple_white\" theme that makes the charts look pretty darn good). Since "),e("code",[t._v("altair")]),t._v(" is built on "),e("code",[t._v("vega")]),t._v(", it supports all "),e("a",{attrs:{href:"https://vega.github.io/vega-themes/",target:"_blank",rel:"noopener noreferrer"}},[e("code",[t._v("vega")]),t._v(" themes"),e("OutboundLink")],1),t._v(" that you "),e("strong",[t._v("have")]),t._v(" to try out.")]),t._v(" "),e("p",[t._v("When it comes to customization, this is where "),e("code",[t._v("altair")]),t._v(" truly shines. While all these libraries are deeply customizable, these customization options could be buried in their extensive APIs, which can be difficult to find. With "),e("code",[t._v("altair")]),t._v(", configurations of each element of the charts, such as axes, makrs, titles, and headers, are logically organized together and clearly documented both in "),e("code",[t._v("altair")]),t._v(" and "),e("code",[t._v("vega-lite")]),t._v(" documentations. Foe example, you can easily find the options for "),e("code",[t._v("titleFontSize")]),t._v(" or "),e("code",[t._v("subtitleFontWeight")]),t._v(" that you can adjust, within the "),e("code",[t._v("configure_title()")]),t._v(" function exposed by the "),e("code",[t._v("Chart")]),t._v(" object that you create each time you build a new visualization. After you use these settings, you can save them in a default config object, which is simply a JSON that controls how each element should look by default, and you can use that config object as your default theme. [This Medium] post has a lot more details on default theming in "),e("code",[t._v("altair")]),t._v(" based on data visualization guidelines.")]),t._v(" "),e("p",[t._v("Below is a graph that I created recently for work with "),e("code",[t._v("altair")]),t._v(" using my own defalt theme after a short learning curve.")]),t._v(" "),e("p",[e("img",{attrs:{src:"/datascience-blog/assets/img/visualization-8.png",alt:""}})]),t._v(" "),e("h2",{attrs:{id:"powerful-data-transformations"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#powerful-data-transformations"}},[t._v("#")]),t._v(" Powerful Data Transformations")]),t._v(" "),e("p",[e("code",[t._v("altair")]),t._v(" has strong built-in support for transforming the data being passed to it before they are visualized, which work like "),e("code",[t._v("stat_*()")]),t._v(" functions in "),e("code",[t._v("ggplot2")]),t._v(". Indeed, all these transformations can be done in "),e("code",[t._v("pandas")]),t._v(" beforehand, but "),e("code",[t._v("altair")]),t._v(" data transformations have wonderful supports for data stored in "),e("code",[t._v("json")]),t._v("s and "),e("code",[t._v("geojson")]),t._v("s. That allows you to link data in a "),e("code",[t._v("DataFrame")]),t._v(" and a "),e("code",[t._v("geojson")]),t._v(" which can be really useful in many settings. The code with "),e("code",[t._v("altair")]),t._v(" shown earlier, for example, auotmatically downloads a "),e("code",[t._v("json")]),t._v(" file and creates the visualization. No pandas DataFrame was ever needed.")]),t._v(" "),e("h2",{attrs:{id:"portable-and-sharable"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#portable-and-sharable"}},[t._v("#")]),t._v(" Portable and Sharable")]),t._v(" "),e("p",[t._v("Although the ideal working environment for "),e("code",[t._v("altair")]),t._v(" is Jupyter notebooks, the data visualizations created by "),e("code",[t._v("altair")]),t._v(" can be saved in png, svg, and html formats. You can also save them as "),e("code",[t._v("vega-lite")]),t._v(" schemas that can be embedded directly into Web projects.")]),t._v(" "),e("h2",{attrs:{id:"when-not-to-use-altair"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#when-not-to-use-altair"}},[t._v("#")]),t._v(" When not to use "),e("code",[t._v("altair")]),t._v("?")]),t._v(" "),e("p",[e("code",[t._v("altair")]),t._v(" is not designed for larger datasets. It saves all data it uses into a "),e("code",[t._v("vega-lite")]),t._v(" schema, which is then rendered. If you have a large data file with millions of datapoints, then "),e("code",[t._v("altair")]),t._v(" is not for you. You might want to look into "),e("code",[t._v("plotly")]),t._v(" which has great WebGL support, or "),e("code",[t._v("kepler.gl")]),t._v(" if you are doing large-scale geospatial analysis.")]),t._v(" "),e("p",[t._v("In any other situation, "),e("code",[t._v("altair")]),t._v(" will be a worthy addtion to your tool chain. Now you can even set altair as pandas backend for "),e("code",[t._v("pandas")]),t._v(" ("),e("a",{attrs:{href:"https://github.com/altair-viz/altair_pandas",target:"_blank",rel:"noopener noreferrer"}},[t._v("details here"),e("OutboundLink")],1),t._v(") for quick exploratory analyses. You can also use "),e("code",[t._v("StreamLit")]),t._v(" with "),e("code",[t._v("altair")]),t._v(" to build data dashboards. My next blog post will be on how to use "),e("code",[t._v("altair")]),t._v(" to create beautiful interactive maps with "),e("code",[t._v("geojson")]),t._v(" and "),e("code",[t._v("topojson")]),t._v(". Please stay tuned!")])])}),[],!1,null,null,null);a.default=s.exports}}]);