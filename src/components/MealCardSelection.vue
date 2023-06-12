<template>
    <v-container>
      <v-layout>
        <v-row justify="center">
          <v-col v-for="item in items" :key="item.id" cols="auto">
            <v-card class="text-xs-center ma-3" color="grey-lighten-5" height="400">
              <v-responsive class="pa-4">
                image goes here
              </v-responsive>
              <v-card-text>
                <div class="subheading text-left">{{ item.meal }}</div>
                <v-row v-for="food in item.food" :key="food.foodId">
                  <v-col cols="true">
                    <v-select class="small-select"
                        v-model="selectedFood[food.foodId]"
                        :items="food.name"
                        :rules="[requiredRule]"
                      />
                  </v-col>
                  <v-col cols="true">
                    <v-select class="small-select"
                      v-model="selectedAmount[food.foodId]"
                      :items="food.amount"
                      :rules="[requiredRule]"
                    />
                  </v-col>
                </v-row>
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
    selectedFood: [],
    selectedAmount: [],
    items: [
      { id: 1, meal: 'breakfast', food: [{ foodId: 11, name: ['bread'], amount: [1, 2, 3] }, { foodId: 12, name: ['apple'], amount: [1, 2, 3] }] },
      { id: 2, meal: 'lunch', food: [{ foodId: 21, name: ['chicken'], amount: [100, 200, 300] }, { foodId: 22, name: ['tomato'], amount: [1, 2, 3] }] },
      { id: 3, meal: 'dinner' },
      { id: 4, meal: 'lunch' },
      { id: 5, meal: 'lunch' },
      { id: 6, meal: 'lunch' },
      { id: 7, meal: 'lunch' }
    ]
  }),
  methods: {
    requiredRule (v) {
      return !!v || 'Field is required'
    }
  }
}
</script>

<style scoped>
.small-select {
  height: 35px;
  min-width: 95px;
}
</style>
