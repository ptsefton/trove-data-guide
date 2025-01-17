---
jupytext:
  text_representation:
    extension: .md
    format_name: myst
    format_version: 0.13
    jupytext_version: 1.15.2
kernelspec:
  display_name: Python 3 (ipykernel)
  language: python
  name: python3
---

+++ {"editable": true, "slideshow": {"slide_type": ""}}

# Collections within collections

+++ {"editable": true, "slideshow": {"slide_type": ""}}

```{attention}
This guide is currently under development. For more information and discussion see [the list of issues](https://github.com/wragge/trove-data-guide/issues) on GitHub. Comments are welcome.
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Trove is a collection of collections. Some of those collections are harvested into Trove from collaborating organisations. Other collections, such as the digitised newspapers, are a product of the NLA's own processing pipeline. Within these broad groupings are a range of relationships that link parts together in different ways. For example, a newspaper article is part of an issue, a periodical issue is part of a title, a photograph might be part of an album, a book might be part of a series, and a letter might be part of a manuscript collection. These sorts of relationships help you navigate through the layers of collections, moving from whole to part and back again – they enable you to see everything in a group, or to focus in on a specific fragment. Unfortunately, Trove doesn't have a standard way of representing these sorts of parent/child relationships. Instead, a variety of metadata fields, facets, hierarchical structures, and interfaces group things in inconsistent and sometimes confusing ways. This means that Trove search results often appear fragmented and the broader patterns are hard to see.

## Trove's categories

Trove's top-level categories *look* like collections, but beware! While some categories, like **Newspapers & Gazettes**, have clear cut boundaries, others don't. As I've suggested in the [section on categories and zones](contexts-not-collections), it's best to think of the categories as contexts for discovery rather than collections.

## Works and versions

Trove creates many thousands of little collections by trying to [group different versions of the same thing together as 'works'](/what-is-trove/works-and-versions.md). This grouping operates on a couple of levels and results in a hierarchical structure where works contain versions, and versions contain the original metadata records. However, it's [not always successful](muddy-metadata). As well as obvious grouping errors, works sometimes [cram different members of a collection together](not-the-same), as if they're actually the *same thing*. Even more concerning, it seems that works and versions have sometimes been used deliberately to [describe collections of digitised resources](digitised-works-groups). The problem with this is that the members of these collections are difficult to find and use as their individual metadata has either not been recorded or has been munged together as a single 'work'. In effect, **work groupings hide collections**. This is one of the reasons why I recommend unpacking all the versions from works and saving them individually when you're harvesting data.

## Collections by contributor

You can explore the different collections harvested into Trove by filtering your search results according to the source of the metadata. Organisations contributing data to Trove are assigned a National Union Catalogue (NUC) identifier. You can find an organisation's NUC by searching the [Australian Libraries Gateway](http://www.nla.gov.au/apps/libraries/index.html), or by looking in the dropdown list of 'Organisations' in Trove's advanced search form (the NUC is in square brackets).

```{figure} /images/nuc-dropdown.png
:name: "nuc-dropdown"
:width: 600px
NUC identifiers are displayed in square brackets
```

```{admonition} Advanced search for NUCs is broken!
:class: warning
While you can use Trove's advanced search to *find* a NUC, you can't reliably use it to search for items using that NUC. There's a longstanding bug that means if you select an organisation whose NUC includes a colon you'll get **no results**. You can fix the broken url by simply putting double quotes around the NUC value, or use one of the methods below.
```

Once you have a NUC you can find records from that organisation by using either the `nuc:` index or the `partnerNuc` facet – as far as I can tell the results are the same. For example, to find records from the ANU's institutional repository you'd [search for `nuc:"ANU:IR"`](https://trove.nla.gov.au/search/category/research?keyword=nuc%3A%22ANU%3AIR%22) (note the double quotes around the NUC value).

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Dnuc%3A%22ANU%3AIR%22%26category%3Dall%26l-availability%3Dy%26encoding%3Djson%26bulkHarvest%3Dtrue&comment=)

## `isPartOf`

Some parent/child relationships in Trove are documented using the Dublin Core `isPartOf` metadata field. This field can appear in records aggregated into Trove from other organisations, as well as in records of digitised resources created by the NLA itself. In the web interface, `isPartOf` values can be displayed under a variety of headings, including 'Appears in', 'Part of', and 'Series'. Here's an example linking an individual oral history interview to an oral history project:

```{figure} /images/part-of-example.png
:name: "part-of-example"
:width: 600px
Example of the way `isPartOf` values are displayed in the Trove web interface
```

Here's how the same record appears in the API:

``` json
"isPartOf": [
    {
        "value": "Australian women scientists oral history project [sound recording].",
        "type": "publication"
    },
    {
        "value": "Australian women scientists oral history project.",
        "type": "series"
    }
],
```

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fwork%2F245550805%3Fencoding%3Djson%26include%3Dworkversions%2Clinks%2Choldings&comment=)

The value of `isPartOf` is a text string rather than an identifier, so the connections can be a bit fuzzy. Also, a record can have multiple `isPartOf` values linking it to different points in a collection hierarchy – so a record might be linked both to its direct parent and the top-level collection record. This means you can't reliably reconstruct a collection from the `isPartOf` values alone. Nonetheless, they can be useful in finding groupings of related resources.

As you can see in the API example above, `isPartOf` values can be qualified by supplying a `type`. The most common types seem to be `series` and `publication`. The [Trove Data Dictionary](https://trove.nla.gov.au/partners/partner-services/contribute/trove-data-dictionary) doesn't explain how the `type` qualifiers are meant to be used, but it seems that `series` generally denotes a collection, while `publication` is a more restricted grouping, such as the title of a parent publication.

To limit your search results to items with a particular `isPartOf` value, you can use either the `series:` index or the `contribcollection` facet, however, they behave slightly differently.

The `contribcollection` facet seems to search all `isPartOf` values, irrespective of their `type`. However, **the matches must be exact, and are case-sensitive** – searching by `Annual report`, `Annual Report` and `Annual report.` will all produce different results! For example, to find more oral histories from the 'Australian women scientists oral history project' you could add `l-contribcollection=Australian women scientists oral history project.` to your query, but it only returns two results.

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dmusic%26l-contribcollection%3DAustralian+women+scientists+oral+history+project.%26encoding%3Djson&comment=)

If you remove the trailing full stop from the collection name, you'll find another 22!

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fcategory%3Dmusic%26l-contribcollection%3DAustralian+women+scientists+oral+history+project%26encoding%3Djson&comment=)

:::{admonition} Using `contribcollection` in the web interface
:class: "note"

The `contribcollection` facet is not displayed in the web interface, so you can't just check a box to filter results. To use it you'll need to manually edit the search url adding `&l-contribcollection=[YOUR IS_PART_OF VALUE]`.
:::

Inconsistencies in the metadata, such as trailing full stops, and the unforgiving nature of the `contribcollection` facet makes it tricky to use. You need to know the exact `isPartOf` value in advance, and be prepared to make multiple queries to capture any variations.

To complicate matters further, the `title` facet used in the **Magazines & Newsletters** category also works with values from the `isPartOf` field. It seems to return a subset of the results you get from `contribcollection`, perhaps because it's only using `isPartOf` values which have `type` set to `publication`. It's also case-sensitive, and expects exact matches, but it looks like trailing full stops have been removed.

The `series` index seems to only return records where the `isPartOf` type is `series`, but you can use it much more flexibly as it accepts partial matches and is case-insensitive. For example, a [search for `series:"Australian women scientists oral history project"`](https://trove.nla.gov.au/search/category/music?keyword=series%3A%22Australian%20women%20scientists%20oral%20history%20project%22) returns 25 results – no need to worry about trailing full stops!

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Dseries%3A%22Australian+women+scientists+oral+history+project%22%26category%3Dmusic%26encoding%3Djson&comment=)

Because it accepts partial matches, you can use the `series` index to search for items from collections that include certain keywords. For example, there's a lots of separate ephemera collections from the NLA in Trove, to find items from all of them you can [search for `series:ephemera`](https://trove.nla.gov.au/?keyword=series%3Aephemera).

[![Try it!](https://troveconsole.herokuapp.com/static/img/try-trove-api-console.svg)](https://troveconsole.herokuapp.com/v3/?url=https%3A%2F%2Fapi.trove.nla.gov.au%2Fv3%2Fresult%3Fq%3Dseries%3Aephemera%26category%3Dall%26encoding%3Djson%26include%3Dworkversions%26bulkHarvest%3Dtrue&comment=)

## Digitised collections



## Finding aids

+++ {"editable": true, "slideshow": {"slide_type": ""}}

## isPartOf

## Digitised collections

- parts as versions in works
- digitised collections -- with 'Browse this collection' buttons (can be nested)
- most relationships hidden in embedded metadata - multi-volume works, chapters in books, articles in journals, pages etc

## Finding aids

- have their own hierarchical structure (inherited from EAD), see everything on one page
- but if you navigate down you end up in a series of nested collections
- have isPartOf relationships (to multiple levels)

Describe the different ways that 'collections' are described within Trove.

Parent-child relationships in Trove metadata:

- `isPartOf` -- this seems to be used as the basis of the `contribcollection` facet (need to do some more testing of this). Note that these are not necessarily the immediate parent, can have multiple values.
- `series` -- searchable using `series:` index (`series` are a type of `isPartOf` relationship in version metadata)
- some digitised resources use versions as children of works
- finding aids (can use all of the above?)
- `title` facet (overlap with `contribcollection`? Also uses `isPartOf`)
- in embedded metadata

Using NUCs to limit to a contributor

`isPartOf` in version metadata can have multiple values, and each value can have a `type`. Types include: `series`, `publication`. For example:

``` json
 "isPartOf": [
    {
        "value": "Annual report",
        "type": "publication"
    },
    {
        "value": "PP no. 35 of 2012"
    },
    {
        "value": "Parliamentary paper (Australia. Parliament)",
        "type": "series"
    }
],
```
PP no. 35 of 2012 -- doesn't work with series

<https://trove.nla.gov.au/search/category/research?keyword=&l-contribcollection=PP%20no.%2035%20of%202012>

<https://trove.nla.gov.au/search/category/research?keyword=series%3A%22Parliamentary%20paper%20%28Australia.%20Parliament%29%22> - 192,262 results

<https://trove.nla.gov.au/search/category/research?keyword=&l-contribcollection=Parliamentary%20paper%20%28Australia.%20Parliament%29> - 178,088 results

Includes aggegated collections/databases eg Informit -- `contribcollection` facets for journal titles -- so `contribcollection` has more than `title`

+++ {"editable": true, "slideshow": {"slide_type": ""}}

Looks like `title` only applies to digitised resources (looks for `type: publication` in `isPartOf`??). `contribcollection` sometimes but not always?? (Compare below and above)

<https://api.trove.nla.gov.au/v3/result?category=all&encoding=json&l-title=Journal%20of%20the%20Soil%20Conservation%20Service%20of%20New%20South%20Wales> -- records in magazine and research

<https://api.trove.nla.gov.au/v3/result?category=all&encoding=json&l-contribcollection=Journal%20of%20the%20Soil%20Conservation%20Service%20of%20New%20South%20Wales> -- only records in book

```{code-cell} ipython3
import requests
import pandas as pd
import os

