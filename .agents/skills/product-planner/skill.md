---
name: product-planner
description: Plan hackathon products from rough ideas into clear MVPs. Use when the user asks to define a product idea, clarify target users, write user stories, choose MVP scope, prioritize features, define success metrics, or convert a vague hackathon concept into an implementation-ready product plan. Do not use for writing code directly; hand off to an implementation skill after the product scope is clear.
---

# Product Planner

Guide the user from idea to a small, demoable hackathon product.

## Core principle

Optimize for a working demo, not a perfect product.

Prefer:
- One clear user
- One painful problem
- One memorable workflow
- One small but complete demo
- Fast implementation

Avoid:
- Overly broad platforms
- Too many personas
- Too many features
- Complex auth, payments, admin panels, or production infrastructure unless required
- Recommending frameworks or services before the MVP is clear

## Process

### 1. Clarify the product idea

Identify:

- Target user
- User pain
- Current workaround
- Proposed solution
- Why this is useful now
- What can be demoed in 2 to 5 minutes

If the idea is vague, ask at most 3 focused questions.

### 2. Define the MVP

Create three scopes:

- **Tiny MVP**: buildable in 2 hours
- **Hackathon MVP**: buildable in 1 day
- **Stretch version**: impressive if time remains

For each scope, include:
- Features
- Excluded features
- Demo flow
- Main technical risk

### 3. Prioritize features

Use this order:

1. Must make the demo understandable
2. Must prove the core value
3. Must make the app usable
4. Nice visual polish
5. Stretch integrations

Label each feature as:

- Must-have
- Should-have
- Nice-to-have
- Skip for hackathon

### 4. Convert to implementation tasks

Break the selected MVP into small tasks that Codex can implement one at a time.

Each task should include:

- Goal
- Files likely involved
- Acceptance criteria
- Manual test steps
- Suggested commit message

Keep tasks small enough to review with `git diff`.

### 5. Define success metrics

For hackathon judging, include practical metrics such as:

- Time saved
- Steps reduced
- Error reduced
- Quality improved
- User confidence improved
- Demo clarity

Avoid fake business metrics unless the user provides real data.

## Output format

Use this structure:

```markdown
# Product Plan

## One-sentence pitch

[Clear product description]

## Target user

[Specific user]

## Problem

[Problem and current workaround]

## MVP recommendation

### Tiny MVP

[2-hour version]

### Hackathon MVP

[1-day version]

### Stretch version

[Extra features]

## Feature priority

| Priority | Feature | Reason |
|---|---|---|

## Implementation plan

### Task 1: [name]

- Goal:
- Files:
- Acceptance criteria:
- Test steps:
- Commit message:

### Task 2: [name]

- Goal:
- Files:
- Acceptance criteria:
- Test steps:
- Commit message:

## Demo flow

1. [Step]
2. [Step]
3. [Step]

## Risks and simplifications

- [Risk] → [Simplification]