# API: Conversations And Memory

Use these endpoints when you want to create or continue stored conversations across app and API workflows.

<DocsCallout title="When to use this" tone="note">

Use the conversations API if you want the server to remember thread context across multiple requests. If you only need a single route or execute call, start with [api-routing.md](api-routing.md) instead.

</DocsCallout>

## Main endpoints

- `GET /v1/conversations`
- `POST /v1/conversations`
- `POST /v1/conversations/:threadId/turns`

## Example: create a conversation thread

```bash
curl https://api.cs-code.com/v1/conversations \
  -H 'authorization: Bearer <session-token>' \
  -H 'content-type: application/json' \
  -d '{
    "taskType": "chat",
    "preferredDeployment": "auto",
    "title": "Release recap"
  }'
```

## Then append turns to the same thread

```bash
curl https://api.cs-code.com/v1/conversations/thread-123/turns \
  -H 'authorization: Bearer <session-token>' \
  -H 'content-type: application/json' \
  -d '{
    "taskType": "chat",
    "preferredDeployment": "auto",
    "turns": [
      {"role": "user", "content": "Remember that Priya owns rollback."},
      {"role": "assistant", "content": "Noted. Priya owns rollback."}
    ]
  }'
```

## How conversation memory is used

Pass `conversationThreadId` to route or execute requests. The server can then include:

- recent turns
- retrieved relevant turns
- a rolling summary
- a composed prompt preview

## Related docs

- [api-routing.md](api-routing.md)
- [workspace-reference.md](workspace-reference.md)
- [model-routing.md](model-routing.md)