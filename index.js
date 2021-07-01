const catalogo = require("./catalogo");

function adicionarFilme(titulo, duracao, atores, anoDoLancamento, emCartaz) {
  const novoFilme = {
    codigo: catalogo.length + 1,
    titulo,
    duracao,
    atores,
    anoDoLancamento,
    emCartaz,
  };

  catalogo.push(novoFilme);
  console.log("Filme adicionado com sucesso!");
}

// adicionarFilme("Minha mãe é uma peça", 1, "Paulo Gustavo", 2020, false)

function buscarFilme(codigo) {
  const filmeProcurado = catalogo[codigo - 1];
  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }
  console.log(filmeProcurado);
}

// buscarFilme(2)

function alterarStatusEmCartaz(codigo, novoStatus) {
  const filmeProcurado = catalogo[codigo - 1];

  if (!filmeProcurado) {
    return console.log("Código não encontrado");
  }

  catalogo[codigo - 1].emCartaz = novoStatus;

  console.log("Filme alterado!");
}

// alterarStatusEmCartaz(3, true)

const listarFilmes = () => {
  for(contador = 0; contador < catalogo.length; contador++){
    let filme = catalogo[contador]
    console.log("-".repeat(12))
    console.log("Nome do filme: " + filme.titulo)
    console.log("Ano do filme: " + filme.anoDoLancamento)
    console.log("Está em cartaz: " + filme.emCartaz)
  }
};

// listarFilmes();

// const listarFilmesEmCartaz = () => {
//   for(contador = 0; contador < catalogo.length; contador++){
//     let filme = catalogo[contador]
//     filme.emCartaz == true ? 
//       console.log("Nome do filme: " + filme.titulo + "\n" + 
//       "Ano do filme: " + filme.anoDeLancamento + "\n" + 
//       "Está em cartaz: " + filme.emCartaz) 
//     : ""
//   }
// }
// listarFilmesEmCartaz()

let listarFilmesEmCartaz = () => {
  let filmes = [];
  for(let i = 0; i < catalogo.length; i++){
    (catalogo[i].emCartaz == true ? filmes.push(catalogo[i]) : "");
  }
  console.table(filmes, ["titulo", "duracao", "atores"]);
}
listarFilmesEmCartaz()

