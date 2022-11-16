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
                        <form class="contact-form" id="form-login" data-aos="fade-up"
                            data-aos-delay="200" v-on:submit.prevent>
                            <input type="hidden" name="action" value="login">
                            <div class="form-group">
                                <label class="text-black" for="id">아이디</label> <input type="text" class="form-control"
                                id="id" v-model="id">
                            </div>

                            <div class="form-group">
                                <label class="text-black" for="pw">비밀번호</label> <input type="password"
                                class="form-control" id="pw" v-model="pw">
                            </div>

                            <button id="btn-login" @click="loginMember" class="btn btn-primary mb-4">
                                로그인
                            </button>

                            <div class="form-group">
                                <p>
                                    <small>아직 계정이 없으시다면, <router-link to="/member/signup">회원가입</router-link><br>
                                    비밀번호가 기억이 안나신다면, <router-link to="/member/password">비밀번호 찾기</router-link></small>
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
    name: "LoginVue",
    data: function () {
        return {
            id: null,
            pw: null
        }   
    },
    created: function() {
    },
    methods: {
        loginMember: function () {
            let info = {
                'id': this.id,
            }
            
            this.$session.set('session', info)
                
            this.$axios.get(`http://localhost/admin/member?id=${this.id}&pw=${this.pw}`)
                .then(response => {
                    console.log(response)
                    this.$router.push({
                        name: "index"
                    });
                    location.reload()
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