<template>
    <div>
        <div class="untree_co-section bg-light">
            <div class="container">
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-lg-6">
                        <h2 class="text-secondary heading-2">비밀번호 찾기</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-5 bg-white p-5">
                        <form class="contact-form" action="${root}/member/password" method="post" id="rform"
                            data-aos="fade-up" data-aos-delay="200">
                            <!-- <input type="hidden" name="action" value="password"> -->

                            <div class="form-group">
                                <label class="text-black" for="name">이름</label>
                                <input type="text" class="form-control" id="name" name="name">
                            </div>

                            <div class="form-group">
                                <label class="text-black" for="id">아이디</label>
                                <input type="text" class="form-control" id="id" name="id">
                            </div>

                            <div class="form-group">
                                <label class="text-black" for="phone">전화번호</label>
                                <input type="text" class="form-control" id="phone" name="phone">
                            </div>

                            <input type="submit" onclick="func()" class="btn btn-primary mb-4" value="비밀번호 찾기">

                        </form>

                    </div> <!-- /.col-lg-7 -->
                </div> <!-- /.row -->
            </div> <!-- /.container -->
        </div> <!-- /.untree_co-section bg-light -->
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>