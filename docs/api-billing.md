# API: Billing And Entitlements

Use these endpoints when you want to read plan state, usage summaries, entitlements, or billing actions tied to the current workspace.

<DocsCallout title="When to use this" tone="note">

Use these endpoints for subscription and usage views. If you mainly want routing or execution behavior, start with [api-routing.md](api-routing.md) instead.

</DocsCallout>

## Main endpoints

- `GET /v1/billing/summary`
- `GET /v1/billing/invoice.csv`
- `GET /v1/entitlements`
- `GET /v1/payments/status`
- `POST /v1/payments/checkout-session`
- `POST /v1/payments/portal-session`
- `POST /v1/payments/webhook`

## Example: billing summary

```bash
curl https://api.cs-code.com/v1/billing/summary \
  -H 'authorization: Bearer <session-token>'
```

## Example: start checkout

```bash
curl https://api.cs-code.com/v1/payments/checkout-session \
  -H 'authorization: Bearer <session-token>' \
  -H 'content-type: application/json' \
  -d '{}'
```

## Billing actions covered here

- read billing summary and exports
- check current entitlements
- start checkout or customer portal sessions
- receive Stripe webhook events at the billing webhook target

## Stripe webhook target

Point Stripe webhooks at:

```text
/v1/payments/webhook
```

## Related docs

- [workspace-reference.md](workspace-reference.md)
- [api-operations.md](api-operations.md)