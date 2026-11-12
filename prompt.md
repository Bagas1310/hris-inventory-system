# Prompt: React + Tailwind CSS Employee & Inventory Management System

Act as a Senior Frontend Developer. Build a production-ready, highly clean, and modular Employee & Inventory Management System using React, Tailwind CSS, and Lucide React icons. 

Output concise, fully functional code without unnecessary comments or filler text.

---

## 1. Tech Stack & Dependencies
- **Framework:** React (Functional Components, Hooks, Context API)
- **Styling:** Tailwind CSS (Utility-first, Dark Mode support via `dark` class)
- **Icons:** `lucide-react`
- **Persistence:** `localStorage` for demo data & authentication state

---

## 2. Core Functional Requirements

### A. Authentication (Simulated)
- Login Form with pre-populated demo login hints (`admin@demo.com` / `123456`).
- Single-click "Auto-fill Demo Credentials" button.
- Persist active session in `localStorage`.
- Guard protected components if unauthenticated.

### B. Navigation & Layout
- Responsive Sidebar (Collapsible on mobile) + Topbar with User Profile & Dark/Light mode toggle.
- Tab/View switcher for: `Dashboard`, `Karyawan (Employees)`, and `Inventaris (Inventory)`.

### C. Dashboard View
- 4 Summary Cards: Total Karyawan, Total Barang, Stok Menipis, Total Nilai Aset.
- Recent activities feed / Simple progress distribution bars.

### D. CRUD Management (Karyawan & Inventaris)
- Data Table displaying:
  - **Karyawan:** Avatar, Nama, Posisi, Departemen, Status (Aktif/Non-aktif), Aksi.
  - **Inventaris:** SKU, Nama Barang, Kategori, Stok, Harga, Status (Tersedia/Menipis/Habis), Aksi.
- Search Input (Real-time client-side filter).
- Dropdown Filter (By Department or Category).
- Client-side Pagination (5 items per page).
- Modal Dialogs for Create & Edit operations.
- Delete confirmation trigger.
- Toast notifications (Simulated via state alert) upon CRUD actions.

---

## 3. Design & UI Requirements
- Professional enterprise color palette: Zinc/Slate neutrals with Indigo/Blue primary accents.
- Full mobile and desktop responsiveness.
- Smooth transitions for dark mode toggle and modal dialogs.

---

## 4. Code Execution Constraints
- Do not output lengthy docstrings or self-explanatory comments.
- Keep state management clean using React `useState` and `useContext` or clean custom hooks.
- Handle empty states (e.g., "Tidak ada data ditemukan") and loading indicators where applicable.