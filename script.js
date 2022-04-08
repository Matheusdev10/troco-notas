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
  insereValorNoTextArea(troco)
}

function insereValorNoTextArea(troco) {
  const textArea = document.getElementById('result')
  textArea.innerText = troco
  const notas = [2, 5, 10, 20, 50, 100]
}
