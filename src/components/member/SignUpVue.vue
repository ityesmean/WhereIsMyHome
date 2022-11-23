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
                    <div class="col-lg-5 bg-white p-5" style="border-radius: 30px;">
                        <div class="row">
                            <div class="col-12">
                                <div class="form-group">
                                    <label class="text-black" for="id">아이디</label>
                                    <input v-model="id" type="text" class="form-control" id="id" ref="id">
                                </div>
                                <div class="form-group">
                                    <label class="text-black" for="pw">비밀번호</label>
                                    <input v-model="pw" type="password" class="form-control" id="pw" ref="pw">
                                </div>
                                <div class="form-group">
                                    <label class="text-black" for="name">이름</label>
                                    <input v-model="name" type="text" class="form-control" id="name" ref="name">
                                </div>
                                <div class="form-group">
                                    <label class="text-black" for="addr">주소</label>
                                    <input v-model="addr" type="text" class="form-control" id="addr" ref="addr">
                                </div>
                                <div class="form-group">
                                    <label class="text-black" for="phone">전화번호</label>
                                    <input v-model="phone" type="text" class="form-control" id="phone" ref="phone">
                                </div>
                            </div>
                        </div>

                        <button id="btn-join" @click="validationCheck" class="btn btn-primary mb-4">
                            등록
                        </button>

                        <div class="form-group">
                            <p>
                                <small>이미 계정이 있으시다면, <router-link to="/member/login">로그인</router-link></small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SignUpVue',
    data: function () {
        return {
            id: null,
            pw: null,
            name: null,
            addr: null,
            phone: null,
        }
    },
    methods: {
        // 등록을 눌렀을 때 빈칸이면 alert창 후 입력 안 한 곳으로 focus
        validationCheck() {
            let err = true;
            let msg = "";
            err && !this.id && ((msg = "아이디를 입력해주세요"), (err = false), this.$refs.id.focus());
            err && !this.pw && ((msg = "패스워드를 입력해주세요"), (err = false), this.$refs.pw.focus());
            err && !this.name && ((msg = "패스워드를 입력해주세요"), (err = false), this.$refs.name.focus());
            err && !this.addr && ((msg = "패스워드를 입력해주세요"), (err = false), this.$refs.addr.focus());
            err && !this.phone && ((msg = "패스워드를 입력해주세요"), (err = false), this.$refs.phone.focus());

            if (!err) alert(msg);
            // 이상 없으면 회원가입 진행
            else this.joinMember();

        },
        joinMember: function () {
            // 입력한 회원정보를 보냅니다.
            this.$axios.post('http://localhost/admin/member', {
                id: this.id,
                pw: this.pw,
                name: this.name,
                addr: this.addr,
                phone: this.phone
            })
                .then(response => {
                    console.log(response)
                    alert("회원 등록이 완료되었습니다.")
                    this.$router.push({
                        path: "login"
                    });
                })
                .catch(error => {
                    alert("이미 등록된 아이디입니다.")
                    console.log(error)
                })
        }
    }
}
</script>

<style>

</style>