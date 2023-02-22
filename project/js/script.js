/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let promo = document.querySelectorAll('.promo__adv img')

promo.forEach(function (item) {
    item.remove()
})

let promo_bg = document.querySelector('.promo__bg')
let promo__genre = promo_bg.querySelector('.promo__genre')

promo__genre.textContent = 'драма'

promo_bg.style.backgroundImage = 'url("img/bg.jpg")'

let movie = document.querySelector(".promo__interactive-list")

movieDB.movies.sort()

document.querySelector('button').onclick =  myClick

function myClick() {
    let a = document.querySelector('.adding__input')
    document.querySelector('div').innerHTML = a
}

document.querySelectorAll('.delete').onclick =  function (e) {
    let btn = e.target.closest('.delete')
    if(!btn ){
        return
    }
    btn.closest('li').remove()
}
