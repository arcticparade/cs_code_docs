# CLI Reference

The CS Code CLI is the fastest way to route, execute, and inspect model decisions from a terminal.

Primary command:

```bash
cs-code
```

## Install

### Install from a hosted release

```bash
curl -fsSL https://downloads.cs-code.com/cs-code/install.sh | bash
```

## Quickstart

### Configure the API URL

```bash
cs-code config set-url https://api.cs-code.com
```

### Log in with an API key

```bash
cs-code login --api-key cp_live_xxxxx
```

### Preview routing

```bash
cs-code route \
  --task chat \
  --prompt "Summarize the latest incident review for the customer update."
```

### Execute a request

```bash
cs-code execute \
  --task chat \
  --prompt "Draft the customer-safe update in five bullets."
```

## Auth modes

### API key

Best for automation, CI, or service accounts.

```bash
cs-code login --api-key cp_live_xxxxx
```

### Session token

Best for controlled scripting with a user-backed session.

```bash
cs-code login --session-token sess_xxxxx
```

### Browser OAuth

Best for human-operated local tooling.

```bash
cs-code login --oauth --tenant-id your-tenant-id
```

## Core commands

### Setup wizard

```bash
cs-code config setup
```

### Show current identity

```bash
cs-code whoami
```

### List available models

```bash
cs-code models
```

### Route only

```bash
cs-code route --task chat --prompt "Summarize this incident"
```

### Execute

```bash
cs-code execute --task code --prompt "Refactor this function safely"
```

### Agent mode

```bash
cs-code agent \
  --task code \
  --prompt "Plan and execute a safe refactor for the billing worker" \
  --team-id team-platform
```

### Agent preview without execution

```bash
cs-code agent --task reasoning --prompt "Design a staged migration plan" --preview
```

### Check for updates

```bash
cs-code update-check
```

## Configuration

Config file:

```text
~/.config/cs-code/config.json
```

Example:

```json
{
  "apiBaseUrl": "https://api.cs-code.com",
  "sessionToken": "sess-..."
}
```

The CLI also reads the legacy `~/.config/costpilot/config.json` path for compatibility with older installs.

## Sensitive prompt protection

The CLI scans execute prompts for secret-like content before sending them to a model.

Protected categories include:

- API keys
- passwords
- bearer tokens
- connection URLs
- other high-risk secret strings

Interactive sessions pause for confirmation automatically. For non-interactive runs, pass the explicit override only after review:

```bash
cs-code execute \
  --task code \
  --prompt "Rotate this staging credential and update the script" \
  --confirm-sensitive
```

## Plan and policy behavior

- user-backed CLI sessions respect the same account access as the web app
- API keys can be scoped for automation access
- organization policies can limit which models, providers, or tools are available
- agent mode is available on supported plans for eligible task types

## Related docs

- [api-reference.md](api-reference.md)
- [auth-reference.md](auth-reference.md)
- [security-features.md](security-features.md)
- [model-routing.md](model-routing.md)