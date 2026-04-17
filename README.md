# Fullstack E-Commerce — HoiDanIT

A fullstack e-commerce application built with **React 19 + NestJS 11**, developed as part of the HoiDanIT graduation project series.

**Author**: Hỏi Dân IT vs Eric — [hoidanit.vn](https://hoidanit.vn)

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React 19, Vite 8, TypeScript (strict) |
| Backend | NestJS 11, TypeScript |
| Database | MySQL 8.x (via TypeORM) |
| State | Zustand (auth/cart), TanStack Query (server state) |
| Routing | React Router v7 |
| Styling | Tailwind CSS |
| Forms | React Hook Form + Zod |
| HTTP | Axios (with interceptors) |

---

## Project Structure

```
fullstack-react-nest-hoidanit/
├── backend-nest-hoidanit/      # NestJS REST API
├── frontend-react-hoidanit/    # React SPA
└── 01-share-docs/              # Shared API & Database specs
    ├── API_SPEC.md
    └── DATABASE.md
```

---

## Features

- **Auth** — Register, login, JWT access/refresh token, role-based access (admin/customer)
- **Product Catalog** — Categories (nested), products, variants (color/size/SKU), images
- **Cart** — Guest cart (session-based) + authenticated cart, merge on login
- **Checkout** — Stock validation, address snapshot, transaction-safe order creation
- **Orders** — Order history, detail, cancellation; admin status management
- **Reviews** — Verified purchase reviews with ratings
- **User Profile** — Address management

---

## Getting Started

### Prerequisites

- Node.js 20+
- MySQL 8.x running locally

### Backend

```bash
cd backend-nest-hoidanit
npm install
cp .env.example .env   # fill in DB_* and JWT_* values
npm run dev            # starts on http://localhost:3000
```

### Frontend

```bash
cd frontend-react-hoidanit
npm install
npm run dev            # starts on http://localhost:5173
```

### Environment Variables (Backend)

```env
DB_HOST=localhost
DB_PORT=3306
DB_USERNAME=root
DB_PASSWORD=secret
DB_NAME=hoidanit_ecommerce

JWT_SECRET=your-secret-key
JWT_EXPIRES_IN=15m
JWT_REFRESH_EXPIRES_IN=7d

PORT=3000
NODE_ENV=development
```

---

## API Overview

Base URL: `/api/v1`

| Method | Path | Description |
|--------|------|-------------|
| POST | `/auth/register` | Register |
| POST | `/auth/login` | Login (returns access token + httpOnly refresh cookie) |
| POST | `/auth/refresh` | Refresh access token |
| GET | `/products` | List products (public) |
| GET | `/products/:slug` | Product detail + variants |
| GET | `/cart` | Get cart (guest or user) |
| POST | `/cart/items` | Add item to cart |
| POST | `/orders/checkout` | Create order from cart |
| GET | `/orders` | User order history |

Full API contract: [01-share-docs/API_SPEC.md](01-share-docs/API_SPEC.md)

---

## Architecture

### Backend (NestJS)

Feature-based monolith: `auth`, `user-profile`, `product`, `cart`, `order`, `review`

```
Request → Guard (JWT + Roles) → Controller → Service → Repository → MySQL
```

- Each feature is a self-contained NestJS module
- Repository pattern for data access (TypeORM)
- Global exception filter, transform interceptor, validation pipe

### Frontend (React)

Feature-based SPA with strict layer separation:

```
Route → Layout → Page → Feature Components → Hooks (TanStack Query) → Services (Axios) → API
```

- Server state: TanStack Query (never Zustand for API data)
- Global state: Zustand (auth + cart only)
- URL state: `useSearchParams` for filters and pagination

---

## Database

MySQL 8.x with 12 tables across 6 features. Key design decisions:

- `order_items` snapshots product data (price, name, SKU) for history integrity
- `orders.shipping_address` stored as JSON snapshot (no FK)
- Cart supports both guest (`session_id`) and authenticated (`user_id`) users
- `refresh_tokens` table enables multi-device sessions and secure revocation

Schema reference: [01-share-docs/DATABASE.md](01-share-docs/DATABASE.md)

---

## Scripts

### Backend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start with hot-reload |
| `npm run build` | Compile TypeScript |
| `npm run start:prod` | Run compiled output |
| `npm test` | Run unit tests |
| `npm run test:e2e` | Run e2e tests |

### Frontend

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | Production build |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |

---

## Documentation

- [Backend Rules & Conventions](backend-nest-hoidanit/docs/BE-PROJECT-RULES.md)
- [Backend Architecture](backend-nest-hoidanit/docs/BE-ARCHITECTURE.md)
- [Frontend Rules & Conventions](frontend-react-hoidanit/docs/FE-PROJECT-RULES.md)
- [Frontend Architecture](frontend-react-hoidanit/docs/FE-ARCHITECTURE.md)
- [API Specification](01-share-docs/API_SPEC.md)
- [Database Schema](01-share-docs/DATABASE.md)

---

## License

See [LICENSE.MD](backend-nest-hoidanit/LICENSE.MD) for details.
