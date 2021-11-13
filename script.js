const allLinksFromSidebar = document.querySelectorAll('.change-content')
const allContent = document.querySelectorAll('.main-content')
const sidebarGeralActive = document.querySelector(".sibebar-theme-geral")
const sidebarGamesActive = document.querySelector(".sibebar-theme-jogos")

console.log(allContent[0])

allLinksFromSidebar[0].classList.add("ativo")
allContent[0].classList.add("ativo")
sidebarGeralActive.classList.add("ativo")

allLinksFromSidebar.forEach((link, index) => {
  link.addEventListener('click', (event) => {
    if(index <= 1) {
      sidebarGeralActive.classList.add("ativo")
      sidebarGamesActive.classList.remove("ativo")
    } else {
      sidebarGamesActive.classList.add("ativo")
      sidebarGeralActive.classList.remove("ativo")
    }
    allLinksFromSidebar.forEach((element) => {
      element.classList.remove("ativo")
    })
    event.target.classList.add("ativo")
    allContent.forEach((content, i) => {
      if(i === index) {
        content.classList.add("ativo")
      }else {
        content.classList.remove("ativo")
      }
    })
    // allContent[index].classList.add("ativo")
  })
})