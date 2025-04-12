
<h1> fishing hut </h1>

this is a javascript/css/html fishing minigame from a larger project i made roughly 5 months ago in a complete haze over christmas break — it is actually like, really bad!
it's intended to be a webgame you can host on your neocities website without any bells or whistles. back when i wrote this i didn't even use bootstrap but for convenience's sake i've used it for formatting and columns as i revised this and cleaned up my code over the past few hours.

this minigame is free to use for anyone who wants to spice up their homepage a bit under the <strong> Creative Commons Attribution-ShareAlike 4.0 International </strong> license. i spent way too much time writing vanilla javascript so the least i ask for is a credit somewhere lolol. i also ask that you at least replace the shit placeholder assets i have — mostly because i do not own any of them and my license applies to the code exclusively!

i've tried commenting the code so that this is easy for beginners to copypaste and replace with their own assets or whatever, but i make no guarantees. trying to debug my shit code is going to be a hell of a learning opportunity though! also FYI the only reason i'm uploading is to github is because i'm trying to share this code with my friends and codepen bites so fucking hard like?? all the professional developers on this site scare me please spare me i'm just a hobbyist

<strong><em>DISCLAIMER: THIS CODE IS REALLY, REALLY BAD</em></strong>

&nbsp;

<h2> features of fishing hut </h2>
<ul>
  <li>NPC who you can talk to in order to initiate fishing</li>
  <li>currency earned for fishing</li>
  <li>different types of fishes you can fish for</li>
  <li>you can click the NPC to bother him which is fun</li>
  <li>score and bait systems</li>
  <li>quicktime events</li>
</ul>

&nbsp;
<h2>no but how does this even work though</h2>

player will start off with a score of zero and three bait. fishing works by watching for the alert to show up above the player character (in my shit rendition represented by a low quality espurr png) and then press space as quick as possible.

if the player succeeds in pressing the space at the correct time, they'll catch one of the randomly determined fish and earn points accordingly! if the player misses the cue, they'll lose one of three bait as the fish escaped :( if the bait count reaches zero, the game will end. player can also end the game prematurely if they'd like

as the player catches more fish their score will go up. once a failstate is reached (either due to bait running out or the player quitting), the player's score is converted into currency. and like i totally forgot how many points equal one currency and i'm not booting up vsc to check that my laptop is already dying sorry! 

<em>the player's currency is stored in localstorage due to the fact that this minigame was a part of that larger project where the localstorage currency total was used across an entire webpage instead of just this one minigame, so if you wanna configure something bigger with this you have everything you need lmfao</em>

&nbsp;
<h2>in conclusion</h2>
that's about it, thank you. if you have any questions please email me at catskulls.png@proton.me! i'm very open to helping everyone new to web development and/or neocities try and get this code functional and modify it to match their own vision. self-expression is fun guys trust me you should all learn game dev
