# 🚀 GrowthGrid — Skill Progress Tracker

GrowthGrid is a **JavaScript-based skill tracking system** that helps users track learning progress using XP, levels, and gamified achievements.

It is built to demonstrate **real-world frontend development concepts** like DOM manipulation, state management, localStorage persistence, modular JavaScript, and UI rendering logic.

---

# 📌 Features

- ➕ Add new skills dynamically  
- 🧠 Prevent duplicate skills (case-insensitive check)  
- 💾 Persistent storage using `localStorage`  
- ⚡ XP system (+10 XP per click)  
- 📊 Auto level calculation system  
- 📈 Progress bar visualization  
- ✏️ Edit skill names  
- ❌ Delete skills  
- 🔃 Auto sorting by XP (highest first)  
- 🏆 Top skill highlight system  
- 🎮 Gamified structure (XP + Levels + Badges system ready)

---

# 🧠 Core Concepts Used

This project demonstrates:

- DOM Manipulation
- Event Handling
- Array & Object operations
- Sorting algorithms
- localStorage usage
- Modular JavaScript architecture
- Dynamic UI rendering
- Functional programming patterns

---

# 🏗️ Project Structure


GrowthGrid/
│
├── index.html # Main UI structure
├── style.css # Styling and layout
├── script.js # Core application logic
├── README.md # Documentation
│
├── modules/
│ ├── analytics.js # XP & performance calculations
│ ├── achievements.js # Badge system logic
│ └── streak.js # (future) daily streak system
│
├── assets/ # Images and media
├── icons/ # UI icons
├── themes/ # Light/Dark theme support
└── data/ # Sample JSON data


---

# ⚙️ How It Works

1. User adds a skill  
2. Skill is stored in an array of objects  
3. Data is saved in browser `localStorage`  
4. UI re-renders dynamically  
5. XP updates affect level + progress bar  
6. Skills are automatically sorted by XP  
7. Top skill is highlighted in real-time  

---

# 🧮 XP & Level System

- Every click adds **+10 XP**
- Level formula:


Level = Math.floor(XP / 100) + 1


Example:

| XP  | Level |
|-----|------|
| 0   | 1    |
| 100 | 2    |
| 250 | 3    |
| 500 | 6    |

---

# 🏆 Achievements System (Planned Module)

Badges are awarded based on XP milestones:

- 🎯 Beginner (10 XP)
- 🥈 Level 2 (100 XP)
- 🥇 Expert (400 XP)
- 👑 Master (900 XP)

---

# 🚀 Future Improvements

- 🔥 Daily streak system
- 📊 Analytics dashboard with charts
- 🎨 Dark/light theme switcher
- 🏅 Global leaderboard system
- 📤 Export/Import user data
- 📱 Mobile responsive redesign

---

# 🎯 Learning Outcome

This project helps you understand:

- How real frontend apps manage state
- How UI updates react to data changes
- How modular JavaScript improves structure
- How localStorage simulates backend persistence
- How gamification improves user engagement

---

# 👨‍💻 Author

Built by **Harjas**  
Frontend Learning Project — GrowthGrid 🚀