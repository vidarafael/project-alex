const allLinksFromSidebar = document.querySelectorAll('.change-content')
const allContent = document.querySelectorAll('.main-content')

console.log(allContent[0])

allLinksFromSidebar[0].classList.add("ativo")
allContent[0].classList.add("ativo")

allLinksFromSidebar.forEach((link, index) => {
  link.addEventListener('click', (event) => {
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