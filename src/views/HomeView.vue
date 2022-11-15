<template>
    <div>
        <HeaderVue></HeaderVue>
        <FooterVue></FooterVue>
    </div>
</template>

<script>
import HeaderVue from '@/components/common/HeaderVue.vue'
import FooterVue from "@/components/common/FooterVue.vue"
export default {
name: "HomeView",
components: {
    HeaderVue,
    FooterVue,
}
}
</script>

<style>

</style>