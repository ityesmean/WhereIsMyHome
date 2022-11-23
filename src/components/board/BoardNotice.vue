<template>
    <div>
        <div class="untree_co-section bg-light">
            <div class="untree_co-section">
                <div class="container">
                    <div class="row justify-content-center text-center">
                        <div class="col-lg-6">
                            <h2 class="text-secondary heading-2">알짜 정보</h2>
                            <p>다양한 꿀팁을 알려드립니다.</p>
                        </div>
                    </div>
                </div>
                <!-- admin 계정이어야만 글작성 버튼이 보이게 처리 -->
                <div v-if="admin == true">
                    <div style="text-align: center">
                        <button @click="moveWrite" class="btn btn-primary mb-4">글작성</button>
                    </div>
                </div>
            </div>
            <div class="untree_co-section">
                <div class="container">
                    <div class="row gutter-v3">
                        <!-- for문, 알짜정보 게시글을 불러옵니다. -->
                        <board-notice-item v-for="article in articles" :key="article.articleno" :article="article"></board-notice-item>
                    </div> 
                </div> 
            </div>
        </div>
    </div>
</template>

<script>
import BoardNoticeItem from "@/components/board/BoardNoticeItem";
export default {
    name: "BoardNotice",
    components: {
        BoardNoticeItem,
    },
    data() {
        return {
            articles: [],
            admin: true,
        };
    },
    created() {
        console.log(this.$session.get('session'))
        // id가 admin이 아니면 admin 변수를 false 처리
        if (this.$session.get('session').id != `admin`) {
            this.admin = false;
        }
        // 알짜정보 게시판 정보를 불러옵니다.
        this.$axios.get(`http://localhost/board/notice`).then(({ data }) => (this.articles = data));
    },
    methods: {
        moveWrite() {
            this.$router.push({ name: "noticewrite" });
        },
    },
};
</script>

<style>

</style>
