<template>
    <div>
        <div class="untree_co-section bg-light">
            <div class="container">
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-lg-6">
                        <h2 class="text-secondary heading-2">로그인</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-5 bg-white p-5">
                        <form class="contact-form" action="" method="post" id="form-login" data-aos="fade-up"
                            data-aos-delay="200">
                            <input type="hidden" name="action" value="login">
                            <div class="form-group">
                                <label class="text-black" for="id">아이디</label> <input type="text" class="form-control"
                                    id="id" name="id">
                            </div>

                            <div class="form-group">
                                <label class="text-black" for="pw">비밀번호</label> <input type="password"
                                    class="form-control" id="pw" name="pw">
                            </div>

                            <input type="button" id="btn-login" class="btn btn-primary mb-4" value="로그인">

                            <div class="form-group">
                                <p>
                                    <small>아직 계정이 없으시다면, <a href="${root }/member/join">회원가입</a><br>
                                        비밀번호가 기억이 안나신다면, <a href="${root }/member/passwordpage">비밀번호 찾기</a></small>
                                </p>
                            </div>
                        </form>
                    </div>
                    <!-- /.col-lg-7 -->
                </div>
                <!-- /.row -->
            </div>
            <!-- /.container -->
        </div>
    </div>
</template>

<script>
export default {
    name: "LoginVue"
}
</script>

<style>

</style>