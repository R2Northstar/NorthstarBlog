---
title: "Bringing custom shaders to Northstar"
header:
  image: /assets/images/page-header-image.jpg
  og_image: /assets/images/page-header-image.jpg
tags:
author: 4V
last_modified_at: 2025-06-28T15:43:00-01:00
---

Hey, 4V here, RoyalBlue and me are currently working on bringing Titanfall 1 maps into Titanfall 2.
While we are still having alot of obstacles on our way its come quite the long process, in the process of that endeavour alot of discoveries were made that are also useful in many other mods and projects relating Titanfall 2 and Northstar.
Today i want to talk to you about one of these, possible one of the biggest for overall mods, custom shaders.
You might have seen posts in the Northstar discord recently of different shaders having been brought ingame, such as a mandelbrot fractal or for people that love games, the Balatro background as a shader, these are all custom shaders.
So lets start getting into how we got from wanting Titanfall 1 maps in Titanfall 2 to bringing the Balatro background into Titanfall 2 as a 12kb shader file.

## Shaders

First let me quickly explain to you what a shader in this context even is, how it started and how its going aswell as future applications of this.

Shaders are in their most basic form code in compiled form that runs on your graphics card and basically do alot of math in a short time to achieve a desired result based on what type of shader it is.
There are multiple types of shaders like Vertex- Pixel- Compute- or Geometry shaders.
I will only talk about Vertex- and Pixel shaders here (VS and PS respectivly) as they are the only relevant shaders for our usage aswell as try to keep it not too technical.

So what do these fancy words even mean you might ask?

<style>
.img_legend {
  font-size: 0.8em !important;
  font-style: italic;
  text-align: center;
  margin-top: -15px !important;
}
.video_legend {
  font-size: 0.8em !important;
  font-style: italic;
  text-align: center;
}
</style>

<p style="display:flex;justify-content:center">
    <img src="{{ 'assets/images/posts/custom-shaders/example.png' | relative_url }}" alt="A white, floating cube." />
</p>
<p class="img_legend">
  To explain these types, we will also use this cube as an example.
</p>

Vertex shaders in very basic terms are able to modify the basic “shape” of a 3D object in a game every frame.

<video autoplay muted loop style="max-width: 100%">
    <source src="{{ 'assets/video/posts/custom-shaders/wobble.mp4' | relative_url }}"
            type="video/mp4"
    >
    Sorry, your browser doesn't support embedded videos.
</video>
<p class="video_legend">
  This is our cube with a simple vertex shader applied that makes the mesh wobble a bit.
</p>

Pixel shaders basically does the same but for pixels on said mesh, to for example give the cube a anodized metal finish look, it can use just math for this, or textures that then do alot of heavy math to calculate the finished look of your cube.

<video autoplay muted loop style="max-width: 100%">
    <source src="{{ 'assets/video/posts/custom-shaders/ps.mp4' | relative_url }}"
            type="video/mp4"
    >
    Sorry, your browser doesn't support embedded videos.
</video>
<p class="video_legend">
  And now with the pixel shader ontop of that, we also have it change its look each frame.
</p>


I wont go into detail on all the other shader types that exist because there is quite alot more but i will leave you with a small fun fact!
Ever wonder why exactly Graphics Cards were used so extensivly for crypto mining?
The answer is compute shaders, they allow you todo HEAVY calculations in parallel without having to actually do any other heavy graphics work, basically perfect for big math calculations which is exactly what crypto mining in its basic form is.

Before we can jump into Titanfall and all the fun we have to quickly just get to explaing one more word.
What is a “Material”?
A material takes some parameters like for example different textures, the shader that is supposed to be used and some more technical things to pass that to the game which then uses all that info to, after alot of processes bring the beautiful world of Titanfall onto your screen.

## Making sense of shaders in Titanfall 2

Titanfall 2 uses multiple shader systems, we will call them “rpak shaders” and “vmt shaders”.
Most Materials in Titanfall 2 use rpak shaders, its important to note that the rpak system did not exist in Titanfall 1, as such all materials in Titanfall 1 use vmt shaders and vmt materials.
What is the difference in these two?
Rpak shaders for one are alot smaller in filesize compared to comparable vmt counterparts,
For example, the vmt pixel shader “unlittwotexture” is over 1 gigabytes big, while a comparable rpak counterpart “uberSamp2222_wld” is... 111 kilobytes big (quick math: thats over 9000 times smaller).
The reason?
In the vmt shader there are over 100k different compiled shader files in the so called “vcs” file (ValveCompiledShader), while the rpak shader has... 8.
vmt shaders are basically legacy source engine things, while the rpak shaders are something respawn themselfs added to the engine.

