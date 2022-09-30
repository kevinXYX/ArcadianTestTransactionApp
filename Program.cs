using ArcadianTestTransactionApp.Data;
using ArcadianTestTransactionApp.Models;
using ArcadianTestTransactionApp.Service;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllersWithViews();
builder.Services.AddDbContext<InMemoryContext>();
builder.Services.AddScoped<ITransactionRepository, TransactionRepository>();
var app = builder.Build();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseCors(builder =>
{
    builder
    .WithOrigins("*")
    .AllowAnyMethod()
    .AllowAnyHeader();
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

SeedData(app);

app.Run();

static void SeedData(WebApplication app)
{
    var scope = app.Services.CreateScope();
    var db = scope.ServiceProvider.GetService<InMemoryContext>();

    db.Transactions.Add(new Transaction
    {
        TransactionId = 1,
        TransactionName = "Test Transaction 1",
        TransactionCost = 100,
        TransactionDate = DateTime.Now,
    });

    db.Transactions.Add(new Transaction
    {
        TransactionId = 2,
        TransactionName = "Test Transaction 2",
        TransactionCost = 200,
        TransactionDate = DateTime.Now,
    });

    db.Transactions.Add(new Transaction
    {
        TransactionId = 3,
        TransactionName = "Test Transaction 3",
        TransactionCost = 300,
        TransactionDate = DateTime.Now,
    });

    db.Transactions.Add(new Transaction
    {
        TransactionId = 4,
        TransactionName = "Test Transaction 4",
        TransactionCost = 300,
        TransactionDate = DateTime.Now,
    });

    db.SaveChanges();
}