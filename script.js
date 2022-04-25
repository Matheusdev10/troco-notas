// 1º passo: capturar os valores digitados (x)
// 2º passo: descobrir a quantidade do troco (x)
// 3º passo: descobrir a quantidade de cada cedula
// 4º passo: colocar a quantidade de cedulas no textArea

const btnSave = document.getElementById('firstButton')
// console.log(btnSave)

btnSave.addEventListener('click', capturarValoresDosInput)

function capturarValoresDosInput() {
  var inputBuy = document.getElementById('input-buy')
  var buy = inputBuy.value
  const inputPay = document.getElementById('input-pay')
  var pay = inputPay.value
  calcularOResultadoDoTroco(buy, pay)
}

function calcularOResultadoDoTroco(buy, pay) {
  const buyNumber = Number(buy)
  const payNumber = Number(pay)
  const troco = buyNumber - payNumber
  if (troco < 0) {
    return alert('valor insuficiente')
  }
  insereValorNoTextArea(troco)
}

function insereValorNoTextArea(troco) {
  const textArea = document.getElementById('result')
  textArea.innerText = troco
  const notas = [100, 50, 20, 10, 5, 2]
  // o comprimento do array é 6 pois tem 6 elementos
  //  for é uma estrutura de repetição onde eu crio uma variavel i podendo começar no 0, e depois faço uma condição para ela baseada no meu array. Portanto, se o i for menor que o tamanho do array, é pra ele adicionar i++.
  var resto = troco
  var qtdCedula = 0
  for (var i = 0; i < notas.length; i++) {
    const nota = notas[i]

    while (resto >= nota) {
      resto = resto - nota
      qtdCedula++
      console.log(qtdCedula)
      console.log(nota)
      if (resto < nota) {
        qtdCedula = 0
      }
    }
  }
}

//quando o resto for menor do que a nota subtraia ele pela nota seguinte

//
//

// 1º passo: girar todas as posiçoes no array (x)
// 2º passo: se o troco for maior ou igual a posição do array diminui ele pela posição do array.
// 2.1 passo: criar uma variável para identificar as cedulas de troco
// 3º passo: guardar o resultado da subtração para usar na próxima execução. ( variavel )
