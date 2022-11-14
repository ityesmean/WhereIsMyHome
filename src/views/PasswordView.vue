<template>
    <div>
        <HeaderVue></HeaderVue>
        <PasswordVue></PasswordVue>
        <FooterVue></FooterVue>
    </div>
</template>

<script>
import HeaderVue from '@/components/common/HeaderVue.vue'
import FooterVue from "@/components/common/FooterVue.vue"
import PasswordVue from "@/components/member/PasswordVue.vue"

export default {
  // name: 'HomeView',
  // components: {
  //   HelloWorld
  // },
    name: 'PasswordView',
    components: {
        HeaderVue,
        FooterVue,
        PasswordVue
    }
}
</script>

<style>

</style>