<template>
    <div>
        <div class="untree_co-section bg-light">
            <div class="container">
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-lg-6">
                        <h2 class="text-secondary heading-2">게시글 작성</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-5 bg-white p-5" style="border-radius: 30px;">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label class="text-black" for="subject">제목</label>
                                    <input type="text" class="form-control" id="subject" v-model="subject"
                                        ref="subject" /><br />
                                </div>
                                <div class="form-group">
                                    <label class="text-black" for="content">내용</label>
                                    <br />
                                    <textarea id="content" class="form-control" v-model="content" ref="content"
                                        cols="35" rows="5"></textarea><br />
                                </div>
                            </div>
                        </div>

                        <button @click="checkValue" class="btn btn-primary mb-4">등록</button>
                        <button @click="moveList" class="btn btn-primary mb-4">목록</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name: "BoardWrite",
    data() {
        return {
            id: null,
            subject: null,
            content: null,
        };
    },
    methods: {
        // 입력값 체크하기 - 체크가 성공하면 호출
        checkValue() {
            // 사용자 입력값 체크하기
            // 작성자아이디, 제목, 내용이 없을 경우 각 항목에 맞는 메세지를 출력
            let err = true;
            let msg = "";
            err && !this.subject && ((msg = "제목을 입력해주세요"), (err = false), this.$refs.subject.focus());
            err && !this.content && ((msg = "내용을 입력해주세요"), (err = false), this.$refs.content.focus());

            if (!err) alert(msg);
            // 만약, 내용이 다 입력되어 있다면 호출
            else this.registArticle();
        },
        registArticle() {
            // 비동기
            // TODO : 글번호에 해당하는 글정보 등록.
            console.log("게시글이 등록되었습니다.");
            let article = {
                id: this.$session.get("session").id,
                subject: this.subject,
                content: this.content,
            };
            this.$axios.post("http://localhost/board", article).then(({ data }) => {
                let msg = "등록 처리 중 문제가 발생되었습니다.";
                if (data === "success") msg = "등록 성공하였습니다.";
                alert(msg);
                this.moveList();
            });
        },

        moveList() {
            console.log("글 목록 페이지로 이동합니다.");
            this.$router.push({ name: "boardlist" });
        },
    },
};
</script>

<style>

</style>
