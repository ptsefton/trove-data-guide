selector_to_html = {"a[href=\"#data-access-options\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">5.1. </span>Data access options<a class=\"headerlink\" href=\"#data-access-options\" title=\"Permalink to this heading\">#</a></h1><p>There are a number of ways in which you can access data from Trove:</p>", "a[href=\"#using-the-web-interface\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Using the web interface<a class=\"headerlink\" href=\"#using-the-web-interface\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#downloading-pre-harvested-datasets\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Downloading pre-harvested datasets<a class=\"headerlink\" href=\"#downloading-pre-harvested-datasets\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#querying-apis\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Querying APIs<a class=\"headerlink\" href=\"#querying-apis\" title=\"Permalink to this heading\">#</a></h2>"}
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
