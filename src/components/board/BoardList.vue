<template>
    <div>
        <div class="untree_co-section bg-light">
            <div class="container">
                <div class="row justify-content-center text-center">
                    <div class="col-lg-6">
                        <h2 class="text-secondary heading-2">동네 생활</h2>
                        <p>
                            <br>
                        </p>
                    </div>
                </div>
                <div>
                    <button @click="moveWrite" class="btn btn-primary mb-4">글작성</button>
                </div>
                <div v-if="articles.length">
                    <table class="table table-hover text-center">
                        <colgroup>
                            <col style="width: 5%" />
                            <col style="width: 65%" />
                            <col style="width: 10%" />
                            <col style="width: 10%" />
                            <col style="width: 15%" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>조회수</th>
                                <th>작성일</th>
                            </tr>
                        </thead>
                        <!-- 게시판 글 불러옵니다. -->
                        <tbody>
                            <board-list-item v-for="article in articles" :key="article.articleno" :article="article"></board-list-item>
                        </tbody>
                    </table>
                </div>
                <div class="text-center" v-else>게시글이 없습니다.</div>
            </div>
        </div>
    </div>

</template>

<script>
import BoardListItem from "@/components/board/BoardListItem";
export default {
    name: "BoardList",
    components: {
        BoardListItem,
    },
    data() {
        return {
            articles: [],
        };
    },
    // 게시글 data를 불러옵니다.
    created() {
        this.$axios.get(`http://localhost/board`).then(({ data }) => (this.articles = data));
    },
    // 글 작성 버튼을 누르면 boardWrite로 이동
    methods: {
        moveWrite() {
            this.$router.push({ name: "boardwrite" });
        },
    },
};
</script>

<style>

</style>
