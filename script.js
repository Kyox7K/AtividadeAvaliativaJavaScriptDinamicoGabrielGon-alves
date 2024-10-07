function adicionarAnime(event) {
    event.preventDefault();

    var nome = document.getElementById('nome').value;
    var genero = document.getElementById('genero').value;
    var ano = document.getElementById('ano').value;
    var nota = document.getElementById('nota').value;

    var tabela = document.getElementById('animeTableBody');

    var linha = '<tr>' +
        '<td>' + nome + '</td>' +
        '<td>' + genero + '</td>' +
        '<td>' + ano + '</td>' +
        '<td>' + nota + '</td>' +
        '</tr>';

    tabela.innerHTML += linha;

    document.getElementById('animeForm').reset();
}

var form = document.getElementById('animeForm');
form.addEventListener('submit', adicionarAnime);
