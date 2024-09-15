function verificar() {
    var data = new Date() // Obtém a data atual
    var ano = data.getFullYear() // Obtém o ano atual
    var fano = document.getElementById('txtano') // Obtém o elemento de input do ano de nascimento
    var res = document.querySelector('div#res') // Obtém a div onde será exibido o resultado

    // Verifica se o campo do ano de nascimento está vazio ou se o ano inserido é maior que o ano atual
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') // Obtém a lista de elementos de radio buttons com o nome 'radsex'
        var idade = ano - Number(fano.value) // Calcula a idade com base no ano de nascimento fornecido
        var gênero = '' // Variável para armazenar o gênero da pessoa
        var img = document.createElement('img') // Cria um elemento de imagem <img>
        img.setAttribute('id', 'foto') // Define o atributo 'id' do elemento imagem como 'foto'
        img.style.margin = '15px' // Adiciona uma margem de 15px ao redor da imagem

        // Verifica qual opção de gênero foi selecionada e define a imagem correspondente à idade
        if (fsex[0].checked) { // Se o radio button 'Homem' estiver selecionado
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/menino.png') // Imagem para uma criança do sexo masculino
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/rapaz.png') // Imagem para um jovem do sexo masculino
            } else if (idade < 50) {
                // Adulto
                img.setAttribute('src', 'imagens/homem.png') // Imagem para um adulto do sexo masculino
            } else {
                // Idoso
                img.setAttribute('src', 'imagens/idoso.png') // Imagem para um idoso do sexo masculino
            }
        } else if (fsex[1].checked) { // Se o radio button 'Mulher' estiver selecionado
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                // Criança
                img.setAttribute('src', 'imagens/menina.png') // Imagem para uma criança do sexo feminino
            } else if (idade < 21) {
                // Jovem
                img.setAttribute('src', 'imagens/moca.png') // Imagem para uma jovem do sexo feminino
            } else if (idade < 50) {
                // Adulta
                img.setAttribute('src', 'imagens/mulher.png') // Imagem para uma adulta do sexo feminino
            } else {
                // Idosa
                img.setAttribute('src', 'imagens/idosa.png') // Imagem para uma idosa do sexo feminino
            }
        }

        // Alinha o texto da div 'res' ao centro
        res.style.textAlign = 'center'
        // Define o conteúdo da div 'res' com o gênero e a idade detectados
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        // Adiciona a imagem correspondente à idade e gênero à div 'res'
        res.appendChild(img)
    }
}
