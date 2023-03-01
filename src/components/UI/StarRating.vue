<template>
    <div id="stars">
      <img v-if="rating >= 1" :src="starImg">
      <img v-if="rating >= 2" :src="starImg">
      <img v-if="rating >= 3" :src="starImg">
      <img v-if="rating >= 4" :src="starImg">
      <img v-if="rating === 5" :src="starImg">
    </div>
</template>

<script>
export default {
    name: 'star-rating',
    props: {
        rating: {
            type: Number
        }
    },
    data(){
        return{
            starImg: '/images/star.png'
        }
    }
}
</script>

<style scoped>
#stars{
    display: flex;
    flex-direction: row;
    margin-top: -20px;
}
#stars img{
    width: 25px;
}
</style>