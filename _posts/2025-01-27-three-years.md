---
title: "Frontier News Network: Happy third birthday Northstar!"
header:
  image: /assets/images/page-header-image.jpg
  og_image: /assets/images/page-header-image.jpg
tags:
  - FNN
author: Alystrasz
last_modified_at: 2025-01-27T17:28:00-01:00
---

Yep, first official release was in December 2021, three years ago!

<img src="{{ 'assets/images/posts/two-years/first-release-github.png' | relative_url }}" alt="Screenshot of the first Northstar release" />

During 2024, progress has been made on:
* several features, such as [mod auto-downloading](/blog/mad-update/);
* a lot of bug fixes were integrated;
* refactoring the code base to clean it.

A massive and sincere *thank you* to all contributors and players.

# Parkour

[This year again](/blog/parkour-tournament/), we organized a Parkour tournament, where players could compete on different maps to go through all checkpoints in the shortest amount of time.

For this occasion, the mod was updated with several features, including map voting and fine-grained route configuration, plus a lot of bug fixes.
Full changelog is [available here](https://github.com/Alystrasz/Alystrasz.Parkour/blob/main/CHANGELOG.md).

To celebrate Northstar's birthday, we were lucky enough to have two different trailers, one from [Smurfson](https://www.youtube.com/@Smurfson) and another from [P3NG00N](https://www.youtube.com/@P3NG00Nlol), check them out:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/jMME2ngNfRg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/BUahnN_UKRc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


## Tournament results

<style>
table {
    max-height: 500px;
}

#header {
    position: sticky;
    top: 0;
    background: #20263c;
}

th, td {
    text-align: center;
}

tbody {
    width: 100%;
    display: inline-table;
}
</style>


### Warm-up (Deck)

###### Example route from *flag_bullettrain*

<video controls style="max-width: 100%">
    <source src="{{ 'assets/video/posts/parkour2/flagbullettrain_deck_15.87.mp4' | relative_url }}"
      type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>

###### Final placing

{% include parkour2-results/deck.html %}


### Jam (Traffic)

###### Example route from *Popborn*

<video controls style="max-width: 100%">
    <source src="{{ 'assets/video/posts/parkour2/popborn_traffic_11.08.mp4' | relative_url }}"
      type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>

###### Final placing

{% include parkour2-results/traffic.html %}


### Roofs (Black Water Canal)

###### Example route from *chill_spirit*

<video controls style="max-width: 100%">
    <source src="{{ 'assets/video/posts/parkour2/chillspirit_blackwatercanal_15.15.mp4' | relative_url }}"
      type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>

###### Final placing

{% include parkour2-results/blackwatercanal.html %}

