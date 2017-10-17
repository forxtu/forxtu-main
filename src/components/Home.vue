<template>
  <div class="home">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Home'
    }
  }
}
</script>

<style scoped lang="scss">
h1 {
  color: purple;
}
</style>
