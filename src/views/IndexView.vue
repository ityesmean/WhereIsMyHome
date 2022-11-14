<template>
  <div>
    <HeaderVue></HeaderVue>
    <IndexVue></IndexVue>
    <FooterVue></FooterVue>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderVue from '@/components/common/HeaderVue.vue'
import FooterVue from "@/components/common/FooterVue.vue"
import IndexVue from "@/components/IndexVue.vue"

export default {
  // name: 'HomeView',
  // components: {
  //   HelloWorld
  // },
  name: 'IndexView',
  components: {
    HeaderVue,
    FooterVue,
    IndexVue
  }
}
</script>
