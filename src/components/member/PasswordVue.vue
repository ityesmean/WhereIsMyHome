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
                        <form class="contact-form" id="rform" data-aos="fade-up" data-aos-delay="200"
                            v-on:submit.prevent>
                            <div class="form-group">
                                <label class="text-black" for="name">이름</label>
                                <input type="text" class="form-control" id="name" name="name" v-model="name" ref="name">
                            </div>

                            <div class="form-group">
                                <label class="text-black" for="id">아이디</label>
                                <input type="text" class="form-control" id="id" name="id" ref="id" v-model="id">
                            </div>

                            <div class="form-group">
                                <label class="text-black" for="phone">전화번호</label>
                                <input type="text" class="form-control" id="phone" name="phone" ref="phone"
                                    v-model="phone">
                            </div>

                            <button @click="validationCheck" class="btn btn-primary mb-4">비밀번호 찾기</button>

                        </form>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "PasswordVue",
    data: function () {
        return {
            name: null,
            id: null,
            phone: null,
        }
    },

    methods: {
        // 등록을 눌렀을 때 빈칸이면 alert창 후 입력 안 한 곳으로 focus
        validationCheck() {
            let err = true;
            let msg = "";
            err && !this.name && ((msg = "이름을 입력해주세요"), (err = false), this.$refs.name.focus());
            err && !this.id && ((msg = "아이디를 입력해주세요"), (err = false), this.$refs.id.focus());
            err && !this.phone && ((msg = "연락처를 입력해주세요"), (err = false), this.$refs.phone.focus());

            if (!err) alert(msg);
            // 이상이 없으면 패스워드 함수 실행
            else this.password();
        },

        password: function () {
            let info = {
                'name': this.name,
                'id': this.id,
                'phone': this.phone
            }
            console.log(info);
            // 입력한 정보가 맞는지 확인 후
            this.$axios.get(`http://localhost/admin/member/password?name=${this.name}&id=${this.id}&phone=${this.phone}`)
                .then((response) => {
                    console.log(response)
                    // status를 통해 잘 들어갔는지 여부를 판단

                    // 잘 들어갔다면 생성된 임시번호를 알려줍니다.
                    if (response.status === 200) {
                        alert("생성된 임시 비밀번호는 " + response.data + " 입니다.")
                        this.$router.push({
                            name: "login"
                        });
                    // 입력한 정보가 틀리다면 다시 시도하게 합니다.
                    } else if (response.status === 204) {
                        alert("기입한 정보가 틀립니다. 다시 시도하세요.")
                        location.reload()
                    }
                })
                .catch(error => {
                    alert("실패")
                    console.log(error)
                })
        }
    }
}
</script>

<style>

</style>