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
                                        <input type="text" class="form-control" id="id"
                                        readonly ref="refId">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="pw">비밀번호</label>
                                        <input type="text" class="form-control" id="pw"
                                        ref="refPw">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="name">이름</label>
                                        <input type="text" class="form-control" id="name"
                                        ref="refName">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="addr">주소</label>
                                        <input type="text" class="form-control" id="addr"
                                        ref="refAddr">
                                    </div>
                                    <div class="form-group">
                                        <label class="text-black" for="phone">전화번호</label>
                                        <input type="text" class="form-control" id="phone"
                                        ref="refPhone">
                                    </div>
                                </div>
                            </div>
                            <!-- <router-link to="/member/mypage"> -->
                                <button id="btn-update" @click="updateMember" class="btn btn-primary mb-4" >
                                    수정
                                </button>
                            <!-- </router-link> -->
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
    name: "UpdateVue",
    data: function() {
        return {
            member: {
                
            }
        }
    },
    created: function() {
        this.getMember()
    },
    methods: {
        getMember: function() {
            this.$axios.get('http://localhost/admin/member/ssafy')
                .then(response => {
                    this.member = response.data
                    this.$refs.refId.value = this.member.id;
                    this.$refs.refPw.value = this.member.pw;
                    this.$refs.refName.value = this.member.name;
                    this.$refs.refAddr.value = this.member.addr;
                    this.$refs.refPhone.value = this.member.phone;
                })
                .catch(error => {
                    console.log(error)
                })
                
        },

        updateMember: function (e) {
            // this.validationCheck();
            e.preventDefault();
            this.$axios.put('http://localhost/admin/member', {
                id: this.$refs.refId.value,
                pw: this.$refs.refPw.value,
                name: this.$refs.refName.value,
                addr: this.$refs.refAddr.value,
                phone: this.$refs.refPhone.value
            })
                .then(response => {
                    console.log(response)
                    this.$router.push({
                        name: "mypage"
                    });
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