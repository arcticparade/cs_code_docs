# API: Billing And Entitlements

These endpoints expose plan state, usage summaries, exports, and Stripe-backed billing actions.

## Endpoints

- `GET /v1/billing/summary`
- `GET /v1/billing/invoice.csv`
- `GET /v1/entitlements`
- `GET /v1/payments/status`
- `POST /v1/payments/checkout-session`
- `POST /v1/payments/portal-session`
- `POST /v1/payments/webhook`

## Example: billing summary

```bash
curl http://localhost:4000/v1/billing/summary \
  -H 'authorization: Bearer <session-token>'
```

## Example: start checkout

```bash
curl http://localhost:4000/v1/payments/checkout-session \
  -H 'authorization: Bearer <session-token>' \
  -H 'content-type: application/json' \
  -d '{}'
```

## Stripe webhook target

Point Stripe webhooks at:

```text
/v1/payments/webhook
```

## Related docs

- [workspace-reference.md](workspace-reference.md)
- [api-operations.md](api-operations.md)