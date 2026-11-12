# Sistem Manajemen Data Karyawan & Inventaris (HRIS & Inventory)

Aplikasi web modern berbasis React dan Tailwind CSS untuk mengelola data karyawan serta stok barang secara responsif, cepat, dan intuitif. Sistem ini dirancang dengan standar antarmuka profesional yang cocok untuk kebutuhan manajemen internal perusahaan atau portofolio pengembangan aplikasi web frontend.

---

## 🚀 Fitur Utama

- **Autentikasi (Simulasi Demo):**
  - Halaman login dengan fitur *Auto-fill Demo Credentials* untuk pengujian cepat.
  - Sesi login tersimpan secara otomatis menggunakan `localStorage`.

- **Dashboard Ringkasan:**
  - Kartu statistik utama (Total Karyawan, Total Barang, Stok Menipis, dan Total Nilai Aset).
  - Tampilan visual aktivitas terbaru dan distribusi data.

- **Manajemen Data Karyawan (CRUD):**
  - Menampilkan daftar karyawan (Avatar, Nama, Posisi, Departemen, Status).
  - Pencarian *real-time* berdasarkan nama atau posisi.
  - Filter data berdasarkan departemen.
  - Tambah, edit, dan hapus data karyawan dengan konfirmasi modal.

- **Manajemen Inventaris (CRUD):**
  - Menampilkan daftar barang (SKU, Nama Barang, Kategori, Stok, Harga, Status Stok).
  - Pencarian dan filter berdasarkan kategori barang.
  - Penanda status otomatis (Tersedia, Menipis, Habis).

- **UI/UX & Aksesibilitas:**
  - **Dark Mode / Light Mode Toggle** untuk kenyamanan visual.
  - Fitur **Pagination** (5 baris per halaman) untuk keterbacaan data yang optimal.
  - Desain **Fully Responsive** (nyaman dibuka di perangkat seluler maupun desktop).

---

## 🛠️ Teknologi yang Digunakan

- **Framework:** [React.js](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **State & Storage:** React State Context & Browser `localStorage`

---

## 📂 Struktur Folder Proyek

```text
hris-inventory-system/
├── src/
│   ├── assets/        # File aset (gambar, logo, dll.)
│   ├── components/    # Komponen UI modular (Navbar, Sidebar, Modal, Table, Card)
│   ├── context/       # React Context untuk State Management & Auth
│   ├── data/          # Data dummy awal (Karyawan & Inventaris)
│   ├── pages/         # Halaman utama (Login, Dashboard, Karyawan, Inventaris)
│   ├── utils/         # Helper & Formatter
│   ├── App.jsx        # Komponen utama & Routing
│   └── main.jsx       # Entry point React
├── public/            # File publik
├── README.md          # Dokumentasi proyek
└── package.json       # Manajer dependensi
```

---

## 💻 Cara Menjalankan Proyek secara Lokal

### Prasyarat
Pastikan kamu telah menginstal [Node.js](https://nodejs.org/) (versi 16 atau yang lebih baru) dan `npm` di komputer kamu.

### Langkah Instalasi

1. **Clone repository ini:**
   ```bash
   git clone https://github.com/username-kamu/hris-inventory-system.git
   ```

2. **Masuk ke folder proyek:**
   ```bash
   cd hris-inventory-system
   ```

3. **Instal dependensi:**
   ```bash
   npm install
   ```

4. **Jalankan server pengembangan:**
   ```bash
   npm run dev
   ```

5. Buka browser dan akses alamat yang tertera di terminal (biasanya `http://localhost:5173`).

---

## 🔑 Akses Akun Demo

Untuk mencoba fitur autentikasi dan masuk ke dashboard tanpa mengetik manual, gunakan kredensial berikut atau klik tombol **"Auto-fill Demo Credentials"** pada halaman login:

- **Email:** `admin@demo.com`
- **Password:** `123456`

---

## 📄 Lisensi

Proyek ini dibuat untuk keperluan portofolio dan demonstrasi skill frontend development. Bebas digunakan dan dimodifikasi sesuai kebutuhan.