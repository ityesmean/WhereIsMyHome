<template>
    <div>
        <HeaderVue></HeaderVue>
        <MyPageVue></MyPageVue>
        <FooterVue></FooterVue>
    </div>
</template>

<script>
import HeaderVue from '@/components/common/HeaderVue.vue'
import FooterVue from "@/components/common/FooterVue.vue"
import MyPageVue from "@/components/member/MyPageVue.vue"

export default {
  // name: 'HomeView',
  // components: {
  //   HelloWorld
  // },
    name: 'MyPageView',
    components: {
        HeaderVue,
        FooterVue,
        MyPageVue
    }
}
</script>

<style>

</style>