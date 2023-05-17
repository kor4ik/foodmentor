<template>
  <v-layout class="py-16">
    <AppBar v-bind:title="title"/>
    <v-form class="pa-5"
      v-model="form"
      @submit.prevent="onSubmit"
    >
      <v-text-field
        v-model="name"
        type="name"
        :readonly="loading"
        :rules="[]"
        clearable
        label="Name"
        placeholder="Enter your name"
        width="1000"
      />
      <v-select
          v-model="select"
          :readonly="loading"
          :items="items"
          :rules="[requiredRule]"
          label="Gender"
        />
      <v-text-field
          v-model.number="weight"
          type="weight"
          :readonly="loading"
          :rules="[requiredRule, weightRule]"
          clearable
          label="Target weight"
          placeholder="Enter your target weight"
        />
      <v-btn class="me-4"
        :disabled="!form"
        :loading="loading"
        type="submit"
        variant="elevated"
        elevation="5"
      >
        Submit
      </v-btn>
    </v-form>
  </v-layout>
</template>

<script>
import axios from 'axios'
import AppBar from '@/components/AppBar.vue'

export default {
  name: 'TargetPage',
  data: () => ({
    form: false,
    user: {},
    name: null,
    title: null,
    weight: null,
    loading: false,
    select: null,
    items: [
      'male',
      'female'
    ]
  }),
  components: {
    AppBar
  },
  methods: {
    async onSubmit () {
      if (!this.form) return
      this.loading = true

      if (this.name === null || this.name === '') {
        this.name = this.user.name
      }
      await axios.patch('http://192.168.68.132:3000/users/' + this.user.id, {
        gender: this.select,
        name: this.name,
        weight: this.weight
      })
        .then(response => {
          console.log(response)
          localStorage.setItem('user-data', JSON.stringify(response.data))
        })
        .catch((err) => alert(err))
      this.$router.push({ name: 'MenuCompose' })
      this.loading = false
    },
    requiredRule (v) {
      return !!v || 'Field is required'
    },
    weightRule (v) {
      if (/^([3-9]\d|1\d\d|2[0-4]\d)$/.test(v)) return true
      return 'Weight must be valid'
    }
  },
  mounted () {
    const user = localStorage.getItem('user-data')
    if (user) {
      this.user = JSON.parse(user)
      this.name = this.user.name
      this.title = 'Hello ' + this.user.name + ", let's set the target"
      this.select = this.user.gender
      this.weight = this.user.weight
    } else {
      this.$router.push({ name: 'SignIn' })
    }
  }
}
</script>

<style scoped>
  .v-form {
    width: 100%
  }
</style>
