---
title: Triforce
theme: black
revealOptions:
  history: true
  transition: convex
---

## Rust, Open Source, Gamedev

----

![pizza](https://media.giphy.com/media/OAbybHNIrqmqY/giphy.gif)

---

## About

- Game Developer for 12+ years
- Edge of Reality (midd️ling) ☠️
- Vigil Games (middling) ☠️ (also THQ ☠️)
- DICE/Frostbite (huge) 🖐
- Embark Studios (small, but fierce) 🦀

---

## Typical Gamedev

![closed](https://media.giphy.com/media/kDwIbnBqKe3D7BSqrt/giphy.gif)

----

### Pieces

- Engine
- Tools
- Game
- Server*
- Services*

----

#### Engine - Closed

- The `std` for gamedevs
  - Yes, including an in-house ST*L
- Abstractions on top of platform APIs
- Middleware integrations
- Probably uses some open source libraries
  - Probably Zlib
  - Probably modified
  - Probably *n* - 1 month old, where *n* is the age of the studio

----

#### Tools - Closed

- Stuff to accelerate and streamline development
- Predominantly centered around content pipelines
- Mixture of languages, C++/C#/Python/batch
- Often wrapping/talking with external software
- Almost certainly uses open source software

----

#### Game - Closed

- Bespoke
- Often the same thing as the Engine for new studios without external engine
- Less likely to contain open source libraries

----

#### Server - Closed

- Most MP games use a server authoritative client-server model
- Stripped down version of the engine and game
- Probably the only part of the codebase to target Linux

----

#### Services - Closed

- Often developed separately from the game
  - Matchmaking
  - Leaderboards
  - Friends/community/etc
- Often developed on completely separate tech stack(s) (eg Java!)
- Greatest overlap between games and other sofware industries
- Probably(?) contains open source software

----

#### Summary

- All games contain or use open source software
- Most games and associated software are closed
- ...but usage of open source is actually quite low

---

## Why OSS is rarely used

![skeptical](https://media.giphy.com/media/cmjCuhwQokW5D2NxMw/giphy.gif)

----

### Boring Reasons

----

#### Licensing

- Companies are (sometimes justly) paranoid about using external code
- EA has a "licensing portal" that all open source/external code must be approved through
- Copyleft licenses are almost universally avoided

----

#### Finance

- It's almost always easier to pay another company than to use an open source product/library
- Like invoices, a [lot](https://www.independent.co.uk/news/world/americas/google-facebook-scam-fake-invoice-wire-fraud-guilty-a8840071.html)
- Papertrail, Agreements, etc

---

### Fun Reasons

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Telling a programmer there&#39;s already a library to do X is like telling a songwriter there&#39;s already a song about love</p>&mdash; Pete Cordell #NoDealNoWay (@petecordell) <a href="https://twitter.com/petecordell/status/428542622844477441?ref_src=twsrc%5Etfw">January 29, 2014</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

### C/C++ Reasons

![annoyed](https://media.giphy.com/media/9mWg0JLV4NwM8/giphy.gif)

----

#### Building It 🔨

- You are almost certainly going to vendor it into your codebase, often losing all history and making future updates painful
- Good luck on it "just working" with your build system
- ...because your build system might not only be "uncommon" but actually custom and in-house

----

#### Building It (cont.)

- Congrats, it compiles cleanly!
- Just Kidding, here are some unnecessary Linuxisms you need to fix (and not upstream)
- Oh also you need to either fix or silence warnings because apparently no one has compiled
this code with the version of MSVC you are using

----

#### Building It (cont.)

- Oh, the library is doing memory allocation internally, need to modify it to use our custom allocator instead
- Oh, it's also trying to print to stdout/stderr, let's remove that or hook it into our custom logging system instead
- Oh, it's doing system calls that are non-existent or slightly different on this proprietary platform, so need to fix that, and make sure the changes are never **EVER** upstreamed so that our company isn't sued by Sony/Microsoft/Nintendo etc.

----

#### It's C++

- C libraries are (generally) smaller, simpler, and easier to integrate
- C++ libraries are often template monstrosities whose design is anti-thetical to the codebase into which you want to integrate it
- C++ libraries often rely on the std lib, which is often disallowed/heavily discouraged

----

#### Distrust

- Every external dependency is a potential landmine due to lack of safety guarantees
- Most libraries are not designed with real-time performance constraints in mind

---

## 

---

## ...Even the software we use!

----

- OS - Windows
- IDE - Visual Studio
- Debugger - VS (windbg)
- Toolchain - MSVC++/Sony SDK/XB1 SDK/etc
- Source Control - Perforce
- Content Tools - Photoshop/Maya/Houdini/etc


