<template>
  <div id="app">
    <ul>
      <router-link to="/" tag="li">Home</router-link>
      <router-link to="about" tag="li">About</router-link>
      <router-link to="skills" tag="li">Skills</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
