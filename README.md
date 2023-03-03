# Vue-project
Flower shop page

<h2>Данный проект представляет собой пример создания макета сайта интернет-магазина при помощи Vue3. </h2>
<br>
<br>
<ol>

<li>
<h1>Общая структура сайта:</h1>
<p>Страница интернет-магазина состоит из отдельных блоков, включающих меню, информацию о продукте, возможность выбора его вариантов (и добавления их в корзину), а также оставленные отзывы.</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/main.png" width="860">  
</li>
<br>

<li>
<h1>Выбор варианта товара:</h1>
<p>Выбор осуществляется посредством клика по миниатюре картинки слева, при этом изображение выбранного варианта проясняется, а остальные блюрятся, динамически меняется информация о продукте. Кроме того, изменить выбор можно при помощи списка select.</p>
<p>Пример 1:</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/rose1.png" width="860"> 
<p>Пример 2:</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/rose2.png" width="860">  
<p>Выбор при помощи списка:</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/select-sort.png" width="250">  
</li>
<br>

<li>
<h1>Добавление товара в корзину:</h1>
<p>При клике на кнопку "Добавить в корзину" происходит увеличение числа товаров в корзине, а также изменение самой кнопки на выбор числа добавленных объектов. При удалении товаров из корзины кнопка возвращается к прежнему виду.</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/add-to-cart.png" width="860">   
</li>
<br>

<li>
<h1>Рейтинг товара:</h1>
<p>Рейтинг товара рассчитывается автоматически на основании средней оценки из оставленных отзывов.</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/dynamic-stars1.png" width="250"> 
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/dynamic-stars2.png" width="250">  
</li>
<br>

<li>
<h1>Отзывы:</h1>
<p>В зависимости от наличия отзывов отображаются разные блоки.</p>
<p>Без отзвывов:</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/no-review.png" width="400"> 
<p>С отзывами:</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/reviews.png" width="400">  
</li>
<br>

<li>
<h1>Добавление нового отзыва:</h1>
<p>При нажатии кнопки "Добавить отзыв" всплывает диалоговое окно.</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/add-review.png" width="400"> 
<p>Добавленный отзыв:</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/added-review.png" width="400">  
</li>
<br>

<li>
<h1>Сортировка отзывов:</h1>
<p>От наихудшего:</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/sort-from-worst.png" width="400"> 
<p>От наилучшего:</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/sort-from-best.png" width="400">  
</li>
<br>

<li>
<h1>Переход на другие страницы:</h1>
<p>Разделы меню "Доставка" и "Оплата" кликабельны и ведут на страницы с отдельными адресами (реализовано при помощи router), нажатие на кнопку "Назад" возвращает на главную страницу сайта.</p>
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/send.png" width="790"> 
<img src="https://github.com/AlexandraS02/Vue-project-/blob/main/images%20for%20README/pay.png" width="790">  
</li>
<br>
