# Pro Landing - Developer Services Portfolio

Modern, minimalist landing page built with React 19 + Tailwind CSS and backed by .NET 10 Minimal APIs.

## Stack

### Frontend
- **React 19** with TypeScript
- **Vite** for blazing-fast dev and builds
- **Tailwind CSS** for styling
- **Inter/Geist** fonts

### Backend
- **.NET 10** Minimal APIs
- C# 12
- CORS-enabled for Vercel deployment

## Project Structure

```
pro-landing/
├── client/          # React frontend
└── server/          # .NET backend API
```

## Getting Started

### Frontend (Client)

```bash
cd client
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

### Backend (Server)

```bash
cd server
dotnet restore
dotnet run
```

API runs on `http://localhost:5000`

## Build & Deploy

### Frontend

```bash
cd client
npm run build
npm run preview
```

Deploy the `client/dist` folder to Vercel, Netlify, or any static host.

### Backend

```bash
cd server
dotnet publish -c Release
```

Deploy to Azure App Service, AWS, or any VPS with .NET 10 runtime.

## Environment Variables

### Frontend

Create `client/.env.local` (copy from `client/env.example`):

```
VITE_API_URL=http://localhost:5000
```

For production, update with your deployed API URL (e.g., `https://api.yourdomain.com`).

### Backend

Configuration is managed via `appsettings.json`. Update the following for production:
- `AppSettings.FrontendUrl` - Your deployed frontend URL
- `AppSettings.NotificationEmail` - Email for lead notifications

## Features

- Fully responsive design
- Zero unnecessary animations
- Clean, minimalist aesthetic inspired by guillaumegouessan.com
- WhatsApp/Calendly CTA integration
- Contact leads API endpoint (backend)

## Customization

### Update Contact Information

Edit `client/src/App.tsx` and replace:
- WhatsApp number: `521234567890` with your actual number
- Email: `tuemail@dominio.com`
- LinkedIn: `linkedin.com/in/tuperfil`

### Modify Content

All content is in `client/src/App.tsx`. Update:
- Hero title and subtitle
- Services list
- Sectors served
- Technology stack
- Call-to-action links

### Styling

- Colors and typography: `client/tailwind.config.js`
- Global styles: `client/src/index.css`

## Deployment

### Vercel (Frontend)

```bash
cd client
vercel --prod
```

Or connect your GitHub repository to Vercel dashboard for automatic deployments.

### Azure App Service (Backend)

```bash
cd server
az webapp up --name your-api-name --resource-group your-rg
```

### Docker (Optional)

Create `server/Dockerfile`:

```dockerfile
FROM mcr.microsoft.com/dotnet/aspnet:10.0
WORKDIR /app
COPY ./publish .
ENTRYPOINT ["dotnet", "ProLandingApi.dll"]
```

## Integration with Backend

To connect the frontend form with the backend `/api/leads` endpoint, add a form component with `fetch` or use a library like `axios`. Example:

```typescript
const handleSubmit = async (data: LeadData) => {
  const response = await fetch(`${import.meta.env.VITE_API_URL}/api/leads`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });
  
  if (response.ok) {
    // Show success message
  }
};
```

## License

Private - All Rights Reserved