from dotenv import load_dotenv

load_dotenv()
```

```{code-cell} ipython3
YOUR_API_KEY = os.getenv("TROVE_API_KEY")
```

```{code-cell} ipython3
params = {
    "q": 'series:"Australian women scientists oral history project"',
    "category": "music",
    "include": "workversions",
    "n": 100,
    "encoding": "json"
}

headers = {"X-API-KEY": YOUR_API_KEY}

response = response = requests.get(
        "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
    )
data = response.json()

parts = []

for work in data["category"][0]["records"]["work"]:
    for version in work["version"]:
        for record in version["record"]:
            for part in record["metadata"]["dc"]["isPartOf"]:
                parts.append(part["value"])
set(parts)
```

```{code-cell} ipython3
def get_facets(facet):
    params = {
        "category": "magazine",
        "facet": facet,
        "encoding": "json",
        "n": 0
    }
    
    headers = {"X-API-KEY": YOUR_API_KEY}
    
    response = requests.get(
        "https://api.trove.nla.gov.au/v3/result", params=params, headers=headers
    )
    data = response.json()
    return data["category"][0]["facets"]["facet"][0]["term"]
```

```{code-cell} ipython3
df_title = pd.DataFrame(get_facets("title"))
```

```{code-cell} ipython3
df_title[:20]
```

```{code-cell} ipython3
df_cc = pd.DataFrame(get_facets("contribcollection"))
```

```{code-cell} ipython3
df_cc[:20]
```

+++ {"editable": true, "slideshow": {"slide_type": ""}}

<https://trove.nla.gov.au/search/category/magazines?keyword=&l-contribcollection=John%20Ryan%20Comic%20Collection%20%28Specific%20issues%29.> -- all of Bulletin and some others are described as part of John Ryan Comic Collection (Specific issues).

Note that facet values have to be exactly equal so leaving the full stop off the example above returns nothing. Indexes can be used for flexible matches.

Sometimes `isPartOf` can include a url:

``` json
"isPartOf": [
    {
        "value": "The bulletin.",
        "url": "https://api.trove.nla.gov.au/v3/work/11500235"
    },
    {
        "value": "John Ryan Comic Collection (Specific issues).",
        "type": "series"
    }
],
```

```{code-cell} ipython3

```
