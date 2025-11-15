var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
builder.Services.AddOpenApi();

// Configure CORS for Vercel/frontend
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowFrontend", policy =>
    {
        policy.WithOrigins(
            "http://localhost:5173",
            "https://*.vercel.app",
            "https://yourdomain.com"
        )
        .AllowAnyMethod()
        .AllowAnyHeader()
        .SetIsOriginAllowed(origin => true); // For development
    });
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseCors("AllowFrontend");
app.UseHttpsRedirection();

// Health check endpoint
app.MapGet("/health", () => Results.Ok(new { status = "healthy", timestamp = DateTime.UtcNow }))
    .WithName("HealthCheck");

// Leads endpoint (placeholder for future integration)
app.MapPost("/api/leads", (LeadRequest request) =>
{
    // TODO: Validate and store lead in database
    // TODO: Send notification (email/webhook/CRM integration)
    
    app.Logger.LogInformation("Lead received: {Name} - {Email} - {Phone}", 
        request.Name, request.Email, request.Phone);
    
    return Results.Accepted(null, new { message = "Lead received successfully" });
})
.WithName("CreateLead");

app.Run();

// Request models
record LeadRequest(string Name, string Email, string Phone, string? Message);
