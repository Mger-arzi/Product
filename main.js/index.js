const burger = document.querySelector('.burger')
burger.addEventListener('click',()=>{
    burger.classList.toggle('active')
    
    const nav = document.querySelector('.nav')
    nav.classList.toggle('active')

    const body = document.querySelector('body')
    body.classList.toggle('hidden')
})
