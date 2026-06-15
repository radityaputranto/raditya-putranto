-- Drop the projects table (migrated to static data: data/projects.ts)
-- This migration records the intentional removal of the projects table.
-- See docs/projects_static_migration.md for full context.

DROP TABLE IF EXISTS public.projects;
