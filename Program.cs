// Diretivas using ficam no topo do arquivo
using enemlab;
//using enemlab.Data;
using enemlab.Services;
/*using enemlab.Auth;*/// <<-- ADICIONE O 'USING' AQUI
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;
//using Microsoft.AspNetCore.Components.Authorization;
using Microsoft.EntityFrameworkCore;
using enemlab.Data;


var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

// L� do appsettings.json
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// O lugar correto para registrar servi�os � aqui
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

builder.Services.AddSingleton<ProvaStateService>(); // <<-- ADICIONE O SERVI�O AQUI
builder.Services.AddSingleton<PerfilService>();
builder.Services.AddSingleton<QuestoesService>();
builder.Services.AddSingleton<UsuariosService>();


// Configura��o do Entity Framework
builder.Services.AddDbContext<AppDbContext>(options => options.UseSqlServer(connectionString));

//builder.Services.AddScoped<IAuthService, AuthService>();
//builder.Services.AddScoped<AuthenticationStateProvider, CustomAuthProvider>();
builder.Services.AddAuthorizationCore();

// Esta linha deve ser uma das �ltimas, pois ela "constr�i" e inicia o app
await builder.Build().RunAsync();