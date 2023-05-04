<template>
  <v-card-title class="bg-deep-purple-lighten-2 px-9 pb-2">
    <span class="text-h7">Hello {{ user.name }}, let's set the target</span>
  </v-card-title>
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
</template>

<script>
import axios from 'axios'

export default {
  name: 'TargetPage',
  data: () => ({
    form: false,
    user: {},
    name: null,
    weight: null,
    loading: false,
    select: null,
    items: [
      'male',
      'female'
    ]
  }),
  methods: {
    async onSubmit () {
      if (!this.form) return
      this.loading = true

      if (this.name === null || this.name === '') {
        this.name = this.user.name
      }
      await axios.patch('http://localhost:3000/users/' + this.user.id, {
        gender: this.select,
        name: this.name,
        weight: this.weight
      })
        .then(response => {
          console.log(response)
          localStorage.setItem('user-data', JSON.stringify(response.data))
        })
        .catch((err) => alert(err))
      this.$router.push({ name: 'MenuPage' })
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
      this.select = this.user.gender
      this.weight = this.user.weight
    } else {
      this.$router.push({ name: 'SignIn' })
    }
  }
}
</script>
