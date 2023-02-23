---
title: "Titanfall2 Security: Unrestricted server command execution via Squirrel Script"
header:
  image: /assets/images/page-header-image.jpg
  og_image: /assets/images/page-header-image.jpg
tags:
  - Security
author: GeckoEidechse
last_modified_at: 2023-02-21T23:00:00+01:00
---

A few weeks ago, we accidentally discovered that Squirrel server scripts were made accessible on public Titanfall2 servers. Here's what we found, how we reported it, and how it got resolved.

The discovered exploit allows an adversary to run any Squirrel script on the server within the bounds of Titanfall2's commands by using the `script` command. Usually clients should not be able to send the server Squirrel commands to execute.

We believe that the vulnerability was introduced in a recent server side patch given that we found a different vulnerability before in early 2022 (we reported it and saw it getting patched) that achieved a similar effect but was harder to exploit.

This issue was reported through EA's Coordinated Vulnerability Disclosure process and was triaged and patched within 2 weeks of our initial report.

(And yes Respawn does still patch Titanfall2 servers for vulnerabilities. Stay tuned for more blog posts on other vulnerabilities we found on public Titanfall2 servers and reported to Respawn that then got patched.)


**Terminology:**

- _Squirrel_ is the scripting language used by Titanfall2.
- _Squirrel VM_, a virtual machine for scripting that acts as an abstract binding layer between the Source engine and external scripts.


## Timeline
The following is a timeline of events between the discovery of the vulnerability and its fix.

### 2023-01-09 10:22 UTC

