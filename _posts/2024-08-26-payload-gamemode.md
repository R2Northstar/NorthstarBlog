---
title: "Payload gamemode"
header:
  image: /assets/images/page-header-image.jpg
  og_image: /assets/images/page-header-image.jpg
tags:
  - Gamemode
author: Zanieon
last_modified_at: 2024-08-26T13:24:00-01:00
---

Ayo! I am Zanieon and I have a funny and interesting story to tell about a custom gamemode for Northstar.

## How everything started

> "Payload? What's that Zanieon?".

So for those you actually never played the other TF2 
([Team Fortress 2](https://wiki.teamfortress.com/wiki/Payload)) or
[Overwatch](https://overwatch-archive.fandom.com/wiki/Payload)
for the matter, both games have this gamemode of same name in which one team prevents the
other team from pushing a vehicle to its final destination.

This mode has been proven very interesting in both of those games due to the way its main
objective works and how it creates a specific dynamism in gameplay. However, Titanfall never
had said gamemode, no cut content or anything of the kind, zero clues in regards to that.

There have been previous attempts to make this mode in Titanfall.
Another contributor, named [*cat_or_not*](https://github.com/catornot), tried to make it around 2022
but back at that year, the navmeshes of the maps in Northstar were very broken and many times, the NPCs
would fail to path properly.
Ever since I joined (in February 2023), my main focus was entirely on the Frontier Defense gamemode,
because my real motivation to join as a contributor was to make Frontier Defense work properly
on Northstar, which back then wasn't also working as intended due the same reason of navmeshes and
other issues.

## Payload coming to reality

So, due to me dedicating an entire year of my life into making Frontier Defense work, fixing up
all problems with it and gaining experience in coding content for the game, I finally came into
realization that I could probably attempt myself at doing such Payload gamemode because I've
always had interest in playing said mode, despite never playing Team Fortress 2 or Overwatch
in my life.

Case in point, at a random day, I consulted *cat_or_not* to see how far he went with his own
version of the mode before starting anything on my own — if there was anything I could start
from — but the code wasn't touched ever since he lost motivation to work on it due to broken
navmeshes. It was extremely bare-bones so starting from that code or building an entire new
one from scratch would take equally long.

## Speedrunning the code

A couple days after I did this consult, I decided to start writing the gamemode entirely from
zero pratically. I had a very clear vision of what this gamemode should be and how it could be
played with its own spice of Titanfall 2 on it; so I began writing the scripts, and here comes the
funny part:

> <u>I was so hyped to see this thing working that I wrote the entire server and client
logic within only 2 days non-stop!</u>

Yes! Non-stop, meaning I also haven’t slept between both days while I did that, only taking the
normal breaks any person would do (toilet, eat and drink).

That was actually only possible due to the entire work I did on Frontier Defense, as a
lot of functions and code was adapted from there, alongside some logic from Amped Hardpoint
gamemode too, with everything working on the basic level the way I conceptualized this mode
with the touch of Titanfall 2 over it; it even attracted the attention of the Competitive players
whose only gamemode to play is Capture The Flag.

Pretty much on the week that followed that happening, I did some rebalances and touches
here and there and bam, there’s this fully brand new gamemode that never existed into the
game actually fully functional now with the way it could play in Titanfall 2’s gameplay terms.
This was probably my quickest speedrun of coding anything for Northstar project given the 2 day
timespan, one does not simply drop a whole brand new gamemode that easily, but well, it was
fun doing that.

## The gamemode

The objective for the attacking team is to lead a Nuclear titan to the Harvester of the opposing
team, to hopefully destroy it; the defending team must prevent this happening to secure the win!
Like Team Fortress and Overwatch, the more attacking players around the Titan, the faster it is.

<img src="{{ 'assets/images/posts/payload/defense.png' | relative_url }}" alt="Pilots hide behind a shield from attackers and incoming Titan" />

Now for the Titanfall touch:
* defending team can steal batteries from the Titan to reinforce their harvester's shield (meaning
it won't necessarily be destroyed if the Titan reaches it and triggers its nuclear explosion!);
* attackers can use batteries on the Titan to shield it; while it is shielded, the Titan moves
automatically, even without players being around;
* both Titan and harvester shields can be damaged with conventional weapons.

### Media

<style>
.video_legend {
  font-size: 0.8em;
  font-style: italic;
  text-align: center;
}
</style>

<video autoplay muted loop style="max-width: 100%">
    <source src="{{ 'assets/video/posts/payload/titan_stops.webm' | relative_url }}"
            type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>
<p class="video_legend">
  The Titan payload automatically moves towards the enemy harvester... as long as there
  are allied pilots around it.
</p>

<video autoplay muted loop style="max-width: 100%">
    <source src="{{ 'assets/video/posts/payload/harvester_battery.webm' | relative_url }}"
            type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>
<p class="video_legend">
  Defending team can steal batteries from the Titan to shield their harvester (and hopefully
  make it survive any nuclear explosion).
</p>

---

Payload is playable **now**, you can install it using your favorite mod manager or [download it
from Thunderstore](https://thunderstore.io/c/northstar/p/Zanieon/PayloadGamemode/).

That’s it folks! It was fun writing this piece of story!