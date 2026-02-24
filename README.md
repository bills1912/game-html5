# 🎮 Game Arcade — HTML5 Portfolio

Two production-quality games built with **pure Vanilla JavaScript + HTML5 Canvas**. No frameworks, no libraries — just clean, well-architected code.

---

## Games

### 🚀 VOID DRIFTER — Asteroid Blaster
Game survival shooter ruang angkasa yang intens dengan fitur:
- **Sistem Pergerakan Fisika**: Kontrol presisi menggunakan WASD/Panah dengan efek *thrust* dan *drag* yang halus.
- **Sistem Skor Real-time**: Perhitungan skor dinamis berdasarkan ukuran asteroid yang hancur.
- **Skill & Ultimate**: 
  - **Warp Drive (E)**: Teleportasi instan untuk menghindari kepungan asteroid.
  - **Mega Nova (Q)**: Ultimate skill untuk membersihkan seluruh layar dari ancaman.
  - **Energy Shield (Shift)**: Perlindungan tambahan menggunakan cadangan energi.
- **Infinite Wave System**: Kesulitan yang meningkat secara bertahap di setiap gelombang.
- **Efek Visual Modern**: Partikel ledakan, *screen shake*, dan pencahayaan dinamis menggunakan GPU-accelerated shadows.

### 🟦 TETRIX — Tetris Clone
Feature-complete Tetris implementation:
- **SRS (Super Rotation System)** with wall kicks
- **DAS/ARR** (Delayed Auto Shift / Auto Repeat Rate) controls
- **Hold piece** and **Ghost piece**
- **7-bag randomizer** (same as modern Tetris)
- **Combo system** + visual flash feedback
- **T-Spin detection** tracking
- Level progression with increasing speed
- Persistent high score (localStorage)

---

## Deploy to Railway

### Method 1: GitHub Integration
1. Push to GitHub: `git init && git add . && git commit -m "init" && git push`
2. Go to [railway.app](https://railway.app) → New Project → Deploy from GitHub
3. Select your repo → Railway auto-detects Node.js → Deploy!

### Method 2: Railway CLI
```bash
npm install -g @railway/cli
railway login
railway init
railway up
```

### Method 3: Direct Upload
Drag and drop the project folder at [railway.app](https://railway.app)

---

## Local Development
```bash
npm install
npm start
# Open http://localhost:3000
```

---

## Tech Stack
- **Frontend**: HTML5, CSS3, Canvas 2D API
- **Language**: Vanilla JavaScript (ES6+)
- **Server**: Node.js + Express (minimal, just for routing)
- **Deploy**: Railway (or any Node.js host)

## Architecture Highlights
- **Game Loop**: `requestAnimationFrame` with delta time
- **Collision**: Grid-based for Tower Defense, matrix-based for Tetris
- **Rendering**: Canvas 2D with GPU-accelerated shadows/glows
- **State Management**: Pure JS objects, no external state libs
