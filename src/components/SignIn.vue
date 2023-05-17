<template>
  <v-sheet class="bg-deep-purple-lighten-2 text-center" height="100%">
    <h1 class="py-4 text-lg-h4 text-black">
      foodmentor
    </h1>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form
        v-model="form"
        @submit.prevent="onSubmit"
      >
        <v-text-field
          v-model="email"
          :readonly="loading"
          :rules="[requiredRule, emailRule]"
          class="mb-2"
          clearable
          label="Email"
          variant="outlined"
        />
        <v-text-field
          v-model="password"
          type="password"
          :readonly="loading"
          :rules="[requiredRule, uniqueRule]"
          clearable
          label="Password"
          variant="outlined"
          placeholder="Enter your password"
        />
        <br>
        <v-btn
          :disabled="!form"
          :loading="loading"
          block size="large"
          type="submit"
          variant="elevated"
        >
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
    loading: false,
    uniqueVal: null
  }),
  methods: {
    async onSubmit () {
      if (!this.form) return
      this.loading = true

      if (!this.uniqueVal) {
        const result = await axios.post('http://192.168.68.132:3000/users', {
          email: this.email,
          password: this.password,
          name: this.email.split('@')[0],
          gender: null,
          weight: null
        })
          .catch((err) => alert(err))
        localStorage.setItem('user-data', JSON.stringify(result.data))
        console.log('User:', this.email, 'createed with data', result)
        this.$router.push({ name: 'TargetPage' })
      } else {
        localStorage.setItem('user-data', JSON.stringify(this.uniqueVal.data[0]))
        console.log('User:', this.email, 'loged with data', this.uniqueVal.data)
        this.$router.push({ name: 'MenuPage' })
      }
      this.loading = false
    },
    requiredRule (v) {
      return !!v || 'Field is required'
    },
    emailRule (v) {
      if (/^\w+([\\.-]?\w+)*@\w+([\\.-]?\w+)*(\.\w{2,3})+$/.test(v)) return true
      return 'E-mail must be valid'
    },
    async uniqueRule (v) {
      const result = await axios.get('http://192.168.68.132:3000/users', {
        params: {
          email: this.email
        }
      })
        .catch((err) => console.log(err))
      if (result.data.length) {
        const result = await axios.get('http://192.168.68.132:3000/users', {
          params: {
            email: this.email,
            password: v
          }
        })
          .catch((err) => console.log(err))
        this.uniqueVal = result
        return !!result.data.length || "Password doesn't match e-mail"
      }
      return true
    }
  },
  mounted () {
    const user = localStorage.getItem('user-data')
    if (user) {
      this.$router.push({ name: 'TargetPage' })
    }
  }
}
</script>
