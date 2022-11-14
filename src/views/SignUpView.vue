<template>
    <div>
        <HeaderVue></HeaderVue>
        <SignUpVue></SignUpVue>
        <FooterVue></FooterVue>
    </div>
</template>

<script>
import HeaderVue from '@/components/common/HeaderVue.vue'
import FooterVue from "@/components/common/FooterVue.vue"
import SignUpVue from "@/components/member/SignUpVue.vue"
export default {
    name: 'SignUpView',
    components: {
        HeaderVue,
        FooterVue,
        SignUpVue
    }
}
</script>

<style>

</style>