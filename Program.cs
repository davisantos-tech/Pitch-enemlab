// Diretivas using ficam no topo do arquivo
using enemlab;
using enemlab.Services; // <<-- ADICIONE O 'USING' AQUI
using Microsoft.AspNetCore.Components.Web;
using Microsoft.AspNetCore.Components.WebAssembly.Hosting;


var builder = WebAssemblyHostBuilder.CreateDefault(args);
builder.RootComponents.Add<App>("#app");
builder.RootComponents.Add<HeadOutlet>("head::after");

// O lugar correto para registrar serviços é aqui
builder.Services.AddScoped(sp => new HttpClient { BaseAddress = new Uri(builder.HostEnvironment.BaseAddress) });

builder.Services.AddSingleton<ProvaStateService>(); // <<-- ADICIONE O SERVIÇO AQUI

// Esta linha deve ser uma das últimas, pois ela "constrói" e inicia o app
await builder.Build().RunAsync();