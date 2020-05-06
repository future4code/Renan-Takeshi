const blogPost = {
    titulo: null,
    autor: null,
    texto: null
}

let arrPosts = []

function enviarPost(){
    let postTitulo = document.getElementById('titulo')
    let postAutor = document.getElementById('autor')
    let postTexto = document.getElementById('texto')
    let novoPost = {
        ...blogPost,
        titulo: postTitulo.value,
        autor: postAutor.value,
        texto: postTexto.value
    }
    document.getElementById('posts').innerHTML +=  `<article>
                                                        <h1>${postTitulo.value}</h1>
                                                        <h2><i>autor: ${postAutor.value}</i></h2>
                                                        <p>${postTexto.value.replace(/\n/g,'<br>')}</p>
                                                    </article>`
    postTitulo.value = ''
    postAutor.value = ''
    postTexto.value = ''
    arrPosts.push(novoPost)
    console.log(arrPosts)
}
