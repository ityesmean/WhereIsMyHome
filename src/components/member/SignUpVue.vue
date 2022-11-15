<template>
    <div>
        <div class="untree_co-section bg-light">
            <div class="container">
                <div class="row justify-content-center text-center mb-5">
                    <div class="col-lg-6">
                        <h2 class="text-secondary heading-2">회원가입</h2>
                    </div>
                </div>
                <div class="row justify-content-center">
                    <div class="col-lg-5 bg-white p-5">
                        <form action="" method="post" id="form-join"
                            class="contact-form" data-aos="fade-up" data-aos-delay="200">
                            <!-- <input type="hidden" name="action" value="insertmember"> -->
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="text-black" for="id">아이디</label> 
                                        <input type="text" class="form-control" id="id" name="id">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="pw">비밀번호</label> 
                                        <input type="password" class="form-control" id="pw" name="pw">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="name">이름</label> 
                                        <input type="text" class="form-control" id="name" name="name">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="addr">주소</label> 
                                        <input type="text" class="form-control" id="addr" name="addr">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="phone">전화번호</label> 
                                        <input type="text" class="form-control" id="phone" name="phone">
                                    </div>
                                </div>
                            </div>

                            <input type="button" id="btn-join" class="btn btn-primary mb-4" value="등록">

                            <div class="form-group">
                                <p>
                                    <small>이미 계정이 있으시다면, <router-link to="/login">로그인</router-link></small>
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
    name: 'SignUpVue',
    data: function() {
        return {
            member: ''
        }
    },
    created: function() {
        this.joinMember()
    },
    methods: {
        joinMember: function() {
            this.$axios.post('http://localhost/admin/member', {
                id: this.id,
                pw: this.pw,
                name: this.name,
                addr: this.addr,
                phone: this.phone
            })
                .then(response => {
                    console.log(response)
                    this.$router.push({
                        name: "member"
                    });
                })
                .catch(error => {
                    console.log(error)
                })
                
        }
    }
}
</script>

<style>

</style>