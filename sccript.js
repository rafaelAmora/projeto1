function toogleMode() {
  const html = document.documentElement

  html.classList.toggle("light")

  // if(html.classList.contains('light')){
  //  html.classList.remove('light')
  // }
  //else{
  //   html.classList.add('light')
  // }

  //pegar a tag img//
  const img = document.querySelector("#profile img")

  //substituir a imagem//
  if (html.classList.contains("light")) {
    //se tiver light mode, adicionar o avatar light//
    img.setAttribute("src", "./assets/avatar-light.png")
    //se tiver dark mode, adicionar o avatar dark//
  } else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
//Qual a diferença de usar const e let ao declarar uma variável?
//Ao usar let o valor da variável pode ser alterado durante a execução da aplicação, enquanto o const o valor permanecerá o mesmo.
//
//O que são funções no JavaScript?
//As funções no JavaScript são um bloco de código que pode ser chamado em outras partes do programa e reaproveitar código.
//
//O que são objetos no JavaScript?
//Os objetos no JavaScript são estruturas de dados que podem armazenar propriedades e métodos.
