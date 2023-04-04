<template>
    <h1 class="py-4 text-lg-h4 text-black">
      Welcome to your food planner :)
    </h1>
</template>

<script>
export default {
  name: 'HomePage',
  mounted () {
    const user = localStorage.getItem('user-data')
    if (!user) {
      this.$router.push({ name: 'SignIn' })
    }
  }
}
</script>
