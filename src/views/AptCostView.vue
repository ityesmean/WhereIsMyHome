<template>
  <div>
    <HeaderVue></HeaderVue>
    <AptCostVue></AptCostVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
import HeaderVue from '@/components/common/HeaderVue.vue'
import FooterVue from "@/components/common/FooterVue.vue"
import AptCostVue from "@/components/apt/AptCostVue.vue"
export default {
  name: "AptCostView",
  components: {
    HeaderVue,
    FooterVue,
    AptCostVue
  }
}
</script>

<style>

</style>