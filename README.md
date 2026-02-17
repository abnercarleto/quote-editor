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

*(Instructions on how to run locally will be added as the project develops.)*

---
*Built with ❤️ by [abnercarleto](https://github.com/abnercarleto)*
