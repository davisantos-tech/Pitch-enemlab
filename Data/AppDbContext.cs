using enemlab.Models;
using Microsoft.EntityFrameworkCore;

namespace enemlab.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options)
        {
        }

        public DbSet<UsuariosModel> Usuarios { get; set; }
        public DbSet<QuestoesModel> Questoes { get; set; }
        public DbSet<PerfilModel> Perfis { get; set; }
    }
}
