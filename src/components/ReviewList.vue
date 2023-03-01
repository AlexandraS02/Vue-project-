<template>
   <div class="reviews">
       <h2> {{selectedRoseReviews.length ? 'Отзывы:' : 'Отзывов пока нет'}}</h2>
       <div class="sort" v-if="selectedRoseReviews.length">
        <p>Сортировать отзывы:</p>
       <select id="sort_list" v-model="howToSort" @change="this.$emit('change-sort', howToSort)">
           <option value="from-best">от наилучшего</option>
           <option value="from-worst">от наихудшего</option>
       </select>
       </div>
       <transition-group name="review-list">
       <div class="review" v-for="(review, index) in selectedRoseReviews" :key="index">
           <h5>{{ review.name }}:</h5>
           <div class="stars"><star-rating :rating="review.rating"/> </div>
           <p>{{ review.text }}</p>
       </div>
       </transition-group>
       <my-button :style="{'margin-left': '280px'}" @click="$emit('show-dialog')">Оставить отзыв</my-button>
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
        }
    },
    data(){
        return{
           howToSort: 'Сортировать отзывы:'
        }
    },
    computed: {
        selectedRoseReviews(){
            return this.roses[this.selected].reviews
        }
    }
}
</script>

<style scoped>
.reviews{
    border: 1px solid rgba(210, 27, 125, 0.687);
    border-radius: 10px;
    width:50%;
    margin: 100px auto;
    background-image: linear-gradient(#e68e8666,#f1c9833f);
    padding: 20px;
}

.review-list-enter-active,
.review-list-leave-active{
    transition: all 1s ease;
}
.review-list-enter-from,
.review-list-leave-to{
    opacity: 0;
    transform: translateY(30px);
}

.review-list-move{
    transition: transform 0.8s ease;
}

.reviews h2{
    text-align: center;
    color: rgba(228, 155, 162, 0.718);
    font-size: 33px;
    text-shadow: 1px 1px rgb(127, 18, 52);
}
.sort{
    display: flex;
    flex-direction: column;
    width: 30%;
    margin-left: 474px;
}
.sort p{
    font-size: 16px;
    color: rgb(127, 18, 52);
    margin-bottom: 1px;
}
#sort_list{
    width: 165px;
    height: 23px;
    border: 1px solid rgba(210, 27, 125, 0.687);
    border-radius: 7px;
    background-color: rgba(254, 248, 247, 0.951);
    color: rgb(127, 18, 52);
}

.review{
    border: 1px solid rgba(210, 27, 125, 0.687);
    border-radius: 10px;
    background-color: rgba(254, 248, 247, 0.951);
    width:80%;
    margin: 15px auto;
}

.stars{
    margin-left: 20px;
}
.review h5{
    font-family: 'Times New Roman', Times, serif;
    font-size: 17px;
    margin-left: 25px;
    color: rgb(127, 18, 52);
}

.review p{
    font-family: 'Times New Roman', Times, serif;
    font-size: 17px;
    font-style: italic;
    margin-left: 23px;
    color: rgb(127, 18, 52);
    margin-top: 15px;
}

</style>