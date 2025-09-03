using enemlab.Data;
using enemlab.Models;
using Microsoft.EntityFrameworkCore;
using static enemlab.Pages.Login;

namespace enemlab.Services
{
    public class AuthService
    {
        private readonly AppDbContext _dbContext;
        
        public AuthService(AppDbContext dbContext)
        {
            _dbContext = dbContext;
        }
        
        public async Task<bool> LoginAsync(LoginModel model)
        {
            var user = await _dbContext.Usuarios.FirstOrDefaultAsync(u => u.email == model.Email);
            
            if (user == null)
            {
                return false; // se o usuário não for encontrado
            }

            return user.senha_hash == model.Password; // se a senha coincidir
        }

        public async Task<(bool Success, string Message)> RegisterAsync(RegisterModel model)
        {
            var existingUser = await _dbContext.Usuarios.FirstOrDefaultAsync(u => u.email == model.Email);
            if (existingUser != null)
            {
                return (false, "Esse email já está cadastrado.");
            }
            var newUser = new UsuariosModel
            {
                primeiro_nome = model.FirstName,
                ultimo_nome = model.LastName,
                email = model.Email,
                data_nascimento = model.DateOfBirth!.Value,
                senha_hash = model.Password,
                escolaridade = model.EducationLevel
            };
            _dbContext.Usuarios.Add(newUser);
            await _dbContext.SaveChangesAsync();
            return (true, "Usuário cadastrado com sucesso!");
        }

    }
}
