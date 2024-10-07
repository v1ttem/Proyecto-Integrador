let tipoListon = [300, 420];
let acumuladorDeListones = [];
let acumuladorDeDesperdicio = [];
let cortes = [10, 50, 20, 50, 40, 30, 70, 30, 80, 90];

function numAleatorio() {
  let random = Math.floor(Math.random() * 2);
  return tipoListon[random];
}

function obtenerListon() {
  listonActual = numAleatorio();
  let cortesSinProcesar = [];

  for (let i = 0; i < cortes.length; i++) {
    if (listonActual >= cortes[i]) {
      listonActual -= cortes[i];
    } else {
      cortesSinProcesar.push(cortes[i]);
    }
  }

  let desperdicio = listonActual;
  acumuladorDeListones.push(listonActual);
  acumuladorDeDesperdicio.push(desperdicio);

  return {
    alcanzo: cortesSinProcesar.length === 0,
    cortesSinProcesar: cortesSinProcesar,
    desperdicio: desperdicio,
  };
}

let menorDesperdicio = Infinity; 

for (let i = 0; i < 10; i++) {
  let resultado = obtenerListon();
  console.log(resultado);

  if (resultado.desperdicio < menorDesperdicio) {
    menorDesperdicio = resultado.desperdicio; 
    console.log("Nuevo desperdicio menor encontrado: " + resultado.desperdicio);
  }
}

console.log("El menor desperdicio encontrado fue: " + menorDesperdicio);
