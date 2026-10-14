# 🗂️ Portfolio Template - The Dossier

A modern, highly-customizable, terminal-aesthetic portfolio template built with **React 19**, **TanStack Start**, **Tailwind CSS v4**, and **shadcn/ui**. It comes fully equipped with a CLI installer and automated GitHub sync!

---

## ✨ Features

- ⚡ **Vite 8** — lightning-fast dev server and builds
- 🧭 **TanStack Router** — file-based, type-safe routing
- 🌐 **TanStack Start** — SSR support out of the box
- 🖥️ **CLI Setup Script** — configure your details right from the terminal
- 🤖 **Auto-Sync GitHub Action** — automatically pulls your latest repositories daily
- 🎨 **Tailwind CSS v4** — utility-first styling
- 🧩 **shadcn/ui** — accessible, customizable UI components
- 🦺 **TypeScript** — end-to-end type safety
- 🧹 **ESLint + Prettier** — consistent code style

---

## 🚀 Getting Started

### Prerequisites

- Node.js `>= 20`
- [Bun](https://bun.sh) (Optional, but recommended)

### 1. Installation

```bash
# Clone the repository
git clone https://github.com/JOKER-53/portfolio-template.git
cd portfolio-template

# Install dependencies
npm install  # or bun install
```

### 2. Configuration (CLI Installer)

We built an interactive Bash script to instantly customize the portfolio with your personal details. Just run:

```bash
./install.sh
```

_This will safely update `src/config.json` with your Name, Alias, Role, Location, and Social Links!_

### 3. Development

```bash
npm run dev  # or bun dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view your live dossier.

---

## 🤖 GitHub Auto-Sync

Tired of manually updating your projects section? We've got you covered.

This template includes a pre-configured **GitHub Action** (`.github/workflows/sync-projects.yml`) and a script (`scripts/sync-projects.js`) that automatically checks your GitHub profile **every day at midnight UTC**.

- It pulls your top 6 recently updated, non-forked repositories.
- It dynamically assigns tech-stack tags based on languages/topics.
- It automatically pushes updates to your `src/config.json`.

**To trigger it manually:** Go to your GitHub repository -> Actions -> "Auto-Sync Portfolio Projects" -> Run workflow.

---

## 📁 Project Structure

```text
portfolio-template/
├── .github/
│   └── workflows/
│       └── sync-projects.yml # Automated GitHub sync action
├── scripts/
│   └── sync-projects.js      # Script that fetches GitHub repos
├── src/
│   ├── routes/
│   │   ├── __root.tsx        # Root layout (Tailwind header/footer removed for custom style)
│   │   └── index.tsx         # The main Dossier UI page
│   ├── config.json           # Your configuration and data (Auto-updated!)
│   ├── components/           # shadcn/ui and custom components
│   ├── styles/               # Global CSS + Tailwind directives
│   ├── client.tsx            # Client entry point
│   └── server.tsx            # Server entry point (SSR)
├── install.sh                # Interactive CLI setup script
└── package.json
```

---

## 🎨 Customization

### Advanced Config

If you want to modify your skills, disciplines, or exploring sections, you can directly edit `src/config.json`. There's no need to touch the JSX/UI code just to change your text!

### Theming

The Dossier aesthetic relies heavily on the color constants defined in `src/routes/index.tsx`. You can alter the `C` object to change the paper, ink, yellow, and red colors.

---

## 🧹 Code Quality

```bash
# Lint
npm run lint

# Format (Fix prettier errors)
npm run format
```

---

## 📦 Deployment

This template supports SSR via TanStack Start. You can easily deploy to Vercel, Netlify, or Cloudflare Pages.

```bash
# Production build
npm run build

# Preview production build locally
npm run preview
```

---

## 🤝 Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

---

## 👤 Author

**JOKER-53**

- GitHub: [@JOKER-53](https://github.com/JOKER-53)
