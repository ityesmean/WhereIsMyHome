<template>
    <div>
        <div class="untree_co-section bg-light">
            <div class="container">
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-lg-7">
                        <h2 class="text-secondary heading-2">글 상세보기</h2>
                        <strong>작성자</strong>: {{ article.id }}&nbsp;&nbsp;&nbsp;&nbsp;
                        <strong>조회수</strong>: {{ article.hit }}&nbsp;&nbsp;&nbsp;&nbsp;
                        <strong>작성일</strong>: {{ article.regtime }}

                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <div class="row">
                            <div class="col-12 text-center">
                                <div class="form-group text-left">
                                    <div>
                                        <h3><strong>{{ article.subject }}</strong></h3>
                                    </div>
                                </div>
                                <div class="form-control text-left" style="height:200px">
                                    <div>
                                        <h6>{{ article.content }}</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br /> <br /> <br />

                        <div class="accordion" id="accordion_1">
                            <div class="accordion-item text-center">
                                <!-- 로그인한 id와 수정하려는 id가 같아야지만 수정 버튼이 보이게 구현 -->
                                <router-link v-if="this.$session.get('session').id == article.id" :to="{
                                    name: 'boardmodify',
                                    // 파라미터로 게시글 번호를 넘깁니다.
                                    params: { articleno: article.articleno },
                                }" class="btn btn-primary mb-4">수정
                                </router-link>
                                &nbsp;
                                <!-- 로그인한 id와 삭제하려는 id가 같아야지만 삭제 버튼이 보이게 구현 -->
                                <router-link v-if="this.$session.get('session').id == article.id" :to="{
                                    name: 'boarddelete',    
                                    // 파라미터로 게시글 번호를 넘깁니다.
                                    params: { articleno: article.articleno },
                                }" class="btn btn-primary mb-4">삭제
                                </router-link>
                                &nbsp;
                                <router-link :to="{ name: 'boardlist' }" class="btn btn-primary mb-4">목록</router-link>
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
    name: "BoardView",
    data() {
        return {
            article: Object,
        };
    },
    // 선택한 게시글 정보를 불러와줍니다.
    created() {
        this.$axios.get(`http://localhost/board/${this.$route.params.articleno}`).then(({ data }) => {
            this.article = data;
        });
    },
};
</script>

<style>

</style>
