import moveAngles from "./main.js";
import { addPoint,reset } from "./main.js";
import { xValue,yValue,zValue } from "./main.js";

const programas = 
[
  {
    name: "retangulo",
    cord: [[2.0,-2.0],[4.0,-2.0],[4.0,2.0],[2.0,2.0]]
  },
  {
    name: "Quadrado",
    cord: [[1.0,-2.0],[2.0,-2.0]]

  },
  {
    name: "Quadrado",
    cord: [[2.0,-2.0],[4.0,-2.0],[4.0,2.0],[2.0,2.0]]

  }
]

function criarLista() {
  const lista = document.querySelector('#programas');console.log(lista)

  // Limpar lista antes de adicionar os itens
  lista.innerHTML = '';

  // Adicionar itens à lista
  programas.forEach(item => {
    const prog = document.createElement('div');
    prog.innerHTML = 
    `
    <div class="card  my-2">
      <div class="card-body">
        <h5 class="card-title">${item.name}</h5>
        <p class="card-text">Programa para desenhar um coração</p>
        <a class="btn btn-primary btnProg">Go somewhere</a>
      </div>
    </div>
    `;
  
    const btn = prog.querySelector('.btnProg');
    const dataProg = item.cord; console.log(dataProg);
  
    // Adiciona um event listener para cada botão
    btn.addEventListener('click', function(event) {
      move(event, dataProg);
    });
  
    lista.appendChild(prog);
  });
  
}
criarLista()

var isMoving = false;

function move(event, data) {
  reset()
  let i = 0;
  loopWithDelay(i, data);
}

function loopWithDelay(i, data) {
  if (i < data.length) {
    //console.log(i);
    //console.log(data[i]);
    let cord = data[i];
    let xTarget = cord[0];
    let yTarget = cord[1];

    if (!isMoving) {
      isMoving = true;
      moveAngles(xTarget, yTarget, cord);
    }

    // Verificar se o braço alcançou a posição desejada antes de prosseguir
    if (xTarget == xValue.innerHTML && zValue.innerHTML == yTarget) {
      isMoving = false;
      // Aguardar um tempo antes de passar para a próxima iteração
      setTimeout(function () {
        console.log("posição alcançada")
        addPoint(xTarget,yTarget,i,data)
        loopWithDelay(i + 1, data);
      }, 500); // Ajuste o tempo de atraso aqui (em milissegundos)
    } else {
      // Se o braço ainda não alcançou a posição desejada, verificar novamente após um curto intervalo
      setTimeout(function () {
        loopWithDelay(i, data);
      }, 100); // Intervalo curto para verificar novamente rapidamente
    }
  }
}


