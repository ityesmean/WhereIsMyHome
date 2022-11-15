<template>
  <div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/aptcost">aptCost</router-link> |
      <router-link to="/member/signup">signUp</router-link> |
      <router-link to="/member/login">login</router-link> |
      <router-link to="/member/mypage">myPage</router-link> |
      <router-link to="/member/update">update</router-link> |
      <router-link to="/member/password">password</router-link> |
      <router-link to="/aptdetailform">aptDetailForm</router-link> -->
    </nav>
    <header-vue></header-vue>
    <router-view></router-view>
    <footer-vue></footer-vue>
    <router-view/>
  </div>
</template>

<script>
import HeaderVue from '@/components/common/HeaderVue.vue'
import FooterVue from "@/components/common/FooterVue.vue"

export default {
  name: 'App',
  components: {
    HeaderVue,
    FooterVue
  },
}
</script>



<style>
@import "https://fonts.googleapis.com/css2?family=Lato:wght@400;900&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&display=swap";
@import "assets/css/bootstrap.min.css";
@import "assets/css/owl.carousel.min.css";
@import "assets/css/owl.theme.default.min.css";
@import "assets/css/jquery.fancybox.min.css";

@import "assets/fonts/icomoon/style.css";
@import "assets/fonts/flaticon/font/flaticon.css";

@import "assets/css/aos.css";
@import "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css";
@import "assets/css/style.css";


/* @import "../assets/js/jquery-3.4.1.min.js";
@import "../assets/js/popper.min.js";
@import "../assets/js/bootstrap.min.js";
@import "../assets/js/owl.carousel.min.js";
@import "../assets/js/jquery.animateNumber.min.js";
@import "../assets/js/jquery.waypoints.min.js";
@import "../assets/js/jquery.fancybox.min.js";
@import "../assets/js/aos.js";
@import "../assets/js/jarallax.min.js";
@import "https://cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js";
@import "../assets/js/custom.js"; */



#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
