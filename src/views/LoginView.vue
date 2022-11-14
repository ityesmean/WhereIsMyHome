<template>
    <div>
        <HeaderVue></HeaderVue>
        <LoginVue></LoginVue>
        <FooterVue></FooterVue>
    </div>
</template>

<script>
import HeaderVue from '@/components/common/HeaderVue.vue'
import FooterVue from "@/components/common/FooterVue.vue"
import LoginVue from "@/components/member/LoginVue.vue"

export default {
  // name: 'HomeView',
  // components: {
  //   HelloWorld
  // },
    name: 'LoginView',
    components: {
        HeaderVue,
        FooterVue,
        LoginVue
    }
}
</script>

<style>

</style>