# Quote Editor Backend

A NestJS-based REST API for the Quote Editor application. This backend provides functionality for managing quotes, milestones, and line items with MongoDB as the primary database.

## Project Overview

- **Framework**: NestJS (TypeScript)
- **Database**: MongoDB with Mongoose ODM
- **Node.js Version**: 20.x LTS
- **Package Manager**: npm

## Prerequisites

- Node.js 20.x or higher (see `.nvmrc`)
- npm 9.x or higher
- MongoDB 5.x or higher (local or Docker)

## Local Development Setup

### 1. Install Dependencies

```bash
npm install
```

### 2. Configure Environment Variables

Create or update `.env.local` file in the backend directory:

```bash
cp .env.example .env.local
```

Edit `.env.local`:

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=mongodb://localhost:27017/quote-editor
```

### 3. Start MongoDB (if not running via Docker)

Using Docker:

```bash
docker run -d \
  --name quote-editor-mongoose \
  -p 27017:27017 \
  -v mongodb_data:/data/db \
  mongo:latest
```

Or install and run MongoDB locally following the [official guide](https://docs.mongodb.com/manual/installation/).

### 4. Run the Application

```bash
# Development mode (with hot-reload)
npm run start:dev

# Production mode
npm run start:prod

# Watch mode
npm run start
```

The application will be available at `http://localhost:3000`.

## Testing

```bash
# Run unit tests
npm run test

# Run e2e tests
npm run test:e2e

# Run tests with coverage
npm run test:cov

# Watch mode for tests
npm test -- --watch
```

## Docker Deployment

### Build Docker Image

```bash
docker build -t quote-editor-backend:latest .
```

### Run with Docker Compose

From the **root directory** of the monorepo:

#### Production Mode

```bash
docker-compose up -d
```

This starts:
- Backend service on port 3000
- MongoDB service on port 27017
- Both services on the same Docker network

#### Development Mode (with hot-reload)

```bash
docker-compose -f docker-compose.yml -f docker-compose.dev.yml up
```

This configuration:
- Mounts the `src/` directory for live code changes
- Enables hot-reload via `npm run start:dev`
- Keeps MongoDB persistent across restarts

### Docker Environment Variables

The backend container uses environment variables from `docker-compose.yml`:

```yaml
environment:
  NODE_ENV: production
  PORT: 3000
  DATABASE_URL: mongodb://mongodb:27017/quote-editor
```

For development, override in `docker-compose.dev.yml`:

```yaml
environment:
  NODE_ENV: development
  PORT: 3000
  DATABASE_URL: mongodb://mongodb:27017/quote-editor
```

### MongoDB Connection in Docker

- **Inside Container**: `mongodb://mongodb:27017/quote-editor`
- **From Host**: `mongodb://localhost:27017/quote-editor`

## Project Structure

```
src/
├── app.module.ts           # Root application module
├── app.controller.ts       # Example controller
├── app.service.ts          # Example service
├── main.ts                 # Application entry point
├── common/
│   ├── decorators/         # Custom decorators
│   ├── filters/            # Exception filters (AllExceptionsFilter)
│   ├── guards/             # Route guards
│   ├── interceptors/       # Request/response interceptors (LoggingInterceptor)
│   ├── pipes/              # Request transformation pipes
│   └── interfaces/         # TypeScript interfaces
├── config/
│   ├── configuration.ts    # Configuration management
│   └── database.config.ts  # MongoDB/Mongoose configuration
├── modules/                # Feature modules (quotes, milestones, etc.)
└── shared/                 # Shared services and constants
    ├── services/
    └── constants/
```

## Key Features Implemented

### 1. **Global Exception Filter**

All exceptions are caught and formatted consistently. See `src/common/filters/all-exceptions.filter.ts`.

### 2. **Validation Pipe**

Input validation using `class-validator` and `class-transformer` decorators. Applied globally in `main.ts`.

### 3. **Logging Interceptor**

Automatically logs all HTTP requests with timing information.

### 4. **MongoDB Integration**

Configuration via `@nestjs/mongoose` with connection retry logic and health checks.

### 5. **Environment Configuration**

Environment variables loaded from `.env.local` and `.env` files using `@nestjs/config`.

## Configuration Management

The backend uses `@nestjs/config` for managing environment variables:

```typescript
// Access config anywhere
constructor(private configService: ConfigService) {}

const databaseUrl = this.configService.get<string>('database.url');
const port = this.configService.get<number>('port');
```

## MongoDB/Mongoose Usage

### Define a Schema

```typescript
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuoteDocument = HydratedDocument<Quote>;

@Schema({ timestamps: true })
export class Quote {
  @Prop({ required: true })
  name: string;

  @Prop({ type: Date, default: Date.now })
  createdAt: Date;
}

export const QuoteSchema = SchemaFactory.createForClass(Quote);
```

### Create a Service

```typescript
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Quote, QuoteDocument } from './quote.schema';

@Injectable()
export class QuotesService {
  constructor(
    @InjectModel(Quote.name) private quoteModel: Model<QuoteDocument>,
  ) {}

  async create(createQuoteDto: CreateQuoteDto): Promise<QuoteDocument> {
    const quote = new this.quoteModel(createQuoteDto);
    return quote.save();
  }

  async findAll(): Promise<QuoteDocument[]> {
    return this.quoteModel.find().exec();
  }
}
```

## Architecture Decisions

This backend follows the architectural decisions documented in:

- [ADR-0001: Monorepo Structure](../../docs/adr/adr-0001-monorepo-structure.md)
- [ADR-0002: Database Selection (MongoDB)](../../docs/adr/adr-0002-database-selection.md)
- [ADR-0003: Backend Framework Selection (NestJS)](../../docs/adr/adr-0003-backend-framework-selection.md)

## Common Commands

| Command | Purpose |
|---------|---------|
| `npm install` | Install dependencies |
| `npm run start:dev` | Start with hot-reload |
| `npm run start:prod` | Production build and start |
| `npm run build` | Compile TypeScript to JavaScript |
| `npm run lint` | Run ESLint |
| `npm run test` | Run unit tests |
| `npm run test:e2e` | Run e2e tests |
| `npm run test:cov` | Run tests with coverage |

## Debugging

### VS Code Debugging

Create `.vscode/launch.json`:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "NestJS Debug",
      "runtimeExecutable": "npm",
      "runtimeArgs": ["run", "start:dev"],
      "console": "integratedTerminal",
      "internalConsoleOptions": "neverOpen"
    }
  ]
}
```

## Troubleshooting

### MongoDB Connection Errors

**Error**: `MongooseError: Cannot connect to MongoDB`

**Solution**:
1. Verify MongoDB is running: `docker ps` (if using Docker)
2. Check connection string in `.env.local`
3. Ensure MongoDB port 27017 is accessible

### PORT Already in Use

**Error**: `Error: listen EADDRINUSE: address already in use :::3000`

**Solution**:
- Change PORT in `.env.local`
- Or kill process using port 3000

### Hot-reload Not Working

**Solution**:
1. Ensure you're running `npm run start:dev`
2. Check file watcher limits (Linux): `echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf`

## Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Mongoose Documentation](https://mongoosejs.com)
- [MongoDB Best Practices](https://docs.mongodb.com/)

## License

MIT

