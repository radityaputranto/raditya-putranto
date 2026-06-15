# Raditya Putranto — Portfolio

A personal portfolio website built with **Nuxt 3**, **Tailwind CSS**, and **Supabase** as the backend.

🔗 Live: [radityaputranto.com](https://radityaputranto.com)

---

## ✨ Tech Stack

- **Framework**: [Nuxt 3](https://nuxt.com)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Database**: [Supabase](https://supabase.com) (PostgreSQL)
- **Font**: Plus Jakarta Sans, Inter (via Google Fonts)
- **Image Optimization**: @nuxt/image
- **Icons**: @nuxt/icon

---

## 🗄️ Database Schema

| Table | Description |
|---|---|
| `notes` | Articles/notes (slug, title, content, tags, reading time, published status, views counter) |
| `contact_messages` | Messages submitted from the contact form (name, email, subject, message, read status) |
| `freebies` | Free digital assets/tools (title, description, category, download URL, click counter) |

---

## 🚀 Setup & Installation

### 1. Clone the repository
```bash
git clone https://github.com/radityaputranto/raditya-putranto.git
cd raditya-putranto
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure the environment variables
Copy the `.env.example` file to `.env` and fill in your credentials:
```bash
cp .env.example .env
```

Required variables:

| Variable | Description |
|---|---|
| `SUPABASE_URL` | The Supabase project URL (Settings > API) |
| `SUPABASE_KEY` | The Supabase anon public key (Settings > API) |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Google Cloud service account email (optional) |
| `GOOGLE_PRIVATE_KEY` | Google Cloud service account private key (optional) |
| `GOOGLE_SPREADSHEET_ID` | Google Spreadsheet ID for syncing contact messages (optional) |

### 4. Run the development server
```bash
npm run dev
```

The application will be running at `http://localhost:3000`

---

## 📦 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Runs the development server |
| `npm run build` | Builds the application for production |
| `npm run preview` | Previews the production build locally |
| `npm run lint` | Lints the codebase |

---

## 📄 License

MIT © [Raditya Putranto](https://github.com/radityaputranto)
