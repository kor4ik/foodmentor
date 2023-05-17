<template>
  <v-item-group selected-class="bg-primary">
    <v-container>
      <v-row>
        <v-col
          v-for="n in 3"
          :key="n"
          cols="4"
        >
          <v-item v-slot="{ isSelected, selectedClass, toggle }">
            <v-card
              :class="['d-flex align-center', selectedClass]"
              elevation="10"
              dark
              height="300"
              @click="toggle"
            >
              <div
                class="text-h3 flex-grow-1 text-center"
              >
                {{ isSelected ? 'composing' : 'my meal my meal' }}
              </div>
            </v-card>
          </v-item>
        </v-col>
      </v-row>
    </v-container>
  </v-item-group>
</template>

<script>
export default {
  name: 'MealCard',
  data: () => ({
    model: null,
    data: () => ({
      items: [
        'chicken',
        'bread',
        'apple'
      ]
    })
  })
}
</script>
