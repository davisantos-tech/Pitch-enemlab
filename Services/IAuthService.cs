using enemlab.Data;

namespace enemlab.Services
{
    public interface IAuthService
    {
        Task<bool> RegisterAsync(User user);
        Task<User?> LoginAsync(string email, string password);
    }

}
