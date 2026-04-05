# Authentication Reference

This page explains how users, API keys, and CLI sessions work across the product.

## Auth modes

### Email and password

Standard web sign-in for the hosted workspace.

Endpoints:

- `POST /v1/auth/login`
- `POST /v1/auth/logout`
- `POST /v1/auth/password-reset/request`
- `POST /v1/auth/password-reset/confirm`

### Session tokens

Session tokens are user-backed bearer tokens used by the web app, CLI OAuth flows, and any automation that should run under a real user identity.

```bash
Authorization: Bearer <session-token>
```

### API keys

API keys are intended for machine callers.

```bash
x-api-key: <tenant-api-key>
```

Current access presets:

- `read-only`
- `write`
- `admin`
- `enterprise`

API keys can also be limited by:

- allowed teams
- allowed CLI modes
- allowed client applications
- route and execute permissions

### Browser OAuth for local tools

```bash
cs-code login --oauth --tenant-id demo-company
```

This is the preferred path for human-operated local tooling because it keeps seat assignment, lifecycle status, and enterprise restrictions aligned with the web workspace.

## SSO

OIDC SSO is available on supported plans.

If your organization enables it, you will sign in through your identity provider and return to the main app origin or an approved localhost callback for CLI OAuth.

## Authorization model

Access is evaluated using a combination of:

- tenant role
- team role
- plan tier
- license assignment
- lifecycle status
- API key preset and scope
- enterprise restriction policy when enabled by your organization

Examples:

- unlicensed session-backed users cannot route or execute
- API keys cannot be used for unrestricted platform administration
- organizations can restrict allowed models, providers, deployments, and client tools

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