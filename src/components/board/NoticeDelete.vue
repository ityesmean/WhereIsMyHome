<template>
    <div>

    </div>
</template>

<script>
export default {
    name: "NoticeDelete",
    created() {
        this.$axios.delete(`http://localhost/board/${this.$route.params.articleno}`).then(({ data }) => {
            let msg = "삭제 처리 중 문제가 발생했습니다.";
            if (data === "success") msg = "삭제 성공";
            alert(msg);
            this.$router.push({ name: "boardnotice" });
        });
    },
};
</script>

<style>

</style>
