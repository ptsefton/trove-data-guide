selector_to_html = {"a[href=\"harvest-complete-results.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20.1. </span>HOW TO: Harvest a complete set of search results using the Trove API<a class=\"headerlink\" href=\"#how-to-harvest-a-complete-set-of-search-results-using-the-trove-api\" title=\"Permalink to this heading\">#</a></h1><p>See <a class=\"reference internal\" href=\"../../accessing-data/trove-api-intro.html\"><span class=\"doc\">Trove API introduction</span></a> for general information about using the Trove API.</p>", "a[href=\"#api\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">20. </span>API<a class=\"headerlink\" href=\"#api\" title=\"Permalink to this heading\">#</a></h1>"}
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
