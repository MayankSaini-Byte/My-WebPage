# Mayank Saini — Portfolio

A modern, "corporate-tech" dark-mode personal portfolio built with **React**, **Vite**, **Tailwind CSS**, **Framer Motion**, and **Lucide React**.

## Quick start

```bash
npm install      # install dependencies
npm run dev      # start dev server at http://localhost:5173
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## Tech stack

| Concern     | Choice                          |
| ----------- | ------------------------------- |
| Framework   | React 18 (functional + hooks)   |
| Build tool  | Vite 5                          |
| Styling     | Tailwind CSS 3                  |
| Animation   | Framer Motion                   |
| Icons       | Lucide React                    |
| Fonts       | Inter (UI) + JetBrains Mono     |

## Project structure

```
src/
├── components/        # UI building blocks (Navbar, Hero, About, …)
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── CodeWindow.jsx     # VS Code mockup
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Education.jsx
│   ├── Contact.jsx
│   ├── Footer.jsx
│   └── SectionHeading.jsx # shared eyebrow + title block
├── data/
│   └── portfolioData.js   # ⭐ SINGLE SOURCE OF TRUTH for all content
├── lib/
│   └── motion.js          # shared Framer Motion variants
├── App.jsx
├── main.jsx
└── index.css             # Tailwind layers + card/button primitives
```

## Editing content

**You rarely need to touch a component.** Almost everything is driven by
`src/data/portfolioData.js`:

- **Add a project** → push a new object to the `projects` array (set `icon` to
  one of: `wallet`, `film`, `shield`, `trending-down`, or add a new mapping in
  `Projects.jsx`).
- **Update skills** → edit the `skills` array. Items with a `level` render a
  progress bar; items without render as chips.
- **Edit education / achievements / contact / hero** → update the matching
  export in the same file.

## Design system

- **Palette:** slate-950 background, `white/10` borders, indigo (`accent`)
  used sparingly for active states and primary buttons.
- **Cards:** `.card` utility — dark fill + faint border = "physical card on a
  surface". Hover raises by `-translate-y-1` and lightens the border.
- **Animation:** subtle fade-in-up via shared variants in `src/lib/motion.js`.
  No neon, no glowing shadows.
```
