<template>
    <div>
        <div class="untree_co-section bg-light">
            <div class="container">
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-lg-7">
                        <h2 class="text-secondary heading-2">글 상세보기</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-7">
                        <!-- <form id="form-update" class="contact-form" data-aos="fade-up" data-aos-delay="200"
                            action="" method="post"> -->
                            <div class="row">
                                    <div class="col-12 text-center">
                                        <strong>작성자</strong>: {{ article.id }}&nbsp;&nbsp;&nbsp;&nbsp;
                                        <strong>조회수</strong>: {{ article.hit }}&nbsp;&nbsp;&nbsp;&nbsp;
                                        <strong>작성일</strong>: {{ article.regtime }}
                                        <!-- <div class="form-group">
                                            <label class="text-black">글번호</label>
                                            <div class="test-black">
                                                {{ article.articleno }}
                                            </div>
                                        </div> -->
                                        <br /><br />
                                        <div class="form-group text-left">
                                            <!-- <label class="text-black">글제목</label> -->
                                            <div>
                                                <h1><strong>{{ article.subject }}</strong></h1>
                                            </div>
                                        </div>
                                        <!-- <div class="form-group">
                                            <label class="text-black">작성자</label>
                                            <div>
                                                {{ article.id }}
                                            </div>
                                        </div> -->
                                        <!-- <div class="form-group">
                                            <label class="text-black">조회수</label>
                                            <div>
                                                {{ article.hit }}
                                            </div>
                                        </div> -->
                                        <div class="form-control text-left" style="height:200px">
                                            <!-- <label class="text-black">내용</label> -->
                                            <div>
                                                <h5>{{ article.content }}</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <br /> <br /> <br />
                                
                                <div class="accordion" id="accordion_1">
                                    <div class="accordion-item text-center">
                                        <router-link v-if="this.$session.get('session').id == article.id"
                                        :to="{
                                            name: 'boardmodify',
                                            params: { articleno: article.articleno },
                                        }"
                                        class="btn btn-primary mb-4"
                                        >수정
                                        </router-link>
                                        &nbsp;
                                        <router-link v-if="this.$session.get('session').id == article.id"
                                        :to="{
                                            name: 'boarddelete',
                                            params: { articleno: article.articleno },
                                        }"
                                        class="btn btn-primary mb-4"
                                        >삭제
                                        </router-link>
                                        &nbsp;
                                        <router-link :to="{ name: 'boardlist' }" class="btn btn-primary mb-4">목록</router-link>
                                    </div>
                                </div>

                                <!-- <div class="accordion" id="accordion_1">
                                    <div class="accordion-item">
                                        <router-link to="/member/update">
                                            <button id="btn-update" class="btn btn-primary mb-4">
                                                수정
                                            </button>
                                        </router-link>

                                        <button id="btn-delete" @click="deleteMember" class="btn btn-primary mb-4" >
                                            삭제
                                        </button>                                      
                                    </div>
                                </div> -->
                        <!-- </form> -->
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

    <style></style>
