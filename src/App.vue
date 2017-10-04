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
/* reset styles */
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	vertical-align: baseline;
}
body {
  line-height: 1.2;
}
ol,
ul {
  list-style: none;
}
/*** end of reset ***/
#app {
  text-align: center;
  margin-top: 60px;
}
</style>
