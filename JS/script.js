  const hamburgerBtn = document.getElementById('hamburger-btn');
        const navMenu = document.getElementById('nav-menu');
        const icon = hamburgerBtn.querySelector('i');

        hamburgerBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            
            // Toggle between bars and close icon
            if (navMenu.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-xmark');
            } else {
                icon.classList.remove('fa-xmark');
                icon.classList.add('fa-bars');
            }
        });

        function closeMenu() {
            navMenu.classList.remove('active');
            icon.classList.remove('fa-xmark');
            icon.classList.add('fa-bars');
        }
          //ver Mais serviços
        function MaisProjectos(){
            return alert("Os novos projectos serão lançados em breve.")
        }

       

//Serviços

function alternarServico(elemento) {
  // Alterna a classe 'ativo' no elemento clicado
  const estaAtivo = elemento.classList.toggle('ativo');
  
  // Atualiza o texto do botão/ícone (+ / -)
  const icone = elemento.querySelector('.icon');
  if (icone) {
    icone.textContent = estaAtivo ? '-' : '+';
  }
}

//Baixar cv

// 1. Selecionamos o botão pelo ID
const btnDownload = document.getElementById('btn-download-cv');

// 2. Adicionamos um "ouvinte" para o evento de clique
btnDownload.addEventListener('click', function() {
    // 3. Criamos um elemento de link invisível de forma dinâmica
    const link = document.createElement('a');
    
    // Caminho para o teu currículo (ajusta o nome do ficheiro conforme necessário)
    link.href = 'CV/cv-cosme-braz.pdf'; 
    
    // O atributo 'download' força o navegador a descarregar em vez de abrir no browser
    link.download = 'CV/cv-cosme-braz.pdf'; 
    
    // Adicionamos o link ao documento, se clicamos nele e depois removemos
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});