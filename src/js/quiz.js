const respostasCorretas = ['b', 'b', 'b', 'a', 'b', 'b', 'b', 'c', 'a', 'c'];

const startButton = document.getElementById('start-quiz');
const initialForm = document.getElementById('initial-form');
const quizForm = document.getElementById('quiz-form');
const quizSection = document.querySelector('.quiz-section');
const resultadoFinal = document.getElementById('quizResult');
const scoreSpan = document.getElementById('score');
const nameSpan = document.getElementById('userNameResult');
const emailSpan = document.getElementById('userEmailResult')

let nome = undefined;
let idade = undefined;
let email = undefined;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

startButton.addEventListener('click', function (event) {
  event.preventDefault(); 

  nome = document.getElementById('name').value.trim();
  idade = document.getElementById('age').value.trim();
  email = document.getElementById('email').value.trim();

  

  if (!nome || !idade || !email) {
    alert('Por favor, preencha todos os campos antes de iniciar o quiz.');
    return;
  }

  if(!emailRegex.test(email)){
    alert("Por favor, digite um email válido")
    return
  }

  initialForm.style.display = 'none';
  quizForm.style.display = 'block';
  quizSection.style.height = 'auto';

  quizSection.scrollIntoView({ behavior: 'smooth' });
});

quizForm.addEventListener('submit', function (event) {
  event.preventDefault();

  let acertos = 0;
  let totalRespondidas = 0;
  let totalPerguntas = respostasCorretas.length;

  for (let i = 0; i < totalPerguntas; i++) {
    const alternativaSelecionada = document.querySelector(`input[name="q${i + 1}"]:checked`);
    if (alternativaSelecionada) {
      totalRespondidas++;
      if (alternativaSelecionada.value === respostasCorretas[i]) {
        acertos++;
      }
    }
  }

  if (totalRespondidas < totalPerguntas) {
    alert(`Você precisa responder todas as ${totalPerguntas} perguntas antes de enviar o quiz.`);
    return;
  }

  scoreSpan.textContent = acertos;
  nameSpan.textContent = (nome || "usuário") + "!";
  emailSpan.textContent = email || "usario@gmail.com"
  resultadoFinal.classList.add('active');
  quizForm.style.display = "none"
  resultadoFinal.scrollIntoView({ behavior: 'smooth' });
});
