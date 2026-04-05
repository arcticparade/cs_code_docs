---
layout: home

hero:
  name: CS Code Router
  text: Route work with confidence across the app, CLI, and API
  tagline: Learn the product quickly, automate safely, and understand why each model path was chosen.
  image:
    src: /hero-architecture.svg
    alt: CS Code Router control plane overview
  actions:
    - theme: brand
      text: Start with Quickstart
      link: /quickstart
    - theme: alt
      text: Browse the API
      link: /api-reference
    - theme: alt
      text: Use the CLI
      link: /cli-reference

features:
  - title: Learn the Core Flow
    details: Start with the hosted product, preview routes before you spend tokens, and keep conversations moving without losing context.
  - title: Understand Decisions
    details: See how model choices, fallback paths, and conversation memory shape each response without reading internal engineering material.
  - title: Integrate With Confidence
    details: Use the CLI or public API with the right sign-in method, scoped access, and clear security guidance.
---

## What these docs cover

This site is for people using the product, integrating with the API, or automating from the CLI.

You will find:

- quick onboarding guidance
- public API and CLI references
- workspace behavior and routing explanations
- authentication and security guidance for normal product use

## Start here in order

If you are new to the product, follow these pages in sequence. They move from first-use onboarding into the core product workflow and then into the workspace layout.

- [quickstart.md](quickstart.md) for the fastest product onboarding path
- [who-should-read-what.md](who-should-read-what.md) if you want the fastest path by role or use case
- [common-tasks.md](common-tasks.md) if you prefer to jump straight to a common job to be done
- [user-guide.md](user-guide.md) for the core product loop and workspace workflows
- [workspace-reference.md](workspace-reference.md) for the Studio, Teams, Billing, policies, and settings surfaces

## Then go deeper

Use these references once you already know whether you are primarily using the web app, the CLI, or a direct API integration.

- [api-reference.md](api-reference.md) for the API map and endpoint-family navigation
- [cli-reference.md](cli-reference.md) for install, auth, routing, and execution from the terminal
- [auth-reference.md](auth-reference.md) for session auth, API keys, and SSO behavior
- [model-routing.md](model-routing.md) for scoring, fallback behavior, and optimization logging
- [security-features.md](security-features.md) for prompt protection, scoped access, and auditability

## Quick paths by goal

Use these shortcuts if you already know what you are trying to accomplish and want the smallest possible reading path.

### I want to call the API

Start with [api-reference.md](api-reference.md), then move to [api-routing.md](api-routing.md), [api-conversations.md](api-conversations.md), or [api-operations.md](api-operations.md).

### I want to automate from a terminal

Start with [cli-reference.md](cli-reference.md) and [auth-reference.md](auth-reference.md).

### I want to understand how routing works

Read [model-routing.md](model-routing.md) and [security-features.md](security-features.md).

### I want to understand the workspace

Read [user-guide.md](user-guide.md) and [workspace-reference.md](workspace-reference.md).