function calcular() {
  var homens = parseInt(document.getElementById('homens').value) || 0;
  var mulheres = parseInt(document.getElementById('mulheres').value) || 0;
  var criancas = parseInt(document.getElementById('crianças').value) || 0;

  var carneBovina = homens * 500 + mulheres * 300 + criancas * 200;
  var frango = homens * 200 + mulheres * 200 + criancas * 100;
  var linguica = homens * 200 + mulheres * 200 + criancas * 200;
  var refrigerante = homens * 300 + mulheres * 400 + criancas * 200;
  var cerveja = homens * 800 + mulheres * 500;

  var resultado = `
      <h2>Quantidade necessária:</h2>
      <p>Carne bovina: ${carneBovina / 1000} kg</p>
      <p>Frango: ${frango / 1000} kg</p>
      <p>Linguiça: ${linguica / 1000} kg</p>
      <p>Refrigerante: ${refrigerante / 1000} litros</p>
      <p>Cerveja: ${cerveja / 1000} litros</p>
  `;

  document.getElementById('resultado').innerHTML = resultado;
}