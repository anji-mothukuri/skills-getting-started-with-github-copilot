---
agent: 'ask'
name: 'security-review'
description: 'OWASP-aligned security review identifying vulnerabilities and remediation steps'
argument-hint: 'target=<auth|api|data|ui>'
---

# Security Review

Analyse the selected code for security vulnerabilities following OWASP guidelines.

## Check for:
- **Injection flaws**: SQL, NoSQL, OS command, LDAP injection
- **Broken authentication**: Weak credentials, session management issues
- **Sensitive data exposure**: Hardcoded secrets, improper encryption
- **XSS vulnerabilities**: Reflected, stored, and DOM-based XSS
- **Insecure deserialisation**: Untrusted data deserialisation
- **Components with known vulnerabilities**: Outdated dependencies

## For each issue found:
1. Describe the vulnerability and its severity (Critical/High/Medium/Low)
2. Explain the potential impact
3. Provide a secure code example as remediation

Reference OWASP Top 10 categories where applicable.