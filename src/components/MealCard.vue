<template>
    <v-container>
      <v-layout>
        <v-row justify="center">
          <v-col v-for="item in myMenu" :key="item.id" cols="auto">
            <v-card class="text-xs-center ma-3" color="grey-lighten-5">
              <v-responsive max-height="200" :aspect-ratio="16 / 9">
                <div v-if="photo">
                  <img :src="photo.urls.thumb" :alt="photo.alt_description" class="fill-width"/>
                </div>
              </v-responsive>
              <v-card-text class="bigger-text">
                <div class="bg-green-lighten-3 text-center">{{ item.meal }}</div>
              </v-card-text>
              <v-table>
                <thead>
                  <tr>
                    <th class="text-left">
                      Food
                    </th>
                    <th class="text-left">
                      Amount
                    </th>
                    <th class="text-left">
                      Unit
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="food in item.food" :key="food.foodId">
                    <td>
                      {{ food.name }}
                    </td>
                    <td class="text-center">
                      {{ food.amount }}
                    </td>
                    <td class="text-center">
                      {{ food.unit }}
                    </td>
                  </tr>
                </tbody>
              </v-table>
            </v-card>
          </v-col>
        </v-row>
      </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios'
import config from '../../database/config.json'

export default {
  name: 'MealCard',
  data: () => ({
    photo: null,
    accessKey: null,
    myMenu: [
      { id: 1, meal: 'Breakfast', food: [{ foodId: 1, name: 'bread', amount: 1, unit: 'piece' }, { foodId: 3, name: 'apple', amount: 1 }, { foodId: 2, name: 'cottage', amount: 250, unit: 'gr' }] },
      { id: 2, meal: 'Lunch', food: [{ foodId: 1, name: 'chicken', amount: 300 }, { foodId: 2, name: 'tomato', amount: 0.5 }] },
      { id: 3, meal: 'Dinner' },
      { id: 4, meal: 'Lunch' },
      { id: 5, meal: 'Lunch' },
      { id: 6, meal: 'Lunch' },
      { id: 7, meal: 'Lunch' }
    ]
  }),
  mounted () {
    this.fetchImage()
  },
  methods: {
    fetchImage () {
      this.accessKey = config.unsplash.accessKey
      console.log('accesKey:', this.accessKey)
      const apiUrl = `https://api.unsplash.com/photos/random?query=breakfast&orientation=landscape&client_id=${this.accessKey}`

      axios.get(apiUrl)
        .then(response => {
          this.photo = response.data
        })
        .catch(error => {
          console.error('Error fetching images from Unsplash:', error)
        })
    }
  }
}
</script>

<style scoped>
.fill-width {
  width: 100%;
  object-fit: cover;
}
.bigger-text {
  font-size: 15px;
  width: 100%;
  background: cover;
}
</style>
