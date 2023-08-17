selector_to_html = {"a[href=\"glossary.html#term-Metadata\"]": "<dt id=\"term-Metadata\">Metadata</dt><dd><p>An indented explanation of term 1</p></dd>", "a[href=\"#fig-cats\"]": "<figure class=\"align-center\" id=\"fig-cats\">\n<span id=\"index-0\"></span><div class=\"output text_html\">\n<style>\n  #altair-viz-c6fb6dcc5361419d9c312d1a64322f51.vega-embed {\n    width: 100%;\n    display: flex;\n  }\n\n  #altair-viz-c6fb6dcc5361419d9c312d1a64322f51.vega-embed details,\n  #altair-viz-c6fb6dcc5361419d9c312d1a64322f51.vega-embed details summary {\n    position: relative;\n  }\n</style>\n<div id=\"altair-viz-c6fb6dcc5361419d9c312d1a64322f51\"></div>\n<script type=\"text/javascript\">\n  var VEGA_DEBUG = (typeof VEGA_DEBUG == \"undefined\") ? {} : VEGA_DEBUG;\n  (function(spec, embedOpt){\n    let outputDiv = document.currentScript.previousElementSibling;\n    if (outputDiv.id !== \"altair-viz-c6fb6dcc5361419d9c312d1a64322f51\") {\n      outputDiv = document.getElementById(\"altair-viz-c6fb6dcc5361419d9c312d1a64322f51\");\n    }\n    const paths = {\n      \"vega\": \"https://cdn.jsdelivr.net/npm/vega@5?noext\",\n      \"vega-lib\": \"https://cdn.jsdelivr.net/npm/vega-lib?noext\",\n      \"vega-lite\": \"https://cdn.jsdelivr.net/npm/vega-lite@5.8.0?noext\",\n      \"vega-embed\": \"https://cdn.jsdelivr.net/npm/vega-embed@6?noext\",\n    };\n\n    function maybeLoadScript(lib, version) {\n      var key = `${lib.replace(\"-\", \"\")}_version`;\n      return (VEGA_DEBUG[key] == version) ?\n        Promise.resolve(paths[lib]) :\n        new Promise(function(resolve, reject) {\n          var s = document.createElement('script');\n          document.getElementsByTagName(\"head\")[0].appendChild(s);\n          s.async = true;\n          s.onload = () => {\n            VEGA_DEBUG[key] = version;\n            return resolve(paths[lib]);\n          };\n          s.onerror = () => reject(`Error loading script: ${paths[lib]}`);\n          s.src = paths[lib];\n        });\n    }\n\n    function showError(err) {\n      outputDiv.innerHTML = `<div class=\"error\" style=\"color:red;\">${err}</div>`;\n      throw err;\n    }\n\n    function displayChart(vegaEmbed) {\n      vegaEmbed(outputDiv, spec, embedOpt)\n        .catch(err => showError(`Javascript Error: ${err.message}<br>This usually means there's a typo in your chart specification. See the javascript console for the full traceback.`));\n    }\n\n    if(typeof define === \"function\" && define.amd) {\n      requirejs.config({paths});\n      require([\"vega-embed\"], displayChart, err => showError(`Error loading script: ${err.message}`));\n    } else {\n      maybeLoadScript(\"vega\", \"5\")\n        .then(() => maybeLoadScript(\"vega-lite\", \"5.8.0\"))\n        .then(() => maybeLoadScript(\"vega-embed\", \"6\"))\n        .catch(showError)\n        .then(() => displayChart(vegaEmbed));\n    }\n  })({\"config\": {\"view\": {\"continuousWidth\": 300, \"continuousHeight\": 300}}, \"data\": {\"name\": \"data-66af54b56f974c576e31d5beb8fa74f7\"}, \"mark\": {\"type\": \"bar\"}, \"encoding\": {\"color\": {\"field\": \"name\", \"legend\": null, \"type\": \"nominal\"}, \"x\": {\"axis\": {\"title\": null}, \"field\": \"name\", \"type\": \"nominal\"}, \"y\": {\"axis\": {\"format\": \"~s\", \"title\": null}, \"field\": \"total\", \"type\": \"quantitative\"}}, \"height\": 250, \"width\": 600, \"$schema\": \"https://vega.github.io/schema/vega-lite/v5.8.0.json\", \"datasets\": {\"data-66af54b56f974c576e31d5beb8fa74f7\": [{\"name\": \"Books & Libraries\", \"total\": 26612584}, {\"name\": \"Diaries, Letters & Archives\", \"total\": 5039424}, {\"name\": \"Images, Maps & Artefacts\", \"total\": 5932170}, {\"name\": \"Lists\", \"total\": 109288}, {\"name\": \"Magazines & Newsletters\", \"total\": 1807420}, {\"name\": \"Music, Audio & Video\", \"total\": 3259835}, {\"name\": \"Newspapers & Gazettes\", \"total\": 244169386}, {\"name\": \"People & Organisations\", \"total\": 1322683}, {\"name\": \"Research & Reports\", \"total\": 5456908}]}}, {\"mode\": \"vega-lite\"});\n</script></div><figcaption>\n<p><span class=\"caption-number\">Fig. 4 </span><span class=\"caption-text\">Number of resources per Trove category</span><a class=\"headerlink\" href=\"#fig-cats\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#jupyter-book-demo-page\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">Jupyter Book demo page<a class=\"headerlink\" href=\"#jupyter-book-demo-page\" title=\"Permalink to this heading\">#</a></h1><p>Trove is not one thing. <span id=\"id1\">[<a class=\"reference internal\" href=\"references.html#id18\" title=\"Tim Sherratt. Hacking Heritage: Understanding the Limits of Online Access. In H Lewi, W Smith, D von Lehn, and S Cooke, editors, The Routledge International Handbook of New Digital Practices in Galleries, Libraries, Archives, Museums and Heritage Sites, pages 116\u2013130. Routledge, London, 2019. doi:10.5281/zenodo.5035855.\">Sherratt, 2019</a>]</span></p>", "a[href=\"#trove-is\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Trove is<a class=\"headerlink\" href=\"#trove-is\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#some-basic-concepts\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Some basic concepts:<a class=\"headerlink\" href=\"#some-basic-concepts\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#la\"]": "<aside class=\"footnote brackets\" id=\"la\" role=\"note\">\n<span class=\"label\"><span class=\"fn-bracket\">[</span><a href=\"#id2\" role=\"doc-backlink\">1</a><span class=\"fn-bracket\">]</span></span>\n<p>Is Libraries Australia even a thing any more or has it been rolled into Trove?</p>\n</aside>"}
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
