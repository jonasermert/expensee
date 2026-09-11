# Expensee 💰

Expensee is a responsive expense tracker created as a SuperCode bootcamp graduation project. Users can authenticate with Firebase, record transactions, review recent activity, and see category totals in a doughnut chart.

## Features

- Email/password registration and login
- Google, GitHub, and Twitter sign-in through Firebase Authentication
- Real-time transaction storage with Cloud Firestore
- Income, expense, saving, and miscellaneous category totals
- Responsive overview and chart views

## Tech stack

- React 19 and React Router 7
- Vite 8
- Firebase 12
- Chart.js 4 with react-chartjs-2
- Sass
- Vitest and Testing Library

## Local setup

Prerequisites: Node.js 20.19 or newer and npm. The repository includes an `.nvmrc` for Node.js 22.

```bash
git clone https://github.com/jonasermert/expensee.git
cd expensee
nvm use
npm ci
npm run dev
```

Open the local URL printed by Vite, normally `http://localhost:5173`.

The Firebase project must allow the hostname used to run the app. Authentication providers also need to be enabled in the Firebase console before their corresponding login buttons work.

## Quality checks

```bash
npm run test:run
npm run build
npm audit
```

GitHub Actions executes the test suite and production build for pushes to `master` and for pull requests.

## Production build

```bash
npm run build
npm run preview
```

The production files are written to `dist/`. When deploying, configure the host to serve `index.html` as the fallback for client-side routes. The existing `public/_redirects` file handles this on compatible hosts such as Netlify.
