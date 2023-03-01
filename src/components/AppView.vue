<template>
   <img :src="image" class="image">
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
    computed: {
        image(){
            return this.roses[this.selected].image
        }
    }
}
</script>

<style scoped>
.image{
    width: 370px;
    height: 530px;
    flex-grow: 6;
    margin-left: 40px;
    border-radius: 10px;
}
</style>