<template>
    <button class="btn">
      <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.btn{
    width: 150px;
    height: 37px;
    border: 1px solid rgba(210, 27, 125, 0.687);
    border-radius: 10px;
    background-color: white;
    color: rgba(210, 27, 125, 0.687);
}
</style>