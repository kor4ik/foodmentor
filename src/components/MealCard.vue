<template>
    <v-container>
      <v-layout>
        <v-row justify="center">
          <v-col v-for="item in items" :key="item.id" cols="auto">
            <v-card class="text-xs-center ma-3" color="grey-lighten-5">
              <v-responsive class="pa-4">
                image goes here
              </v-responsive>
              <v-card-text>
                <div class="subheading text-left">{{ item.meal }}</div>
                <div class="subheading text-left">{{ item.food }}</div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
</template>

<script>
export default {
  name: 'MealCard',
  data: () => ({
    items: [
      { id: 1, meal: 'breakfast', food: 'bread' },
      { id: 2, meal: 'lunch' },
      { id: 3, meal: 'dinner' },
      { id: 4, meal: 'lunch' },
      { id: 5, meal: 'lunch' },
      { id: 6, meal: 'lunch' },
      { id: 7, meal: 'lunch' }
    ]
  })
}
</script>
