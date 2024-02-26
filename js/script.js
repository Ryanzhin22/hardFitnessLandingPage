const btnTop = document.getElementsByClassName("btnTop")[0]
const moreInfo = document.getElementById("moreInfo")
const modal = document.getElementById("modalWindow")
const fecharModal = document.getElementById("fechar") 

const plansPricing = document.getElementById("plansPricing")
const modalValor = document.getElementById("modalValor")
const modalDuracao = document.getElementById("modalDuracao")
const modalTitle = document.getElementById("modalTitle")
const discount = document.getElementById("discount")

const navList = document.getElementById("navList")
const navMenu = document.getElementsByClassName("navMenu")[0]

const discountParagraph = [
    "Não perca tempo e assine já! Esse plano será cobrado de mês em mês, portanto nenhum desconto será oferecido.",
    "Não perca tempo e assine já! Esse plano será cobrado de 3 meses em 3 meses, portanto te oferecemos um desconto $5 por mês! Resultando num total de $15 ao todo.",
    "Não perca tempo e assine já! Esse plano será cobrado de 6 meses em 6 meses, portanto te oferecemos um desconto $10 por mês! Resultando num total de $60 ao todo.",
    "Não perca tempo e assine já! Esse plano será cobrado de 12 meses em 12 meses, portanto te oferecemos um desconto $15 por mês! Resultando num total de $180 ao todo."
]

window.addEventListener("scroll", ()=>{
    if(window.scrollY == 0) {
        btnTop.classList.remove("visible")
    } else{
        btnTop.classList.add("visible")
    }
})

navMenu.addEventListener("click", ()=>{
    navList.classList.toggle("active")
})

const menuLinks = document.querySelectorAll("#navList a[href^='#']")
menuLinks.forEach((link)=>{
    link.addEventListener("click", ()=>{
        navList.classList.remove('active')
    })
})

modal.addEventListener("click", (e)=>{
    if(e.target.id == "modalWindow" || e.target.id == "fechar"){
        modal.classList.remove("openModal")
    }
})

plansPricing.addEventListener("click", (e)=>{


    const plano = e.target.parentNode.parentNode.children[0].innerHTML
    const valor = e.target.parentNode.parentNode.children[1].innerHTML
    const duracao = e.target.parentNode.parentNode.children[4].children[0].innerHTML

    if(e.target.id == "moreInfo4"){

        modalTitle.innerText = plano
        modalValor.innerText = valor
        modalDuracao.innerText = duracao

        modal.classList.add("openModal")
        discount.innerText = discountParagraph[3]

    } else if (e.target.id == "moreInfo3"){

        modalTitle.innerText = plano
        modalValor.innerText = valor
        modalDuracao.innerText = duracao

        modal.classList.add("openModal")
        discount.innerText = discountParagraph[2]

    } else if (e.target.id == "moreInfo2"){

        modalTitle.innerText = plano
        modalValor.innerText = valor
        modalDuracao.innerText = duracao

        modal.classList.add("openModal")
        discount.innerText = discountParagraph[1]

    } else if (e.target.id == "moreInfo"){

        modalTitle.innerText = plano
        modalValor.innerText = valor
        modalDuracao.innerText = duracao

        modal.classList.add("openModal")
        discount.innerText = discountParagraph[0]

    }
})
