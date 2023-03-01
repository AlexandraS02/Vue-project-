<template>
    <div class="side_bar"> 
    <img 
    v-for="rose in roses" 
    :key="rose.id" 
    :src="rose.image" 
    :class="{blur: selected !== rose.id}" 
    @click="$emit('change-select', rose.id)"
    />
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
}
</script>

<style scoped>
.side_bar{
    flex-grow: 1;
    display: flex;
    flex-direction: column;
}
.side_bar img{
    width: 90px;
    height: 100px;
    margin-top: 5px;
    border-radius: 10px;
}

.blur{
    filter: blur(3px);
    opacity: 0.37;
}
</style>