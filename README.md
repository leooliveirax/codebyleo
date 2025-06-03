# CodeByLeo

A modern website built with Next.js 15, React 19, and TypeScript, featuring MDX support and a beautiful UI powered by Tailwind CSS.

## 🚀 Features

- ⚡️ Next.js 15 with App Router
- 🔥 React 19 with Server Components
- 📝 MDX Support for content-rich pages
- 🎨 Tailwind CSS for styling
- 🌙 Dark mode support with next-themes
- ✨ Motion animations
- 🛠 TypeScript for type safety
- 📦 PNPM for fast, efficient package management
- 🧹 ESLint + Prettier for code quality
- 🐶 Husky + lint-staged for pre-commit hooks

## 🛠️ Tech Stack

- **Framework:** [Next.js](https://nextjs.org)
- **Language:** [TypeScript](https://www.typescriptlang.org)
- **Styling:** [Tailwind CSS](https://tailwindcss.com)
- **Content:** [MDX](https://mdxjs.com)
- **Package Manager:** [PNPM](https://pnpm.io)
- **Icons:** [Lucide React](https://lucide.dev)
- **Animations:** [Motion](https://motion.dev)

## 🏁 Getting Started

### Prerequisites

- Node.js 22 (use [nvm](https://github.com/nvm-sh/nvm) to manage Node.js versions)
- PNPM (recommended) or npm

### Installation

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Start the development server:

   ```bash
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

    ```bash
    pnpm build
    ```

## 📝 Available Scripts

- `pnpm dev` - Start development server with Turbopack
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm prepare` - Set up Husky pre-commit hooks

## 🏗️ Project Structure

```
codebyleo/
├── src/              # Source files
├── public/           # Static assets
├── .husky/          # Git hooks
├── .lintstagedrc.js # Lint-staged configuration
├── next.config.ts   # Next.js configuration
└── package.json     # Project dependencies
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org) for the amazing framework
- [Vercel](https://vercel.com) for the deployment platform
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
