<template>
  <v-sheet class="bg-deep-purple-lighten-2 text-center" height=100%>
    <h1 class="py-4 text-lg-h4 text-black">
      foodmentor
    </h1>
    <v-card class="mx-auto px-6 py-8" max-width="344">
      <v-form v-model="form" @submit.prevent="onSubmit" padding>
        <v-text-field v-model="email" :readonly="loading" :rules="[required]" class="mb-2" clearable
          label="Email" variant="outlined">
        </v-text-field>
        <v-text-field v-model="password" :readonly="loading" :rules="[required]" clearable label="Password" variant="outlined"
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
export default {
  name: 'SignIp',
  data: () => ({
    form: false,
    email: null,
    password: null,
    loading: false
  }),
  methods: {
    onSubmit () {
      if (!this.form) return
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)
    },
    required (v) {
      return !!v || 'Field is required'
    }
  }
}
</script>
