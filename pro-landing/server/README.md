# Pro Landing API - .NET 10 Minimal API

Backend API for the Pro Landing portfolio site, providing endpoints for lead capture and health checks.

## Tech Stack

- **.NET 10** (C# 12)
- **Minimal APIs** pattern
- **OpenAPI/Swagger** for development
- **CORS** enabled for frontend integration

## Getting Started

### Prerequisites

- .NET 10 SDK installed
- Visual Studio 2025, VS Code, or Rider (optional)

### Run Locally

```bash
dotnet restore
dotnet run
```

The API will start at:
- HTTP: `http://localhost:5000`
- HTTPS: `https://localhost:5001`

### Development with Hot Reload

```bash
dotnet watch run
```

## Available Endpoints

### Health Check
```
GET /health
```
Returns API health status and timestamp.

### Create Lead (Placeholder)
```
POST /api/leads
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+521234567890",
  "message": "Interested in your services"
}
```

Returns `202 Accepted` with success message.

> **Note**: This endpoint currently logs leads but doesn't persist them. Integrate with a database (SQL Server, PostgreSQL, MongoDB) or external CRM as needed.

## Configuration

Edit `appsettings.json` to customize:
- Frontend URL for CORS
- Notification email
- Logging levels

## Build for Production

```bash
dotnet publish -c Release -o ./publish
```

Deploy the `publish` folder to:
- Azure App Service
- AWS Elastic Beanstalk
- Docker container
- Any VPS with .NET 10 runtime

## CORS Configuration

The API is configured to accept requests from:
- `http://localhost:5173` (Vite dev server)
- `*.vercel.app` subdomains
- Custom production domain (update in `Program.cs`)

## Next Steps

- [ ] Add database (EF Core, Dapper, etc.)
- [ ] Implement email notifications (SendGrid, AWS SES)
- [ ] Add authentication/API keys if needed
- [ ] Integrate with CRM (HubSpot, Salesforce, etc.)
- [ ] Add rate limiting for production

