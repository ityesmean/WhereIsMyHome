<template>
    <div>
        <HeaderVue></HeaderVue>
        <UpdateVue></UpdateVue>
        <FooterVue></FooterVue>
    </div>
</template>

<script>
import HeaderVue from '@/components/common/HeaderVue.vue'
import FooterVue from "@/components/common/FooterVue.vue"
import UpdateVue from "@/components/member/UpdateVue.vue"
export default {
    name: 'UpdateView',
    components: {
        HeaderVue,
        FooterVue,
        UpdateVue
    }
}
</script>

<style>

</style>