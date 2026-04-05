# API: Routing And Execution

Use these endpoints when you want to preview routing decisions, execute against the selected model, and capture user feedback on the result.

## Endpoints

- `POST /v1/route`
- `POST /v1/execute`
- `GET /v1/interactions`
- `POST /v1/interactions/:interactionId/feedback`

## Route a prompt

```bash
curl http://localhost:4000/v1/route \
  -H 'content-type: application/json' \
  -H 'x-api-key: cs-code-demo-key' \
  -d '{
    "tenantId": "demo-company",
    "teamId": "team-platform",
    "taskType": "chat",
    "prompt": "Summarize the incident review into five customer-safe bullets.",
    "preferredDeployment": "auto",
    "tenantTags": ["cost-sensitive"],
    "monthlyBudgetUsd": 250,
    "monthlySpendUsd": 12,
    "maxCostUsd": 0.08,
    "clientApplication": "curl"
  }'
```

Key response fields:

- `chosen`
- `fallbacks`
- `estimatedInputTokens`
- `estimatedOutputTokens`
- `evaluatedPolicyIds`
- `interactionLogId`

## Execute a prompt

```bash
curl http://localhost:4000/v1/execute \
  -H 'content-type: application/json' \
  -H 'x-api-key: cs-code-demo-key' \
  -d '{
    "tenantId": "demo-company",
    "taskType": "chat",
    "prompt": "Draft the customer-safe update now.",
    "preferredDeployment": "auto",
    "tenantTags": ["cost-sensitive"],
    "monthlyBudgetUsd": 250,
    "monthlySpendUsd": 12,
    "maxCostUsd": 0.08,
    "clientApplication": "curl"
  }'
```

Execution returns:

- `decision`
- `outputText`
- `executedModelId`
- `executedProvider`
- `deployment`
- `fallbackUsed`
- `simulated`
- `attemptLog`
- `interactionLogId`

## Sensitive prompt confirmation

If secret detection is enabled, execution can return `409` until the caller explicitly confirms the prompt.

Retry by sending:

```json
{
  "secretScanConfirmed": true
}
```

## Interaction logs

List recent route and execute records:

```bash
curl 'http://localhost:4000/v1/interactions?mode=execute&page=1&pageSize=10' \
  -H 'authorization: Bearer <session-token>'
```

Add quality feedback:

```bash
curl http://localhost:4000/v1/interactions/interaction-124/feedback \
  -H 'authorization: Bearer <session-token>' \
  -H 'content-type: application/json' \
  -d '{
    "userRating": "negative",
    "userComment": "Too verbose and still too internal."
  }'
```

## Related docs

- [api-conversations.md](api-conversations.md)
- [model-routing.md](model-routing.md)
- [security-features.md](security-features.md)