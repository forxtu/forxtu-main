<template>
  <div class="about">
    <h1>{{ aboutTitle }}</h1>    
  </div>
</template>

<script>
export default {
  name: 'about',
  data() {
    return {
      aboutTitle: 'Welcome to About component'
    }
  }
}
</script>

<style scoped lang="scss">
h1{
  color: crimson;
}
</style>