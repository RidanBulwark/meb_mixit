<template>
  <div class="home">
    <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Search Meals by Name</h1>
  </div>
  <div class="px-8 pb-3">
    <input
      type="text"
      v-model="keyword"
      class="rounded border-2 bg-white border-gray-200 focus:ring-orange-500 focus:border-orange-500 w-full"
      placeholder="Search for Meals"
      @change="searchMeals"
    />
  </div>

  <Meals />
  </div>
</template>

<script>
import Meals from '../components/Meals.vue'

export default {
  name: "Recipes",
  components:{
    Meals
  }
}
</script>
