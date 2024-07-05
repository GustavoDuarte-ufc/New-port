document.addEventListener('DOMContentLoaded', () => {
    let images = document.getElementsByClassName("list-img");
    let lista = document.getElementsByClassName("lis-prog");
    let texto = document.getElementById("texto-mod");
    let texts = [
        "C é uma linguagem de programação compilada de propósito geral, estruturada, imperativa, procedural, padronizada pela Organização Internacional para Padronização (ISO), criada em 1972 por Dennis Ritchie na empresa AT&T Bell Labs para desenvolvimento do sistema operacional Unix (originalmente escrito em Assembly). //Wikipedia",
        "O Python é uma linguagem de programação amplamente usada em aplicações da Web, desenvolvimento de software, ciência de dados e machine learning (ML). Os desenvolvedores usam o Python porque é eficiente e fácil de aprender e pode ser executada em muitas plataformas diferentes. //Amazon Web Service",
        "JavaScript é uma linguagem de programação que permite a você implementar itens complexos em páginas web — toda vez que uma página da web faz mais do que simplesmente mostrar a você informação estática — mostrando conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou gráficos 2D/3D animados, etc. //MDN Web Docs",
        "O CSS (Cascading Style Sheets) é um padrão que define como os dados são apresentados no navegador. Enquanto o HTML fornece informação sobre a estrutura de um documento, o CSS indica o aspecto que ele deve ter: a fonte, o fundo, o texto, as cores dos links, as margens e a disposição dos objetos na página. //Ebac",
        "Texto para a imagem 5HTML é uma linguagem de marcação de hipertexto utilizada na criação de documentos e páginas da web. Os marcadores, chamados de “tags”, servem para indicar a função de cada elemento na página, como textos, imagens e vídeos, além de suas conexões com outros elementos (links) e como eles serão interpretados pelo navegador. //Tecnoblog",
        "Os bancos de dados SQL, também conhecidos como bancos de dados relacionais, são sistemas que armazenam coleções de tabelas e organizam conjuntos estruturados de dados em um formato de colunas e linhas tabulares, semelhante ao de uma planilha. //Microsoft Azure"
    ];

    lista[0].style.borderBottom = '3px solid white';
    lista[0].style.paddingBottom = '10px';
    for (let i = 0; i < images.length; i++) {
        images[i].addEventListener('click', () => {
            for (let j = 0; j < lista.length; j++) {
                lista[j].style.border = 'none';
                lista[j].style.paddingBottom = '0';
            }
            texto.textContent = texts[i];
            lista[i].style.borderBottom = '3px solid white'
            lista[i].style.paddingBottom = '10px';
        });
    }

});
