---
title: "State of progress: MAD"
header:
  image: /assets/images/posts/mad-progress/missing-mod.png
  og_image: /assets/images/posts/mad-progress/missing-mod.png
tags:
  - MAD
author: Alystrasz
last_modified_at: 2024-08-09T17:43:00-01:00
---

Hey, Alystrasz here, to give you some information about the feature I'm currently developing, MAD!

### What is MAD?

MAD is an acronym that stands for *mod auto-downloading*; the idea of the feature is for your game to download
some mods that a server requires you to have to be able to join it.
Some games are known to integrate this feature, like Counter-Strike or Team Fortress.

On Northstar, currently, when joining a server requiring client-side mods, you will be displayed this message:

<img src="{{ 'assets/images/posts/mad-progress/missing-mod.png' | relative_url }}" alt="Screenshot of the missing mod interface when joining a server" />

This breaks your user experience since it forces you to go download the mod by yourself on the Internet (in practice,
you won't look for the missing mod, and just join another server).

---

I've been working on this feature for two years (first commit on [Aug. 30th, 2022](https://github.com/R2Northstar/NorthstarLauncher/pull/262/commits/114653052972383f9b154d96c581a2b90c483c87)), and progress is slow since there is much to be taken into
consideration here: according to `git-hours`, I invested at least 258 hours in the launcher part and 197 hours in the
scripting part.
Progress is nonetheless being made: you might have noticed that we did some *production testing*
of the feature earlier this year through the [Parkour tournament](/blog/parkour-tournament) we organised.

Let's now check where we are on the development of MAD.

### What is done?

#### Verification system

Don't worry, Northstar is *not* going to download malware stuff to your computer! We have a verification system
to avoid doing that.

Basically, your game can only download mods that went through a verification process described here:
[https://github.com/R2Northstar/VerifiedMods](https://github.com/R2Northstar/VerifiedMods);
this process includes mod source code being public and release upload be automatic (by the way, if you want your
gamemode to be auto-downloadable, don't hesitate to submit a request in the aforementioned repository!)

Even though it can always be improved, this verification system is functional and currently supports 5 mods for
auto-downloading.

#### Downloading mods

The implementation of this mod auto-downloading feature within Northstar was done in the two Northstar core components:

* the [**NorthstarLauncher**](https://github.com/R2Northstar/NorthstarLauncher) native code (C++) is responsible for low-level calls: think file system access, mod archive fetching etc.
* the [**NorthstarMods**](https://github.com/R2Northstar/NorthstarMods) script part (Squirrel VM) invokes native methods and updates UI accordingly.

Here are the basic steps of the downloading process, when joining a server requiring mods you don't locally have:
1. Retrieve the list of verified mods from GitHub;
2. Ensure missing mod can be downloaded;
3. Download missing mod archive file;
4. Ensure archive is not corrupted;
5. Extract mod archive to current player profile;
6. Reload mods to add downloaded mod to local mods collection;
7. Server can be joined.

As you can see on the video below, mod downloading actually works™.

<video controls style="max-width: 100%">
    <source src="{{ 'assets/video/posts/mad/autodl-parkour-example.webm' | relative_url }}"
            type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>

Ok, I admit things go fast! Here's another example with a bigger mod (a custom map reusing assets of a single
player level):

<video controls style="max-width: 100%">
    <source src="{{ 'assets/video/posts/mad/autodl-s2s-example.webm' | relative_url }}"
            type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>

### What's left to be done?

So, why isn't MAD public yet?

Actually, it is deployed, but shielded behind a configuration variable (you have to type `allow_mod_auto_download 1`
in your console to enable it) because we feel like some stuff is missing:

#### Assets reloading (mad only working for gamemodes and basic maps)

Currently, the game is not enable to reload assets without restarting, it means that, for instance, if you
download a mod including sound assets through MAD, your game will just crash.

#### Mod versions

If you join a server requiring `v1.1.0` of a given mod but you already have `v1.0.0` installed, the game should
disable your `v1.0.0` version, and install `v1.1.0` through MAD; the problem is that the game is currently not
able to distinguish between multiple versions of a same mod: mod handling code has to be rewritten to take mod
versions into account.

###### Example

Currently, to enable the `Parkour` mod, you would have to call the following function:
```javascript
NSSetModEnabled("Parkour", true)
```

But this won't work if you have several versions of the `Parkour` mod installed.
To fix that, the idea is to add a "version" parameter to the game interface, as such:
```javascript
NSSetModEnabled("Parkour", "1.1.0", true)
```

---

MAD development is tracked on this [GitHub issue](https://github.com/R2Northstar/Northstar/issues/674), don't
hesitate to comment it, or to reach me on Discord!