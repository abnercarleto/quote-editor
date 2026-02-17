---
title: "ADR-0003: Backend Framework Selection"
status: "Proposed"
date: "2026-02-17"
authors: "Solo developer (study project)"
tags: ["architecture", "backend", "decision"]
supersedes: ""
superseded_by: ""
---

## Status

**Proposed** | Accepted | Rejected | Superseded | Deprecated

## Context

The Quote Editor requires a robust backend framework to handle API requests, manage business logic, and interact with the MongoDB database. The project goals include rapid development, high maintainability, and clear architectural boundaries. Key requirements include:

- First-class support for **TypeScript** to ensure type safety and developer productivity.
- A structured and modular architecture to keep the codebase organized as features like "Calculations & Totals" grow.
- Strong ecosystem support, comprehensive documentation, and built-in features for common tasks (e.g., validation, dependency injection).
- Ease of integration with the monorepo structure ([ADR-0001](adr-0001-monorepo-structure.md)) and MongoDB ([ADR-0002](adr-0002-database-selection.md)).

## Decision

Use **Nest.js** as the primary backend framework for the Quote Editor.

## Rationale

Nest.js was chosen because it provides a highly structured, "out-of-the-box" experience that aligns perfectly with the need for TypeScript and modularity. Its architecture (heavily inspired by Angular) promotes a clean separation of concerns through modules, controllers, and services, which is ideal for a growing project.

## Consequences

### Positive

- **POS-001**: Native TypeScript support minimizes configuration overhead and provides immediate type safety across the backend.
- **POS-002**: The opinionated, modular architecture (Modules, Controllers, Providers) ensures a consistent and maintainable codebase.
- **POS-003**: Built-in support for Dependency Injection (DI) and Decorators simplifies complex logic and improves testability.
- **POS-004**: Extensive ecosystem and documentation reduce the time spent on "reinventing the wheel" for common tasks like validation or auth.

### Negative

- **NEG-001**: Steeper learning curve compared to minimalist frameworks due to its unique architectural patterns and heavy use of decorators.
- **NEG-002**: Slightly higher runtime overhead due to abstraction layers, though negligible for the scope of this application.
- **NEG-003**: Can feel overly complex for very small, simple endpoints if not managed carefully.

## Alternatives Considered

### Express

- **ALT-001**: **Description**: The industry-standard minimalist and unopinionated framework for Node.js.
- **ALT-002**: **Rejection Reason**: Lacks a built-in architectural structure. Implementing TypeScript and modern patterns requires significant manual boilerplate and can lead to inconsistent codebases.

### Koa.js

- **ALT-003**: **Description**: A modern, lightweight framework designed by the creators of Express, focusing on async functions and middleware.
- **ALT-004**: **Rejection Reason**: Even more minimalist than Express; it requires many external plugins for basic functionality and lacks a standardized community architecture for large applications.

### Hapi.js

- **ALT-005**: **Description**: A configuration-centric framework focused on security and reliability.
- **ALT-006**: **Rejection Reason**: Often seen as more verbose and less "developer-friendly" for rapid prototyping compared to Nest.js; has seen a decline in relative community growth.

### Adonis.js

- **ALT-007**: **Description**: A full-stack framework with a "Rails-like" experience and strong developer ergonomics.
- **ALT-008**: **Rejection Reason**: While excellent, its tightly coupled ORM and dependency systems are slightly less flexible than Nest.js's library-agnostic approach when integrating with specific tools like Mongoose.

## Implementation Notes

- **IMP-001**: Initialize the backend using the Nest CLI to ensure a standard folder structure and configuration.
- **IMP-002**: Leverage `class-validator` and `class-transformer` for robust request payload validation and transformation.
- **IMP-003**: Organize the application into feature-based modules (e.g., `QuotesModule`, `MilestonesModule`) to maintain clear boundaries.

## References

- **REF-001**: [ADR-0001: Monorepo Structure](adr-0001-monorepo-structure.md)
- **REF-002**: [ADR-0002: Database Selection](adr-0002-database-selection.md)
- **REF-003**: [Nest.js Official Documentation](https://docs.nestjs.com/)