<p style="display:flex;justify-content:center">
    <img src="{{ 'assets/images/posts/custom-shaders/shader-size.png' | relative_url }}" alt="Size comparison of VMT and RPAK shaders, with the least being smaller." />
</p>
<p class="img_legend">
  Rpak shaders are indeed much smaller than VMT shaders.
</p>

# First attempts

While RoyalBlue and me were working on porting Titanfall 1 maps we quickly ran into one big cosmetic issue.
You see, the map we were starting with was mp_runoff, a Titanfall 1 map that quite prominently displays a water treatment facility where you traverse the canals of said facility which are filled with a bit of water.
In the initial map file port from RoyalBlue the water wasnt visible, but after alot of tinkering after i finished the first test scripts to port the Materials from Titanfall 1 to Titanfall 2 the water became visible, sadly not in its Titanfall 1 glory, which is were shaders come into play.
In Titanfall 1 the water shader is a vmt shader, trying to tell a Titanfall 2 vmt material to use said water shader crashes Titanfall 2.
Why?
Well, turns out the vmt shader files for the water shader simply dont exist in Titanfall 2, but after RoyalBlue did some digging in the Game it turned out that the game still seems to try to load those files.
10 minutes later i simply took said shader from Titanfall 1, copied it into Titanfall 2 and... it crashes.
Skipping alot of technical things here we got no further then the game simply crashing.
So we got to work, the shaders for vmt files are stored in, as before mentioned, “.vcs” files, which is basically just a file format that is alot of individual shader files packed into a single file so your computer has an easier time reading them.
Our idea here was that certain, very important information in the individual shader files needs to be changed to fit the Titanfall 2 variants, the so called “buffers”.
About 2 days later we had a working vcs file unpacker and packer script, put .vcs file in get a folder of all the individual shader files out.
As these files are compiled in a format that is not human readable we had to decompile them to see what could be done.
The plan here went something like this:
Unpack a vmt shader from Titanfall 1 that also exists in Titanfall 2 (we had choosen the “refract” shader), then decompile all shader files after unpacking (its just a couple thousand, what could go wrong), see the main differences, then from this fix these differences in the Titanfall 1 water shader files to fit Titanfall 2.

Oh yeah, and in the meantime also find the exact DirectX shader compiler respawn used, in order to replicate the shaders as close as possible to remove as many things that could go wrong, our case version 9.30.9200.16384, a version that just didnt exist.
We couldnt find it anywhere, no archive, no microsoft websites, nothing.
Until i just decided to try my luck and ask in the official DirectX discord server (yes that exists) for that version, where a very kind microsoft employee told me quickly that 9200 is the build number of Windows 8.1, turns out the compiler we searched for was part of an Windows 8.1 SDK.

Cool, we got the files all fixed (keep in mind, that meant “fixing” about 2000 different shader files), got the right compiler and we even figured out how to get the game to properly load our vmt shader files in the meantime.
Launch Northstar, open console, type in our map name prefixed by “map” to load it... and it crashes.
Still with an error that can be traced back to the part that loads the shaders.

In parallel with all of this the people behind repak, a piece of software that allows us to make our own .rpak files was working on basically reinventing half of it to make it possible for us to unpack and repack shaders into .rpak files so we can atleast use rpak shaders for stuff like decals or grass in the maps.

This was the point where motivation also kinda went away for trying anything shader related, and RoyalBlue and me deciced to simply stop trying to get the water shader working for now and in the future possibly port it to the rpak shader system if we can figure that out.
Getting literally any news on shader things would take over 10 months.
In that time i on and off tried new ideas for the water shader again and again but nothing ever worked.
So we decided to for now keep the simple refract water i put together in vmts for now, video attached, while this wasnt a custom shader it was ok for now and was good enough to make me not completely waste my time trying to get custom shaders working.

<video muted controls style="max-width: 100%">
    <source src="{{ 'assets/video/posts/custom-shaders/basic_water.mp4' | relative_url }}"
            type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>

Somewhere in this timeline a man, a legend, emerged... Amos, the founder of r5reloaded, the northstar equivalent for Apex Legends, he started to contribute alot to repak and somewhere in thoose months made it actually properly pack shaders in a custom “.msw” file format, said format was made by rexx and rika for their new piece of software “rsx” which would replace LegionPlus as “the” program to export files from Apex and Titanfall 2 .rpak files.
Which brings us to...

## The first of many custom shaders

