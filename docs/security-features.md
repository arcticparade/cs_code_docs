# Security Features

CS Code Router includes product-level controls for identity, prompt safety, scoped access, and operational auditability.

## Identity and access

Supported auth methods:

- email and password for the web app
- bearer session tokens for user-backed API access
- scoped API keys for machine traffic
- browser OAuth for CLI and local tools

API keys support preset-based access control:

- `read-only`
- `write`
- `admin`
- `enterprise`

They can also be restricted by team, client application, and allowed CLI modes.

## SSO and organization controls

OIDC SSO is available on supported plans.

CLI OAuth uses the same identity model and redirects only to the app origin or approved localhost callback URLs.

## Prompt protection

Before execution, the platform can scan prompts for sensitive content such as:

- API keys
- passwords
- tokens
- connection URLs
- other secret-like strings

If sensitive content is detected, the API returns `409` until the caller confirms the request intentionally.

Example behavior:

```json
{
  "error": "Sensitive content detected. Confirm before sending this request to a model.",
  "secretDetection": {
    "hasSensitiveContent": true,
    "findings": [
      {
        "category": "password",
        "label": "Password assignment",
        "excerpt": "password = supe...-123"
      }
    ]
  }
}
```

## Enterprise restrictions

Enterprise policies can restrict:

- allowed providers
- allowed model IDs
- allowed deployments
- allowed local tools
- allowed IP ranges
- allowed weekdays and UTC hours
- image uploads and generation

These checks are enforced server-side during route and execute.

## Audit and optimization logging

The platform captures:

- audit logs for administrative and security-relevant actions
- structured interaction logs for route and execute traffic
- request and response pairs for optimization analysis
- user feedback for later prompt and route quality tuning

## Usage security tips

- rotate API keys and webhook secrets regularly
- use session-backed access for humans and API keys for automation
- prefer OAuth for human-operated CLI usage
- review sensitive prompt warnings before confirming execution

## Related docs

- [auth-reference.md](auth-reference.md)
- [api-reference.md](api-reference.md)