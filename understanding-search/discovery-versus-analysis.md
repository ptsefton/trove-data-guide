---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.14.7
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

# Discovery versus analysis

+++

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++

Need to recognise that the aim of the search indexing is to present the user with items that *could be* of relevance, but this fuzziness might limit the usefulness of search results for analysis. Eg: user-added tags and comments are searched by default. Examine relevance ranking.

+++

Some notes on relevance from solr docs: <https://solr.apache.org/guide/solr/latest/deployment-guide/solrcloud-distributed-requests.html#distributedidf>

```{code-cell} ipython3

```
