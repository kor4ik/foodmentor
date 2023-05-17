<template>
  <v-layout class="py-16 px-10">
    <AppBar v-bind:title="title"/>
    <MealCard/>
  </v-layout>
</template>

<script>
import AppBar from '@/components/AppBar.vue'
import MealCard from '@/components/MealCard.vue'

export default {
  name: 'MenuCompose',
  data: () => ({
    title: 'My Daily Menu'
  }),
  components: {
    AppBar,
    MealCard
  }
}
</script>
