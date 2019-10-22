---
title: Triforce
theme: black
revealOptions:
  history: true
  transition: convex
---

## Rust, Open Source, Gamedev

----

### Contents

- Gamedev Overview
- Why Rust?
- C++ and Rust Open Source

---

### About

- Game Developer for 12+ years
- Edge of Reality (midd️ling) ☠️
- Vigil Games (middling) ☠️ (also THQ ☠️)
- DICE/Frostbite (huge) 🖐
- Embark Studios (small, but fierce) 🦀

----

### Disclaimer

- Opinions based on my experience
- General view of gamedev, but not total

---

## Gamedev

![cats](https://media.giphy.com/media/UYqgQdSPZhqI8/giphy.gif)

----

### Pieces

- Engine
- Tools
- Game
- Server*
- Services*

![diagram](diagram.png)

----

#### Engine

- Reusable components eg physics, rendering
- Wrappers on top of platform APIs
- Occasional user of open source eg. compression

![engine](https://media.giphy.com/media/vf5TjQrio0TBK/giphy.gif)

----

#### Tools

- Predominantly centered around content pipelines
- Often mixture of languages, C++/C#/Python etc
- Frequent user of open source

<img src="https://media.giphy.com/media/U3Nx8EtP7h1p0WFKat/giphy.gif" alt="convert" height="300" width="300">

----

#### Game

- Bespoke code specific to a single game
- Infrequent user of open source

![unique](https://media.giphy.com/media/8FJrkpMf74BlOpntMD/giphy.gif)

----

#### Summary

- Most games use open source
- Most games are built with open source
- Most games and associated software are closed

---

## Why Rust?

![crab](https://media.giphy.com/media/T6Wc7n3lVh9lu/giphy.gif)

----

### Rust + Open Source = ♥️

> ... combined with the openness and collaborative nature of the quickly growing ecosystem of and around Rust with crates.io and the tens of thousands of open source crates with a best-in-class package system, cargo, truly makes Rust a [language for the next 40 years](https://www.youtube.com/watch?v=A3AdN7U24iU).

----

### Part of the Appeal

- Open source is one of Rust's core pillars

- Using ~411 crates in our main Rust project
- Have [open sourced](https://embark.dev/) 9+ crates so far
- Have contributed to dozens of crates
- Helping sponsor and fund several projects/people

---

## Why OSS is rarely used

![skeptical](https://media.giphy.com/media/cmjCuhwQokW5D2NxMw/giphy.gif)

----

## Boring Reasons

![bored](https://media.giphy.com/media/NWg7M1VlT101W/giphy.gif)

----

### Licensing

- Companies are paranoid about external code licenses
- GPL in your game means everyone has a bad day

----

#### C/C++

- Company dependent process
- Probably requires explicit approval
- Usually manual, slow

----

#### Rust

Can specify license requirements in crate metadata...

```toml
[package]
name = "cargo-deny"
repository = "https://github.com/EmbarkStudios/cargo-deny"
license = "MIT OR Apache-2.0"
license-file = "LICENSE"
```

----

#### + cargo-deny



----

#### Finance

- Easier to spend money than to use an open source library/product
- Like invoices, a [lot](https://www.independent.co.uk/news/world/americas/google-facebook-scam-fake-invoice-wire-fraud-guilty-a8840071.html)
- Papertrail, Agreements, etc

---

### Fun Reasons 🎉

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Telling a programmer there&#39;s already a library to do X is like telling a songwriter there&#39;s already a song about love</p>&mdash; Pete Cordell #NoDealNoWay (@petecordell) <a href="https://twitter.com/petecordell/status/428542622844477441?ref_src=twsrc%5Etfw">January 29, 2014</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

---

### C/C++ Reasons

![annoyed](https://media.giphy.com/media/9mWg0JLV4NwM8/giphy.gif)

----

#### Getting It 

- Likely vendored, often a one-way transform
- It probably contains stuff you don't want
- Hook it into your (proprietary!?) build system

----

#### Building It 🔨

- Fixup unnecessary Linuxisms (and not upstream)
- Fixup MSVC warnings/errors (and not upstream)
- Fixup syscalls for proprietary platforms (and not upstream, because you'll get sued)

----

#### Integrating It

- May require hooking your custom allocator
- May require hooking your logging system
- Wrap it to reduce chance of catastrophic usage

----

#### Lack of Interoperability

- C++ is a huge language
- Mismatch of principles between library and target codebase
- C++ libraries often rely on the std lib
  - Which is a problem when your codebase doesn't
- Multiple compilers

----

#### Distrust 🤔

- Every external dependency is a potential landmine due to lack of safety guarantees
- Most libraries are not designed with real-time performance constraints in mind
- Data race free? `¯\_(ツ)_/¯`
- External code is seen as inherently unreliable long term

---

## A Contender Appears



----

### Not just the language 🦀



---

### On Getting & Building 🔨

----

#### The Good

- Solid std lib
- Single (kind of) cross compiling toolchain
- Unified build system, including build.rs
- Procedural macros are fantastic
- Cargo makes using dependencies easy
  - Easier to build and use a C library via Rust

----

#### The Bad

- ...almost **too** easy
  - Unusable licenses
  - Some crates you just don't want (OpenSSL!)
  - Duplicates
  - Default features
- C/C++ code usually breaks cross compiling
- Procedural macros are sloooooow to compile

----

#### The Ugly

- build.rs & procedural macros are exploit magnets
- build.rs often relies on system dependencies
  - python
  - cmake
  - make
  - perl

----

#### But tools help!

- Cargo gives a consistent cross-platform base
- [Watt](https://docs.rs/watt/) shows potential future for proc macros
  - WASM
  - Sandboxed
  - Fast
- Something similar for build.rs would be fantastic

---

### Interoperability

![chain](https://media.giphy.com/media/MFabj1E9mgUsqwVWHu/giphy.gif)

----

#### Simpler

- Rust skews more towards C than C++
- macros are part of the language
- proc macros > code generation

----

#### Traits

- Powerful mechanism for communication
- `From`, `Into`, `AsRef`, `Debug`, `Default`, etc
- Separation of data and logic

----

#### Guarantees

- Clear, validated ownership
- Safety issues can only arise from `unsafe`
- No data races

---

## Collaboration Is Hard

![gift](https://media.giphy.com/media/NQ3uhmwRUSTsI/giphy.gif)

----

### It's a Two-Way Street

- Using open source is the easy part
- Open sourcing your own stuff is hard
- Contributing to others' code is even harder

----

### [rustfmt](https://github.com/rust-lang/rustfmt)

Remove pointless conflict over style

```yaml
- run: rustup component add rustfmt
- name: check rustfmt
  uses: actions-rs/cargo@v1
  with:
    command: fmt
    args: -- --check --color always
```

----

### [clippy](https://github.com/rust-lang/rust-clippy)

A linter and a teaching tool

```yaml
- run: rustup component add clippy
- name: cargo clippy
  uses: actions-rs/cargo@v1
  with:
    command: clippy
    args: --lib --tests -- -D warnings
```

----

#### [cargo-deny](https://github.com/EmbarkStudios/cargo-deny)

- Our dependency gardening tool, open source
- Ensures a crate's license requirements
- Keeps certain crates out of your graph
- Detects duplicates

![mk](https://media.giphy.com/media/rLJJkk3cymTeg/giphy.gif)

----

```yaml
- name: install cargo-deny
  uses: actions-rs/cargo@v1
  with:
    command: install
    args: cargo-deny
- name: cargo-deny check licenses & bans
  uses: actions-rs/cargo@v1
  with:
    command: deny
    args: -L debug check all
```

---

## Summary

- Rust simplifies using and contributing to OS
- Open source is a crucial reason to use Rust
- Gamedev, Rust, and Open Source are a winning combo

-----

![pizza](https://media.giphy.com/media/OAbybHNIrqmqY/giphy.gif)
