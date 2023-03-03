<template>
    <div class="header">
        <div class="search">
            <h1>{{ name }}</h1>
            <input type="text">
            <my-button type="submit">Найти</my-button>
            <p>Войти</p>
            <div class="image">
            <img :src="image" />( {{ cart }} )
            </div>
        </div>
        <div class="menu">
            <ul>
                <li>Каталог</li>
                <li>Новинки 2023</li>
                <li @click="$router.push('/send')">Доставка</li>
                <li @click="$router.push('/pay')">Оплата</li>
                <li>Все об уходе</li>
                <li>Контакты</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        cart:{
           type: Number,
           required: true
        }
    },
    data(){
        return{
            name: 'Vivids',
            image: '/images/cart.png'
        }
    }
}
</script>

<style scoped>
 .search{
     display: flex;
     flex-direction: row;
 }
  .search h1{
     flex-grow: 1;
     font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
     text-align: center;
     background-image: linear-gradient(90deg, #b3650c,#ff860d,#cc0081);
         -webkit-background-clip: text;
         -webkit-text-fill-color: transparent;
 
 }
   .search input{
     flex-grow: 9;
     height: 30px;
     margin-top: 23px;
 }
   .search button{
     flex-grow: 1;
     font-weight: lighter;
     margin-top: 23px;
     width: 30px;
    height: 35px;
    border: 1px solid rgba(210, 27, 125, 0.687);
    background-color: white;
    color: rgba(210, 27, 125, 0.687);
 }
   .search p{
     flex-grow: 1;
     text-align: center;
     font-family: 'Times New Roman', Times, serif;
     margin-top: 30px;
 }
 .search .image{
     flex-grow: 1;
     padding-top: 19px;
 }

 .image img{
     width: 35px;
 }

  .menu{
     width: 100%;
     background-color:#ff860d26;
     height: 60px;
     margin-top: -20px;
     box-shadow: inset 0 0 25px 5px rgba(225, 36, 74, 0.33) 
 }
  .menu ul{
     width: 80%;
     margin: auto;
 }

 .menu li{
     float: left;
     text-align: center;
     list-style-type: none;
     width: 140px;
     margin-right: 7px;
     padding-top: 17px;
     font-size: 20px;
     color: #cc0081;
     font-weight: bold;
     text-shadow: #ff860d 1px 1px;
 }

</style>