# API: Conversations And Memory

These endpoints power persistent chat memory across Studio and model-switching workflows.

## Endpoints

- `GET /v1/conversations`
- `POST /v1/conversations`
- `POST /v1/conversations/:threadId/turns`

## Create a conversation thread

```bash
curl http://localhost:4000/v1/conversations \
  -H 'authorization: Bearer <session-token>' \
  -H 'content-type: application/json' \
  -d '{
    "taskType": "chat",
    "preferredDeployment": "auto",
    "title": "Release recap"
  }'
```

## Append turns

```bash
curl http://localhost:4000/v1/conversations/thread-123/turns \
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

## Use memory during route or execute

Pass `conversationThreadId` to route or execute requests. The server can then include:

- recent turns
- retrieved relevant turns
- a rolling summary
- a composed prompt preview

## Related docs

- [api-routing.md](api-routing.md)
- [workspace-reference.md](workspace-reference.md)
- [model-routing.md](model-routing.md)