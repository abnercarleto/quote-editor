---
title: "ADR-0001: Monorepo Structure for Quote Editor"
status: "Proposed"
date: "2026-02-17"
authors: "Solo developer (study project)"
tags: ["architecture", "decision"]
supersedes: ""
superseded_by: ""
---

## Status

**Proposed** | Accepted | Rejected | Superseded | Deprecated

## Context

The project is a study-focused application maintained by a single developer. The system includes a Next.js front-end and a Nest.js back-end with MongoDB. A monorepo is considered to reduce coordination overhead, allow shared tooling and scripts, and keep cross-cutting changes in sync. Constraints include limited team size, preference for simple local setup, and a desire to manage front-end and back-end changes together.

## Decision

Adopt a single monorepo that contains both the front-end and back-end applications as top-level folders (e.g., `frontend/` and `backend/`). This structure keeps related code and shared development workflows in one place, reduces duplication of configuration, and simplifies local development for a solo maintainer.

## Consequences

### Positive

- **POS-001**: Shared tooling and scripts can be managed once, reducing setup time.
- **POS-002**: Cross-cutting changes across front-end and back-end are easier to coordinate.
- **POS-003**: Single clone and single issue tracker entry point improves study workflow.

### Negative

- **NEG-001**: Repository size and change history can grow faster over time.
- **NEG-002**: Release boundaries between front-end and back-end are less explicit.
- **NEG-003**: CI/CD pipelines may need extra filtering to avoid unnecessary builds.

## Alternatives Considered

### Separate Repositories (Frontend + Backend)

- **ALT-001**: **Description**: Maintain independent repos for `frontend` and `backend` with separate tooling.
- **ALT-002**: **Rejection Reason**: Increases overhead for a single developer and complicates cross-cutting changes.

### Git Submodules

- **ALT-003**: **Description**: Use a parent repo that pins `frontend` and `backend` as submodules.
- **ALT-004**: **Rejection Reason**: Adds operational complexity and does not provide clear benefits for a study project.

### Repo-Per-Service (Future Microservices)

- **ALT-005**: **Description**: Split code by service with separate repos for each component as the system grows.
- **ALT-006**: **Rejection Reason**: Premature for current scope and adds unnecessary coordination overhead.

## Implementation Notes

- **IMP-001**: Keep `frontend/` and `backend/` as top-level folders with clear README sections.
- **IMP-002**: Add root-level scripts later to run both apps for local development.
- **IMP-003**: Define CI filters to run only the affected app when workflows are added.

## References

- **REF-001**: [README](../../README.md)
