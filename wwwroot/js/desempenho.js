document.addEventListener("DOMContentLoaded", () => {
    // Simulação de dados que devem vir do backend
    const dadosUsuario = {
      estrelas: 4,                       // número de estrelas: 1 a 5
      acertos: 120,                      // total de acertos
      erros: 30,                         // total de erros
      nivel: "OURO",                    // patente atual
      historico: [                       // histórico de notas por prova
        { prova: "Prova 1", nota: 15 },
        { prova: "Prova 2", nota: 30 },
        { prova: "Prova 3", nota: 45 },
        { prova: "Prova 4", nota: 30 }
      ]
    };

    // Preenchendo valores dinâmicos
    document.getElementById("estrelas").textContent = "★".repeat(dadosUsuario.estrelas) + "☆".repeat(5 - dadosUsuario.estrelas);
    document.getElementById("acertos").textContent = `✔ ${dadosUsuario.acertos}`;
    document.getElementById("erros").textContent = `✖ ${dadosUsuario.erros}`;
    document.getElementById("patente").textContent = dadosUsuario.nivel;

    // Gráfico de desempenho
    const ctx = document.getElementById('graficoProgresso').getContext('2d');
    new Chart(ctx, {
      type: 'line',
      data: {
        labels: dadosUsuario.historico.map(h => h.prova),
        datasets: [{
          label: 'Nota',
          data: dadosUsuario.historico.map(h => h.nota),
          borderColor: '#4f46e5',
          backgroundColor: 'rgba(79, 70, 229, 0.2)',
          fill: true,
          tension: 0.3,
          pointBackgroundColor: '#4338ca',
          pointBorderColor: '#312e81',
          pointRadius: 5,
          pointHoverRadius: 7,
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            display: true
          }
        },
        scales: {
          y: {
            min: 0,
            max: 50,
            ticks: {
              stepSize: 15
            },
            title: {
              display: true,
              text: 'Nota'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Provas'
            }
          }
        }
      }
    });

    // Lógica do botão de sugestão
    const btn = document.querySelector(".sugestao button");
    const textarea = document.querySelector(".sugestao textarea");
    btn.addEventListener("click", () => {
      const texto = textarea.value.trim();
      if (texto) {
        console.log("Sugestão enviada:", texto); // Aqui você pode usar fetch/AJAX para enviar ao backend
        alert("Obrigado pela sugestão!");
        textarea.value = "";
      } else {
        alert("Por favor, escreva uma sugestão antes de enviar.");
      }
    });
  });