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
                        <form id="form-update" class="contact-form" data-aos="fade-up" data-aos-delay="200" action=""
                            method="post">
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label class="text-black" for="id">아이디</label>
                                        <div>
                                            {{ member.id }}
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="password">비밀번호</label>
                                        <div>
                                            {{ member.pw }}
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="name">이름</label>
                                        <div>
                                            {{ member.name }}
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="address">주소</label>
                                        <div>
                                            {{ member.addr }}
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="phone">전화번호</label>
                                        <div>
                                            {{ member.phone }}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="accordion" id="accordion_1">
                                <div class="accordion-item">
                                    <router-link to="/member/update">
                                        <button id="btn-update" class="btn btn-primary mb-4">
                                            수정
                                        </button>
                                    </router-link>

                                    <!-- 탈퇴 버튼 -->
                                    <button id="btn-delete" @click="deleteMember" class="btn btn-primary mb-4">
                                        탈퇴
                                    </button>
                                </div>
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
    name: 'MyPageVue',
    data: function () {
        return {
            member: ''
        }
    },
    created: function () {
        this.getMember()
    },
    methods: {
        // 로그인한 id의 정보를 불러옵니다.
        getMember: function () {
            this.$axios.get(`http://localhost/admin/member/${this.$session.get("session").id}`)
                .then(response => {
                    console.log(response)
                    this.member = response.data
                })
                .catch(error => {
                    console.log(error)
                })

        },
        // deleteMember를 호출하면 id 삭제 후 session을 지웁니다.
        deleteMember: function (e) {
            e.preventDefault();
            this.$axios.delete(`http://localhost/admin/member/${this.$session.get("session").id}`)
                .then(response => {
                    console.log(response)
                    this.$session.destroy()
                    alert("탈퇴 되었습니다.")
                    this.$router.push({
                        name: "index"
                    });
                    location.reload()
                })
                .catch(error => {
                    console.log(error)
                })
        },
    }
}
</script>

<style>

</style>