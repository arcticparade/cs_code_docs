# API Reference

CS Code Router exposes public tenant APIs for routing, execution, conversations, teams, policies, webhooks, and billing.

This page is the API map. Use it to decide which part of the API you need, then jump into the dedicated page for examples and request shapes.

<DocsCallout title="Who this is for" tone="note">

Use these API pages if you are integrating CS Code Router into your own tools, scripts, or workflows. If you are mainly using the hosted app, start with the user guide and workspace reference instead.

</DocsCallout>

## Base URLs

Production:

- App: `https://cs-code.com`
- API: `https://api.cs-code.com`

## Authentication

Use one of these auth modes:

- bearer session token for user-backed requests
- tenant API key for machine traffic

See [auth-reference.md](auth-reference.md) for the full identity model.

## Endpoint families

### Routing and execution

Use [api-routing.md](api-routing.md) for:

- `POST /v1/route`
- `POST /v1/execute`
- `GET /v1/interactions`
- `POST /v1/interactions/:interactionId/feedback`

### Conversations and memory

Use [api-conversations.md](api-conversations.md) for:

- `GET /v1/conversations`
- `POST /v1/conversations`
- `POST /v1/conversations/:threadId/turns`

### Teams, policies, and webhooks

Use [api-operations.md](api-operations.md) for:

- teams and invites
- policies and alerts
- webhooks and deliveries
- notifications and activity logs

### Billing and entitlements

Use [api-billing.md](api-billing.md) for:

- billing summary
- invoice export
- entitlements
- Stripe checkout and portal
- payment webhook handling

## Common error model

- `400`: malformed input or invalid flow state
- `401`: missing or invalid credentials
- `403`: disallowed by role, plan, scope, or enterprise restriction
- `409`: prompt blocked pending sensitive-content confirmation
- `429`: rate-limited at the user, org, API key, or gateway layer
- `502`: provider execution failed after fallback attempts

## Related docs

- [auth-reference.md](auth-reference.md)
- [model-routing.md](model-routing.md)
- [security-features.md](security-features.md)
- [index.md](index.md)