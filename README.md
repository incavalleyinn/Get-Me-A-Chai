# ☕ GetMeAChai — My Style

_A modern GetMeAChai with custom styling, built for creators to receive direct support via UPI._

---

## Screen Shots

---

## 🚀 Overview

**GetMeAChai (My Style)** is a platform that enables creators to receive small contributions (“a chai”) directly from their fans using **UPI**.  
Fans don’t need an account — they can simply search for creators and support them, while creators can log in, create a profile, and showcase their contributions.

---

## ✨ Features

- 🔑 **OAuth Login** with Google, GitHub
- 🎨 **Creator Pages**: Name, username, profile picture, UPI ID
- 💸 **Direct UPI Support** (no gateway fees)
- 🔍 **Creator Search** for fans
- ⚡ **Contributions** are displayed after 1 minute
- 🏆 **Top Supported Creators** highlighted on the homepage
- 📱 **Responsive User Interface**

---

## 🛠️ Getting Started

### 1. Clone the repo

1. Clone the repo
2. Install dependencies: `npm install`
3. Set up `.env.local` with your MongoDB and OAuth credentials
4. Run MongoDB locally or use Atlas

MONGODB_URI=your_mongodb_uri_here
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
GITHUB_CLIENT_ID=your_github_client_id
GITHUB_CLIENT_SECRET=your_github_client_secret
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000

5. Start the dev server: `npm run dev`

---

## Folder Structure

- `/app` — Next.js app pages and API routes
- `/components` — React components
- `/models` — Mongoose models
- `/lib` — Database connection
- `/public` — Static assets

---

## API Routes

- `/api/user/profile` — Get/update creator profile
- `/api/contribute` — Save a contribution
- `/api/contributions/[email]` — Get contributions for a creator
- `/api/creator/[username]` — Get creator info by username
- `/api/topcreators` — Get top supported creators

---

## 🤝 Contributing  
1. Fork the repo  
2. Create a branch: `git checkout -b feature/new-feature`  
3. Commit changes: `git commit -m "Add new feature"`  
4. Push: `git push origin feature/new-feature`  
5. Open a PR 🚀  

---

## Author

- GitHub: [CodzHorizon](https://github.com/CodzHorizon)  
- Email: kshitizsh.8@example.com  

---

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

⚡ *Built with ❤️ using Next.js, MongoDB, and UPI.*  