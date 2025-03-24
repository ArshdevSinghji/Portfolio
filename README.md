# Portfolio

This is a personal portfolio website for Arshdev Singh, showcasing his skills, projects, and achievements in software development. The portfolio includes detailed profiles from various coding platforms such as LeetCode and GeeksforGeeks, highlighting my problem-solving abilities and coding proficiency.

## Features

- **Coding Profile**:
  - Displays detailed statistics of LeetCode/GFG submissions, categorized by difficulty (Easy, Medium, Hard).
  - Animated count of problems solved using `framer-motion`.
  - A line chart showing daily submission frequency using `react-chartjs-2` and Chart.js.

- **Animated Components**:
  - Smooth animations for various elements using `framer-motion`, enhancing the visual appeal of the portfolio.

- **Responsive Design**:
  - The portfolio is designed to be responsive, ensuring a seamless experience across different devices and screen sizes.

- **Project Links**:
  - Links to my projects, such as the "Virtual Bookshelf" project hosted on GitHub, with clickable links that open in new tabs.

## Technologies Used

### Frontend

- **React**: For building the user interface.
- **Framer Motion**: For animations.
- **React Chart.js 2**: For rendering charts.
- **CSS Modules**: For styling components.
- **Vite**: For development and build tooling.

### Backend

- **Node.js** and **Express**: For setting up the server and handling API requests.

## Installation

### Prerequisites

- Node.js and npm installed on your machine.

### Backend Setup

1. Navigate to the `backend` directory:
   ```sh
   cd backend
   ```
2. Install all dependencies:
   ```sh
   npm install
   ```
3. Start the backend server:
   ```sh
   node server.js
   ```

### Frontedn Setup

1. Navigate to the `frontend` directory:
   ```sh
   cd frontend
   ```
2. Install all dependencies:
   ```sh
   npm install
   ```
3. Start the development server:
   ```sh
   npm run dev
   ```

### Directory Structure

**Backend**

backend/
├── .gitignore
├── [package.json](http://_vscodecontentref_/1)
└── [server.js](http://_vscodecontentref_/2)

**Frontend**

frontend/
├── .gitignore
├── [eslint.config.js](http://_vscodecontentref_/3)
├── [index.html](http://_vscodecontentref_/4)
├── [package.json](http://_vscodecontentref_/5)
├── [README.md](http://_vscodecontentref_/6)
├── [vite.config.js](http://_vscodecontentref_/7)
├── public/
│   └── vite.svg
└── src/
    ├── [App.css](http://_vscodecontentref_/8)
    ├── [App.jsx](http://_vscodecontentref_/9)
    ├── [index.css](http://_vscodecontentref_/10)
    ├── [main.jsx](http://_vscodecontentref_/11)
    ├── [MainLayout.jsx](http://_vscodecontentref_/12)
    ├── assets/
    │   ├── expressJS.svg
    │   ├── freepik__adjust__26199.png
    │   ├── image.jpg
    │   └── me.jpeg
    └── component/
        ├── aboutme/
        │   ├── [About.jsx](http://_vscodecontentref_/13)
        │   └── [About.module.css](http://_vscodecontentref_/14)
        ├── experience/
        │   ├── [Experience.jsx](http://_vscodecontentref_/15)
        │   └── [Experience.module.css](http://_vscodecontentref_/16)
        ├── navbar/
        │   ├── [CodeNav.jsx](http://_vscodecontentref_/17)
        │   ├── [CodeNav.module.css](http://_vscodecontentref_/18)
        │   ├── [Navbar.jsx](http://_vscodecontentref_/19)
        │   └── [Navbar.module.css](http://_vscodecontentref_/20)
        ├── profile/
        │   ├── [GeeksForGeeks.jsx](http://_vscodecontentref_/21)
        │   ├── [LeetCodeProfile.jsx](http://_vscodecontentref_/22)
        │   └── [Profile.module.css](http://_vscodecontentref_/23)
        └── resume/
            ├── [Resume.jsx](http://_vscodecontentref_/24)
            └── [Resume.module.css](http://_vscodecontentref_/25)
