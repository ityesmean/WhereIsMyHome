<template>
    <div>
        <div class="untree_co-section bg-light">
            <div class="container">
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-lg-6">
                        <h2 class="text-secondary heading-2">게시글 수정</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-5 bg-white p-5" style="border-radius: 30px;">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label class="text-black" for="subject">제목</label>
                                    <input class="form-control" type="text" id="subject" v-model="article.subject"
                                        ref="subject" /><br />
                                </div>
                                <div class="form-group">
                                    <label class="text-black" for="content">내용</label>
                                    <br />
                                    <textarea class="form-control" id="content" v-model="article.content" ref="content"
                                        cols="35" rows="5"></textarea><br />
                                    <button @click="checkValue" class="btn btn-primary mb-4">수정</button>
                                    <button @click="moveList" class="btn btn-primary mb-4">목록</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BoardModify",
    data() {
        return {
            article: Object,
        };
    },
    // 게시글 세부 정보를 불러옵니다.
    created() {
        this.$axios.get(`http://localhost/board/${this.$route.params.articleno}`).then(({ data }) => {
            this.article = data;
        });
    },
    methods: {
        // 입력값 체크하기 - 체크가 성공하면 호출
        checkValue() {
            // 사용자 입력값 체크하기
            // 작성자아이디, 제목, 내용이 없을 경우 각 항목에 맞는 메세지를 출력
            let err = true;
            let msg = "";
            !this.article.id &&
                ((msg = "아이디를 입력해주세요."),
                    (err = false),
                    this.$refs.id.focus());
            err &&
                !this.article.subject &&
                ((msg = "제목을 입력해주세요."),
                    (err = false),
                    this.$refs.subject.focus());
            err &&
                !this.article.content &&
                ((msg = "내용을 입력해주세요."),
                    (err = false),
                    this.$refs.content.focus());

            if (!err) alert(msg);
            // 만약 내용이 다 입력되어 있다면 호출
            else this.modifyArticle();
        },
        modifyArticle() {
            // TODO : 글번호에 해당하는 글정보 수정.
            this.$axios.put("http://localhost/board", this.article).then(({ data }) => {
                let msg = "수정 처리 중 문제가 발생하였습니다.";
                if (data === "success") msg = "수정 되었습니다.";
                alert(msg);
                this.moveList();
            });
        },

        moveList() {
            this.$router.push({ name: "boardlist" });
        },
    },
};
</script>

<style>

</style>
