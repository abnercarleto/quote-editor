---
title: "ADR-0002: Database Selection for Quote Editor"
status: "Proposed"
date: "2026-02-17"
authors: "Solo developer (study project)"
tags: ["architecture", "database", "decision"]
supersedes: ""
superseded_by: ""
---

## Status

**Proposed** | Accepted | Rejected | Superseded | Deprecated

## Context

The Quote Editor requires a robust database to store and manage quotes, which consist of metadata, multiple milestones, and numerous line items (articles). The data model is naturally hierarchical, as a quote contains milestones, and milestones contain itemized entries. Requirements include:

- Support for flexible, nested data structures.
- Ease of development with Nest.js.
- Avoidance of cloud vendor lock-in for future scalability or migration.
- Simplified schema evolution as features like "Calculations & Totals" are refined.

## Decision

Use **MongoDB** as the primary database for the Quote Editor.

## Rationale

- **Hierarchical Data**: The document model maps directly to the nested structure of quotes and milestones, reducing the need for complex joins or normalization that traditional RDBMS would require.
- **Flexibility**: As a "study project," requirements may change. MongoDB's schema-less nature allows for rapid iteration without migrations becoming a bottleneck.
- **Portability**: MongoDB can be run locally (Docker), self-hosted on any cloud provider (EC2/GCP/Azure), or used via MongoDB Atlas (multi-cloud), effectively avoiding the vendor lock-in associated with services like AWS DynamoDB.
- **Ecosystem**: Excellent integration with Nest.js via Mongoose or the native driver.

## Consequences

### Positive

- **POS-001**: Faster development cycles due to data model alignment with application-level objects.
- **POS-002**: High flexibility for schema changes as the project features grow.
- **POS-003**: Portability across different hosting environments prevents vendor lock-in.

### Negative

- **NEG-001**: Potential for data inconsistency if schema validation is not strictly enforced at the application layer.
- **NEG-002**: Lack of out-of-the-box ACID compliance for cross-document transactions (though available, it requires more care).
- **NEG-003**: Operational overhead in managing indexing and memory usage as the dataset grows.

## Alternatives Considered

### PostgreSQL

- **ALT-001**: **Description**: A powerful, open-source relational database.
- **ALT-002**: **Rejection Reason**: Requires strict schema definition and complex joins or JSONB mapping for hierarchical quote data, which increases development overhead for this specific use case.

### MySQL

- **ALT-003**: **Description**: A widely used relational database.
- **ALT-004**: **Rejection Reason**: Similar to PostgreSQL, it imposes a rigid structure that doesn't align as naturally with the document-based nature of the quotes.

### DynamoDB

- **ALT-005**: **Description**: A fully managed NoSQL database service provided by AWS.
- **ALT-006**: **Rejection Reason**: Significant vendor lock-in; migrating away from DynamoDB requires non-trivial changes to data access patterns and infrastructure code.

## Implementation Notes

- **IMP-001**: Use Mongoose within the Nest.js backend for schema definition and validation at the application level.
- **IMP-002**: Use Docker Compose for local development to ensure a consistent environment.
- **IMP-003**: Consider MongoDB Atlas for a managed cloud solution while maintaining the option to move to other providers.

## References

- **REF-001**: [ADR-0001: Monorepo Structure](adr-0001-monorepo-structure.md)
- **REF-002**: [MongoDB Documentation](https://www.mongodb.com/docs/)
- **REF-003**: [Nest.js MongoDB Integration](https://docs.nestjs.com/techniques/mongodb)
