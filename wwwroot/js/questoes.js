const questions = [
    {
      text: 'Qual é a capital do Brasil?',
      options: ['São Paulo', 'Brasília', 'Rio de Janeiro', 'Salvador'],
      answer: 1,
      draft: null,
      validated: false,
      correctVisible: false // Novo campo para controlar a visibilidade da resposta
    },
    {
      text: 'Quanto é 2 + 2?',
      options: ['3', '4', '5', '6'],
      answer: 1,
      draft: null,
      validated: false,
      correctVisible: false // Novo campo para controlar a visibilidade da resposta
    }
  ];
  
  let current = 0;
  const qt = document.getElementById('question-text');
  const ol = document.getElementById('options-list');
  const sb = document.getElementById('submit-btn');
  const vb = document.getElementById('view-btn');
  const rb = document.getElementById('resolve-btn');
  
  // Função para carregar a questão
  function loadQuestion(i) {
    const q = questions[i];
    qt.innerHTML = q.text;
    ol.innerHTML = q.options.map((opt, idx) => {
      let selected = q.draft === idx ? 'selected' : '';
      let validatedClass = q.validated ? (idx === q.draft ? (q.draft === q.answer ? 'correct' : 'incorrect') : '') : '';
      return `<li class="${selected} ${validatedClass}" onclick="selectOption(${idx})">
                <input type="radio" name="option" value="${idx}" ${q.draft === idx ? 'checked' : ''} ${q.validated ? 'disabled' : ''}>
                <span>${String.fromCharCode(65+idx)}) ${opt}</span>
              </li>`;

              animateQuestionEntry();
              window.scrollTo({ top: 0, behavior: 'smooth' });

    }).join('');
  
    // Se a questão foi validada, mostrar os botões
    if (q.validated) {
      vb.style.display = 'block'; // Exibe o botão "Visualizar Opção Correta"
      rb.style.display = 'block'; // Exibe o botão "Como Resolver a Questão?"
      if (q.correctVisible) {
        showCorrect(); // Exibe a resposta correta, se necessário
      }
    } else {
      vb.style.display = 'none';
      rb.style.display = 'none';
    }
  
    // Verifica se a resposta correta está visível e ajusta o texto do botão
    if (q.correctVisible) {
      vb.innerHTML = 'Fechar Questão Correta'; // Se a resposta estiver visível, muda o texto
      vb.onclick = closeCorrect; // Função para fechar
    } else {
      vb.innerHTML = 'Visualizar Opção Correta'; // Se a resposta não estiver visível, muda o texto
      vb.onclick = showCorrect; // Função para mostrar
    }
  }

  function animateQuestionEntry() {
    const questionCard = document.querySelector('.question-card');
    if (!questionCard) return;
    questionCard.classList.remove('fade-in');
    void questionCard.offsetWidth; // força o reflow
    questionCard.classList.add('fade-in');
  }
  
  
  // Função para selecionar a opção
  function selectOption(index) {
    const q = questions[current];
    if (q.validated) return; // Não permite selecionar opções após a validação
    q.draft = index;
    const lis = document.querySelectorAll('.options-list li');
    lis.forEach((li, i) => {
      li.classList.toggle('selected', i === index);
    });
  }
  
  // Função para enviar a resposta
  sb.onclick = () => {
    const selected = questions[current].draft;
    if (selected === null) return alert('Selecione uma opção!');
    questions[current].validated = true;
    const lis = document.querySelectorAll('.options-list li');
    lis.forEach((li, idx) => {
      li.classList.remove('selected');
      if (idx === selected) {
        li.classList.add(selected === questions[current].answer ? 'correct' : 'incorrect');
      }
      li.style.pointerEvents = 'none'; // Impede qualquer interação após validação
    });
    vb.style.display = 'block'; // Exibe o botão "Visualizar Opção Correta"
    rb.style.display = 'block'; // Exibe o botão "Como Resolver a Questão?"
  };
  
  // Função para mostrar a resposta correta
  function showCorrect() {
    const lis = document.querySelectorAll('.options-list li');
    lis.forEach((li, idx) => {
      if (idx === questions[current].answer) {
        li.classList.add('correct');
      }
    });
    vb.innerHTML = 'Fechar Questão Correta'; // Muda o texto do botão
    vb.onclick = closeCorrect; // Altera a função para fechar a questão
    questions[current].correctVisible = true; // Marca que a resposta correta foi mostrada
  }
  
  // Função para fechar a resposta correta
  function closeCorrect() {
    const lis = document.querySelectorAll('.options-list li');
    lis.forEach((li) => {
      li.classList.remove('correct');
    });
    vb.innerHTML = 'Visualizar Opção Correta'; // Restaura o texto original
    vb.onclick = showCorrect; // Restaura a função de mostrar a resposta
    questions[current].correctVisible = false; // Marca que a resposta foi fechada
  }
  
  // Função para carregar a próxima questão
  function nextQuestion() {
    if (current < questions.length - 1) current++;
    loadQuestion(current);
  }
  
  // Função para carregar a questão anterior
  function prevQuestion() {
    if (current > 0) current--;
    loadQuestion(current);
  }
  
  // Função para alternar o menu lateral
  function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const content = sidebar.querySelector('.sidebar-content');
    const main = document.getElementById('main');
  
    if (sidebar.classList.contains('open')) {
      content.style.opacity = 0;
      setTimeout(() => {
        sidebar.classList.remove('open');
      }, 200);
    } else {
      sidebar.classList.add('open');
      requestAnimationFrame(() => {
        content.style.opacity = 1;
      });
    }
  
    main.classList.toggle('shifted');
  }


// Funções para abrir e fechar o modal
function openModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'flex';  // Exibe o modal
    setTimeout(() => {
      modal.classList.add('show'); // Adiciona a animação de exibição
    }, 10); // Adiciona um pequeno delay para garantir que o display seja "flex" primeiro
    fetchSolution(); // Chama a função que carrega a solução
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show'); // Remove a animação de exibição
    setTimeout(() => {
      modal.style.display = 'none';  // Fecha o modal após a animação
    }, 300); // Espera o tempo da animação para esconder
  }
  
  
  // Função para carregar a explicação
  function fetchSolution() {
    const solutionText = "Aqui estará a explicação detalhada sobre como resolver a questão."; // Exemplo de texto
    document.getElementById('solution-text').innerText = solutionText;
  }
  
  
  // Carregar a primeira questão na inicialização da página
  window.onload = () => {
    loadQuestion(current);
  };
  

  let segundos = 0;
const tempoEl = document.getElementById('tempo');

function formatarTempo(segundos) {
  const min = String(Math.floor(segundos / 60)).padStart(2, '0');
  const seg = String(segundos % 60).padStart(2, '0');
  return `${min}:${seg}`;
}

function iniciarCronometro() {
  setInterval(() => {
    segundos++;
    tempoEl.textContent = formatarTempo(segundos);
  }, 1000);
}

// Inicia quando carregar a prova
window.addEventListener('DOMContentLoaded', iniciarCronometro);
