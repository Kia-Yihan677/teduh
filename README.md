# React + Node.js Website

Kerangka ini memisahkan website menjadi dua bagian:

- `client`: frontend React. Ini yang dilihat dan diklik user di browser.
- `server`: backend Node.js/Express. Ini yang mengurus API, database, login, dan proses di belakang layar.

## Cara Menjalankan

Install dependency:

```bash
npm install
```

Jalankan frontend dan backend sekaligus:

```bash
npm run dev
```

Alamat default:

- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3000`

## Struktur

```text
client/
  src/
    App.jsx
    main.jsx
    styles.css
server/
  src/
    index.js
    routes/
      health.js
```

Contoh endpoint API sudah tersedia di:

```text
GET http://localhost:3000/api/health
```
