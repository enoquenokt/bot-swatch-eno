const senhaCorreta = "eno2025";
const loginDiv = document.getElementById("login");
const conteudo = document.getElementById("conteudo");
const erro = document.getElementById("erro");
const sinalDiv = document.getElementById("sinal");
const alerta = document.getElementById("alerta");

function verificarSenha() {
  const senha = document.getElementById("senha").value;
  if (senha === senhaCorreta) {
    loginDiv.style.display = "none";
    conteudo.style.display = "block";
    gerarSinal();
    setInterval(gerarSinal, 120000); // novo sinal a cada 2 minutos
  } else {
    erro.textContent = "Senha incorreta!";
  }
}

function gerarSinal() {
  const agora = new Date();
  const hora = agora.toLocaleTimeString("pt-PT", { hour12: false });
  const cores = ["🟦 Azul", "🟪 Roxo", "🌸 Rosa"];
  const aleatorio = Math.floor(Math.random() * 3);
  let queda = "", protecao = "";
  if (aleatorio === 0) {
    queda = "Até 1.99x";
    protecao = "1 tentativa";
  } else if (aleatorio === 1) {
    queda = "Até 8.70x";
    protecao = "2 tentativas";
  } else {
    queda = "Acima de 10.00x";
    protecao = "3 tentativas";
  }
  const sinal = `
    🕒 Próximo Sinal: ${hora}<br>
    🎯 Cor Prevista: ${cores[aleatorio]}<br>
    ✈️ Queda Prevista: ${queda}<br>
    🛡️ Proteção: ${protecao}<br>
    ✅ Confiança: 98%
  `;
  sinalDiv.innerHTML = sinal;
  alerta.play();
}
