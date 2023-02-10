function Calcular() {
  let inputA = document.querySelector('#btn-num1');
  let inputB = document.querySelector('#btn-num2');
  let valorSoma = document.querySelector('#resultadoSoma');
  let valorSubAB = document.querySelector('#SubAB');
  let valorSubBA = document.querySelector('#SubBA');
  let valorMulti = document.querySelector('#Multi');
  let valorDivAB = document.querySelector('#DivAB');
  let valorDivBA = document.querySelector('#DivBA');
  let valorPotAB = document.querySelector('#PotenciaAB');
  let valorPotBA = document.querySelector('#PotenciaBA');
  let valorRaizA = document.querySelector('#RaizA');
  let valorRaizB = document.querySelector('#RaizB');
  let valorFatoA = document.querySelector('#FatorialA');
  let valorFatoB = document.querySelector('#FatorialB');
  let valorPorcentA = document.querySelector('#PorcentA');
  let valorPorcentB = document.querySelector('#PorcentB');
  let valorMedia = document.querySelector('#Media');

  let valorDeA = parseInt(inputA.value);
  let valorDeB = parseInt(inputB.value);

  let soma = Soma(valorDeA, valorDeB);
  let subtracaoAB = SubtracaoAB(valorDeA, valorDeB);
  let subtracaoBA = SubtracaoBA(valorDeA, valorDeB);
  let multiplicacao = Multiplicacao(valorDeA, valorDeB);
  let divisaoAB = DivisaoAB(valorDeA, valorDeB);
  let divisaoBA = DivisaoBA(valorDeA, valorDeB);
  let potenciaAB = PotenciadeAB(valorDeA, valorDeB);
  let potenciaBA = PotenciadeBA(valorDeA, valorDeB);
  let raizA = RaizQuadradaA(valorDeA);
  let raizB = RaizQuadradaB(valorDeB);
  let fatorialA = FatorialA(valorDeA);
  let fatorialB = FatorialB(valorDeB);
  let porcentA = PorcentagemAB(valorDeA, valorDeB);
  let porcentB = PorcentagemBA(valorDeA, valorDeB);
  let media = Media(valorDeA, valorDeB);

  valorSoma.textContent = soma;
  valorSubAB.textContent = subtracaoAB;
  valorSubBA.textContent = subtracaoBA;
  valorMulti.textContent = multiplicacao;
  valorDivAB.textContent = divisaoAB.toFixed(2);
  valorDivBA.textContent = divisaoBA.toFixed(2);
  valorPotAB.textContent = potenciaAB;
  valorPotBA.textContent = potenciaBA;
  valorRaizA.textContent = raizA.toFixed(2);
  valorRaizB.textContent = raizB.toFixed(2);
  valorFatoA.textContent = fatorialA;
  valorFatoB.textContent = fatorialB;
  valorPorcentA.textContent = porcentA.toFixed() + '%';
  valorPorcentB.textContent = porcentB.toFixed() + '%';
  valorMedia.textContent = media.toFixed(1);
}

function Soma(a, b) {
  return a + b;
}

function SubtracaoAB(a, b) {
  return a - b;
}
function SubtracaoBA(a, b) {
  return b - a;
}

function Multiplicacao(a, b) {
  return a * b;
}

function DivisaoAB(a, b) {
  return a / b;
}

function DivisaoBA(a, b) {
  return b / a;
}

function PotenciadeAB(a, b) {
  return Math.pow(a, b);
}

function PotenciadeBA(a, b) {
  return Math.pow(b, a);
}

function RaizQuadradaA(a) {
  return Math.sqrt(a);
}
function RaizQuadradaB(b) {
  return Math.sqrt(b);
}

function FatorialA(a) {
  if (a < 0) {
    return -1;
  } else if (a == 0) {
    return 1;
  } else {
    return a * FatorialA(a - 1);
  }
}

function FatorialB(b) {
  if (b < 0) {
    return -1;
  } else if (b == 0) {
    return 1;
  } else {
    return b * FatorialA(b - 1);
  }
}

function PorcentagemAB(a, b) {
  return (a * 100) / b;
}

function PorcentagemBA(a, b) {
  return (b * 100) / a;
}

function Media(a, b) {
  return (a + b) / 2;
}
