selector_to_html = {"a[href=\"#search-results-from-the-api\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id6\" role=\"doc-backlink\">Search results from the API</a><a class=\"headerlink\" href=\"#search-results-from-the-api\" title=\"Permalink to this heading\">#</a></h3><p>As <a class=\"reference internal\" href=\"overview.html#finding-oral-histories\"><span class=\"std std-ref\">described elsewhere</span></a>, you can find details of oral histories from the NLA collection that are available online by searching for <code class=\"docutils literal notranslate\"><span class=\"pre\">\"nla.obj\"</span></code> in the <code class=\"docutils literal notranslate\"><span class=\"pre\">music</span></code> category, with the <code class=\"docutils literal notranslate\"><span class=\"pre\">availability</span></code> facet set to <code class=\"docutils literal notranslate\"><span class=\"pre\">y</span></code>, and the <code class=\"docutils literal notranslate\"><span class=\"pre\">format</span></code> facet set to <code class=\"docutils literal notranslate\"><span class=\"pre\">Sound/Interview,</span> <span class=\"pre\">lecture,</span> <span class=\"pre\">talk</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22%26category%3Dmusic%26l-format%3DSound%2FInterview%2C+lecture%2C+talk%26l-availability%3Dy%26encoding%3Djson&amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"#audio-player-metadata\"]": "<figure class=\"align-default\" id=\"audio-player-metadata\">\n<a class=\"reference internal image-reference\" href=\"../../_images/audio-player-metadata.png\"><img alt=\"../../_images/audio-player-metadata.png\" src=\"../../_images/audio-player-metadata.png\" style=\"width: 200px;\"/></a>\n<figcaption>\n<p><span class=\"caption-number\">Fig. 32.2 </span><span class=\"caption-text\">Example of the metadata displayed in Trove\u2019s audio player</span><a class=\"headerlink\" href=\"#audio-player-metadata\" title=\"Permalink to this image\">#</a></p>\n</figcaption>\n</figure>", "a[href=\"#metadata\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id4\" role=\"doc-backlink\">Metadata</a><a class=\"headerlink\" href=\"#metadata\" title=\"Permalink to this heading\">#</a></h2><h3><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Downloadable dataset</a><a class=\"headerlink\" href=\"#downloadable-dataset\" title=\"Permalink to this heading\">#</a></h3><p>A CSV file containing details of oral histories from the NLA collection (both online and not online) harvested from Trove is available in <a class=\"reference external\" href=\"https://github.com/GLAM-Workbench/trove-oral-histories-data\">this GitHub repository</a>. You can <a class=\"reference external\" href=\"https://glam-workbench.net/datasette-lite/?csv=https://github.com/GLAM-Workbench/trove-oral-histories-data/blob/main/trove-oral-histories.csv#/data/trove-oral-histories\">explore the data</a> using Datasette.</p><p>Additional documentation will be added to the GLAM Workbench in coming months.</p>", "a[href=\"../how-to/harvest-digitised-resources.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">HOW TO: Harvest data relating to digitised resources<a class=\"headerlink\" href=\"#how-to-harvest-data-relating-to-digitised-resources\" title=\"Permalink to this heading\">#</a></h1><p>Harvesting data relating to digitised resources (other than newspapers) in Trove is not as simple as making a few API requests. The major problem is that digitised resources are often assembled into groups or collections, and the full details of these groupings are not available through the Trove API. This means that simply harvesting results from an API query will miss many digitised resources. In addition, the way resources are described and arranged is often inconsistent, so you can\u2019t assume that a particular type of resource will be grouped in a particular way.</p><p>As a result of these problems, a \u2018belts and braces\u2019 approach seems best \u2013 follow every possible route and harvest as many records as possible. This may result in duplicates, but these can be dealt with later. In any case, Trove already contains a large number of duplicate records for digitised resources, so some form of merging or de-duplication will always be required.</p>", "a[href=\"#downloadable-dataset\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id5\" role=\"doc-backlink\">Downloadable dataset</a><a class=\"headerlink\" href=\"#downloadable-dataset\" title=\"Permalink to this heading\">#</a></h3><p>A CSV file containing details of oral histories from the NLA collection (both online and not online) harvested from Trove is available in <a class=\"reference external\" href=\"https://github.com/GLAM-Workbench/trove-oral-histories-data\">this GitHub repository</a>. You can <a class=\"reference external\" href=\"https://glam-workbench.net/datasette-lite/?csv=https://github.com/GLAM-Workbench/trove-oral-histories-data/blob/main/trove-oral-histories.csv#/data/trove-oral-histories\">explore the data</a> using Datasette.</p><p>Additional documentation will be added to the GLAM Workbench in coming months.</p>", "a[href=\"overview.html#finding-oral-histories\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Finding oral histories</a><a class=\"headerlink\" href=\"#finding-oral-histories\" title=\"Permalink to this heading\">#</a></h2><p>Items from the NLA\u2019s oral history collection can be found in Trove\u2019s <strong>Music, Audio, &amp; Video</strong> category. If you\u2019re only interested in what\u2019s available online, the standard approach to finding digitised resources seems to work effectively \u2013 <a class=\"reference external\" href=\"https://trove.nla.gov.au/search/category/music?keyword=%22nla.obj%22&amp;l-format=Sound%2FInterview,%20lecture,%20talk&amp;l-availability=y\">search in <strong>Music, Audio, &amp; Video</strong> category</a> for <code class=\"docutils literal notranslate\"><span class=\"pre\">\"nla.obj\"</span></code>, with the <code class=\"docutils literal notranslate\"><span class=\"pre\">availability</span></code> facet set to <code class=\"docutils literal notranslate\"><span class=\"pre\">y</span></code>, and the <code class=\"docutils literal notranslate\"><span class=\"pre\">format</span></code> facet set to <code class=\"docutils literal notranslate\"><span class=\"pre\">Sound/Interview,</span> <span class=\"pre\">lecture,</span> <span class=\"pre\">talk</span></code>.</p><p><a class=\"reference external\" href=\"https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3D%22nla.obj%22%26category%3Dmusic%26l-format%3DSound%2FInterview%2C+lecture%2C+talk%26l-availability%3Dy%26encoding%3Djson&amp;comment=\"><img alt=\"Try it!\" src=\"https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg\"/></a></p>", "a[href=\"../how-to/scrape-metadata-audio-player.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\">HOW TO: Scrape metadata from the Trove audio player<a class=\"headerlink\" href=\"#how-to-scrape-metadata-from-the-trove-audio-player\" title=\"Permalink to this heading\">#</a></h1><p>Trove\u2019s audio player displays some metadata that isn\u2019t included in the API records. This can include:</p>", "a[href=\"#identifiers\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Identifiers</a><a class=\"headerlink\" href=\"#identifiers\" title=\"Permalink to this heading\">#</a></h2><p>Digitised oral histories are uniquely identified by a <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj</span></code> identifier, for example: <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj-220905784</span></code>.</p><p>You can find these identifiers in the web interface and in API results. In the web interface, for example, the \u2018Listen\u2019 link from <a class=\"reference external\" href=\"https://trove.nla.gov.au/work/245550803\">this oral history record</a> goes to the url <a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-220905784\">https://nla.gov.au/nla.obj-220905784</a> which opens the audio player.</p>", "a[href=\"#accessing-data-from-digitised-oral-histories\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">32.2. </span>Accessing data from digitised oral histories<a class=\"headerlink\" href=\"#accessing-data-from-digitised-oral-histories\" title=\"Permalink to this heading\">#</a></h1><h2><a class=\"toc-backref\" href=\"#id2\" role=\"doc-backlink\">Identifiers</a><a class=\"headerlink\" href=\"#identifiers\" title=\"Permalink to this heading\">#</a></h2><p>Digitised oral histories are uniquely identified by a <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj</span></code> identifier, for example: <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj-220905784</span></code>.</p><p>You can find these identifiers in the web interface and in API results. In the web interface, for example, the \u2018Listen\u2019 link from <a class=\"reference external\" href=\"https://trove.nla.gov.au/work/245550803\">this oral history record</a> goes to the url <a class=\"reference external\" href=\"https://nla.gov.au/nla.obj-220905784\">https://nla.gov.au/nla.obj-220905784</a> which opens the audio player.</p>", "a[href=\"#additional-metadata-from-audio-player\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id7\" role=\"doc-backlink\">Additional metadata from audio player</a><a class=\"headerlink\" href=\"#additional-metadata-from-audio-player\" title=\"Permalink to this heading\">#</a></h3><p>Trove\u2019s audio player displays some metadata that isn\u2019t included in the API records. This can include:</p>", "a[href=\"#transcripts-and-summaries\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id9\" role=\"doc-backlink\">Transcripts and summaries</a><a class=\"headerlink\" href=\"#transcripts-and-summaries\" title=\"Permalink to this heading\">#</a></h2><p>Each oral history record has a single text file combining summaries and transcripts for every session of the interview. The urls used to download this file have the pattern:</p><p><code class=\"docutils literal notranslate\"><span class=\"pre\">https://nla.gov.au/tarkine/listen/download/transcript/[NLA.OBJ</span> <span class=\"pre\">ID]</span></code></p>", "a[href=\"#audio-files\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id10\" role=\"doc-backlink\">Audio files</a><a class=\"headerlink\" href=\"#audio-files\" title=\"Permalink to this heading\">#</a></h2><p>Each audio file has it\u2019s own <code class=\"docutils literal notranslate\"><span class=\"pre\">nla.obj</span></code> identifier. Using this identifier, you can download the file at a variety of bitrates.</p><p>The url pattern to use when downloading audio files is:</p>", "a[href=\"#details-of-available-downloads\"]": "<h3 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id8\" role=\"doc-backlink\">Details of available downloads</a><a class=\"headerlink\" href=\"#details-of-available-downloads\" title=\"Permalink to this heading\">#</a></h3><p>When you click on the \u2018Download\u2019 button in the audio player, a window pops up with links to download the summary/transcript and any audio files. The contents of this pop-up are generated from a Javascript file. It\u2019s possible to access this Javascript file directly and extract details about available downloads.</p><p>The Javascript file includes the following fields:</p>", "a[href=\"#types-of-data\"]": "<h2 class=\"tippy-header\" style=\"margin-top: 0;\"><a class=\"toc-backref\" href=\"#id3\" role=\"doc-backlink\">Types of data</a><a class=\"headerlink\" href=\"#types-of-data\" title=\"Permalink to this heading\">#</a></h2><p>There are three types of data from the NLA\u2019s digitised oral histories that you can download:</p>"}
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
