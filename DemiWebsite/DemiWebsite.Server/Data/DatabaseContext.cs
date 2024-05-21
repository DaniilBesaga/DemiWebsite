using DemiWebsite.Server.Models;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;

namespace DemiWebsite.Server.Data
{
    public class DatabaseContext : DbContext
    {
        public DatabaseContext()
        {
        }
        public DatabaseContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        { }

        public DbSet<WorkItem> Works { get; set; }
        public DbSet<NewsItem> News { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<WorkItem>().HasData(
                new WorkItem()
                {

                }
            );

            modelBuilder.Entity<NewsItem>().HasData(
                new NewsItem()
                {

                }
            );
        }
    }
}
