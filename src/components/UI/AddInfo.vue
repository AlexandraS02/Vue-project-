<template>
    <div class="info">
        <div class="text">
            <slot></slot>
        </div>
        <br>
        <my-button @click="$router.push('/')">Назад</my-button>
    </div>
</template>

<script>
import MyButton from './MyButton.vue'
export default {
  components: { MyButton },
    name: 'add-info'
}
</script>

<style scoped>
.info{
    border: 1px solid rgba(210, 27, 125, 0.687);
    border-radius: 10px;
    width:70%;
    margin: 50px auto;
    background-image: linear-gradient(#e68e8666,#f1c9833f);
    padding: 30px 130px 60px 130px;
    box-sizing: border-box;
}

.text{
    border: 1px solid rgba(210, 27, 125, 0.687);
    border-radius: 10px;
    background-color: rgba(254, 248, 247, 0.951);
    padding: 33px;
    color: rgb(127, 18, 52);
    font-size: 18px;
    text-align: justify;
    text-indent: 7px;
    box-sizing: border-box;
}
</style>