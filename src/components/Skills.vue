<template>
  <div class="skills">
    <h1>{{ skillsTitle }}</h1>
  </div>
</template>

<script>
export default {
  name: 'skills',
  data() {
    return {
      skillsTitle: 'Welcome to Skills component'
    }
  }
}
</script>

<style lang="scss">
h1{
  color: green;
}
</style>