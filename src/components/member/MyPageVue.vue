<template>
    <div>
        <div class="untree_co-section bg-light">
            <div class="container">
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-lg-6">
                        <h2 class="text-secondary heading-2">회원 정보</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-5 bg-white p-5">
                        <form id="form-update" class="contact-form" data-aos="fade-up" data-aos-delay="200"
                            action="${root}/member/updatepage?id=${member.getId()}" method="post">
                            <!-- <input type="hidden" name="action" value="updateform">
                -->
                            <!-- <input type="hidden" name="id" value="${member.getId() }"> -->
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group">
                                            <label class="text-black" for="id">아이디</label>
                                            <!-- <div id="id"></div> -->
                                            <div>
                                                {{member.id}}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="text-black" for="password">비밀번호</label>
                                            <!-- <div id="password"></div> -->
                                            <div>
                                                {{member.pw}}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="text-black" for="name">이름</label>
                                            <!-- <div id="name"></div> -->
                                            <div>
                                                {{member.name}}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="text-black" for="address">주소</label>
                                            <!-- <div id="address"></div> -->
                                            <div>
                                                {{member.addr}}
                                            </div>
                                        </div>
                                        <div class="form-group">
                                            <label class="text-black" for="phone">전화번호</label>
                                            <!-- <div id="phone"></div> -->
                                            <div>
                                                {{member.phone}}
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="accordion" id="accordion_1">
                                    <div class="accordion-item">
                                        <!-- <button type="button" class="btn btn-primary mb-4">수정</button> -->
                                        <input type="submit" id="btn-update" class="btn btn-primary mb-4" value="수정">
                                        <button type="button" class="btn btn-primary mb-4" data-toggle="collapse"
                                            data-target="#collapseOne" aria-expanded="true"
                                            aria-controls="collapseOne">탈퇴</button>
                                        <div id="collapseOne" class="collapse" aria-labelledby="headingOne"
                                            data-parent="#accordion_1">
                                            <div class="accordion-body">
                                                <label class="text-black">정말 탈퇴하시겠습니까?</label>
                                                <nav class="site-nav">
                                                    <div class="container">
                                                        <div class="site-navigation">
                                                            <ul
                                                                class="js-clone-nav d-none d-lg-inline-block text-left float-right site-menu">
                                                                <li><a
                                                                        href="${root}/member/delete?id=${member.getId()}">예</a>
                                                                </li>
                                                                <li><a href="#" data-toggle="collapse"
                                                                        data-target="#collapseOne">아니오</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </nav>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </form>
                    </div> <!-- /.col-lg-7 -->
                </div> <!-- /.row -->
            </div> <!-- /.container -->
        </div> <!-- /.untree_co-section bg-light -->

    </div>
</template>

<script>
export default {
    name: 'MyPageVue',
    data: function() {
        return {
            member: ''
        }
    },
    created: function() {
        this.getMember()
    },
    methods: {
        getMember: function() {
            this.$axios.get('http://localhost/admin/member/ssafy')
                .then(response => {
                    console.log(JSON.stringify(response))
                    this.member = response.data})
                .catch(error => {
                    console.log(error)
                })
                
        }
    }
}
</script>

<style>

</style>