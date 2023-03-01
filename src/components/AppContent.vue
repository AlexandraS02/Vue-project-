<template>
    <div class="product_info">
       <h2> {{ rose.name }} </h2>
       <span class="color_info"><p>Основной цвет: {{ rose.color.toLowerCase() }}</p><div class="rose_color" :style="{'background-image': rose.colorCode}"></div></span>
       <div class="stars"><star-rating :rating="averageRating"/></div>
       <p id="desc"> {{ rose.desc }} </p>
       <p class="price"> {{ rose.cost }} </p>
       <my-button v-if="cart === 0"  @click="$emit('add-to-cart')">Добавить в корзину</my-button>
       <div v-else class="full_cart">
           <p id="remove" @click="$emit('remove-from-cart')">--</p> 
           <p id="quantity">{{ cart }}</p> 
           <p @click="$emit('add-to-cart')" id="add">+</p></div>
           <br/>
           

           <select id="select" v-model="optionRose" @change="$emit('option-selected', optionRose)">
               <option disabled value="">Выбрать другой сорт</option>
               <option v-for="rose in roses" :key="rose.id" :value="rose.id"> {{rose.name}}</option>
           </select>
       </div>
</template>

<script>
export default {
    props: {
        roses: {
            type: Array,
            required: true
        }, 
        selected: {
            type: Number,
            required: true
        },
        cart: {
           type: Number,
            required: true 
        }
    },
    computed: {
        rose(){
            return this.roses[this.selected]
        },
        averageRating(){
            if(this.rose.reviews.length){
            let sum = 0
            for(let review of this.rose.reviews){
                sum += review.rating
            }
            let total = sum / this.rose.reviews.length
            return Math.round(total)
            }
        }
    },
    data(){
        return{
            optionRose: ''
        }
    }
}
</script>

<style scoped>
.product_info{
    padding:  25px 10px  25px 50px;
    flex-grow: 6;
}
.product_info h2{
    font-size: 43px;
    font-family: 'Times New Roman', Times, serif;
}
.color_info{
    margin-top: -50px;
    margin-bottom: 25px;
    font-weight: lighter;
    font-style: italic;
}
.stars{
    margin-top: -37px;
}
.rose_color{
    width: 20px;
    height: 20px;
    border: 1px solid rgb(31, 29, 26);
    border-radius: 30px;
    margin-left: 5px;
    margin-top: 14px;
}
#desc{
    margin-top: 35px;
    font-size: 17px;
    width: 500px;
    text-align: justify;
}
span{
    display: flex;
    flex-direction: row;
}

.price{
    font-size: 23px;
    margin-top: 40px;
    margin-left: 37px;
}


.full_cart{
    width: 150px;
    height: 37px;
    border: 1px solid rgba(210, 27, 125, 0.687);
    border-radius: 10px;
    background-color: white;
    color: rgba(210, 27, 125, 0.687);
    display: flex;
    flex-direction: row;
    padding: 0;
    align-items: center;
}
.full_cart p{
flex-grow: 2;
   text-align: center;
   font-size: 17px;
}

#select{
    margin-top: 50px;
}

</style>