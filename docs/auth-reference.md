# Authentication Reference

This page explains the main ways to sign in and authenticate when using the product, CLI, or API.

## Auth modes

### Email and password

Standard web sign-in for the hosted workspace.

Endpoints:

- `POST /v1/auth/login`
- `POST /v1/auth/logout`
- `POST /v1/auth/password-reset/request`
- `POST /v1/auth/password-reset/confirm`

### Session tokens

Session tokens are user-backed bearer tokens used by the web app, CLI OAuth flows, and user-level API access.

```bash
Authorization: Bearer <session-token>
```

### API keys

API keys are intended for machine callers.

```bash
x-api-key: <tenant-api-key>
```

API keys can be scoped to the capabilities your organization allows for automation.

### Browser OAuth for local tools

```bash
cs-code login --oauth --tenant-id demo-company
```

This is the preferred path for human-operated local tooling because it keeps your CLI access aligned with your normal workspace account.

## SSO

OIDC SSO is available on supported plans.

If your organization enables it, you will sign in through your identity provider and return to the main app origin or an approved localhost callback for CLI OAuth.

## Authorization model

Access is evaluated using a combination of:

- tenant role
- team role
- plan tier
- account status
- API key scope
- organization policy when enabled by your organization

Examples:

- API keys should be used for automation, not normal user sign-in
- organizations can restrict which models, providers, or tools are available

## API key guidance

Use API keys when:

- the caller is automation
- no browser flow is available
- the workload should be owned by a service instead of a user

Use OAuth or session tokens when:

- a real person is operating the tool
- user-level restrictions should apply
- audit history should reflect the actual operator

## Identity flows in practice

### Log in from the web app

```bash
curl https://api.cs-code.com/v1/auth/login \
	-H 'content-type: application/json' \
	-d '{"email":"user@example.com","password":"<your-password>"}'
```

### Log in from the CLI with OAuth

```bash
cs-code config set-url https://api.cs-code.com
cs-code login --oauth --tenant-id your-tenant-id
```

### Log in from the CLI with an API key

```bash
cs-code login --api-key cp_live_xxxxx
```

## Related docs

- [security-features.md](security-features.md)
- [api-reference.md](api-reference.md)
- [cli-reference.md](cli-reference.md)