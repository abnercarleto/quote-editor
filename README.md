# Quote Editor

A modern, monorepo-based tool for creating and managing detailed project quotes and cost breakdowns.

## 🚀 Overview

The **Quote Editor** allows you to manage project quotes, define project milestones with due dates, and build itemized cost breakdowns with real-time calculations. Whether you're a freelancer or a small business, this tool simplifies the process of creating professional and accurate estimates for your clients.

## 🛠️ Tech Stack

- **Front-End:** [Next.js](https://nextjs.org/)
- **Back-End:** [Nest.js](https://nestjs.com/)
- **Database:** [MongoDB](https://www.mongodb.com/)

## ✨ Key Features

### 📋 [Quote Management](https://github.com/abnercarleto/quote-editor/issues/3)
*   **Create & List:** Easily start new quote documents and see them in a central dashboard.
*   **Identification:** Assign unique names to different projects and clients.
*   **Workspace Maintenance:** Rename or delete existing quotes to keep your project list tidy.

### 📅 [Timeline & Milestone Planning](https://github.com/abnercarleto/quote-editor/issues/4)
*   **Date-Based Milestones:** Group items into specific phases tied to delivery or payment deadlines.
*   **Flexible Entry:** Use an integrated calendar picker or manual date entry.
*   **Phase Management:** Add, modify, or delete entire milestone sections as project schedules shift.

### 🍱 [Itemized Article Entry](https://github.com/abnercarleto/quote-editor/issues/5)
*   **Cost Breakdowns:** Add items with detailed names, quantities, and individual prices.
*   **Contextual Descriptions:** Include short descriptions for complex line items.
*   **Inline Editing:** Make quick adjustments directly in the list view.
*   **Visual Validation:** Confirmed "Save" and "Cancel" interactions to prevent data loss.

### 🧮 [Calculations & Totals](https://github.com/abnercarleto/quote-editor/issues/6)
*   **Section Subtotals:** Automatic summation of costs for each project phase/milestone.
*   **Global Totaling:** A persistent total at the bottom of the editor that sums all project costs.
*   **Real-time Updates:** Instant calculation updates when items are added, edited, or removed.

## 📁 Project Structure

This is a monorepo containing both the Front-End and Back-End applications.

```text
.
├── frontend/    # Next.js Application
└── backend/     # Nest.js API with MongoDB
```

## 🏗️ Getting Started

### Local Development (without Docker)

**Backend Setup**

```bash
cd backend
npm install
cp .env.example .env.local
# Update .env.local with your configuration
npm run start:dev
```

The backend API will run on `http://localhost:3000`.

**Database Setup**

1. Install [MongoDB Community Edition](https://docs.mongodb.com/manual/installation/) or run via Docker:

```bash
docker run -d \
  --name quote-editor-mongodb \
  -p 27017:27017 \
  mongo:latest
```

2. Update `DATABASE_URL` in `backend/.env.local`:

```env
DATABASE_URL=mongodb://localhost:27017/quote-editor
```

### Docker Compose (Full Stack)

Run the entire application stack (Backend + MongoDB) using Docker Compose.

**Requirements:**
- Docker and Docker Compose installed
- Port 3000 (backend) and 27017 (MongoDB) available

**Production Mode:**

```bash
docker-compose up -d
```

**Development Mode (with hot-reload):**

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

**Accessing Services:**
- Backend API: `http://localhost:3000`
- MongoDB: `mongodb://localhost:27017`

**Stop Services:**

```bash
docker-compose down
```

**View Logs:**

```bash
docker-compose logs -f backend
docker-compose logs -f mongodb
```

### Environment Variables

Create a `.env.local` file in the `backend/` directory:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/quote-editor
```

For Docker, variables are defined in `docker-compose.yml`.

## 📚 Documentation

- [Backend Setup & Architecture](./backend/README.md)
- [Architectural Decisions](./docs/adr/)
  - [ADR-0001: Monorepo Structure](./docs/adr/adr-0001-monorepo-structure.md)
  - [ADR-0002: Database Selection (MongoDB)](./docs/adr/adr-0002-database-selection.md)
  - [ADR-0003: Backend Framework Selection (NestJS)](./docs/adr/adr-0003-backend-framework-selection.md)

## 🧪 Testing

**Backend Unit & E2E Tests:**

```bash
cd backend
npm run test
npm run test:e2e
npm run test:cov
```

---
*Built with ❤️ by [abnercarleto](https://github.com/abnercarleto)*

