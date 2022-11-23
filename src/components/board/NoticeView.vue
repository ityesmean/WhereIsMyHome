<template>
    <div>
        <div class="untree_co-section bg-light">
            <div class="container">
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-lg-7">
                        <h2 class="text-secondary heading-2">알짜 정보 상세보기</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-12 text-center">
                                <strong>작성자</strong>: {{ article.id }}&nbsp;&nbsp;&nbsp;&nbsp;
                                <strong>조회수</strong>: {{ article.hit }}&nbsp;&nbsp;&nbsp;&nbsp;
                                <strong>작성일</strong>: {{ article.regtime }}
                                <br /><br />
                                <div class="form-group text-left">
                                    <div>
                                        <h1><strong>{{ article.subject }}</strong></h1>
                                    </div>
                                </div>
                                <div class="form-control text-left" style="height:200px">
                                    <div>
                                        <h5>{{ article.content }}</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /> <br /> <br />

                        <div class="accordion" id="accordion_1">
                            <div class="accordion-item text-center">
                                <router-link v-if="this.$session.get('session').id == `admin`" :to="{
                                    name: 'noticemodify',
                                    params: { articleno: article.articleno },
                                }" class="btn btn-primary mb-4">수정
                                </router-link>
                                &nbsp;
                                <router-link v-if="this.$session.get('session').id == `admin`" :to="{
                                    name: 'noticedelete',
                                    params: { articleno: article.articleno },
                                }" class="btn btn-primary mb-4">삭제
                                </router-link>
                                &nbsp;
                                <router-link :to="{ name: 'boardnotice' }" class="btn btn-primary mb-4">목록</router-link>
                            </div>
                        </div>
                    </div> <!-- /.col-lg-7 -->
                </div> <!-- /.row -->
            </div> <!-- /.container -->
        </div> <!-- /.untree_co-section bg-light -->

    </div>
</template>

<script>
export default {
    name: "BoardView",
    data() {
        return {
            article: Object,
        };
    },
    created() {
        this.$axios.get(`http://localhost/board/${this.$route.params.articleno}`).then(({ data }) => {
            this.article = data;
        });
    },
};
</script>

<style>

</style>
