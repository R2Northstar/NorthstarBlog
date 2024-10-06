---
title: "Grunt mode"
header:
  image: /assets/images/posts/gruntmode/banner.png
  og_image: /assets/images/posts/gruntmode/banner.png
tags:
  - Gamemode
author: EnderBoy9217
last_modified_at: 2024-10-06T15:28:00-01:00
---

Hello Northstar! I am EnderBoy9217 and here I will share with you the process of creating one of Northstar's most recognizable mods, Grunt Mode 2.

## How it started

My friends and I have had this idea of this style of gameplay for a while. While we enjoy the fast pace of Titanfall, we also like the slower pace and more tactical gameplay of games like Battlefield or Squad at times, where instead of being a powerhouse, or a literal Titan, you were just another expendable soldier on the battlefield.
Gamemodes like Titanfall 2's Attrition mode captured the chaos of the large-scale battles seen in these other games, however, it failed to fully immerse you into these as simply another soldier.

### Grunt Mode [1]

Many people have asked where the "2" in Grunt Mode 2 came from.
The reason is that the initial creation of the Grunt Mode was not my own, but instead created by another modder on the platform, VoyageDB.

VoyageDB's new [Grunt Mode](<https://thunderstore.io/c/northstar/p/VoyageDB_Modding_Home/Grunt_Mode/>) gained massive popularity soon after its initial release.
It featured an Attrition match with more enemy types, including AI Titans, prowlers, and gunships, spawning in droppods, and best of all, everyone had the same grunt models and skins.
It took many measures to slow down the gameplay, not only through the inclusion of new AI, but also through removing boosts, player titans, double jump, limiting wallrun distance, and later, removing weapon attachments.
This mod also introduced the start of the classes mechanic, where you had a small chance to spawn with either two ticks that turned into your own personal plasma drones, or a shield captain’s mobile shield.
This mode also featured care packages, which would occasionally land and give out weapons pre-fitted with attachments.

<style>
.video_legend {
  font-size: 0.8em;
  font-style: italic;
  text-align: center;
  margin-top: -15px !important;
}
</style>

<img src="{{ 'assets/images/posts/gruntmode/spawn.png' | relative_url }}" alt="A Militia soldier just spawned and is ready for battle" />
<p class="video_legend">
  A Militia grunt just landed and is ready for battle.
</p>

