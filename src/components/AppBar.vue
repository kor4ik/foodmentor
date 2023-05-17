<template>
  <!-- <v-card>
    <v-layout>
      <v-system-bar color="deep-purple darken-3"></v-system-bar> -->

      <v-app-bar class="bg-deep-purple-lighten-2">
        <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>{{ title }}</v-toolbar-title>

        <!-- <v-spacer>what is this</v-spacer>

        <v-btn variant="text" icon="mdi-magnify"></v-btn>

        <v-btn variant="text" icon="mdi-filter"></v-btn>

        <v-btn variant="text" icon="mdi-dots-vertical"></v-btn> -->
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" location="left" temporary>
        <v-list :items="items"></v-list>
      </v-navigation-drawer>

      <!-- <v-main style="height: 500px;">
        <v-card-text>
          My card text My card text My card text My card text My card text My card text
        </v-card-text>
      </v-main>
    </v-layout>
  </v-card> -->
</template>

<script>
export default {
  props: ['title'],
  data: () => ({
    drawer: false,
    group: null,
    items: [
      {
        title: 'Foo',
        value: 'foo'
      },
      {
        title: 'Bar',
        value: 'bar'
      },
      {
        title: 'Fizz',
        value: 'fizz'
      },
      {
        title: 'Buzz',
        value: 'buzz'
      }
    ]
  }),

  watch: {
    group () {
      this.drawer = false
    }
  }
}
</script>
