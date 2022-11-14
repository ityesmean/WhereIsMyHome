<template>
    <div>
        <div class="untree_co-section bg-light">
            <div class="container">
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-lg-6">
                        <h2 class="text-secondary heading-2">회원 정보 수정</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-5 bg-white p-5">
                        <form class="contact-form" data-aos="fade-up" data-aos-delay="200"
                            action="${root }/member/update" method="post" id="rform">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="text-black" for="id">아이디</label>
                                        <input type="text" class="form-control" id="id" name="id"
                                            value="${member.getId()}" readonly>
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="pw">비밀번호</label>
                                        <input type="text" class="form-control" id="pw" name="pw"
                                            value="${member.getPw()}">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="name">이름</label>
                                        <input type="text" class="form-control" id="name" name="name"
                                            value="${member.getName()}">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="addr">주소</label>
                                        <input type="text" class="form-control" id="addr" name="addr"
                                            value="${member.getAddr()}">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="phone">전화번호</label>
                                        <input type="text" class="form-control" id="phone" name="phone"
                                            value="${member.getPhone()}">
                                    </div>
                                </div>
                            </div>

                            <input type="button" id="updateInfo" class="btn btn-primary mb-4" value="수정">
                            <button type="button" onclick="location.href = '${root }/member/list?id=${login.id }'"
                                class="btn btn-primary mb-4">돌아가기</button>
                        </form>
                    </div> <!-- /.col-lg-7 -->
                </div> <!-- /.row -->
            </div> <!-- /.container -->
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>