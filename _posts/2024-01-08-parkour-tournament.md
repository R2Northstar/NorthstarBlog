---
title: "Birthday's Parkour tournament"
header:
  image: /assets/images/page-header-image.jpg
  og_image: /assets/images/page-header-image.jpg
tags:
  - FNN
author: Alystrasz
last_modified_at: 2024-01-21T13:09:00-01:00
---

Happy second anniversary, Northstar!

To celebrate two years of existence, we decided to organize a competition between all players to see who's the fastest:
this blog post tells the story of the [Parkour mod](https://github.com/Alystrasz/Alystrasz.Parkour)'s origin and
development, and showcases results of this first Parkour tournament.

### Developer story

#### Origin of the mod

When I was younger, I loved going to my friends' houses, set up a local network, and play some LAN games: these games
included Counter Strike 1.6, Warcraft 3, and [Trackmania](https://www.trackmania.com/?lang=en); if you don't know the
last, it's a car game where you have to reach a finish line, crossing a set of checkpoints as fast as you can (rings a
bell, right?).

I also spend lots of (probably more than I should) time on World of Warcraft, which latest expansion, named Dragonflight,
released a similar feature dubbed ["Dragonriding races"](https://www.youtube.com/watch?v=7Gr4rZXPw6w).

At some point, I thought: "That would be a great mod idea for Northstar!". I would call it *"Parkour"*.

<img src="https://j.gifs.com/zKxZPy.gif" />


#### Development

Since developing this mod basically resolved to develop a multiplayer version of the single-player 
[Gauntlet](https://titanfall.fandom.com/wiki/The_Pilot's_Gauntlet) mission, I could reuse a lot of assets from it,
including starting/finish lines visuals, speed indicator and scoreboards.
For other entities I had to improvise: for instance, the model used for checkpoints is actually a Titan shield, colored
in green :)

Initial development of the mod only included a local scoreboard, where you could see scores of players in the current
match; we then thought it would be cool to have a way to save your personal best time for each map, which led me to
develop a scoring server to save scores for all players in all maps, and an associated web scoreboard, to maintain
competition between players:

<img src="{{ 'assets/images/posts/parkour/global-scoreboard.png' | relative_url }}" alt="Screenshot of the Parkour tournament web scoreboard" />

Once the scoring server was set up, I deployed Parkour servers in Europe, Americas and Australia during twelve days,
which led to X players scoring a time on a map (maybe more tried, but couldn't finish a route? We'll never know).

#### Feedback

We received *a lot* of feedback about Parkour which gave us lots of ideas to improve it for the next tournament, and I
thank you all for that.

This Parkour tournament was also a good opportunity to test *mod auto-downloading* in live conditions, if you're curious
about this feature, I wrote [another blog post](https://remyraes.com/autodownload.html) describing it in details.


### Media

To celebrate Northstar's second birthday and the parkour tournament, we asked the community some help with trailers, and
got an amazing one from [P3NG00N](https://www.youtube.com/@P3NG00Nlol):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/1DSNwdV8ahA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

---

But we were also lucky enough to have [Evan Boymel](https://www.youtube.com/@evanboymelviper), voice actor of Viper,
make a voice-over for another trailer from [Dionysus9517](https://www.youtube.com/@Dionysus9517):

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/NLTfQwUpvJs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<br/>
Associated YouTube short from Evan:

<iframe width="560" height="560" src="https://www.youtube-nocookie.com/embed/etnCR3pHPBY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

### Closing words

I was really surprised seeing the Titanfall 2 speedrunning community, including [Dadadu2711](https://www.twitch.tv/videos/2028529918),
taking over the mod and breaking the routes I designed in ways I never heard of previously: grav star boosting, EPG
boosting... There were discussions about the best ways to improve scores; I feel like there was a good competitive
spirit within this tournament, that's definitely something I plan to redo in the future!

I want to thank all players that participated in that first tournament, and all developers + play testers who helped
make this mod what it is today.

See you on the Frontier!

# Parkour tournament results

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

## Exoplanet

###### Example route from *Chill_spirit*

<video controls style="max-width: 100%">
    <source src="{{ 'assets/video/posts/parkour/chillspirit_exoplanet_34.12.mp4' | relative_url }}"
            type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>

###### Final placing

{% include parkour-results/exoplanet.html %}

## Angel City

###### Example route from *Dadadu*

<video controls style="max-width: 100%">
    <source src="{{ 'assets/video/posts/parkour/dadadu_angelcity_22.17.mp4' | relative_url }}"
            type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>

###### Final placing

{% include parkour-results/angelcity.html %}

## War Games

###### Example route from *Cash Mayo*

<video controls style="max-width: 100%">
    <source src="{{ 'assets/video/posts/parkour/cashmayo_wargames_29.75.mp4' | relative_url }}"
            type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>

###### Final placing

{% include parkour-results/wargames.html %}
