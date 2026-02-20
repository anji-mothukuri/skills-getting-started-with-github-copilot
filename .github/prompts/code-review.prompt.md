---
agent: 'agent'
name: 'code-review'
description: 'Language-agnostic code review with repository analysis and fix-oriented feedback'
argument-hint: 'focus=<security|performance|readability>'
model: '<model-id>'
tools: ['codebase', 'githubRepo', 'search', 'usages', 'myMcpServer/*']
---

# Code Review

Perform a comprehensive code review of the selected code:

## Review Checklist
- [ ] Logic correctness and edge case handling
- [ ] Error handling and defensive programming
- [ ] Code readability and naming conventions
- [ ] Performance considerations
- [ ] Adherence to SOLID principles

## Output Format
Provide feedback as:
1. **Critical issues** - Must fix before merge
2. **Suggestions** - Recommended improvements
3. **Positive observations** - Good practices to maintain

Include specific line references and concrete fix suggestions.