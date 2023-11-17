selector_to_html = {"a[href=\"#how-many-hours-of-recordings-are-available-online\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\">How many hours of recordings are available online?</a><a class=\"headerlink\" href=\"#how-many-hours-of-recordings-are-available-online\" title=\"Permalink to this heading\">#</a></h2><p>Information about the <code class=\"docutils literal notranslate\"><span class=\"pre\">duration</span></code> of each audio file can be <a class=\"reference internal\" href=\"accessing-data.html#details-of-available-downloads\"><span class=\"std std-ref\">extracted from the audio player</span></a>. Adding the values together gives us a total for all the oral histories online.</p>", "a[href=\"#finding-oral-histories\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Finding oral histories</a><a class=\"headerlink\" href=\"#finding-oral-histories\" title=\"Permalink to this heading\">#</a></h2><p>Items from the NLA\u2019s oral history collection can be found in Trove\u2019s <strong>Music, Audio, &amp; Video</strong> category. If you\u2019re only interested in what\u2019s available online, the standard approach to finding digitised resources seems to work effectively \u2013 <a class=\"reference external\" href=\"https://trove.nla.gov.au/search/category/music?keyword=%22nla.obj%22&amp;l-format=Sound%2FInterview,%20lecture,%20talk&amp;l-availability=y\">search in <strong>Music, Audio, &amp; Video</strong> category</a> for <code class=\"docutils literal notranslate\"><span class=\"pre\">\"nla.obj\"</span></code>, with the <code class=\"docutils literal notranslate\"><span class=\"pre\">availability</span></code> facet set to <code class=\"docutils literal notranslate\"><span class=\"pre\">y</span></code>, and the <code class=\"docutils literal notranslate\"><span class=\"pre\">format</span></code> facet set to <code class=\"docutils literal notranslate\"><span class=\"pre\">Sound/Interview,</span> <span class=\"pre\">lecture,</span> <span class=\"pre\">talk</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22%26category%3Dmusic%26l-format%3DSound%2FInterview%2C+lecture%2C+talk%26l-availability%3Dy%26encoding%3Djson&amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"#how-are-the-interviews-distributed-over-time\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">How are the interviews distributed over time?</a><a class=\"headerlink\" href=\"#how-are-the-interviews-distributed-over-time\" title=\"Permalink to this heading\">#</a></h2><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> field tells you when each interview was recorded.</p>", "a[href=\"accessing-data.html#details-of-available-downloads\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id8\" role=\"doc-backlink\">Details of available downloads</a><a class=\"headerlink\" href=\"#details-of-available-downloads\" title=\"Permalink to this heading\">#</a></h3><p>When you click on the \u2018Download\u2019 button in the audio player, a window pops up with links to download the summary/transcript and any audio files. The contents of this pop-up are generated from a Javascript file. It\u2019s possible to access this Javascript file directly and extract details about available downloads.</p><p>The Javascript file includes the following fields:</p>", "a[href=\"#overview-of-oral-histories\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">32.1. </span>Overview of oral histories<a class=\"headerlink\" href=\"#overview-of-oral-histories\" title=\"Permalink to this heading\">#</a></h1><p>The National Library of Australia holds over <a class=\"reference external\" href=\"https://www.nla.gov.au/collections/what-we-collect/oral-history-and-folklore\">55,000 hours of oral history and folklore recordings</a> dating back to the 1950s. This collection is being made available online, and many recordings can now be listened to using <a class=\"reference external\" href=\"https://trove.nla.gov.au/help/navigating/audio-player\">Trove\u2019s audio player</a>.</p>", "a[href=\"#licensing-of-oral-histories\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Licensing of oral histories</a><a class=\"headerlink\" href=\"#licensing-of-oral-histories\" title=\"Permalink to this heading\">#</a></h2><p>If you click through to a digitised copy of an oral history in Trove, you\u2019ll be presented with a licence agreement that you\u2019ll need to accept before using the recording. The agreement notes:</p>", "a[href=\"#what-are-the-oral-histories-about\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id8\" role=\"doc-backlink\">What are the oral histories about?</a><a class=\"headerlink\" href=\"#what-are-the-oral-histories-about\" title=\"Permalink to this heading\">#</a></h2><p>The <code class=\"docutils literal notranslate\"><span class=\"pre\">subject</span></code> field contains standard(ish) subject headings that provide an insight into the topics of oral history interviews.</p><p>Here\u2019s the top ten subjects of oral histories that are not online.</p>", "a[href=\"#what-collections-do-the-oral-histories-belong-to\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id9\" role=\"doc-backlink\">What collections do the oral histories belong to?</a><a class=\"headerlink\" href=\"#what-collections-do-the-oral-histories-belong-to\" title=\"Permalink to this heading\">#</a></h2><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">isPartOf</span></code> field in the record metadata to examine thematic collections within the larger oral history collection.</p>", "a[href=\"#how-many-oral-histories-are-there\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">How many oral histories are there?</a><a class=\"headerlink\" href=\"#how-many-oral-histories-are-there\" title=\"Permalink to this heading\">#</a></h2><p>I\u2019ve attempted to harvest details of all the NLA\u2019s oral histories described in Trove, both online and not online. I\u2019ve saved the results as a CSV file in <a class=\"reference external\" href=\"https://github.com/GLAM-Workbench/trove-oral-histories-data\">this GitHub repository</a>. Using this data you can explore the shape of the collection.</p>", "a[href=\"#how-many-oral-histories-have-transcripts-or-summaries-you-can-download\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\">How many oral histories have transcripts or summaries you can download?</a><a class=\"headerlink\" href=\"#how-many-oral-histories-have-transcripts-or-summaries-you-can-download\" title=\"Permalink to this heading\">#</a></h2><p>Many of the oral histories online have <a class=\"reference internal\" href=\"accessing-data.html#oral-histories-transcripts\"><span class=\"std std-ref\">summaries or transcripts that you can download</span></a>.</p>", "a[href=\"accessing-data.html#oral-histories-transcripts\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id9\" role=\"doc-backlink\">Transcripts and summaries</a><a class=\"headerlink\" href=\"#transcripts-and-summaries\" title=\"Permalink to this heading\">#</a></h2><p>Each oral history record has a single text file combining summaries and transcripts for every session of the interview. The urls used to download this file have the pattern:</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">https://nla.gov.au/tarkine/listen/download/transcript/[NLA.OBJ</span> <span class=\"pre\">ID]</span></code></p>", "a[href=\"#chart-online-years\"]": "<figure class=\"align-default\" id=\"chart-online-years\">\n<div class=\"output text_html\">\n<style>\n  #altair-viz-03cec94065ad44d2bd67b191227ddcae.vega-embed {\n    width: 100%;\n    display: flex;\n  }\n\n  #altair-viz-03cec94065ad44d2bd67b191227ddcae.vega-embed details,\n  #altair-viz-03cec94065ad44d2bd67b191227ddcae.vega-embed details summary {\n    position: relative;\n  }\n</style>\n<div id=\"altair-viz-03cec94065ad44d2bd67b191227ddcae\"></div>\n<script type=\"text/javascript\">\n  var VEGA_DEBUG = (typeof VEGA_DEBUG == \"undefined\") ? {} : VEGA_DEBUG;\n  (function(spec, embedOpt){\n    let outputDiv = document.currentScript.previousElementSibling;\n    if (outputDiv.id !== \"altair-viz-03cec94065ad44d2bd67b191227ddcae\") {\n      outputDiv = document.getElementById(\"altair-viz-03cec94065ad44d2bd67b191227ddcae\");\n    }\n    const paths = {\n      \"vega\": \"https://cdn.jsdelivr.net/npm/vega@5?noext\",\n      \"vega-lib\": \"https://cdn.jsdelivr.net/npm/vega-lib?noext\",\n      \"vega-lite\": \"https://cdn.jsdelivr.net/npm/vega-lite@5.8.0?noext\",\n      \"vega-embed\": \"https://cdn.jsdelivr.net/npm/vega-embed@6?noext\",\n    };\n\n    function maybeLoadScript(lib, version) {\n      var key = `${lib.replace(\"-\", \"\")}_version`;\n      return (VEGA_DEBUG[key] == version) ?\n        Promise.resolve(paths[lib]) :\n        new Promise(function(resolve, reject) {\n          var s = document.createElement('script');\n          document.getElementsByTagName(\"head\")[0].appendChild(s);\n          s.async = true;\n          s.onload = () => {\n            VEGA_DEBUG[key] = version;\n            return resolve(paths[lib]);\n          };\n          s.onerror = () => reject(`Error loading script: ${paths[lib]}`);\n          s.src = paths[lib];\n        });\n    }\n\n    function showError(err) {\n      outputDiv.innerHTML = `<div class=\"error\" style=\"color:red;\">${err}</div>`;\n      throw err;\n    }\n\n    function displayChart(vegaEmbed) {\n      vegaEmbed(outputDiv, spec, embedOpt)\n        .catch(err => showError(`Javascript Error: ${err.message}<br>This usually means there's a typo in your chart specification. See the javascript console for the full traceback.`));\n    }\n\n    if(typeof define === \"function\" && define.amd) {\n      requirejs.config({paths});\n      require([\"vega-embed\"], displayChart, err => showError(`Error loading script: ${err.message}`));\n    } else {\n      maybeLoadScript(\"vega\", \"5\")\n        .then(() => maybeLoadScript(\"vega-lite\", \"5.8.0\"))\n        .then(() => maybeLoadScript(\"vega-embed\", \"6\"))\n        .catch(showError)\n        .then(() => displayChart(vegaEmbed));\n    }\n  })({\"config\": {\"view\": {\"continuousWidth\": 300, \"continuousHeight\": 300}}, \"data\": {\"name\": \"data-b0a7f3d528dc86ad8a9f45e6edc6d883\"}, \"mark\": {\"type\": \"bar\", \"size\": 4}, \"encoding\": {\"color\": {\"field\": \"online_status\", \"type\": \"nominal\"}, \"tooltip\": [{\"field\": \"online_status\", \"type\": \"nominal\"}, {\"field\": \"year\", \"format\": \"%Y\", \"type\": \"temporal\"}, {\"field\": \"count\", \"type\": \"quantitative\"}], \"x\": {\"field\": \"year\", \"type\": \"temporal\"}, \"y\": {\"field\": \"count\", \"type\": \"quantitative\"}}, \"width\": 600, \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.8.0.json\", \"datasets\": {\"data-b0a7f3d528dc86ad8a9f45e6edc6d883\": [{\"year\": \"1982\", \"online_status\": \"not online\", \"count\": 599}, {\"year\": \"1986\", \"online_status\": \"not online\", \"count\": 542}, {\"year\": \"1985\", \"online_status\": \"not online\", \"count\": 479}, {\"year\": \"2008\", \"online_status\": \"not online\", \"count\": 413}, {\"year\": \"1980\", \"online_status\": \"not online\", \"count\": 397}, {\"year\": \"1983\", \"online_status\": \"not online\", \"count\": 349}, {\"year\": \"1995\", \"online_status\": \"not online\", \"count\": 344}, {\"year\": \"2000\", \"online_status\": \"not online\", \"count\": 332}, {\"year\": \"1975\", \"online_status\": \"not online\", \"count\": 315}, {\"year\": \"1993\", \"online_status\": \"not online\", \"count\": 284}, {\"year\": \"2013\", \"online_status\": \"not online\", \"count\": 284}, {\"year\": \"1987\", \"online_status\": \"not online\", \"count\": 282}, {\"year\": \"1994\", \"online_status\": \"not online\", \"count\": 274}, {\"year\": \"1987\", \"online_status\": \"online\", \"count\": 267}, {\"year\": \"1981\", \"online_status\": \"not online\", \"count\": 263}, {\"year\": \"1998\", \"online_status\": \"not online\", \"count\": 263}, {\"year\": \"2001\", \"online_status\": \"not online\", \"count\": 257}, {\"year\": \"2012\", \"online_status\": \"not online\", \"count\": 256}, {\"year\": \"1992\", \"online_status\": \"not online\", \"count\": 252}, {\"year\": \"1977\", \"online_status\": \"not online\", \"count\": 252}, {\"year\": \"2007\", \"online_status\": \"not online\", \"count\": 246}, {\"year\": \"2004\", \"online_status\": \"not online\", \"count\": 243}, {\"year\": \"2019\", \"online_status\": \"not online\", \"count\": 243}, {\"year\": \"2005\", \"online_status\": \"not online\", \"count\": 241}, {\"year\": \"2006\", \"online_status\": \"not online\", \"count\": 238}, {\"year\": \"1990\", \"online_status\": \"not online\", \"count\": 237}, {\"year\": \"1976\", \"online_status\": \"not online\", \"count\": 232}, {\"year\": \"1989\", \"online_status\": \"not online\", \"count\": 230}, {\"year\": \"2009\", \"online_status\": \"not online\", \"count\": 225}, {\"year\": \"1991\", \"online_status\": \"not online\", \"count\": 225}, {\"year\": \"2011\", \"online_status\": \"online\", \"count\": 225}, {\"year\": \"1984\", \"online_status\": \"not online\", \"count\": 224}, {\"year\": \"1999\", \"online_status\": \"not online\", \"count\": 217}, {\"year\": \"2014\", \"online_status\": \"not online\", \"count\": 210}, {\"year\": \"2011\", \"online_status\": \"not online\", \"count\": 206}, {\"year\": \"2015\", \"online_status\": \"not online\", \"count\": 205}, {\"year\": \"1974\", \"online_status\": \"not online\", \"count\": 202}, {\"year\": \"1978\", \"online_status\": \"not online\", \"count\": 197}, {\"year\": \"2003\", \"online_status\": \"not online\", \"count\": 192}, {\"year\": \"1979\", \"online_status\": \"not online\", \"count\": 191}, {\"year\": \"2012\", \"online_status\": \"online\", \"count\": 191}, {\"year\": \"1988\", \"online_status\": \"not online\", \"count\": 189}, {\"year\": \"1995\", \"online_status\": \"online\", \"count\": 185}, {\"year\": \"1997\", \"online_status\": \"not online\", \"count\": 185}, {\"year\": \"1996\", \"online_status\": \"not online\", \"count\": 183}, {\"year\": \"1970\", \"online_status\": \"not online\", \"count\": 179}, {\"year\": \"2022\", \"online_status\": \"not online\", \"count\": 172}, {\"year\": \"1973\", \"online_status\": \"not online\", \"count\": 168}, {\"year\": \"2010\", \"online_status\": \"not online\", \"count\": 165}, {\"year\": \"2018\", \"online_status\": \"not online\", \"count\": 163}, {\"year\": \"1989\", \"online_status\": \"online\", \"count\": 152}, {\"year\": \"2010\", \"online_status\": \"online\", \"count\": 150}, {\"year\": \"1994\", \"online_status\": \"online\", \"count\": 149}, {\"year\": \"2014\", \"online_status\": \"online\", \"count\": 147}, {\"year\": \"1993\", \"online_status\": \"online\", \"count\": 142}, {\"year\": \"1982\", \"online_status\": \"online\", \"count\": 139}, {\"year\": \"2013\", \"online_status\": \"online\", \"count\": 139}, {\"year\": \"1980\", \"online_status\": \"online\", \"count\": 138}, {\"year\": \"2021\", \"online_status\": \"not online\", \"count\": 135}, {\"year\": \"1984\", \"online_status\": \"online\", \"count\": 134}, {\"year\": \"2000\", \"online_status\": \"online\", \"count\": 128}, {\"year\": \"1992\", \"online_status\": \"online\", \"count\": 128}, {\"year\": \"1983\", \"online_status\": \"online\", \"count\": 128}, {\"year\": \"1981\", \"online_status\": \"online\", \"count\": 126}, {\"year\": \"2002\", \"online_status\": \"not online\", \"count\": 126}, {\"year\": \"1971\", \"online_status\": \"not online\", \"count\": 124}, {\"year\": \"1986\", \"online_status\": \"online\", \"count\": 123}, {\"year\": \"2001\", \"online_status\": \"online\", \"count\": 122}, {\"year\": \"1965\", \"online_status\": \"online\", \"count\": 122}, {\"year\": \"1973\", \"online_status\": \"online\", \"count\": 122}, {\"year\": \"1972\", \"online_status\": \"not online\", \"count\": 120}, {\"year\": \"1985\", \"online_status\": \"online\", \"count\": 118}, {\"year\": \"1976\", \"online_status\": \"online\", \"count\": 114}, {\"year\": \"2017\", \"online_status\": \"online\", \"count\": 110}, {\"year\": \"2015\", \"online_status\": \"online\", \"count\": 108}, {\"year\": \"1969\", \"online_status\": \"not online\", \"count\": 107}, {\"year\": \"1975\", \"online_status\": \"online\", \"count\": 105}, {\"year\": \"1988\", \"online_status\": \"online\", \"count\": 104}, {\"year\": \"2017\", \"online_status\": \"not online\", \"count\": 101}, {\"year\": \"1990\", \"online_status\": \"online\", \"count\": 100}, {\"year\": \"1960\", \"online_status\": \"not online\", \"count\": 100}, {\"year\": \"1972\", \"online_status\": \"online\", \"count\": 100}, {\"year\": \"1991\", \"online_status\": \"online\", \"count\": 98}, {\"year\": \"1965\", \"online_status\": \"not online\", \"count\": 93}, {\"year\": \"2016\", \"online_status\": \"online\", \"count\": 90}, {\"year\": \"1967\", \"online_status\": \"not online\", \"count\": 90}, {\"year\": \"2020\", \"online_status\": \"not online\", \"count\": 87}, {\"year\": \"2006\", \"online_status\": \"online\", \"count\": 87}, {\"year\": \"1974\", \"online_status\": \"online\", \"count\": 86}, {\"year\": \"1966\", \"online_status\": \"not online\", \"count\": 82}, {\"year\": \"1979\", \"online_status\": \"online\", \"count\": 78}, {\"year\": \"1962\", \"online_status\": \"online\", \"count\": 77}, {\"year\": \"2008\", \"online_status\": \"online\", \"count\": 76}, {\"year\": \"1971\", \"online_status\": \"online\", \"count\": 76}, {\"year\": \"1959\", \"online_status\": \"not online\", \"count\": 74}, {\"year\": \"2018\", \"online_status\": \"online\", \"count\": 73}, {\"year\": \"2022\", \"online_status\": \"online\", \"count\": 73}, {\"year\": \"1961\", \"online_status\": \"online\", \"count\": 72}, {\"year\": \"1996\", \"online_status\": \"online\", \"count\": 72}, {\"year\": \"1977\", \"online_status\": \"online\", \"count\": 71}, {\"year\": \"2005\", \"online_status\": \"online\", \"count\": 69}, {\"year\": \"2009\", \"online_status\": \"online\", \"count\": 67}, {\"year\": \"2016\", \"online_status\": \"not online\", \"count\": 66}, {\"year\": \"1968\", \"online_status\": \"not online\", \"count\": 65}, {\"year\": \"1978\", \"online_status\": \"online\", \"count\": 65}, {\"year\": \"1962\", \"online_status\": \"not online\", \"count\": 64}, {\"year\": \"1964\", \"online_status\": \"online\", \"count\": 64}, {\"year\": \"1999\", \"online_status\": \"online\", \"count\": 61}, {\"year\": \"1969\", \"online_status\": \"online\", \"count\": 58}, {\"year\": \"1960\", \"online_status\": \"online\", \"count\": 57}, {\"year\": \"1963\", \"online_status\": \"online\", \"count\": 56}, {\"year\": \"2019\", \"online_status\": \"online\", \"count\": 56}, {\"year\": \"1970\", \"online_status\": \"online\", \"count\": 53}, {\"year\": \"2007\", \"online_status\": \"online\", \"count\": 49}, {\"year\": \"1967\", \"online_status\": \"online\", \"count\": 47}, {\"year\": \"1998\", \"online_status\": \"online\", \"count\": 43}, {\"year\": \"2003\", \"online_status\": \"online\", \"count\": 40}, {\"year\": \"2002\", \"online_status\": \"online\", \"count\": 40}, {\"year\": \"1963\", \"online_status\": \"not online\", \"count\": 39}, {\"year\": \"2004\", \"online_status\": \"online\", \"count\": 39}, {\"year\": \"1964\", \"online_status\": \"not online\", \"count\": 36}, {\"year\": \"1961\", \"online_status\": \"not online\", \"count\": 35}, {\"year\": \"2023\", \"online_status\": \"not online\", \"count\": 31}, {\"year\": \"1958\", \"online_status\": \"not online\", \"count\": 31}, {\"year\": \"1968\", \"online_status\": \"online\", \"count\": 28}, {\"year\": \"1959\", \"online_status\": \"online\", \"count\": 28}, {\"year\": \"1997\", \"online_status\": \"online\", \"count\": 25}, {\"year\": \"2021\", \"online_status\": \"online\", \"count\": 25}, {\"year\": \"1966\", \"online_status\": \"online\", \"count\": 25}, {\"year\": \"1958\", \"online_status\": \"online\", \"count\": 24}, {\"year\": \"1950\", \"online_status\": \"not online\", \"count\": 21}, {\"year\": \"1956\", \"online_status\": \"online\", \"count\": 15}, {\"year\": \"1957\", \"online_status\": \"not online\", \"count\": 14}, {\"year\": \"1949\", \"online_status\": \"online\", \"count\": 13}, {\"year\": \"2020\", \"online_status\": \"online\", \"count\": 12}, {\"year\": \"1957\", \"online_status\": \"online\", \"count\": 12}, {\"year\": \"1954\", \"online_status\": \"online\", \"count\": 10}, {\"year\": \"1955\", \"online_status\": \"not online\", \"count\": 10}, {\"year\": \"2023\", \"online_status\": \"online\", \"count\": 7}, {\"year\": \"1955\", \"online_status\": \"online\", \"count\": 6}, {\"year\": \"1939\", \"online_status\": \"not online\", \"count\": 6}, {\"year\": \"1953\", \"online_status\": \"online\", \"count\": 6}, {\"year\": \"1956\", \"online_status\": \"not online\", \"count\": 6}, {\"year\": \"1952\", \"online_status\": \"online\", \"count\": 5}, {\"year\": \"1941\", \"online_status\": \"not online\", \"count\": 5}, {\"year\": \"1953\", \"online_status\": \"not online\", \"count\": 3}, {\"year\": \"1952\", \"online_status\": \"not online\", \"count\": 3}, {\"year\": \"1951\", \"online_status\": \"not online\", \"count\": 3}, {\"year\": \"1943\", \"online_status\": \"not online\", \"count\": 2}, {\"year\": \"1946\", \"online_status\": \"not online\", \"count\": 2}, {\"year\": \"1940\", \"online_status\": \"not online\", \"count\": 2}, {\"year\": \"1913\", \"online_status\": \"not online\", \"count\": 2}, {\"year\": \"1949\", \"online_status\": \"not online\", \"count\": 2}, {\"year\": \"1950\", \"online_status\": \"online\", \"count\": 2}, {\"year\": \"1951\", \"online_status\": \"online\", \"count\": 2}, {\"year\": \"1954\", \"online_status\": \"not online\", \"count\": 2}, {\"year\": \"1936\", \"online_status\": \"not online\", \"count\": 2}, {\"year\": \"1926\", \"online_status\": \"not online\", \"count\": 1}, {\"year\": \"1934\", \"online_status\": \"not online\", \"count\": 1}, {\"year\": \"1928\", \"online_status\": \"not online\", \"count\": 1}, {\"year\": \"1929\", \"online_status\": \"not online\", \"count\": 1}, {\"year\": \"1930\", \"online_status\": \"not online\", \"count\": 1}, {\"year\": \"1933\", \"online_status\": \"online\", \"count\": 1}, {\"year\": \"1903\", \"online_status\": \"not online\", \"count\": 1}, {\"year\": \"1937\", \"online_status\": \"not online\", \"count\": 1}, {\"year\": \"1938\", \"online_status\": \"not online\", \"count\": 1}, {\"year\": \"1942\", \"online_status\": \"not online\", \"count\": 1}, {\"year\": \"1945\", \"online_status\": \"not online\", \"count\": 1}, {\"year\": \"1947\", \"online_status\": \"not online\", \"count\": 1}, {\"year\": \"1948\", \"online_status\": \"not online\", \"count\": 1}, {\"year\": \"1900\", \"online_status\": \"online\", \"count\": 1}]}}, {\"mode\": \"vega-lite\"});\n</script></div><figcaption>\n<p><span class=\"caption-number\">Fig. 32.1 </span><span class=\"caption-text\">Number of oral history records by year and online status</span><a class=\"headerlink\" href=\"#chart-online-years\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>"}
skip_classes = ["headerlink", "sd-stretched-link", "sd-rounded-pill"]

window.onload = function () {
    for (const [select, tip_html] of Object.entries(selector_to_html)) {
        const links = document.querySelectorAll(`article.bd-article ${select}`);
        for (const link of links) {
            if (skip_classes.some(c => link.classList.contains(c))) {
                continue;
            }

            tippy(link, {
                content: tip_html,
                allowHTML: true,
                arrow: true,
                placement: 'auto-start', maxWidth: 500, interactive: false,

            });
        };
    };
    console.log("tippy tips loaded!");
};