Somewhere in early 2025 RoyalBlue and me came together again in voice chat for the first time in a long time since i was gone for a bit.
This was also when i learned repak got huge updates, one of which being proper shader packing.
2 hours later of rewriting my entire code that makes the Materials for our map ports to fit the new repak software format we were ready.
We packed a shader from a different map and used it.
It worked, we finally had whats needed to make transparent materials transparent, to make scrolling materials scrolling, to make glass glass.
But i was bothered. Its really cool and basically everything needed to port maps but for whatever reason i always want more, so i asked RoyalBlue if she could possibly help me with an unpacker and packer for the custom “.msw” file format, i wanted to write it myself but she literally whipped together a working programm for this in like 2 hours, fixed it in another hour because something was broken and then sent me a working version.
From here on the speedrun of getting something custom ingame began, heart at 140BPM (atleast for me) i was decompiling every shader in that msw, changing it a bit to have every of the file display a different color, recompiling them, then repacking into .msw to pack into an .rpak and test it.
It worked.
Everything using that shader ingame was red, like the first shader file should do, paint it all red.
The first time a custom shader worked, i think i can confidently say that both RoyalBlue and me had about a BPM of 200 at this point...

## The process

So in a bit more detail, how?
The basic process goes something like this:
Get an existing Titanfall 2 rpak shader and unpack it to the “.msw” file via rsx, unpack this “.msw” with the unpacker software RoyalBlue made, decompile the first shader fxc file with a decompiler, change the hlsl code to whatever you want, recompile with an compatible DirectX compiler to the right shader model (in our case for the rpak pixel shaders ps_5_0) and fix all errors and potential warnings in the process, repack the “.msw” file and then make a new “.rpak” with our new “.msw” file which contains the
new changed shader.

## Making a useful shader and messing with them too

A couple minutes after the shaders first worked ingame i decided to try something useful, visualizing the Lightmaps (a integral part to making shadows and lights look good ingame) of the map.
A single line change in the world shader later we had a shader that just rendered one part of the Lightmap data ingame.

<img src="{{ 'assets/images/posts/custom-shaders/lightmap-shader.png' | relative_url }}" alt="Screenshot showcasing a shader rendering one part of the Lightmap data ingame" />

Ok, this was cool, we had something to finally visualize alot of thing that before this we had to use programms like renderdoc for, to even remotely see if something like the lightmaps was not quite right but still... where is the fun in something that allows infinite customizablity if you dont mess with it.
So a couple minutes later i found a good looking shader online which renders a mandelbrot fractal, ported it to hlsl and integrated it into the main world pixel shader for the map.
I think a video of it does it more justice.

<video muted controls style="max-width: 100%">
    <source src="{{ 'assets/video/posts/custom-shaders/mandelbrot.mp4' | relative_url }}"
            type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>

This was it, a fully procedual fractal, no textures used, all done in shader code with math, something that previously wouldve taken possibly hundreds of megabytes in animated vmt was now just 12kb big and a shader that performed even better then a animated vmt would.

Later on i also went on to make some more debug shaders to debug more information about the world materials, for example one that cycles through multiple important textures in the material.

<video muted controls style="max-width: 100%">
    <source src="{{ 'assets/video/posts/custom-shaders/debug.mp4' | relative_url }}"
            type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>

---

<video controls muted style="max-width: 100%">
    <source src="{{ 'assets/video/posts/custom-shaders/vmt-to-rpak-fail.mp4' | relative_url }}"
            type="video/mp4"
    >
    Sorry, your browser doesn't support embedded videos.
</video>
<p class="video_legend">
  Bonus: trying to port the original vmt shader to the rpak system but failing epicly.
</p>

## The future

Since all this i have made some more custom shaders, such as porting the Balatro background shader to Titanfall as a camo.

<video muted controls style="max-width: 100%">
    <source src="{{ 'assets/video/posts/custom-shaders/balatro.mp4' | relative_url }}"
            type="video/webm"
    >
    Sorry, your browser doesn't support embedded videos.
</video>

But all this is pale in comparison what the entire community can do with shaders with proper ressources and tools for this process.
In the coming week i will also start releasing a proper guide for modders to both make and integrate custom shaders into their projects, be it maps or just cosmetic mods.

This can eventually lead to an completely new era of mods that port weapons from other games, in which modders could port the original shaders to make the weapons look even closer to their original version.
Or mappers that want to go crazy on effects, maybe even people that just simply want to recompile original shaders to only render the diffuse texture of a Material to make the game run at even more fps because why not?

---

I sincerely hope this was an interesting read for you and that you were able to take atleast something with you from this.
This was my first time trying to write something like this and all i can say is that i never thought i could properly finish this.

Also, no i didnt forget it.

Massive thanks to everyone that made this even remotely possible.
The people working on rsx and repak. rexx, Rika, Amos, Spoon and all others that contributed to it.
Thoose working on making porting maps even possible. Biscuit3659, RoyalBlue and others contributing to it.
BobTheBob, while she isnt activly helping in the porting process of maps she is the person that started the entire thing of porting runoff by using it for the first ever Titanfall 1>Titanfall 2 tests years ago.
Literally everyone else that made, or still makes Northstar possible.

Thanks for reading through this.
