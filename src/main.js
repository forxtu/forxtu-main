import Vue from 'vue'
import App from './App'
import router from './router'

/* Parallax js */
import Parallax from 'parallax-js'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

/* Parallax js */
var appParallax = document.getElementById('app');
var parallaxInstance = new Parallax(appParallax, {
  relativeInput: true,
  calibrateX: true,
  calibrateY: true
});

/* stars bg */
var cols = ['#FF1053','#cecece','#ffffff','#ececec','#ecf0f1','#a2ded0'];
var stars = 100;

for (var i = 0; i <= stars; i++) {

	var size = Math.random()*3;
  var color = cols[parseInt(Math.random()*4)];

	$('.starsBox').prepend('<span style=" width: ' + size + 'px; height: ' + size + 'px; top: ' + Math.random()*100 + '%; left: ' + Math.random()*100 + '%; background: ' + color + '; box-shadow: 0 0 '+ Math.random()*10 +'px' + color + ';"></span>') ;
};

setTimeout(function(){ 
	$('.starsBox span').each(function(){  
 		$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
  });
}, 1);

setInterval(function(){ 
	$('.starsBox span').each(function(){  	
 		$(this).css('top', Math.random()*100 + '%').css('left', Math.random()*100 + '%'); 
  });
}, 100000); 

