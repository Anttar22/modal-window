const fruits = [
    { id: 1, title: 'Яблоки', price: 20, img: 'img/apple.jpg' },
    { id: 2, title: 'Киви', price: 25, img: 'img/kiwi.jpg' },
    { id: 3, title: 'Виноград', price: 25, img: 'img/grapes.jpg' },
    { id: 4, title: 'Апельсин', price: 15, img: 'img/orange.jpg' },
    { id: 5, title: 'Гранат', price: 15, img: 'img/garnet.jpg' },
    { id: 6, title: 'Манго', price: 15, img: 'img/mango.jpg' },
]


function fruitsAdd() {
    const cardList = document.createElement('ul')
    cardList.classList.add('card__list')

    fruits.forEach(fruit => {
        const card = document.createElement('li')
        card.classList.add('card__item')

        card.insertAdjacentHTML('afterbegin', `
            <div class="card__img">
                <img src="${fruit.img}" alt="${fruit.title}">
            </div>
            <div class="card__title">${fruit.title}</div>
            <div class="card_btn-wrap">
                <button class="card__btn card__btn--price">Узнать цену</button>
                <button class="card__btn card__btn--delete">Удалить</button>
            </div>
        `)
        cardList.appendChild(card)
    })
    return cardList
}

document.querySelector('.card').appendChild(fruitsAdd())

const modal = $.modal({
    title: 'Окно кнопки',
    closable: true,
    content: `
    <h4>Modal window is working!</h4>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto cupiditate incidunt, a eaque
        ipsum molestias!</p>
    `,
    width: '600px'
})

