# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Astro, deployed to GitHub Pages via GitHub Actions (`withastro/action`). The site is currently a single hand-written `index.html` (plain HTML/CSS, a little inline JS); migration to Astro is decided but not yet done. Astro was chosen because a blog and a Vietnamese version are planned, which a single static file handles poorly.

## Users

Primary: other developers — peers who arrive from GitHub, a PR, a talk, or a shared link and want to see who Duc Quang is, what he builds, and his code. Their job is to size up a fellow engineer quickly and then follow through to repositories, writing, or a direct connection.

Recruiters and potential collaborators may also visit, but the site is not optimized for them first.

## Product Purpose

The personal home of Duc Quang (GitHub: `ducquang2`), a software engineer in Ho Chi Minh City focused on React, React Native and TypeScript. It introduces him, shows his experience, stack and projects, and routes developer visitors to his GitHub, writing, and contact channels. Success is a peer leaving with a clear picture of his work and a reason to look at his code, read his posts, or reach out.

## Positioning

A developer's own site written for other developers: first-person, technical, and backed by real code links rather than marketing claims.

## Operating Context

- Hosted at `ducquang2.github.io` on GitHub Pages.
- Visitors frequently arrive from GitHub and move back to it; GitHub repositories are the main proof of work.
- Contact channels: email (nducquangg@gmail.com), GitHub, LinkedIn (`/in/duc-quang/`).

## Capabilities and Constraints

- Current sections: hero, About, Experience timeline, Stack, Projects, Contact.
- Planned: a blog / writing section.
- Planned: a Vietnamese version alongside English (i18n).
- Must honor `prefers-color-scheme` and `prefers-reduced-motion` (already does).
- Undecided: blog content source/format, URL structure for languages, whether the site stays a single page or splits into routes.

## Brand Commitments

- **`ducquang2` is the signature/handle.** It is the identity mark. Note: the current nav wordmark reads `ducquang.dev`, which conflicts with this and should be reconciled.
- **GitHub avatar is the photo**, used for the hero image, favicon, and OG image (`https://avatars.githubusercontent.com/u/70498757`).
- Voice: first person, plain and friendly, a curious "computer geek" who enjoys learning languages and tools (Neovim user).

## Evidence on Hand

- Experience (real): NAB Innovation Centre Vietnam (Aug 2026–present), chatavocado (Apr 2025–Aug 2026), Nimbus (Nov 2022–Apr 2025, fresher → junior), Kao Engine (Oct 2020–Dec 2021, incl. Hackathon Junction 2020 support).
- Education: B.Sc. Information Technology, University of Science, VNU-HCM (HCMUS).
- Award: Bronze Medal, HCMC Informatics 2019.
- Projects: NitFlex (live + code), Tower Defense (Unity 6, code); full list on GitHub.
- No testimonials, client logos, metrics, or published blog posts exist yet. Do not fabricate them.

## Product Principles

1. Show the code: link to real repositories and live demos wherever possible.
2. Speak developer to developer: concrete technologies and honest scope, no hype.
3. `ducquang2` is the consistent identity across the site and GitHub.
4. Built to grow: structure must accommodate a blog and a Vietnamese version without a rewrite.
5. Fast and light: static output, minimal JavaScript.

## Accessibility & Inclusion

- Respect reduced-motion and dark/light preferences.
- Bilingual audience (English and Vietnamese) is planned; set correct `lang` per page when the Vietnamese version ships.
