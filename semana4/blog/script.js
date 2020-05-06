let arrPosts = []

function enviarPost(){
    let postTitulo = document.getElementById('titulo')
    let postAutor = document.getElementById('autor')
    let postTexto = document.getElementById('texto')
    let postImagem = document.getElementById('imagem')
    
    let novoPost = {
        titulo: postTitulo.value,
        autor: postAutor.value,
        texto: postTexto.value,
        imagem: null,    
    }

    if(validarImagem(postImagem.value)){
        document.getElementById('posts').innerHTML +=  `<article>
                                                        <h1>${postTitulo.value}</h1>
                                                        <h2><i>autor: ${postAutor.value}</i></h2>
                                                        <img src="${postImagem.value}" alt="">
                                                        <p>${postTexto.value.replace(/\n/g,'<br>')}</p>
                                                        </article>`
        novoPost.imagem = postImagem.value
    }
    else{
        document.getElementById('posts').innerHTML +=  `<article>
                                                        <h1>${postTitulo.value}</h1>
                                                        <h2><i>autor: ${postAutor.value}</i></h2>
                                                        <p>${postTexto.value.replace(/\n/g,'<br>')}</p>
                                                        </article>`
    }

    // Apagango os campos
    postTitulo.value = ''
    postAutor.value = ''
    postTexto.value = ''
    postImagem.value = ''

    arrPosts.push(novoPost)
    console.log(arrPosts)    
}

function validarImagem(texto){
    let str = texto.slice(-4,texto.length)
    return str.match(/\.(jpeg|jpg|gif|png)$/) 
}