<template>
  <div>
    <div class="lines-wrap">
      <div class="lines-inner">
        <div class="lines"></div>
      </div>
    </div>
  <!-- END lines -->

  <div class="site-mobile-menu site-navbar-target">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close">
        <span class="icofont-close js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body"></div>
  </div>

  <nav class="site-nav">
        <div class="container">
            <div class="site-navigation">
                <a href="/" class="logo m-0">구해줘, 홈즈<span class="text-primary">.</span></a>
                <!-- <router-link to="/" class="logo m-0">구해줘, 홈즈<span class="text-primary">.</span></router-link> -->
                <template v-if="sessionData == null">
                  <ul class="js-clone-nav d-none d-lg-inline-block text-left float-right site-menu">
                      <li><router-link to="/member/signup">Sign up</router-link></li> 
                      <li class="cta-button active"> <router-link to="/member/login">Login</router-link></li>      
                  </ul>
                </template> 
                <template v-else>
                  <ul class="js-clone-nav d-none d-lg-inline-block text-left float-right site-menu">
                    <li><router-link to="/member/mypage">My Page</router-link></li> 
                    <li class="cta-button active"><button class="btn btn-primary mb-4" @click="logout">logout</button></li>  
                    <!-- <li class="cta-button active"> <button id="" to="/member/login" @click="logout">LogOut</button></li>   -->
                  </ul>
                </template>

                <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none" data-toggle="collapse" data-target="#main-navbar">
                <span></span>
                </a>

            </div>
        </div>
    </nav>
  
  </div>
</template>

<script>
export default {
  name: "HeaderVue",
  data () {
    return {
      sessionData: null,
    }
  },
  created: function() {
    // console.log(this.$session.get('session'));
    this.sessionData = this.$session.get('session') 

  },

  methods: {
    logout: function() {
      this.$session.destroy()
      this.$router.push('/')
      location.reload()
    }
  }
    
}
</script>

<style>
</style>