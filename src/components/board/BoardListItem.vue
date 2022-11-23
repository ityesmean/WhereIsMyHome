<!-- 게시글 -->
<template>
    <tr>
        <td>{{ article.articleno }}</td>
        <td>
            <router-link :to="`/board/boardview/${article.articleno}`">
                {{ article.subject }}
            </router-link>
        </td>
        <td>{{ article.id }}</td>
        <td>{{ article.hit }}</td>
        <td>{{ article.regtime }}</td>
    </tr>
</template>

<script>
export default {
    name: "BoardListItem",
    props: {
        article: Object,
    },
};
</script>

<style>

</style>
