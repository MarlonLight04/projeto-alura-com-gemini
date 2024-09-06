function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    let section = document.getElementById("resultados-pesquisa");

    let campoPesquisa = document.getElementById("campo-pesquisa").value;

    campoPesquisa = campoPesquisa.toLowerCase();
    
    if (!campoPesquisa) {
        section.innerHTML = "<p>Pesquise um Card Game!</p>"
        return
    }

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre os dados da pesquisa e constrói o HTML para cada resultado
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLocaleLowerCase()

        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            
            resultados += `
            <div class="item-resultado">
              <h2>${dado.titulo}</h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Visite o site oficial.</a>
            </div>
          `;
        }
    }
  
    if (!resultados) {
        resultados = "<p>Nada foi encontrado :'(</p>"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
  }