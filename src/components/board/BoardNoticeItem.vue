<!-- 알짜 정보 게시글 -->
<template>
    <div class="col-lg-6 mb-4 mb-lg-0">
        <router-link :to="`/board/noticeview/${article.articleno}`" class="feature-v2 d-flex">
            <div class="icon-wrap">
                <span class="icon-chat_bubble_outline"></span>
            </div>
            <div class="text">
                <h3 class="heading">{{ article.subject }}</h3>
                <p>{{ article.content }}</p>
            </div>
        </router-link>
        <br>
    </div>
</template>

<script>
export default {
    name: "BoardNoticeItem",
    props: {
        article: Object,
    },
};
</script>

<style>

</style>