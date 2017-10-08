<template>
  <div id="app">
    <ul>
      <router-link to="/" tag="li">Home</router-link>
      <router-link to="about" tag="li">About</router-link>
      <router-link to="skills" tag="li">Skills</router-link>
    </ul>
    <router-view></router-view>

    <div id="scene">
      <p data-depth="0.2">My first Layer!</p>
    </div>

    <div class="starsBox" data-depth="0.2"></div>
    <div class="starsBox" data-depth="0.5"></div>

    
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
  overflow-x: hidden;
  background: #12172E;
}
ol,
ul {
  list-style: none;
}
/*** end of reset ***/
h1,h2,h3,h4,h5,h6{
  font-family: 'Megrim', cursive;
}
p,a,span,li{
  font-family: 'Raleway', sans-serif;
}
#app {
  text-align: center;
}

.starsBox {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  min-height: 100vh;
  min-width: 100vw;
  opacity: .5;
  z-index: -1;
}
.starsBox span {
  display: inline-block;
  width: auto;
  position: absolute;
  border-radius: 100%;
  transition: 100s linear;
}

</style>
