<template>
  <v-sheet class="bg-deep-purple-lighten-2 text-center" height="100%">
    <h1 class="py-4 text-lg-h4 text-black">
      foodmentor
    </h1>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit" padding>
        <v-text-field v-model="email" :readonly="loading" :rules="[requiredRule, emailRule, uniqueRule]" class="mb-2" clearable
          label="Email" variant="outlined">
        </v-text-field>
        <v-text-field v-model="password" type="password" :readonly="loading" :rules="[requiredRule]" clearable label="Password" variant="outlined"
          placeholder="Enter your password">
        </v-text-field>
        <br>
        <v-btn :disabled="!form" :loading="loading" block size="large" type="submit" variant="elevated">
          Sign In
        </v-btn>
      </v-form>
    </v-card>
  </v-sheet>
</template>

<script>
import axios from 'axios'

export default {
  name: 'SignIn',
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false
  }),
  methods: {
    async onSubmit () {
      if (!this.form) return
      this.loading = true
      const result = await axios.post('http://localhost:3000/users', {
        email: this.email,
        password: this.password
      })
        .catch((err) => alert(err))
      if (result.status === 201) {
        localStorage.setItem('user-data', JSON.stringify(result.data))
        this.loading = false
        // console.log('User:', this.email, 'createed with data', result)
        this.$router.push({ name: 'HomePage' })
      }
    },
    requiredRule (v) {
      return !!v || 'Field is required'
    },
    emailRule (v) {
      if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(v)) return true
      return 'E-mail must be valid'
    },
    async uniqueRule (v) {
      const result = await axios.get('http://localhost:3000/users', {
        params: {
          email: v
        }
      })
        .catch((err) => console.log(err))
      return !result.data.length || 'E-mail already exists'
    }
  }
}
</script>
