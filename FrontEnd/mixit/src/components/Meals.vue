<template>

<div class="tile-wrapper">
<MealItem></MealItem>
<MealItem></MealItem>
<MealItem></MealItem>
</div>
</template>

<script>
import MealItem from './MealItem.vue'

export default {
  name: "Meals",
  components:{
    MealItem
  }
}
</script>

<style lang="scss">

.tile-wraper{
  display: grid;
  grid-gap: 15px;
  grid-template-columns: repeat(auto-fit, 200px);
  
  font-family: "Gill Sans", sans-serif;
  background: #e2e1e0;
  .tile{
      background: #fff;
      color: #000000;
      border-radius: 2px;
      transition: box-shadow 0.8s;
      box-shadow: 0 3px 6px rgba(0,0,0,0.16), 
                  0 3px 6px rgba(0,0,0,0.23);

      &:hover{
          box-shadow: 0 7px 14px rgba(0,0,0,0.25), 
                      0 5px 5px rgba(0,0,0,0.22);
      }
  }
}



</style>
