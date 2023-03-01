<template>
<div class="dialog" v-show="show" @click="hideDialog">
    <div class="form" @click.stop>
           <div class="name">Введите ваше имя: <input id="input_name" placeholder="..." v-model="name"/></div> 
           <div class="rating">Оценка товара:
           <select id="input_rating" v-model="rating">
               <option value="5">5</option>
               <option value="4">4</option>
               <option value="3">3</option>
               <option value="2">2</option>
               <option value="1">1</option>
           </select>
           </div>
           <textarea cols="37" rows="5" placeholder="Оставьте комментарий" v-model="text"></textarea>
       <button id="add_review" @click="addReview">Оставить отзыв</button>
       </div>
</div>
</template>

<script>
export default {
      props: {
        selected: {
            type: Number,
            required: true
        },
        show: {
            type: Boolean,
            default: false
        }
    },
    data(){
        return{
            name: '',
            rating: 5,
            text: ''
        }
    },
    methods: {
        addReview(){
            let review = {
                name: this.name,
                rating: +this.rating,
                text: this.text,
                selected: this.selected
            }
            this.$emit('add-review', review)
            this.name = ''
            this.rating = 5
            this.text = ''
        },
        hideDialog(){
            this.$emit('update:show', false)
        }
    }
}
</script>

<style scoped>
.dialog{
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(249, 246, 248, 0.887);
  position: fixed;
}
.form{
    border: 1px solid rgba(210, 27, 125, 0.687);
    border-radius: 10px;
    width:30%;
    margin: 100px auto;
    background-image: linear-gradient(#f0c5c1dc,#f6e0bad3);
    padding: 20px;
    display: flex;
    flex-direction: column;
    padding: 50px;
    box-sizing: border-box;
    align-items: flex-start;
    color: rgb(127, 18, 52);
    font-size: 16px;
    font-family: 'Times New Roman', Times, serif;
}  

#input_name{
  margin-left: 11px;
  width: 170px;
  height: 20px;
  border: 2px solid rgba(210, 27, 125, 0.687);
  border-radius: 10px;
}

.rating{
    margin-top: 15px;
    width: 320px;
}

#input_rating{
  margin-left: 7px;
  width: 50px;
  height: 20px;
  text-align: center;
  border: 2px solid rgba(210, 27, 125, 0.687);
  border-radius: 7px;
}

textarea{
    margin-top: 25px;
    border: 2px solid rgba(210, 27, 125, 0.687);
    border-radius: 10px;
}

#add_review{
    width: 150px;
    height: 30px;
    border: 2px solid rgba(210, 27, 125, 0.687);
    border-radius: 10px;
    background-color: white;
    color: rgb(127, 18, 52);
    margin-top: 20px;
    margin-left: 83px;
}
</style>