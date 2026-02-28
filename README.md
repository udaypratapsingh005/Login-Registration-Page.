🔐 Login & Registration Page (Popup UI)

A modern, responsive Login & Registration page built using HTML, CSS, and JavaScript.
This project features animated form transitions, glassmorphism UI, and popup interaction logic.

🚀 Features:
Popup Login Modal
Toggle between Login & Register forms
Smooth CSS animations
Glassmorphism design (blur + transparency)
Responsive layout
Interactive button effects
Clean UI with Ionicons integration


🛠️ Tech Stack:
HTML5 – Structure
CSS3 – Styling & Animations
JavaScript (Vanilla JS) – DOM manipulation & popup control
Ionicons – Icons


📂 Project Structure
index.html
style.css
script.js
README.md


⚙️ How It Works:
1️⃣ Popup Logic
When user clicks Login button in navbar, JavaScript adds:
wrapper.classList.add('active-popup')
This scales the wrapper from 0 → 1 using CSS transform.


2️⃣ Toggle Between Forms
Clicking Register link adds:
wrapper.classList.add('active')
Clicking Login link removes:
wrapper.classList.remove('active')
CSS then shifts forms horizontally using translateX() animation.


🎨 UI Design Highlights
Full-screen background image
Fixed header with navigation
Animated underline hover effect
Frosted glass effect using:
backdrop-filter: blur(20px);
Smooth transition timing

🧠 What I Learned
DOM Selection & Event Handling
Class manipulation using classList
CSS transform & transitions
Form UI design patterns
Managing multiple form states

🔮 Future Improvements
Add form validation
Connect with backend (Node.js / Firebase)
Add password strength checker
Add responsive mobile optimization improvements

💡 Author
Uday Pratap Singh
Frontend Developer (Learning Phase 🚀)

Uday
Frontend Developer (Learning Phase 🚀)