### Modding a mod
I had been part of the Northstar community since the first day it launched, and since then I made a few small mods and customizations, such as bringing back the singleplayer zoom functionality of the double-take.
After I had tried the new gamemode with my friends, I had decided to start customizing VoyageDB’s grunt mode (which was version 1.4.2 at the time). I wanted to change the mod to bring players as close as possible to the AI grunts.
After some research into how Titanfall 2 grunts worked, which was tremendously helped by the [Titanfall wiki](https://titanfall.wiki.gg/wiki/IMC_Marine_Corps), I discovered that the AI grunts were already organized into 5 distinct classes, with in-game models and weapons assigned to each of them.
Using this knowledge, I created a spin-off mod of VoyageDB’s where, instead of spawning with your own loadout, your loadout and grunt model was determined by your class, which was randomly assigned to you each time you spawned in.
This made the gameplay significantly more grounded, as people were unable to force “meta” weapons like the CAR into every situation, and any player’s loadout could quickly be determined by simply how they looked.
This change, combined with other balance change such as the full removal of wallrunning, and a significant increase to the health of many AI units, had changed and grounded the gameplay enough that it was seen by my players as a completely different experience than VoyageDB’s, at which point I started sending copies of what would later be called “Ender’s Grunt Mode 2”.

## Adding new features
After establishing the mod as its own experience, I included many features that myself and other players believed would help ground the experience. One of the first being the ability for AI to score points for their team. While some of VoyageDB’s code comments alluded that they had attempted to do this in their own mod, this seemingly small change completely changed how the game worked. The game was no longer a battle of players but instead a battle of teams, with each individual AI unit playing their own part. This also led to many people downloading the mod simply to play a solo experience akin to games like Ravenfield, as now it was possible to lose a match, even if you were the only player, based on your performance.

While I added many features, I also later removed some of VoyageDB's work which I found didn’t fit in well with my new direction toward grounded gameplay.
I removed the care package system, removing powerful weapons such as the smart pistol out of rotation, limiting grenades, removing the ability to rodeo, and as previously mentioned, wallrunning was removed entirely.
While the intention of the limited wallrun was to allow for the climbing of walls, it felt out-of-place, and the client’s underlying visual and audio language made the intended feature feel more like a bug.
However, while most maps were almost entirely accessible through doors and stairways, many locations like rooftops were now entirely out-of-play by players, slightly reducing the amount of variety in the game.
This shortcoming was later solved with the development of the most recognizable feature of grunt mode, its new economy and class system.
New gamemodes and grunt versions of existing gamemodes like hardpoint were also added to Grunt Mode 2 later in its development.

Other features of VoyageDB’s were also iterated on. The spawning system changed to include dropships for players, and camera angles for droppod spawns were reworked, and the exploding droppod door was re-added. VoyageDB continued to update their own Grunt Mode mod, and the spawning zones rework in that mod was actually added to Grunt Mode 2.

<img src="{{ 'assets/images/posts/gruntmode/imc_death.png' | relative_url }}" alt="An IMC soldier is fired upon by two enemy soldiers" />
<p class="video_legend">
  Things are looking bad for this IMC soldier.
</p>

### The class system and new game economy
As time went on, I developed other features into the mod. Learning from games like Counter Strike and Tom Clancy’s Rainbow Six Siege, I understood that randomness killed competition. As such, I reworked how the class system functioned, in such a way that you were able to pick your class before you spawned in. This led to a problem, however, where, as the Specialist class had the extra ability to throw personal drones, and the Sheild Captain class had an extra mobile shield, there was very little reason to pick other classes, as these were objectively better and more interesting. Leaving these classes freely available to players, however, would severely limit the variety within a match, causing players to lean back toward being much more powerful than the average grunt. For this reason, the new economy system was created. At first, it simply locked these more powerful classes until you scored a certain amount of points, however, this only delayed the problem. The economy was then changed to be similar to Star Wars Battlefront II (2017), and ironically, the old economy system was similar to the 2005 Star Wars Battlefront II, which I had also played. Under the new economy system, the points you earned would be spent upon spawning in as these more powerful classes, forcing you to return to the main classes after you died.

With this new class system I had created, it became easier than ever to introduce new and balanced classes into the game. Spectre classes were later released, with one of their key differences being the ability to double jump, intending to mimic the extreme jumps made by AI spectres. This new ability reopened unused parts of the maps which were lost by the removal of pilot movement, and for the first time in Grunt Mode, players could become pilots again if they acquired enough points.

The class system was later expanded further with new classes with special unlock requirements. Existing classes also received upgrade trees, allowing you to specialize in a specific class, making them more powerful the more you played with it. These unlocks reset every round, however, this meant that people were spending more time in-game, experimenting with each class and what its unlocks had to offer. The system had expanded so much that it was unreasonable to play as every single class within a single match, even with the later extended match times, much less upgrade each class to its fullest potential. This kept replayability extremely high and helped shaped the mod from a fun gamemode that twisted Titanfall’s rules into its own experience that to many felt like an entirely different game compared to the main multiplayer, especially with the addition of the variety of grunt gamemodes.

<img src="{{ 'assets/images/posts/gruntmode/ambush.png' | relative_url }}" alt="An IMC soldier is at a window, waiting for an enemy to shop up" />
<p class="video_legend">
  An IMC soldier is patiently waiting for enemies to show up.
</p>

## Server hosting and Playtests
Anyone who has had the playtester role in the Northstar Discord in 2023 was constantly bombarded by the updates and changes I was making to the mod, testing the mod weekly at times. However, as I did not have access to a 24/7 dedicated server, the playtests were really just a way to announce that a server running the mod was currently active. Thankfully, the two largest Northstar hosts at the time, [ikhadhonger](<https://discord.gg/5xgB45SbQY>) and the [Untamed Axis group](<https://linktr.ee/untamedaxis>) both offered to host the mod free of charge. I am still thankful for the time and money they spent helping to make this mod accessible to more people. At one point, when ikhadhonger was taking a break from server hosting, Untamed Axis had three servers all running the mod to help handle the large influx of players.

While the outside server hosting provided access to the mod for a large number of players, the organized playtests still remained highly popular, to the point where the playtest server was consistently the Northstar server with the highest playercount. To adjust to this popularity, the server’s settings were changed to include longer match time, higher maximum player counts, and higher AI counts. I even enlisted the help of some community members who were some of the most active on the server, and they helped manage the server whenever it was online to prevent cheaters and ensure the server came back whenever it crashed (which was a lot).

I would like to thank everyone who participated in the playtests, as their feedback drastically shaped, balanced, and improved the mod to be what it is now.
Many people who participated in the playtest suggested new additions and changes through in-game chat, Discord, and in  Cassius Scrungoman’s case, they reached out for help creating a [video essay](<https://youtu.be/XU2k-3hHpEE>) promoting the mod and analyzing why its changes made it popular.
If you are more interested in Grunt Mode or Titanfall modding in general, I highly recommend the video and its much more lively format than this wall of text.

<img src="{{ 'assets/images/posts/gruntmode/banner.png' | relative_url }}" alt="IMC soldiers are running together towards the enemy" />
<p class="video_legend">
  The Militia is ready for some action.
</p>

## The limitations and roadblocks
One of the most difficult part of creating the mod was that I was doing many things that Titanfall 2 simply wasn’t built for.
Players were never intended to wear grunt or spectre models, and as such crashes would arise during certain actions, like rodeoing, or during the evacuation sequence.
These problems force me to create workarounds, like subtly changing models during the evacuation sequence. Another heavy limitation was that I was dedicated to make the mod server-side only.
This meant that any player could join the game without having to download any external mods.
While this made programming some parts of the mod, especially the user interaction, exceptionally difficult, this decision greatly increased the overall accessibility and popularity of the mod.
Although Mod-Automatic-Download now exists within Northstar, most of the important features are already present through server-sided means.
The only changes that I was unable to implement through this were improvements to the UI and custom viewmodels, both of which would have improved the user experience and feel of the mod, but wouldn’t cause any significant changes.

## The continuation of VoyageDB’s mod
I would still like to recognize that VoyageDB continued to support their mod for a long time after both it and Grunt Mode 2’s release.
While VoyageDB themself has become unreachable, and the mod is currently incompatible with recent versions of Northstar, it also later introduced its own randomly spawning class system, which also began assigning players specific guns and equipment, and while it took aspects from Grunt Mode 2, VoyageDB kept their focus on making an enjoyable and more grounded spinoff of Titanfall’s original attrition mode, not shying away from giving players movement equipment like grappling hooks or stims, and not dictating any decisions based on the game’s lore.

Creating Grunt Mode 2 was definitely an enjoyable hobby, and I am very thankful to everyone who helped make this idea a reality.
This was my first large project, and I couldn’t have done it without the other contributors of Northstar, ikhadhonger and Untamed Zilla’s servers, the moderators of the playtesting server, and it wouldn’t have been shaped into what it is now without the feedback and analysis from Cassius, my friends, and the many community members who dedicated their time to playtesting through every single crash scenario.

If you want to try the mod for yourself, it can be [downloaded on Thunderstore](<https://thunderstore.io/c/northstar/p/EnderBoy9217/Grunt_Mode_2/>).


VoyageDB’s mod can also be [downloaded on Thunderstore](https://thunderstore.io/c/northstar/p/VoyageDB_Modding_Home/Grunt_Mode/), however it may only work for some old versions of Northstar.