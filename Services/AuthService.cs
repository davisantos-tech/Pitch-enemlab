    using enemlab.Data;
    using Microsoft.AspNetCore.Identity;
    using Microsoft.EntityFrameworkCore;
namespace enemlab.Services
{

    public class AuthService : IAuthService
    {
        private readonly AppDbContext _context;

        public AuthService(AppDbContext context)
        {
            _context = context;
        }

        public async Task<bool> RegisterAsync(User user)
        {
            if (await _context.Users.AnyAsync(u => u.Email == user.Email))
                return false;

            var hasher = new PasswordHasher<User>();
            user.Password = hasher.HashPassword(user, user.Password);

            _context.Users.Add(user);
            await _context.SaveChangesAsync();
            return true;
        }

        public async Task<User?> LoginAsync(string email, string password)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == email);
            if (user == null) return null;

            var hasher = new PasswordHasher<User>();
            var result = hasher.VerifyHashedPassword(user, user.Password, password);

            return result == PasswordVerificationResult.Success ? user : null;
        }
    }

}
