selector_to_html = {"a[href=\"#contexts-not-collections\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.2. </span>Contexts not collections<a class=\"headerlink\" href=\"#contexts-not-collections\" title=\"Permalink to this heading\">#</a></h2><p>The categories that contain a specific type of resource, such as <strong>Newspapers &amp; Gazettes</strong>, are relatively easy to understand \u2013 they operate as distinct collections with clear boundaries. But the categories that contain aggregated content are more complicated, and sometimes confusing.</p><p>The first thing to note is that individual resources can appear in more than one of these categories. For example, if you search for <a class=\"reference external\" href=\"https://trove.nla.gov.au/search?keyword=title%3A%22Tasmania%20mineral%20chart%20series%22\">\u201cTasmanian Mineral Chart Series\u201d</a> you\u2019ll be presented with the same set of results in both the <strong>Research &amp; Reports</strong> and <strong>Images, Maps &amp; Artefacts</strong> categories. Why does this happen? The clue is in the formats of the matched resources \u2013 all of them are described both as <code class=\"docutils literal notranslate\"><span class=\"pre\">Map</span></code> and <code class=\"docutils literal notranslate\"><span class=\"pre\">Government</span> <span class=\"pre\">publication</span></code>. Unsuprisingly, resources with the format <code class=\"docutils literal notranslate\"><span class=\"pre\">Map</span></code> end up in the <strong>Images, Maps &amp; Artefacts</strong> category. But those described as <code class=\"docutils literal notranslate\"><span class=\"pre\">Government</span> <span class=\"pre\">publication</span></code> are routed to <strong>Research &amp; Reports</strong>. Rather than choosing between competing categories, Trove adds them to both.</p>", "a[href=\"#distribution-of-formats-across-categories\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.6. </span>Distribution of formats across categories<a class=\"headerlink\" href=\"#distribution-of-formats-across-categories\" title=\"Permalink to this heading\">#</a></h2><p>You can use the <code class=\"docutils literal notranslate\"><span class=\"pre\">format</span></code> facet to see how different types of resources are grouped within categories. Here\u2019s the number of different formats in each category according to the <code class=\"docutils literal notranslate\"><span class=\"pre\">format</span></code> facet.</p>", "a[href=\"#all-categories-are-not-the-same\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.1. </span>All categories are not the same<a class=\"headerlink\" href=\"#all-categories-are-not-the-same\" title=\"Permalink to this heading\">#</a></h2><p>Broadly speaking, there are two types of categories in Trove: those that aggregate content, in various formats, from range of organisations and sources; and those that are limited to a specific type of resource created or managed by the NLA.</p><p>Categories that contain aggregated content in a variety of formats:</p>", "a[href=\"#categories-and-contributors\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.7. </span>Categories and contributors<a class=\"headerlink\" href=\"#categories-and-contributors\" title=\"Permalink to this heading\">#</a></h2><p>Mix of contributors will also be different</p>", "a[href=\"#all-categories-not-the-same\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.1. </span>All categories are not the same<a class=\"headerlink\" href=\"#all-categories-are-not-the-same\" title=\"Permalink to this heading\">#</a></h2><p>Broadly speaking, there are two types of categories in Trove: those that aggregate content, in various formats, from range of organisations and sources; and those that are limited to a specific type of resource created or managed by the NLA.</p><p>Categories that contain aggregated content in a variety of formats:</p>", "a[href=\"#number-of-resources-in-each-category\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.5. </span>Number of resources in each category<a class=\"headerlink\" href=\"#number-of-resources-in-each-category\" title=\"Permalink to this heading\">#</a></h2><p>We can use the Trove API to access data about most categories. For example, here\u2019s the total number of resources per category.</p>", "a[href=\"#categories\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.9. </span>Categories<a class=\"headerlink\" href=\"#categories\" title=\"Permalink to this heading\">#</a></h2><p>But why does <a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F9439997%3Freclevel%3Dfull%26include%3Dworkversions%2Choldings\">this work</a> show up in Research? No mention of data sets or theses, and not held by an IR. Because it\u2019s a \u2018Government publication\u2019?</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F81126945%3Freclevel%3Dfull%26include%3Dworkversions\">This record</a> combines a book with a chapter from the book (held in an IR).</p>", "a[href=\"works-and-versions.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">4. </span>Works and versions<a class=\"headerlink\" href=\"#works-and-versions\" title=\"Permalink to this heading\">#</a></h1><p>And editions and collections</p>", "a[href=\"#working-notes\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.8. </span>Working notes<a class=\"headerlink\" href=\"#working-notes\" title=\"Permalink to this heading\">#</a></h2><p>Zones were called \u201ccollection views\u201d in development. More accurate.</p><p>Exploration of overlaps</p>", "a[href=\"#what-ends-up-where\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.3. </span>What ends up where?<a class=\"headerlink\" href=\"#what-ends-up-where\" title=\"Permalink to this heading\">#</a></h2><p>But how do formats get associated with categories? The following table is included in the <a class=\"reference external\" href=\"https://trove.nla.gov.au/partners/partner-services/contribute/trove-data-dictionary\">Trove Data Dictionary</a> to help contributors prepare their metadata for ingest. The contents of the <code class=\"docutils literal notranslate\"><span class=\"pre\">type</span></code> field are used to determine categories, with <strong>Books &amp; Libraries</strong> the default destination.</p>", "a[href=\"#categories-and-zones\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2. </span>Categories and zones<a class=\"headerlink\" href=\"#categories-and-zones\" title=\"Permalink to this heading\">#</a></h1><p>Trove\u2019s resources are divided into <strong>categories</strong>. Understanding the nature and content of these categories will help you construct effective searches and access useful data.</p><p>There are ten categories in Trove:</p>", "a[href=\"#from-zones-to-categories\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">2.4. </span>From zones to categories<a class=\"headerlink\" href=\"#from-zones-to-categories\" title=\"Permalink to this heading\">#</a></h2><p>Trove originally delivered resources through \u2018zones\u2019 rather than \u2018categories\u2019. Trove\u2019s 2020 update introduced \u2018categories\u2019 and redistributed content across them. However, this change only applied to the web interface \u2013 the API continued to use zones until the introduction of API version 3 in 2023.</p>"}
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
