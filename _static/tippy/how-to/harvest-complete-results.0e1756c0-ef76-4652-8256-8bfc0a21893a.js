selector_to_html = {"a[href=\"../accessing-data/trove-api-intro.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">14.2. </span>Trove API introduction<a class=\"headerlink\" href=\"#trove-api-introduction\" title=\"Permalink to this heading\">#</a></h1><p>Use the Trove Application Programming Interface (API) to get direct access to Trove data. Just make a request  and get back data in a predictable, structured format that computers can understand.</p>", "a[href=\"#managing-categories\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Managing categories<a class=\"headerlink\" href=\"#managing-categories\" title=\"Permalink to this heading\">#</a></h2><p>Because of the complexities of sorting and pagination, you\u2019re limited in your ability to harvest records from multiple categories \u2013 either you select a <em>single</em> category, or you get <em>every</em> category by setting the <code class=\"docutils literal notranslate\"><span class=\"pre\">category</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">all</span></code>. If you use the <code class=\"docutils literal notranslate\"><span class=\"pre\">all</span></code> option, your results can include a mix of different record types, as different categories use different formats. The record types, grouped by category, are:</p>", "a[href=\"#understanding-pagination\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Understanding pagination<a class=\"headerlink\" href=\"#understanding-pagination\" title=\"Permalink to this heading\">#</a></h2><p>To harvest a large set of results you need to break it up into manageable chunks \u2013 requesting and downloading each chunk in turn. This is known as pagination. There are a couple of query parameters and results fields you need to understand to control the pagination process.</p><p>You can set the number of results in each chunk using the <code class=\"docutils literal notranslate\"><span class=\"pre\">n</span></code> parameter. The default is only <code class=\"docutils literal notranslate\"><span class=\"pre\">20</span></code>, so you probably want to increase that to <code class=\"docutils literal notranslate\"><span class=\"pre\">100</span></code> (the maximum allowed).</p>", "a[href=\"#using-the-bulkharvest-parameter\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Using the <code class=\"docutils literal notranslate\"><span class=\"pre\">bulkHarvest</span></code> parameter<a class=\"headerlink\" href=\"#using-the-bulkharvest-parameter\" title=\"Permalink to this heading\">#</a></h2><p>If you\u2019re harvesting a large result set you need to set the <code class=\"docutils literal notranslate\"><span class=\"pre\">bulkHarvest</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">true</span></code>. Why? By default, Trove returns search results in relevance order. However, assigning consistent relevance scores is tricky in massive collections like Trove, and the scores of individual records can vary between API requests. This means that if you harvest results in relevance order you can sometimes get duplicate records, or miss records completely. Setting <code class=\"docutils literal notranslate\"><span class=\"pre\">bulkHarvest=true</span></code> sorts records by their identifiers, rather than their relevance. This ensures that you get everything.</p>", "a[href=\"#handling-results\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Handling results<a class=\"headerlink\" href=\"#handling-results\" title=\"Permalink to this heading\">#</a></h2><p>If your aim is to download a complete set of search results, then obviously you need to have some way of saving the responses you get back from the Trove API! How you do this depends on the data you actually want and the form you want it in. For example, if you only wanted to save the titles and dates of newspaper articles, you might just extract them from the JSON responses and save them in a CSV file. There are many possibilities!</p><p>The examples below will save the complete JSON item records in a <a class=\"reference external\" href=\"http://ndjson.org/\">newline delimited JSON file (NDJSON)</a>. As the name suggests, NDJSON files have one JSON object per line. It\u2019s a convenient and scalable method, as you can simply add each new record to the end of an existing file. You can decide later on what fields you want to extract from the JSON, or simply load the whole dataset into a tool like Pandas.</p>", "a[href=\"#harvesting-from-a-single-category\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Harvesting from a single category<a class=\"headerlink\" href=\"#harvesting-from-a-single-category\" title=\"Permalink to this heading\">#</a></h2><p>This example harvests all records containing the term \u2018wragge\u2019 from the <code class=\"docutils literal notranslate\"><span class=\"pre\">magazine</span></code> category and saves the results in a file called <code class=\"docutils literal notranslate\"><span class=\"pre\">results.ndjson</span></code>.</p>", "a[href=\"../accessing-data/using-web-interface.html#bulk-export\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Bulk export<a class=\"headerlink\" href=\"#bulk-export\" title=\"Permalink to this heading\">#</a></h2>", "a[href=\"#harvesting-from-all-categories\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\">Harvesting from all categories<a class=\"headerlink\" href=\"#harvesting-from-all-categories\" title=\"Permalink to this heading\">#</a></h2><p>This example sets the <code class=\"docutils literal notranslate\"><span class=\"pre\">category</span></code> parameter to <code class=\"docutils literal notranslate\"><span class=\"pre\">all</span></code> to harvest search results from <em>every</em> category (except web archives). Different categories deliver their results in different formats, so either you try to normalise these into some standard structure, or you save them into separate files. This example creates a separate NDJSON results file for each of these record types in the search results.</p>", "a[href=\"#how-to-harvest-a-complete-set-of-search-results-using-the-trove-api\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">HOW TO: Harvest a complete set of search results using the Trove API<a class=\"headerlink\" href=\"#how-to-harvest-a-complete-set-of-search-results-using-the-trove-api\" title=\"Permalink to this heading\">#</a></h1><p>See <a class=\"reference internal\" href=\"../accessing-data/trove-api-intro.html\"><span class=\"doc\">Trove API introduction</span></a> for general information about using the Trove API.</p>"}
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
