    using System.Security.Claims;
    using Microsoft.AspNetCore.Components.Authorization;
namespace enemlab.Auth
{

    public class CustomAuthProvider : AuthenticationStateProvider
    {
        private ClaimsPrincipal _user = new ClaimsPrincipal(new ClaimsIdentity());

        public void MarkUserAsAuthenticated(string email)
        {
            var identity = new ClaimsIdentity(new[]
            {
            new Claim(ClaimTypes.Name, email)
        }, "apiauth");

            _user = new ClaimsPrincipal(identity);
            NotifyAuthenticationStateChanged(GetAuthenticationStateAsync());
        }

        public void MarkUserAsLoggedOut()
        {
            _user = new ClaimsPrincipal(new ClaimsIdentity());
            NotifyAuthenticationStateChanged(GetAuthenticationStateAsync());
        }

        public override Task<AuthenticationState> GetAuthenticationStateAsync()
            => Task.FromResult(new AuthenticationState(_user));
    }

}
