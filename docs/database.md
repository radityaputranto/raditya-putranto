# Supabase Database Documentation

## Overview

This project uses **Supabase** (PostgreSQL) as the backend database for dynamic data. Static data (like the projects list) is managed locally via TypeScript files in `data/`.

## Active Tables

| Table | Description | RLS |
|---|---|---|
| `notes` | Blog/notes posts written by the author | ✅ Enabled |
| `freebies` | Free resource links shared by the author | ✅ Enabled |
| `contact_messages` | Incoming messages from the contact form | ✅ Enabled |

---

### `notes`

Stores blog notes/articles written by the author.

| Column | Type | Nullable | Default | Notes |
|---|---|---|---|---|
| `id` | `uuid` | NO | `gen_random_uuid()` | Primary Key |
| `slug` | `text` | NO | — | Unique URL identifier |
| `title` | `text` | NO | — | — |
| `excerpt` | `text` | YES | — | Short preview text |
| `content` | `text` | YES | — | Full article body (Markdown/HTML) |
| `tags` | `text[]` | YES | — | Array of tag strings |
| `reading_time` | `integer` | YES | — | Estimated read time in minutes |
| `published` | `boolean` | YES | `false` | Visibility toggle |
| `published_at` | `timestamptz` | YES | — | Publication date |
| `created_at` | `timestamptz` | YES | `now()` | — |
| `updated_at` | `timestamptz` | YES | `now()` | — |

**RLS Policies:**
- Public can read rows where `published = true`.

---

### `freebies`

Stores free resources (templates, presets, tools) shared by the author.

| Column | Type | Nullable | Default | Notes |
|---|---|---|---|---|
| `id` | `uuid` | NO | `gen_random_uuid()` | Primary Key |
| `title` | `text` | NO | — | — |
| `description` | `text` | YES | — | Short description |
| `category` | `text` | NO | — | e.g. `photography`, `design`, `developer`, `others` |
| `url` | `text` | NO | — | External download/redirect URL |
| `clicks` | `integer` | YES | `0` | Click counter |
| `created_at` | `timestamptz` | YES | `now()` | — |
| `updated_at` | `timestamptz` | YES | `now()` | — |

**RLS Policies:**
- Public can read all rows.

---

### `contact_messages`

Stores form submissions from the Contact page.

| Column | Type | Nullable | Default | Notes |
|---|---|---|---|---|
| `id` | `uuid` | NO | `gen_random_uuid()` | Primary Key |
| `name` | `text` | NO | — | Sender's name |
| `email` | `text` | NO | — | Sender's email |
| `subject` | `text` | YES | — | Optional subject line |
| `message` | `text` | NO | — | Message body |
| `read` | `boolean` | YES | `false` | Read status (admin) |
| `created_at` | `timestamptz` | YES | `now()` | — |

**RLS Policies:**
- Public can insert new rows (submit messages).
- Read access is restricted (admin only via Supabase dashboard).

---

## Dropped / Migrated Tables

| Table | Status | Reason |
|---|---|---|
| `projects` | ✅ Dropped | Migrated to static file `data/projects.ts`. See [projects_static_migration.md](./projects_static_migration.md) |

---

## Migrations

Migration files are stored in `supabase/migrations/` and named using the convention:
```
YYYYMMDDHHMMSS_descriptive_name.sql
```

| File | Description |
|---|---|
| `20260615000000_init_schema.sql` | Initial schema: creates `notes`, `contact_messages`, and `freebies` tables with RLS |
| `20260615000001_drop_projects_table.sql` | Drops `projects` table (data migrated to static file) |

---

## Seed Data

The `supabase/seed.sql` file contains the initial seed data for:
- `notes` — 4 sample draft notes
- `freebies` — 5 resource items (photography presets, templates, UI kits)

Run via Supabase CLI:
```bash
supabase db reset
# or
supabase db push && psql -f supabase/seed.sql
```