As part of a discussion about Northstar in a semi-restricted Discord channel, [zxcPandora](https://github.com/zxcPandora) finds out that the `script` command allows for running for Squirrel script server side on official public servers.


<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/pandora-discord-message.png' | relative_url }}" alt="A Discord message sent by zxcPandora when they initially discovered the vulnerability" />


In particular this issue was found to affect build number `8740` of the official public Titanfall2 dedicated servers.

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/status-command.png' | relative_url }}" alt="Screenshot of status command being run against vanilla server to get affect server version number" />


Within half an hour we identified the severity of the exploit.

We immediately began archiving the entire conversation via screenshots and deleted all references to the exploit to limit exposure of the vulnerability.

Note that the message was posted in a semi-private channel with 100+ members. As such it was clear from the beginning that it was only a matter of time until the exploit would become public knowledge.


As such, shortly afterwards, Taskinoz reached out to a Respawn employee directly. We've been using this person as contact previously for reporting exploits.


### 2023-01-09 12:30 UTC

We created a quick proof of concept using an unmodified retail Titanfall2 client which has a keybind bound to run a serverside function that switches map and mode using `GameRules_ChangeMap`.

We uploaded the clip showcasing it as an unlisted YouTube video.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/d1iWAfiG33k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

Note that this clip shows loading Frontier Defense on the map Glitch. This map/mode combination was however never released in the retail game as you can see by the map being locked in the map selection screen, after setting the gamemode to Frontier Defense.

Again loading an unreleased map/mode combination is not really a security issue per se. This clip is to simply show that the vulnerability of running arbitrary Squirrel functions server side exists. \
We purposefully decided not to perform any potentially damaging attacks to avoid any liability.

### 2023-01-09 13:40 UTC

We sent an initial email to EA Security to inform them about the exploit.

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/email-sent-initial.png' | relative_url }}" alt="Screenshot of the first email sent to EA Security" />

### 2023-01-10 15:04 UTC

Per EA's own instructions, we sent a follow up email due to a lack of response.

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/email-sent-inital-followup.png' | relative_url }}" alt="Screenshot of a follow-up email sent to EA Security due to lack of response from their side" />

We also discovered first abuses of the vulnerability in the wild:

<iframe id="reddit-embed" src="https://www.redditmedia.com/r/titanfall/comments/108426e/servers_just_got_knocked_offline_but_not_before/?ref_source=embed&amp;ref=share&amp;embed=true&amp;theme=dark" sandbox="allow-scripts allow-same-origin allow-popups" style="border: none;" height="410" width="640" scrolling="no"></iframe>


### 2023-01-10 18:28 UTC

We received an initial response from EA saying they are investigating the issue. Do note that they asked us to keep any information regarding the issue confidential until it is resolved.

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/email-recv-initial.png' | relative_url }}" alt="Screenshot of the first response we received by EA Security" />


### 2023-01-14 11:30 UTC

We sent another follow up email based on new information,

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/email-sent-update-affected.png' | relative_url }}" alt="Screenshot of an email we sent to EA Security with additional information regarding affected players" />

with the following attachments

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/player-affected1.png' | relative_url }}" alt="Screenshot of a player who's in-game level was altered" />

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/player-affected2.png' | relative_url }}" alt="Screenshot of a player who's in-game level was altered" />

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/player-affected3.png' | relative_url }}" alt="Screenshot of a player who's in-game level was altered" />

(The linked post from the email: [https://www.reddit.com/r/titanfall/comments/10awcv8/i_have_now_become_a_top_pilot/](https://www.reddit.com/r/titanfall/comments/10awcv8/i_have_now_become_a_top_pilot/))


### 2023-01-17 at 17:12 UTC

We sent another update email to EA Security.

At this point it had been over a week since the initial discovery and we received no further communication from EA Security and little to no updates via our contact at Respawn. At the same time we saw more cases of the exploit being used in the wild. While the cases we saw were usually benign, e.g. someone giving themselves Titan weapons as a pilot, it was a clear indicator that the exploit started becoming public knowledge.

Since a proper attack is invisible to the player, we could only make guesses whether or not the exploit was being used maliciously to take control of dedicated servers.

As such we decided to give EA Security a deadline after which we would make an announcement that playing on vanilla servers might potentially be unsafe.

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/email-sent-deadline.png' | relative_url }}" alt="Screenshot of an email we sent to EA Security due to lack of response on their side." />


### 2023-01-21 8:25 UTC

While checking the state of the exploit, [D3-3109](https://d3-3109.cc/) noticed an updated server build number. Upon further investigation we were able to confirm from our side that `script` no longer worked to run server side code.

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/status-server-update.png' | relative_url }}" alt="A screenshot showing the different server versions together with the date when they were taken" />


### 2023-01-21 at 13:39 UTC

As we deemed the issue fixed, we informed EA Security accordingly.

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/email-sent-fixed.png' | relative_url }}" alt="Screenshot of an email we sent to EA Security as we noticed the issue resolved on our end" />


### 2023-01-23 at 20:23 UTC

And two days later we got confirmation from EA Security that a patch was in place :D

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/email-recv-fixed.png' | relative_url }}" alt="Screenshot of the email EA Security sent back to us confirm that a fix was in place" />


# Potential attack vectors:

Now with the timeline out of the way, let's discuss the severity of the vulnerability. Essentially it gives full access to the servers' Squirrel VM meaning that any Squirrel function on the server can be called and in-game data can be extracted.

What follows are a small set of attacks this vulnerability would have allowed for. Note that we only tested them locally using Northstar. We never tested them on the actual public Titanfall2 game servers as it could cause potential damage that we do not want to be held responsible for.

## Messing with player stats

As the game server is able to set player stats, this vulnerability allows for arbitrarily changing player stats. In particular we observed some people trying to boost their in-game level with it. Even more so, some players would simply copy-and-paste commands commonly used to set player levels in Northstar into their console in public lobbies on public Titanfall2 servers, resulting in changing other player's levels by accident.

Setting the player level too high whether by accident or on purpose is an issue as it causes the gameserver to reject the player due to incorrect player data. Essentially this means that that player is completely locked out of multiplayer.

When fixing the vulnerability Respawn added a workaround for this case. Now, players with a too high player level will simply show the according gen. Further the exploit allowed for unlocking all skins, banners and emblems, including the developer one. As a result of this, a player having a dev emblem does no longer indicate that they are actually a developer.

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/player-fakedev1.png' | relative_url }}" alt="Screenshot of a player being above max level and having a developer batch" />

<img src="{{ '/assets/images/posts/vanilla-unrestricted-server-script/player-fakedev2.png' | relative_url }}" alt="Screenshot of a player being above max level and having a developer batch" />


## DevTextBufferWrite / DevTextBufferDumpToFile

To aid in debugging, Squirrel contains a few functions intended for developers. Here we take a specific look at two of those, `DevTextBufferWrite` and `DevTextBufferDumpToFile`.

Note that these functions could have been executed only against the Titanfall2 game servers, not game clients. Furthermore, the server cannot tell the client to compile/execute scripts without a remote callback registered.

With `DevTextBufferWrite` a developer can write a string to buffer and then save said buffer to a file using `DevTextBufferDumpToFile`. This means combining the two functions one can e.g. use

```
script DevTextBufferWrite("this is a test")
script DevTextBufferDumpToFile("abc.txt")
```

to create a file called `abc.txt` which contains the text `this is a test`.

Note that we are not limited to just the current folder. For the filename we can give the function any absolute pathname and as long as we have access to it, it will write the file to said path. Thankfully this function is limited to text, so we cannot use this to upload any binary file to the server.

However what we can do is write a script to a batch file that will then download and run a secondary payload. The only thing still preventing us is that we need a way to execute that batch file.\
To work around this, we could try to write it to the Windows user startup applications. This means that upon restarting the device, the file will be executed. However there's yet another roadblock, as to write to a Windows user startup applications folder we need to know their username as it is part of the path.

Should we know username for some reason, all we need to do to complete the attack is to simply run

```
script DevTextBufferWrite("start \"calc.exe\"")
script DevTextBufferDumpToFile("C:\\Users\\USERNAME\\AppData\\Roaming\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\test.bat")
```

and upon restart our batch file is executed. In this example, it simply opens the calculator app but replacing this line with a PowerShell script to download and run a virus is all that is needed to take control of the server.

Note that we cannot use
```
%appdata%\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\test.bat
```
as the path as `%appdata%` does not get resolved at all.

Now given that this is about an attack on the server, the Windows user name could probably be bruteforced from a list of commonly used ones but assuming best practices, gameservers are usually set up to rebuild from a fresh image on reboot.

Note that again this attack would only work against Titanfall2 game servers but not against game clients.

For reference in Northstar, [these developer functions are blocked by default](https://github.com/R2Northstar/NorthstarLauncher/pull/211).

## ClientCommand

However, we do not even need to take full control of the gameserver to start attacking other clients.

What makes the vulnerability especially bad is that in the security model of Titanfall2 unlike Northstar, the dedicated server is fully trusted and due to this the client accepts any commands from the server. This is for example used to connect a client to a server during matchmaking, where essentially the server sends a ClientCommand that tells the client to connect to a specific server.

Note that ClientCommand cannot be used to force script execution on the client since the retail game-clients do not have the `script_client`/`script_ui` functions. As such in an attack against ClientCommand we're limited to certain commands like `connect`.

In Northstar, ClientCommand is blocked meaning the server cannot tell the client to run any command at all. This is necessary as unlike standard Titanfall2 where only Respawn is hosting dedicated servers, anyone can host a game server in Northstar so in our security model, the game server is always untrusted.

## Stryder session token stealing

When connecting to a gameserver, the unmodified retail game client sends it a valid Stryder session token on connect. Presumably this is done for some kind of authentication.

Now using ClientCommand mentioned above, this means an attacker can use the `script` vulnerability to force all clients in a public match to connect to a server they host themselves.

When the clients connect they then send the Stryder token which the attacker can then grab. With this token the attacker achieves limited access to the victim's Titanfall2 account. The token can be used to make API calls on behalf of the victim against the Stryder Titanfall2 backend server.

Around October 2022 we found out about the fact of clients sending Stryder token to game server and as such [deployed a patch for Northstar that clears the token](https://github.com/R2Northstar/NorthstarLauncher/pull/282), so that the client no longer send valid tokens to the gameserver. Further we restricted players to only the patched version by requiring players to update in order to play on Northstar.

For the official public Titanfall2 game servers this method of sending the Stryder token would technically be fine under its security model as the server is fully trusted, so sending it a valid token is not an issue. However with the `script` vulnerability, this trust model fell apart as suddenly an attacker could gain control of the server, making it no longer trusted.


# FAQ:

> **Q:** Why didn't you publicly announce that vanilla Titanfall2 servers were insecure when you found out?

**Answer:** We followed (and were asked by EA Security to follow) the process of _Coordinated Vulnerability Disclosure_. \
This means that the issue is reported confidentially to the affected party, in this case Respawn/EA and information about the vulnerability are only made public once there was enough time to implement a fix.

Once we saw more public abuse of the exploit, we had an internal discussion about putting out a PSA to warn players about the potential of a vulnerability without disclosing how it works. Ultimately we settled on giving Respawn/EA a one week deadline. Thankfully the issue was patched before reaching the deadline and as such a PSA was no longer necessary.

&nbsp;

> **Q:** With this exploit I could have played Frontier Defense on maps where it was never released, why didn't you tell me about this? >:(

**Answer:** This exploit allows for so much more than just playing unreleased map/mod combinations. As such letting anyone know about this publicly before it was patched would have been a huge security risk.

&nbsp;

> **Q:** Can you recap again what the vulnerability was?

**Answer:** Titanfall2 game servers had a bug where any player could run Squirrel commands on server-side. Usually this should not happen as it completely breaks the security model of Titanfall2. This is essentially remote code execution (RCE) within the bounds of Titanfall2's scripting language called Squirrel.

# Final Words:

Congrats on making it to the end of the post. I hope you enjoyed the little tour into how we reported the script vulnerability to EA Security and Respawn, and worked with them to resolve it.
At this point I want to give a shout-out again to Respawn and EA Security for listening to us and resolving the issue. 

Then of course special mention goes to [_zxcPandora_](https://github.com/zxcPandora) for originally finding the bug as well as [_Emma_](https://github.com/emma-miler) for doing some PoC testing, [_wolf109909_](https://github.com/wolf109909) and [_NorthstarCN Team_](https://northstar.cool/) for keeping us updated on usage of the exploit they found in the wild, [_Taskinoz_](https://github.com/Taskinoz) for reaching out to a Respawn employee directly, [_H0L0_](https://github.com/H0L0theBard) and [_eRaid_](https://github.com/PhilippHtz) for helping with proof-reading, and of course all the lovely Northstar developers and contributors as well as the rest of community as whole <3
