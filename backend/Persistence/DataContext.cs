using Domain.Model;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
  public class DataContext : DbContext
  {
    public DataContext(DbContextOptions options) : base(options)
    {
    }
    public DbSet<Note> Notes { get; set; }
  }
}