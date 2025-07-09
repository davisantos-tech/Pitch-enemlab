const cards = document.querySelectorAll(".card");
cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const rotateY = (x - rect.width / 2) / 10;
        const rotateX = -(y - rect.height / 2) / 10;

        card.style.transform = `rotateY(${rotateY}deg) rotateX(${rotateX}deg) scale(1.07)`;

        const shadowX = (x - rect.width / 2) / 10;
        const shadowY = (y - rect.height / 2) / 10;
        card.style.boxShadow = `${-shadowX}px ${-shadowY}px 25px rgba(0, 0, 0, 0.15)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "rotateY(0deg) rotateX(0deg) scale(1)";
        card.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)";
    });
});


function abrirAviso() {
    document.getElementById("avisoModal").style.display = "block";
}

function fecharAviso() {
    document.getElementById("avisoModal").style.display = "none";
}

function mostrarProvaIsolada() {
    document.getElementById("pagina-inicial").style.display = "none";
    document.getElementById("prova-isolada").style.display = "block";
}

function mostrarAviso() {
    document.getElementById("modal-bloqueio").style.display = "block";
}

function fecharModal() {
    document.getElementById("modal-bloqueio").style.display = "none";
}
