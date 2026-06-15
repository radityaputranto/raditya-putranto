# Architecture Migration: Projects Data to Static Setup

This document records the architectural decision to migrate the `projects` dataset from Supabase (Remote PostgreSQL database) to a local static format (`data/projects.ts`).

## Reason for Migration
The portfolio site originally fetched project data from a Supabase backend. However, the data update frequency for a personal portfolio is very minimal. Loading this static, highly predictable content through a network layer caused unnecessary performance overhead (specifically, a noticeable split-second delay on initial load) and over-complicated the state management.

To enhance loading speed and optimize resource utilization, the data source was refactored into a static TypeScript structure.

## What Has Changed?

1. **Database Table Dropped:**
   - The `public.projects` table in Supabase has been safely **dropped**. The application no longer relies on this table for loading projects.

2. **Data Structure (Static Data Array):**
   - A new file `data/projects.ts` handles the definition and initialization of all projects.
   - It exposes the `Project` interface which natively supports `content` (in raw HTML format) and an optional `gallery` array.
   - All legacy project records, along with their respective optimized thumbnail images and updated live URLs, have been successfully ported.

3. **State Management Refactor (`composables/useProjects.ts`):**
   - Previously: Triggered asynchronous calls to the Supabase client via `useLazyAsyncData()`.
   - Now: Instantly loads and slices the `projectsData` array natively using Vue's reactive `computed` and `useState` mechanics.
   - Example: `featuredProjects` is now a computed property that statically slices the first 3 featured projects to be displayed seamlessly on the home page.

4. **Dynamic Raw HTML Content & Gallery:**
   - The `pages/projects/[slug].vue` detail component was upgraded. It no longer relies on custom Markdown parsers (`replace()` regex). Instead, it securely utilizes the native Vue `v-html` directive to render content exactly as declared in the static file.
   - A dynamic `v-for` loop is also added to instantly iterate and render gallery screenshots at the bottom of the page if they are provided in the static file.

## How to Add or Modify Projects Now?
You no longer need to execute queries against a database.
1. Open the `data/projects.ts` file in the root directory.
2. Under `export const projectsData: Project[] = [ ... ]`, insert a new object block or update an existing one.
3. Once the code is saved, the Vue reactive system will automatically and instantly parse the project across the homepage, project catalog, and the detail pages.
