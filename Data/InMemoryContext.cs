using ArcadianTestTransactionApp.Models;
using Microsoft.EntityFrameworkCore;

namespace ArcadianTestTransactionApp.Data
{
    public class InMemoryContext : DbContext
    {
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseInMemoryDatabase(databaseName: "Transactions");
        }

        public DbSet<Transaction> Transactions { get; set; }
    }
}
