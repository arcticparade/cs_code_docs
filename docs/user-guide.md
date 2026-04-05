# User Guide

Use this guide when you are getting started as an end user. It follows the real product flow: sign in, route work, execute prompts, review outcomes, and then expand into team and workspace features.

## Start with the core loop

CS Code Router is built around one operating loop:

1. write or paste a prompt
2. preview the route decision
3. execute against the selected model path
4. review the outcome and leave feedback
5. continue the conversation without losing context

## Your first session

### Step 1: Sign in

Most users sign in through the web app with email and password.

If your organization has single sign-on enabled, you may see an SSO flow instead.

### Step 2: Open Studio

Studio is the main workspace for prompt routing and execution.

In Studio you can:

- draft prompts
- preview routing decisions before spending provider tokens
- execute directly when the route looks correct
- switch models without losing conversation continuity
- leave feedback on completed outcomes

### Step 3: Review the route

Use route preview when you want to understand why a provider or model was selected before execution.

This is the fastest way to confirm:

- the expected model path
- fallback behavior
- budget or policy effects
- local versus cloud routing choices

### Step 4: Execute and continue the thread

Once the route looks right, execute the request.

Conversations are stored server-side per user and tenant, which means:

- model switches do not break the thread
- older sessions can be resumed later
- recent turns and memory can be reused
- optimization feedback stays attached to completed work

## Other product areas

### Teams

Use Teams to manage members, invites, budgets, and cost-center ownership.

### Billing

Use Billing to review plan status, invoice items, allowance usage, and export flows.

### Ops

Use Ops to manage routing policies, alerts, webhooks, retries, and operational visibility.

## Terminal workflows

Humans usually authenticate with:

- email and password in the web app
- browser OAuth in the CLI

Automation usually authenticates with:

- scoped API keys

Common terminal workflows:

- use `cs-code route` to inspect routing before execution
- use `cs-code execute` when the request is ready to run
- use `cs-code agent` for supported text and coding workflows

## Where to go next

- [workspace-reference.md](workspace-reference.md) for the full UI surface map
- [cli-reference.md](cli-reference.md) for terminal-first usage
- [model-routing.md](model-routing.md) for routing logic and fallbacks
- [security-features.md](security-features.md) for auth, protection, and audit controls
- [api-reference.md](api-reference.md) when you want to automate against the platform directly
