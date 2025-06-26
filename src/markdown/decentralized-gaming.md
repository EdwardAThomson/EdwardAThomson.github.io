---
title: Decentralized Gaming
description: Ed Thomson's insights into decentralized gaming, blockchain gaming, on-chain games
---


## Blockchain gaming
As mentioned on the home page, I’ve been doing a lot of research around blockchain gaming. People use the terminology in different ways, so ironically there isn't a strong consensus on what a blockchain game is. Provided there is a blockchain somewhere in the stack then people use the phrase "blockchain gaming".

In my first blog I argued in favor of putting the [game state on-chain](https://medium.com/@edward.thomson/blockchain-gaming-putting-the-state-on-chain-cc3915090547). However, my thinking recently is to perhaps keep a record on-chain of game actions (not quite game state) and then to compute state and game logic off-chain. Trying to do game logic on-chain is sub-optimal for complex games, but can work for something simple. Decentralization can still be maintained.

It is interesting to note that most blockchain games that we see advertised today are mostly centralized games with NFTs for item ownership. While this is somewhat interesting, it isn’t really my focus or what holds my interest.

NFTs have become overhyped relative to the value of the technology, ditto for the phrase metaverse. While not inherently bad terms, they are being abused for marketing purposes.

## What is Decentralized Gaming?
What I really want to solve is decentralization for gaming, but what exactly do I mean by ‘decentralized gaming’?

I suggest a first understanding can come from combining the definitions of “decentralized” and “game“. If we merge them together we can derive a potential definition of a decentralized game:

> Any game that features distributed planning and authority, and is designed to resist single points of failure could be described as “decentralized”. For me, I use the phrase “decentralized game” to refer almost exclusively to games that require a computer or similar electronic device.

* See the corresponding Wikipedia pages on [Decentralization](https://en.wikipedia.org/wiki/Decentralization) and [Video games](https://en.wikipedia.org/wiki/Video_game).

The definitions do not necessitate the use of a blockchain; however, given that blockchains are a solution for providing trust in a public adversarial network then it is an obvious technology to use for decentralized games which are necessarily online and public (think MMOs). However, as noted above, the use of a blockchain within a software stack does not guarantee decentralization. A centralized game with NFTs glued on to the side doesn’t decentralize much.

I think decentralized games really need:

* Open Source Code (with appropriate license)
* Decentralized Blockchain Network
* Distributed verification of player actions.


## Real-Time Decentralized Gaming
Decentralized gaming represents a revolutionary shift in how games are developed and played. Unlike traditional gaming models that rely on centralized servers, decentralized games operate on blockchain networks, providing enhanced transparency, ownership, and fairness. However, achieving real-time, synchronous gameplay in a decentralized environment poses unique challenges.

Why is real-time gameplay so captivating? From fast-paced shooters to competitive strategy games, the immediacy of interactions is what keeps players engaged. Yet, the decentralized model, with its inherent reliance on consensus and distributed networks, struggles to match the speed and fluidity players expect from real-time experiences.

Read more on my Medium blog: [The Future of Real-Time Decentralized Gaming](https://edward-thomson.medium.com/the-future-of-real-time-decentralized-gaming-528a248f766a).


## Enhancing Fog of War in Multiplayer Games with Cryptography
In June 2020 I published a blog with the title "[Preventing cheaters in Fog Of War Games](https://edward-thomson.medium.com/preventing-cheaters-in-fog-of-war-games-69f202fbe107)". In that blog I explore an interesting cryptographic protocol which would make cheating in Real-Time Strategy games near impossible. The technique was created by researchers back in the early 2010s, however it was missing one final piece. I haven't yet developed that final piece, but I did make progress in replicating their cryptographic protocol.

Using Oblivious Function Evaluation (OFE) we can compute a Private Set Intersection (PSI), such that players can detect each other within the game without revealing their exact positions, maintaining the integrity of the Fog of War. This ensures that no player can gain an unfair advantage by peeking into memory.

My demo, built in JavaScript, is a bit slow despite some nice optimizations such as multi-level grids, web workers, Blake3, and ChaCha20. The next stage would be to consider Wasm or otherwise building a desktop app.

See the live demo here: [Private Set Intersection Demo](https://psi-demo-delta.vercel.app/). The code is on [GitHub too](https://github.com/EdwardAThomson/psi-demo).


## Selection of Blogs

While my first piece mulled over the possibility of putting state fully on-chain, in later pieces I discuss how to verify the actions of players. I also consider how we can fund and govern such a game too, which is tricky if such games will be open source by default.

If that doesn’t sound crazy enough, I postulated that we could turn [gaming guilds into securitized DAOs](https://medium.com/@edward.thomson/in-game-and-on-chain-guilds-can-become-companies-4f10d7906b2e). I naively suggested they can be companies, but a friend suggested that they should potentially be either mutuals, partnerships, or actual guilds.


* [Building Private Loot Systems with Fair and Verifiable Randomness Using VRFs](https://edward-thomson.medium.com/building-private-loot-systems-with-fair-and-verifiable-randomness-using-vrfs-746039dc0aa4) (Sep 2024)
* [What Defines a “Web 3 Game,” and Is There a Better Term?](https://medium.com/@edward-thomson/what-defines-a-web-3-game-and-is-there-a-better-term-c94954db2df4) (May 2024)
* [Playing for Keeps: How Blockchain Transforms In-App Purchases to Ownership](https://medium.com/@edward-thomson/playing-for-keeps-how-blockchain-transforms-in-app-purchases-to-ownership-727933b08dba) (Oct 2023)
* [Emergent Currencies in the Gaming Metaverse: Unleashing the Power of Player-Created Money](https://edward-thomson.medium.com/emergent-currencies-in-the-gaming-metaverse-unleashing-the-power-of-player-created-money-7b36b449503c)  (Apr 2023)
* [Multiple currencies for online games](https://edward-thomson.medium.com/multiple-currencies-for-online-games-77d56e2d39b3) (Jan 2023)
* [Preventing cheaters in Fog Of War Games](https://edward-thomson.medium.com/preventing-cheaters-in-fog-of-war-games-69f202fbe107) (Jun 2020)
* [The thick and thin of blockchain gaming architectures](https://edward-thomson.medium.com/the-thick-and-thin-of-blockhain-gaming-architectures-a51795156420) (Dec 2019)
* [Fork off! Preserving gaming communities with blockchain technology](https://edward-thomson.medium.com/fork-off-preserving-gaming-communities-with-blockchain-technology-4d90c04d0b8e) (Dec 2019)
* [Trusted trade-offs in blockchain gaming](https://edward-thomson.medium.com/trusted-trade-offs-in-blockchain-gaming-416faa5b8df8) (Dec 2019)
* [In game and on-chain: guilds can become companies](https://edward-thomson.medium.com/in-game-and-on-chain-guilds-can-become-companies-4f10d7906b2e) (May 2019)
* [True ownership needs provable on-chain assets](https://medium.com/@edward-thomson/true-ownership-needs-provable-on-chain-assets-cf347ff0f384) (Mar 2019)
* [The worlds of Web 3 Games](https://edward-thomson.medium.com/the-worlds-of-web-3-games-7e4797126a94)  (Jan 2019)
* [Governance of and incentives for a Web 3 game](https://edward-thomson.medium.com/governance-of-and-incentives-for-a-web-3-game-56edefb89cd4)  (Jan 2019)
* [Blockchain gaming: putting the state on-chain](https://edward-thomson.medium.com/blockchain-gaming-putting-the-state-on-chain-cc3915090547) (Jan 2019)


## YouTube

[Decentralized Gaming Explained](https://www.youtube.com/playlist?list=PLQNfGR2MwnqmPhdYx1HfzZ6IR6Z2xAWL2) – Videos by the Decentralized Gaming Association
[Overview of decentralized games](https://www.youtube.com/watch?v=sPgZoGGxBAc) – hosted by the Blockchain Game Alliance.

## Podcast Appearances

[Andrew Steinwold](https://twitter.com/AndrewSteinwold/status/1273641903230255105) interviewed me for his [Zima Red Podcast](https://anchor.fm/andrew-steinwold/episodes/Edward-Thomson---PhD-In-Astrophysics-Turned-Decentralization-Diehard---ep-25-efg2vs).


## Decentralized Gaming Association

I helped to co-found the [DGA back in November 2019](https://decentralizedgaming.io/about), the group came together when the founding members met online to discuss what should be done to further promote fully decentralized games. The technology is poorly understood and the games virtually unknown, yet we have the belief that the technology will bring great benefits that outweigh the problems.

