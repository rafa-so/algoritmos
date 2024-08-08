const listaLivros = require('./arrayOrdenado');

/* Parâmetros
 @array:Parâmetro responsável pelo array que vamos fazer a busca e fatiar.
 @de: Parâmetro responsável por dizer onde que a pesquisa vai começar
 @ate: Parâmetro responsável por dizer até onde a fatia deste array vai
 @valorBuscado: Valor que se deseja fazer a pesquisa
*/
function busca(array, de, ate, valorBuscado) {
    // Independente da interação o objetivo é sempre pegar o meio.
    // Por isso o processamento entre os parâmetros @de e @ate
    const meio = Math.floor((de + ate) / 2);
    const atual = array[meio];

    // Retorno o valor do meio do array, se o valor buscado
    // estiver exatamente neste índice
    if (valorBuscado === atual.preco) return meio;

    // Aqui é o caso se o valor buscado estiver
    // do lado "esquerdo" do array
    if (valorBuscado < atual.preco) return busca(array, de, meio - 1, valorBuscado);

    // Aqui é o caso se o valor buscado estiver
    // do lado "direito" do array
    if (valorBuscado > atual.preco) return busca(array, meio + 1, ate, valorBuscado);
}

const index = busca(listaLivros, 0, listaLivros.length - 1, 70)

console.log(`índice pesquisado: ${index}`);
console.log("item buscado: ", listaLivros[index]);