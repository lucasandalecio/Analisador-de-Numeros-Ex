var valores = []

function adicionar() {
  var num = document.querySelector('input#txtnum')
  var sel = document.querySelector('select#sellist')
  var n = Number(num.value)
  if (num.value.length == 0) {
    alert('Adicione algum número')
  } else if (n < 1 || n > 100 || valores.indexOf(n) != -1) {
    alert('[ERRO] Número inválido ou já encontrado na lista!')
  } else {
    var item = document.createElement('option')
    item.text += `Valor ${n} adicionado.`
    sel.appendChild(item)
    valores.push(n)
  }
  num.value = ''
  num.focus()
  res.innerHTML = ''
}

function finalizar() {
  var soma = 0
  var media = 0
  var res = document.querySelector('div#res')
  valores.sort(function (a, b) {
    return a - b
  })
  if (valores.length == 0) {
    alert('Adicione valores antes de finalizar!')
  } else {
    res.innerHTML = `<p>Ao todo, temos ${valores.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${
      valores[valores.length - 1]
    }`
    res.innerHTML += `<p> O menor valor informado foi ${valores[0]} </p>`
    for (pos in valores) {
      soma += valores[pos]
    }
    res.innerHTML += `<p> A soma de todos os valores é ${soma} </p>`
    media = soma / valores.length
    res.innerHTML += ` <p> A média dos valores digitados é ${media} </p>`
  }
}
