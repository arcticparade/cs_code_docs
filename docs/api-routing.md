# API: Routing And Execution

Use these endpoints when you want to preview routing decisions, execute against the selected model, and capture user feedback on the result.

<DocsCallout title="Start simple" tone="success">

If you are new to the API, begin with `POST /v1/route` so you can inspect the expected model path before you execute a live request.

</DocsCallout>

## Main endpoints

- `POST /v1/route`
- `POST /v1/execute`
- `GET /v1/interactions`
- `POST /v1/interactions/:interactionId/feedback`

## Example: route a prompt

```bash
curl https://api.cs-code.com/v1/route \
  -H 'content-type: application/json' \
  -H 'x-api-key: cp_live_xxxxx' \
  -d '{
    "tenantId": "your-tenant-id",
    "taskType": "chat",
    "prompt": "Summarize the latest customer issue in five bullets.",
    "preferredDeployment": "auto",
    "clientApplication": "curl"
  }'
```

Key response fields:

- `chosen`
- `fallbacks`
- `estimatedInputTokens`
- `estimatedOutputTokens`
- `interactionLogId`

## Example: execute a prompt

```bash
curl https://api.cs-code.com/v1/execute \
  -H 'content-type: application/json' \
  -H 'x-api-key: cp_live_xxxxx' \
  -d '{
    "tenantId": "your-tenant-id",
    "taskType": "chat",
    "prompt": "Draft the customer-facing update now.",
    "preferredDeployment": "auto",
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

## Other actions on this page

Beyond route and execute, this endpoint family also covers:

- viewing recent interaction records
- saving feedback on route or execute outcomes
- confirming prompts when sensitive-content checks are triggered

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
curl 'https://api.cs-code.com/v1/interactions?mode=execute&page=1&pageSize=10' \
  -H 'authorization: Bearer <session-token>'
```

Add quality feedback:

```bash
curl https://api.cs-code.com/v1/interactions/interaction-124/feedback \
  -H 'authorization: Bearer <session-token>' \
  -H 'content-type: application/json' \
  -d '{
    "userRating": "negative",
    "userComment": "Too verbose for the customer update."
  }'
```

## Related docs

- [api-conversations.md](api-conversations.md)
- [model-routing.md](model-routing.md)
- [security-features.md](security-features.md)