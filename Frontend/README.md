TITLE: Lock-Ledger
Video URL: https://youtu.be/d1OZ37gCHrI

# 🧾 Lock Ledger

**Lock Ledger** is a Progressive Web App (PWA) that lets users **create notes** and **track their expenses and income** — viewable across all their devices.  
Built with **Vite + React**, it provides privacy, synchronization, and an intuitive interface.

---

## 🚀 Features

### 🔐 Authentication Flow

1. **Login Page**
   - Simple form using **email** and **password**.
   - Redirects to the main page after successful login.

2. **Signup Page**
   - Requires **email**, **password**, **username**, and **PIN**.
   - Password must be at least **8 characters**, PIN at least **6 digits**.
   - **Usernames are unique**, ensuring no duplicates.

3. **PIN Page**
   - Adds an **extra layer of privacy**.
   - Users must enter their PIN to access notes and financial data.

---

## 🧭 Main Page Structure

The main page is divided into three sections:

### 📝 Notes Section
- Create, edit, and delete notes.
- Notes include a **title**, **content**, and **toolbar** with edit/save/delete options.
- Editing is disabled by default to prevent accidental changes.

#### Subsections
- **Favorites:** Displays user-favorited notes.
- **Deleted:** Displays deleted notes (recoverable within 2 weeks before permanent deletion).

---

### 💰 Ledger Section

Divided into two main areas:

1. **Main Ledger**
   - Displays a table of all transactions:
     - Date  
     - Title  
     - Amount  
     - Type (Income / Expense)  
     - Edit / Delete buttons  

2. **History Section**
   - Interactive **Chart.js** chart showing total income and expenses (by day or month)
   - **Summary boxes** above the chart showing:
     - Total Income  
     - Total Expenses  
     - Total Remaining  
   - **Detailed transaction table** under the chart

---

### 👤 Profile Section
- Allows updating:
  - **Username**
  - **Email**
  - **Password**
- Includes **logout** option.
- Displays a profile picture *(currently static — no upload yet).*

---

## 🧩 Key Components

### 🧭 Navbar
- Contains:
  - **Search bar** (for notes or transactions)
  - **Hamburger menu button** (to open sidebar)
  - **Install App button** (PWA installation prompt)

### 📂 Sidebar
- Navigation panel including:
  - Notes: **All / Favorites / Deleted**
  - Ledger: **Ledger / History**
  - **Profile access** at the bottom (username + icon)

### 🧱 FormBox (Core Component)
- Multi-purpose **modal window** used for:
  - Adding new notes or transactions
  - Confirming deletions
  - Changing password (asks for current & new passwords)
- Automatically adjusts its content based on the user’s action.

---

## ⚙️ Backend Setup

Currently powered by **MockAPI** to simulate real backend functionality.

### API Files
| File | Purpose |
|------|----------|
| `usersAPI.js` | Handles user data (signup, login, update) |
| `notesAPI.js` | Manages note creation, editing, and deletion |
| `ledgerAPI.js` | Handles income & expense tracking |

---

## 🧰 Utilities

Located in the `/utils` folder:

| File | Description |
|------|--------------|
| `localStorage.js` | Manages saving and retrieving data from localStorage |
| `validationMessages.js` | Contains validation messages for forms |
| `PWAinstall.js` | Handles installation prompts for the PWA |
| `utility.js` | Includes helper arrays (months/days) and time formatting |
| `ProtectedRoute.jsx` | Protects private routes for logged-in users only |

---

## 🖼️ Assets

All icons, logos, and images are stored in the `/assets` folder.

---

## 💻 Tech Stack

| Category | Technology |
|-----------|-------------|
| Frontend | React (Vite) |
| Styling | CSS Modules |
| Charts | Chart.js |
| Data | MockAPI |
| App Type | Progressive Web App (PWA) |

---

## 📱 PWA Features
- Can be **installed** on any device.
- Works **offline** after initial load.
- Automatically updates in the background.
- Provides an **app-like experience** with faster access.

---

## 🧩 Future Plans
- Replace MockAPI with a **custom backend** (Node.js / Express)
- Add **search & filtering** for notes and ledger
- Implement **custom themes**
- Enable **profile picture upload**
- Add **data export/import options**

---

## 🧑‍💻 Author
**Developed by:** [MkhalFadel](https://github.com/MkhalFadel)  
Built using React + Vite.

---

### 🧷 File Info
**File Name:** `README.md`  
**Last Updated:** November 2025
