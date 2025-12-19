using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using Microsoft.Identity.Client;
using store_project_api.Implement.Interfaces;
using store_project_api.Implement.Services;
using store_project_api.Models;
using System.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", builder =>
    {
        builder.WithOrigins("http://localhost:5173", "https://localhost:5173" , "http://localhost:3000",
                "http://host.docker.internal:3000")  // URL of fe
               .AllowAnyHeader()                     // Allowed all header
               .AllowAnyMethod()                     // Allowed all HTTP metods
               .AllowCredentials();                 // Allow credentials for SignalR
    });
});

// Add services to the container.
builder.Services.AddDbContext<StoreDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));


builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IProduct, ProductServices>();
builder.Services.AddScoped<IOrder, OrderServices>();
builder.Services.AddSignalR();



var app = builder.Build();
app.UseCors("AllowAll");

// Configure the HTTP request pipeline.

    app.UseSwagger();
    app.UseSwaggerUI();


app.MapHub<OrderHub>("/orderHub");
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run("http://0.0.0.0:5000");
