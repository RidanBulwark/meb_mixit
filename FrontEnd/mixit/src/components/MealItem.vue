<template>


<div class="card">
  <img src="dish.jpeg" alt="Recipe" style="width:100%">
  <h1>Recipe</h1>
  <p class="duration">20 min</p>
  <p>Some text about the recipe..</p>
  <router-link to="/recipe1"><p><button class="open">Open</button></p></router-link>
  <p><button class="favorite">Favorite</button></p>
</div> 

</template>

<script>
export default {
  name: "MealItem"
}
</script>

<style scoped lang="scss">
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  max-width: 300px;
  margin: auto;
  text-align: center;
  font-family: arial;
}

.duration {
  color: grey;
  font-size: 22px;
}

.card button {
  border: none;
  outline: 0;
  padding: 12px;
  color: white;
  text-align: center;
  cursor: pointer;
  width: 100%;
  font-size: 18px;
}

.card button:hover {
  opacity: 0.7;
}

.open{
  background-color: rgb(20,170,20);
}
.favorite{
  background-color: rgb(20,20,170);
}

</style>
