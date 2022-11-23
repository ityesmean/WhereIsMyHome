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
                        <form class="contact-form" id="form-login" data-aos="fade-up" data-aos-delay="200"
                            v-on:submit.prevent>
                            <input type="hidden" name="action" value="login">
                            <div class="form-group">
                                <label class="text-black" for="id">아이디</label> <input type="text" class="form-control"
                                    id="id" v-model="id" ref="id">
                            </div>

                            <div class="form-group">
                                <label class="text-black" for="pw">비밀번호</label> <input type="password"
                                    class="form-control" id="pw" v-model="pw" ref="pw">
                            </div>

                            <button id="btn-login" @click="validationCheck" class="btn btn-primary mb-4">
                                로그인
                            </button>

                            <div class="form-group">
                                <p>
                                    <small>아직 계정이 없으시다면, <router-link to="/member/signup">회원가입</router-link><br>
                                        비밀번호가 기억이 안나신다면, <router-link to="/member/password">비밀번호 찾기</router-link>
                                        </small>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
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

    methods: {
        // 등록을 눌렀을 때 빈칸이면 alert창 후 입력 안 한 곳으로 focus
        validationCheck() {
            let err = true;
            let msg = "";
            err && !this.id && ((msg = "아이디를 입력해주세요"), (err = false), this.$refs.id.focus());
            err && !this.pw && ((msg = "패스워드를 입력해주세요"), (err = false), this.$refs.pw.focus());
            
            if (!err) alert(msg);
            else this.loginMember();    
        },

        loginMember: function () {
            let info = {
                'id': this.id,
                'pw': this.pw
            }
            console.log(info);

            this.$axios.get(`http://localhost/admin/member?id=${this.id}&pw=${this.pw}`)
                .then((response) => {
                // status가 200이면 로그인이 가능함
                    if (response.status === 200) {
                        this.$session.set('session', info)
                        alert("로그인 성공")
                        this.$router.push({
                            name: "index"
                        });
                        location.reload()
                    }
                    // status가 204면 로그인 실패
                    else if (response.status === 204) {
                        alert("로그인에 실패하셨습니다.")
                    }
                })
                .catch(error => {
                    // 이미 존재하는 id라면 실패 문구
                    alert("로그인에 실패하셨습니다.")
                    console.log(error)
                })
        }
    }
}
</script>

<style>

</style>