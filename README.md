This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


## Deploy on Google Cloud Run

The easiest way to deploy your Next.js app to Google Cloud Run is to use the following command:

```
gcloud run deploy react-quotes --source=. --region=us-central1 \ 
--allow-unauthenticated \
--set-env-vars=REACT_APP_QUOTES_URL=$REACT_APP_QUOTES_URL
```
