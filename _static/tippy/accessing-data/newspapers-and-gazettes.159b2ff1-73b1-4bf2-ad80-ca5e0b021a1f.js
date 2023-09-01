selector_to_html = {"a[href=\"newspapers-and-gazettes-titles.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">14.4. </span>Accessing data about newspaper &amp; gazette titles<a class=\"headerlink\" href=\"#accessing-data-about-newspaper-gazette-titles\" title=\"Permalink to this heading\">#</a></h1><p>\u2018Titles\u2019 in this context refers to the names of the publications whose articles are digitised in Trove. For example: <em>Canberra Times</em>, <em>Sydney Morning Herald</em>, or <em>Commonwealth of Australia Gazette</em>.</p>", "a[href=\"newspapers-and-gazettes-pages.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">14.2. </span>Accessing data about newspaper &amp; gazette pages<a class=\"headerlink\" href=\"#accessing-data-about-newspaper-gazette-pages\" title=\"Permalink to this heading\">#</a></h1><p><img alt=\"Screenshot of the masthead at the top of a newspaper page\" src=\"../_images/16635065-level4-cropped.jpg\"/></p>", "a[href=\"#newspapers-and-gazettes\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">14. </span>Newspapers and gazettes<a class=\"headerlink\" href=\"#newspapers-and-gazettes\" title=\"Permalink to this heading\">#</a></h1><p><mark>==This might link to a fuller discussion in the contexts section?==</mark></p><p>Before you start requesting data from Trove\u2019s digitised newspapers, it\u2019s worth thinking a bit about the way newspapers are represented in Trove and the relationships between <strong>articles</strong>, <strong>pages</strong>, <strong>issues</strong>, and <strong>titles</strong>. You might think that newspapers are organised in a simple hierarchical structure with titles at the top, and articles at the bottom, but it\u2019s not quite that straighforward. Articles are linked to both pages and titles. Titles have their own API endpoint that can lead you to issues, though following an issue url will actually take you to a page. Pages have identifiers, and you can browse their contents in the Trove web interface, but they don\u2019t exist as separate entities in the API. These sorts of oddities mean that sometimes there\u2019s no direct route to the information that you want, but by thinking about what is connected to what, you can find alternative paths. For example, while there\u2019s no direct link between issues and articles, if you get the publication date and title from an issue, you can then search for articles published in that issue by using the <code class=\"docutils literal notranslate\"><span class=\"pre\">date</span></code> index and <code class=\"docutils literal notranslate\"><span class=\"pre\">title</span></code> facet.</p>", "a[href=\"newspapers-and-gazettes-issues.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">14.3. </span>Accessing data about newspaper &amp; gazette issues<a class=\"headerlink\" href=\"#accessing-data-about-newspaper-gazette-issues\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id1\" role=\"doc-backlink\">Metadata</a><a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><h3><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Get the number of issues per year for a title</a><a class=\"headerlink\" href=\"#get-the-number-of-issues-per-year-for-a-title\" title=\"Permalink to this heading\">#</a></h3><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">newspaper/title</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">gazette/title</span></code> endpoints to get the total number of digitised issues per year for a newspaper or gazette title. You just add the <code class=\"docutils literal notranslate\"><span class=\"pre\">include</span></code> parameter and set its value to <code class=\"docutils literal notranslate\"><span class=\"pre\">years</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fnewspaper%2Ftitle%2F11%3Fencoding%3Djson%26include%3Dyears\"><img alt=\"Try it!\" src=\"../_images/try-trove-api-console.svg\"/></a></p>", "a[href=\"newspapers-and-gazettes-articles.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">14.1. </span>Accessing data about newspaper and gazette articles<a class=\"headerlink\" href=\"#accessing-data-about-newspaper-and-gazette-articles\" title=\"Permalink to this heading\">#</a></h1><p><img alt=\"Screenshot of Trove web interface displaying basic article metadata\" src=\"../_images/trove-article-metadata.png\"/></p>"}
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
