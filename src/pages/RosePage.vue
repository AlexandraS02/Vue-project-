<script>
import AppNav from '../components/AppNav.vue'
import AppView from '../components/AppView.vue'
import AppContent from '../components/AppContent.vue'
import AppSidebar from '../components/AppSidebar.vue'
import ReviewList from '../components/ReviewList.vue'
import ReviewForm from '../components/ReviewForm.vue'
import StarRating from '../components/UI/StarRating.vue'


export default{
 components: {
  AppNav, 
  AppView, 
  AppContent, 
  AppSidebar, 
  ReviewList, 
  ReviewForm, 
  StarRating,
}, 
  data(){
    return{
      roses: [
        {id: 0,
         image: '/images/coral.jpg',
         name: 'Луч заката',
         color: 'Коралловый',
         colorCode: 'radial-gradient(circle, rgba(251,147,64,1) 24%, rgba(251,163,187,1) 47%)',
         desc: 'Идеальный вариант для притененного сада! Такая роза цветет дважды в сезон. Первый раз цветы застилают практически весь куст так, что листьев совсем не видно. Цветы очень пышные, состоят из 45 лепестков. Куст остается очень аккуратным даже вырастая до трех метров в высоту. ',
         cost: '999 руб',
         reviews: [ 
           {
           name: 'Надежда Ивановна',
           rating: 5,
           text: 'Замечательный сорт, розы быстро приживаются и цветут все лето! Благодарю за аккуратную доставку. '
           }, 
           {
           name: 'Анжелика0893',
           rating: 4,
           text: 'Из 7 саженцев успешно прижились 5, за это снимаю одну звезду, в остальном все отлично.'
           }, 
         ]
        }, 
        {id: 1,
         image: '/images/orange.jpg',
         name: 'Летняя фантазия',
         color: 'Оранжевый',
         colorCode: 'radial-gradient(circle, rgba(251,232,64,1) 43%, rgba(246,33,3,1) 66%)',
         desc: 'Морозостойкий сорт розы с яркими двухцветными цветками! Благодаря работе селекционеров эта роза не боится морозов и устойчива ко многим заболеваниям. Куст большой и его дополняет множество стеблей. Цветы небольшие, однако они собираются в огромные соцветия, которые состоят из 35-45 розовых цветков.' ,
         cost: '1299 руб',
         reviews: []
        }, 
        {id: 2,
         image: '/images/dva.jpeg',
         name: 'Малиновое мороженое',
         color: 'Бело-малиновый',
         colorCode: 'radial-gradient(circle, rgba(255,240,244,1) 41%, rgba(222,65,167,1) 72%)',
         desc: 'Плетущаяся роза без шипов. Цветут очень пышно и долго. Начинается цветение в конце мая и продолжается до начала июля. Цвета их очень разнообразны: желтые, белые, голубые, нежно-фиолетовые и другие.',
         cost: '1499 руб',
         reviews: []
        }, 
        {id: 3,
         image: '/images/pink.jpeg',
         name: 'Розовая феерия',
         color: 'Розовый',
         colorCode: 'radial-gradient(circle, rgba(246,41,140,1) 41%, rgba(251,49,153,1) 72%)',
         desc: 'Классический сорт с яркой окраской! Кусты роз очень аккуратные, растут прямо. Цветки бывают разнообразной формы и размера. В диаметре они могут быть до 13 сантиметров. Лепестки также разнообразны.',
         cost: '999 руб',
         reviews: []
        }, 
        {id: 4,
         image: '/images/red.jpg',
         name: 'Кармен',
         color: 'Красный',
         colorCode: 'radial-gradient(circle, rgba(242,31,58,1) 41%, rgba(245,6,77,1) 72%)',
         desc: 'Классический сорт с яркой окраской! Кусты растения могут вырастать до 1,9 метров в высоту. Побеги этой розы полностью покрыты маленькими листиками, а также махровыми цветами, из которых и состоят соцветия.',
         cost: '999 руб',
         reviews: []
        }
      ],
      selectedRose: 0,
      cart: 0,
      showDialog: false,
      howToSort: ''
    }
  },
  methods:{
    changeSelect(id){
         this.selectedRose = id
    },
    addToCart(){
      this.cart++
    },
    removeFromCart(){
      this.cart--
    },
    addReview(review){
      this.roses[review.selected].reviews.push(review)
      this.showDialog = false
    },
    toShowDialog(){
      this.showDialog = true
    },
    changeSort(sort){
      this.howToSort = sort
    }
  },
  watch: {
    howToSort(newValue){
      if(newValue === 'from-worst'){
        this.roses[this.selectedRose].reviews.sort((a, b) => a.rating - b.rating)
      }
      if(newValue === 'from-best'){
        this.roses[this.selectedRose].reviews.sort((a, b) => a.rating - b.rating).reverse()
      }
    }
  }
}
</script>

<style scoped>
.app{
color: #fc8434
}

</style>

<template>
  <div>
  <app-nav :cart="cart" />
  <div class="product">

  <app-sidebar 
  :roses="roses" 
  :selected="selectedRose" 
  @change-select="changeSelect"
  />

  <app-view 
  :roses="roses" 
  :selected="selectedRose" 
  />

  <app-content 
  :roses="roses" 
  :selected="selectedRose" 
  :cart="cart" 
  @add-to-cart="addToCart" 
  @remove-from-cart="removeFromCart" 
  @option-selected="changeSelect"
  />
  </div>

  <review-list 
  :roses="roses" 
  :selected="selectedRose" 
  @show-dialog="toShowDialog"
  @change-sort="changeSort"
  />

  <review-form 
  :selected="selectedRose" 
  @add-review="addReview" 
  v-model="showDialog"
  />

  </div>
</template>






