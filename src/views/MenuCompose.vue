<template>
  <v-layout class="pa-15">
    <AppBar/>
    <h1>Daily Meals</h1>
    <MealCard/>
  </v-layout>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import MealCard from '@/components/MealCard.vue'

export default {
  name: 'MenuCompose',
  components: {
    AppBar,
    MealCard
  }
}
</script>
