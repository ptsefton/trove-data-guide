selector_to_html = {"a[href=\"#understanding-the-newspaper-corpus\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11. </span>Understanding the newspaper corpus<a class=\"headerlink\" href=\"#understanding-the-newspaper-corpus\" title=\"Permalink to this heading\">#</a></h1><p>This section will examine the way in which the Trove newspaper corpus has been constructed, and how its contents have changed over time.</p>", "a[href=\"newspapers-missing-pages.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11.2. </span>Missing newspaper pages and issues<a class=\"headerlink\" href=\"#missing-newspaper-pages-and-issues\" title=\"Permalink to this heading\">#</a></h1><p>This section will attempt some analysis of missing pages and issues in Trove\u2019s newspapers. As of 11 August 2023, I\u2019m running a very long harvest of essentially every article in Trove to try and get an idea of what\u2019s missing. This will never be precise, but it should at least provide a baseline and point to specific titles and periods that seem to be more affected.</p><p>Here\u2019s a <a class=\"reference external\" href=\"https://hcommons.social/@wragge/110845292959103039\">quick example using the Canberra Times</a>.</p>", "a[href=\"newspapers-non-english.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11.3. </span>Non-English language newspapers<a class=\"headerlink\" href=\"#non-english-language-newspapers\" title=\"Permalink to this heading\">#</a></h1><p>See <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/find-non-english-newspapers/\">Finding non-English newspapers in Trove</a> in the GLAM Workbench and the <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/list-non-english-newspapers/\">list of non-English language newspapers</a>.</p><p>Discuss implications for search and OCR correction.</p>", "a[href=\"newspapers-copyright.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11.4. </span>Newspapers and copyright<a class=\"headerlink\" href=\"#newspapers-and-copyright\" title=\"Permalink to this heading\">#</a></h1><p>This section will examine both the impact of copyright restrictions on the construction of the Trove newspaper corpus, and the implications of copyright for researchers making use of digitised newspapers.</p><p>See <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/Beyond_the_copyright_cliff_of_death/\">Beyond the copyright cliff of death</a> and <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/csv-newspapers-post-54/\">Trove newspapers with articles published after 1954</a></p>", "a[href=\"newspapers-change-over-time.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11.1. </span>How does the contents of the newspaper corpus change over time?<a class=\"headerlink\" href=\"#how-does-the-contents-of-the-newspaper-corpus-change-over-time\" title=\"Permalink to this heading\">#</a></h1><p>This section will examine how the contents of the newspaper corpus changes over time and the implications of this for researchers. This includes topics like:</p>", "a[href=\"newspapers-ocr.html\"]": "<h1 class=\"tippy-header\" style=\"margin-top: 0;\"><span class=\"section-number\">11.5. </span>OCR quality and correction<a class=\"headerlink\" href=\"#ocr-quality-and-correction\" title=\"Permalink to this heading\">#</a></h1><p>This section will examine how the quality of OCR varies across the corpus and the significance of this for research uses. It will also look at patterns in OCR correction \u2013 what gets corrected and why.</p><p>See: <a class=\"reference external\" href=\"https://glam-workbench.net/trove-newspapers/Analysing_OCR_corrections/\">Analyse rates of OCR correction</a></p>"}
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
