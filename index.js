//Função para o gerar o recibo
function gerarRecibo() {
  document.getElementById("recibo_emitente").innerHTML =
    document.getElementById("emitente").value;
  document.getElementById("recibo_nome").innerHTML =
    document.getElementById("nome").value;
  document.getElementById("recibo_valor").innerHTML = parseFloat(
    document.getElementById("valor").value
  ).toLocaleString("pt-br", { minimumFractionDigits: 2 });
  document.getElementById("recibo_data").innerHTML = dataAtual();
  window.print();
}

//Função para gerar a data
function dataAtual() {
  let data = new Date();
  return data.toLocaleDateString("pt-BR");
}
