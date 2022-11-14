<template>
    <div>
    <HeaderVue></HeaderVue>
    <AptDetailFormVue></AptDetailFormVue>
    <FooterVue></FooterVue>
</div>
</template>

<script>
import HeaderVue from '@/components/common/HeaderVue.vue'
import FooterVue from "@/components/common/FooterVue.vue"
import AptDetailFormVue from "@/components/apt/AptDetailFormVue.vue"
export default {
name: "AptDetailFormView",
components: {
    HeaderVue,
    FooterVue,
    AptDetailFormVue
}
}
</script>

<style>

</style>