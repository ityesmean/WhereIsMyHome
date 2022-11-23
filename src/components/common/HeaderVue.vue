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
          <ul class="js-clone-nav d-none d-lg-inline-block text-left float-right site-menu">
            <template v-if="sessionData == null">
              <li>
                <router-link to="/member/signup">Sign up</router-link>
              </li>
              <li class="cta-button active">
                <router-link to="/member/login">Login</router-link>
              </li>

            </template>
            <template v-else>

              <li>
                <router-link to="/board/boardnotice">Notice</router-link>
              </li>
              <li>
                <router-link to="/member/mypage">My Page</router-link>
              </li>
              <li>
                <router-link to="/board/boardlist">Board</router-link>
              </li>
              <li class="cta-button active"><a style="cursor:pointer" @click="logout">logout</a></li>
            </template>
          </ul>

          <a href="#" class="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none"
            data-toggle="collapse" data-target="#main-navbar">
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
  data() {
    return {
      sessionData: null,
    }
  },
  created: function () {
    this.sessionData = this.$session.get('session')

  },

  methods: {
    logout: function () {
      this.$session.destroy()
      this.$router.push('/')
      location.reload()
    }
  }

}
</script>

<style>

</style>