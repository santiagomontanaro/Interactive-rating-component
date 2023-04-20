let ratingCard = document.querySelector('.component__rateCard')
let thanksCard = document.querySelector('.component__feedbackCard')
let btn = document.querySelector('.rateCard__submit')
let rate = document.querySelector('.rated__rate')
let div = document.querySelectorAll('.rating')
thanksCard.style.display = 'none'

div.forEach(i => i.addEventListener('click', () => {
    div.forEach(i => i.classList.remove('active'))
    i.classList.add('active')
    let num = i.firstElementChild.innerHTML

    rate.innerHTML = `You selected ${num} out of 5`

    if (i.classList.contains('active')) {
        btn.addEventListener('click', () => {
            thanksCard.style.display = ''
            ratingCard.style.display = 'none'
        })
    }
}))