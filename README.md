# Raditya Putranto — Portfolio

Website portfolio personal yang dibangun dengan **Nuxt 3**, **Tailwind CSS**, dan **Supabase** sebagai backend.

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

| Tabel | Deskripsi |
|---|---|
| `projects` | Data project portfolio (slug, judul, deskripsi, tech stack, dll) |
| `notes` | Artikel/catatan (slug, konten, tags, status publish) |
| `contact_messages` | Pesan dari form kontak |

---

## 🚀 Setup & Instalasi

### 1. Clone repository
```bash
git clone https://github.com/radityaputranto/raditya-putranto.git
cd raditya-putranto
```

### 2. Install dependencies
```bash
npm install
```

### 3. Konfigurasi environment
Salin file `.env.example` menjadi `.env` lalu isi dengan kredensial Anda:
```bash
cp .env.example .env
```

Variabel yang dibutuhkan:

| Variabel | Keterangan |
|---|---|
| `SUPABASE_URL` | URL project Supabase (Settings > API) |
| `SUPABASE_KEY` | Anon key Supabase (Settings > API) |
| `GOOGLE_SERVICE_ACCOUNT_EMAIL` | Email service account Google (opsional) |
| `GOOGLE_PRIVATE_KEY` | Private key service account Google (opsional) |
| `GOOGLE_SPREADSHEET_ID` | ID Google Spreadsheet untuk kontak (opsional) |

### 4. Jalankan development server
```bash
npm run dev
```

Aplikasi akan berjalan di `http://localhost:3000`

---

## 📦 Scripts

| Command | Deskripsi |
|---|---|
| `npm run dev` | Jalankan server development |
| `npm run build` | Build untuk production |
| `npm run preview` | Preview hasil build |
| `npm run lint` | Linting kode |

---

## 📄 Lisensi

MIT © [Raditya Putranto](https://github.com/radityaputranto)
