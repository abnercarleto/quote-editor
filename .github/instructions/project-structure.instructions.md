---
description: Rules for maintaining the monorepo project structure
# applyTo: '**/*'
---
# Project Structure & Monorepo Guidelines

This project follows a monorepo structure designed for simplicity and shared development workflows for a solo developer.

## Core Directory Structure

- `frontend/`: Next.js application. Follows standard Next.js directory patterns (App Router, components, hooks).
- `backend/`: Nest.js API focusing on domain-driven design and MongoDB integration.
- `docs/`: Architectural Decision Records (ADRs) and design documentation.
- `.github/`: GitHub-specific configurations and AI instructions.

## Development Rules

1. **Separation of Concerns**: Keep business logic for the frontend within `frontend/` and for the backend within `backend/`. 
2. **Cross-Project Changes**: When implementing features that require API changes and UI updates, perform changes in both directories in a single logical step.
3. **Documentation**: Any significant architectural change MUST be documented in `docs/adr/` following the established template.
4. **Shared Configuration**: Root-level configuration files (e.g., `.gitignore`, `.prettierrc`, `tsconfig.json`) should be respected by both sub-projects unless specific overrides are needed.
5. **Context Awareness**: When working inside a specific directory, adhere to the framework-specific standards (Next.js for frontend, Nest.js for backend).
