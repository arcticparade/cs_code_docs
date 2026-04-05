# API: Teams, Policies, And Webhooks

These endpoints cover collaboration, routing policies, alerts, webhooks, notifications, and activity visibility.

## Teams

- `GET /v1/teams`
- `POST /v1/teams`
- `POST /v1/teams/members`
- `GET /v1/teams/invites`
- `POST /v1/teams/invites`
- `POST /v1/teams/invites/accept`

## Policy and alerts

- `GET /v1/policies`
- `POST /v1/policies`
- `GET /v1/alerts`
- `POST /v1/alerts/:alertId/resolve`
- `GET /v1/analytics/summary?tenantId=<tenant-id>`

## Webhooks and notifications

- `GET /v1/webhooks`
- `POST /v1/webhooks`
- `POST /v1/webhooks/:endpointId/rotate-secret`
- `GET /v1/webhooks/deliveries`
- `GET /v1/webhooks/dead-letter`
- `POST /v1/webhooks/deliveries/:deliveryId/retry`
- `GET /v1/notifications`
- `GET /v1/audit-logs`

## Example: save a policy

```bash
curl https://api.cs-code.com/v1/policies \
  -H 'authorization: Bearer <session-token>' \
  -H 'content-type: application/json' \
  -d '{
    "name": "Support routing guardrails",
    "monthlyBudgetUsd": 300,
    "maxRequestCostUsd": 0.08,
    "preferredDeployment": "auto",
    "preferLocalAboveSpendRatio": 0.8,
    "alertThresholds": [0.8, 0.95],
    "active": true
  }'
```

## Related docs

- [workspace-reference.md](workspace-reference.md)
- [security-features.md](security-features.md)