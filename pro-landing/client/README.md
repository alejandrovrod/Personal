# Pro Landing - Frontend

Modern, minimalist landing page built with React 19 and Tailwind CSS.

## Quick Start

```bash
npm install
npm run dev
```

Open `http://localhost:5173` in your browser.

## Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production (outputs to `dist/`)
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## Customization

### Contact Information

Edit `src/App.tsx` and update:
- WhatsApp: `521234567890`
- Email: `tuemail@dominio.com`
- LinkedIn: `linkedin.com/in/tuperfil`

### Content

All sections are in `src/App.tsx`:
- Hero text
- Services grid
- Sectors
- Tech stack
- Contact CTA

### Styling

- Theme/colors: `tailwind.config.js`
- Global styles: `src/index.css`

## Environment Variables

Copy `env.example` to `.env.local` and update:

```
VITE_API_URL=http://localhost:5000
```

## Deployment

### Vercel (Recommended)

```bash
npm run build
vercel --prod
```

Or connect your repo to Vercel dashboard for auto-deploy.

### Other Platforms

Build and deploy the `dist/` folder to:
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront
- Any static hosting

## Tech Stack

- React 19
- TypeScript
- Vite 7
- Tailwind CSS 4
- Inter font via @fontsource
